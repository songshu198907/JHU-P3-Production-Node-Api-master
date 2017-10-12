module.exports = {
  name: 'PostBirthThirtyDaysSurveyGeneration',
  fn: function(done) {
    
var util=require("util");
      var Promise = require('bluebird');
      var self=this;
      var msgs=[];
      var d = new Date();
      
      var l30DayCustomQuery= "SELECT * FROM users WHERE CASE WHEN users.actual_child_birth IS NOT NULL THEN users.actual_child_birth + 30 <= current_date "+
          "ELSE users.expected_child_birth + 30 <= current_date "+
          "END "+
          "AND users.id IN (SELECT users.id FROM users WHERE role = 'patient' and patient_type !=2 and is_deactive = FALSE ) "+
          "AND users.id NOT IN (SELECT user_surveys.user_id From user_surveys,surveys WHERE surveys.survey_type='30 day' AND user_surveys.survey_id=surveys.id) "+
          "UNION "+//get all the contact users for the above selected patients
          "SELECT * FROM users WHERE users.id IN (SELECT users.id FROM users WHERE role = 'patient' and patient_type = 2 and is_deactive = FALSE AND parent_user_id IN ("+
            "SELECT users.id FROM users WHERE CASE WHEN users.actual_child_birth IS NOT NULL THEN users.actual_child_birth + 30 <= current_date "+
            "ELSE users.expected_child_birth + 30 <= current_date "+
            "END "+
            "AND users.id IN (SELECT users.id FROM users WHERE role = 'patient' and patient_type != 2 and is_deactive = FALSE ) "+
            "AND users.id NOT IN (SELECT user_surveys.user_id From user_surveys,surveys WHERE surveys.survey_type='30 day' AND user_surveys.survey_id=surveys.id) "+
          "))" + 
          "AND users.id NOT IN (SELECT user_surveys.user_id From user_surveys,surveys WHERE surveys.survey_type='30 day' AND user_surveys.survey_id=surveys.id)";
      
      
      this.models('user').query(l30DayCustomQuery,function(err,retrievedUsers){
        
        if(err){
          sails.log.debug("post birth 30 day survey generation failed " + util.inspect(err));
          done();
        }else{
          var data=retrievedUsers;
          console.log("generate post 30 day birth survey");
          if(data && data.length>0){
            logSurvey(data.length);//shows that job is started
            console.log("users:"+data.length);
            generateSurvey(data);//for users
          }else{//no user data found
            logSurvey(0);//shows that job is started
            done();
          }
        }
        
      });
      
      
      function generateSurvey(pUsers)
      {
        var surveys = self.models('survey');
        var Userslength = pUsers.length;
        
        var p = new Promise(function(resolve, reject) {
        _.each(pUsers,function(lUser,pUserIndex){
          
            var surveySelectionCriteria = {};
          
          if(lUser.patient_type === 0 || lUser.patient_type === 1 || lUser.patient_type === 2){
            surveySelectionCriteria = {survey_type: "30 day", patient_type:lUser.patient_type,intervention_group:lUser.intervention_group, is_active: true};
          } 
          
          if(surveySelectionCriteria.survey_type){//survey should be generated for a criteria
            
            surveys.find(surveySelectionCriteria)
            .then(function(results){
              
              if(results.length>0){
                
                var surveyTemplate = results[0];
                var userSurvey = {};
                userSurvey.surveyId = surveyTemplate.id;
                userSurvey.createdAt = new Date();
                userSurvey.isComplete = false;
                userSurvey.firstReminder = false;
                userSurvey.secondReminder = false;
                userSurvey.userId = lUser.id;
                userSurvey.questionCount = surveyTemplate.totalQuestions;
                userSurvey.maternalVideoComplete = 1;
                userSurvey.pediatricVideoComplete = 1;
              
                self.models('usersurvey').create(userSurvey)//create user survey
                .then(function (pSurveyCreated){
                  
                  if(pSurveyCreated){
                    self.models('surveyquestion').find({survey_id: pSurveyCreated.surveyId })
                    .then(function(surveyQuestions){
                      var i=0;
                      var len = surveyQuestions.length;
                      var surveyAnswers = [];
                      for(i;i<len;i++){
                        surveyAnswers.push( { userSurveyId: pSurveyCreated.id, surveyQuestionId: surveyQuestions[i].id,questionOrder:surveyQuestions[i].sortOrder,questionCodeId:surveyQuestions[i].questionCodeId } );
                        
                      }
                      
                      self.models('usersurveyanswer').create(surveyAnswers)//create survey answers
                      .then(function(savedResult){
                        self.models('usersurveyanswer').findOne({user_survey_id: pSurveyCreated.id}).sort('question_order ASC').then(function(result){
                          self.models('usersurvey').update({id:pSurveyCreated.id },{first_question_id: result.id }).then(function(result){
                              var fetchFields={surveyNotificatonEmailText:1,surveyNotificatonSubject:1,
                                fromEmail:1};
                              
                              self.models("setting").find({},{fields: fetchFields}).paginate({page: 1}, {limit: 1})
                              .then(function(response){
                                  if (response && response.length>0){
                                    var lSettings=response[0];
                                    createMsgArray(lSettings.surveyNotificationEmailText,lSettings.surveyNotificationSubject,lSettings.fromEmail,pSurveyCreated,lUser);
                                  }
                                }).then(function(){
                                  if(msgs && msgs.length==Userslength){//only notifiy with msg array when all the users have been parsed)
                                      resolve();
                                  }
                                }).catch(function(err){
                                   done(err);
                                });
                                
                             
                          })
                          .catch(function(err){
                            console.log('Error updating first question id. Error: ');
                            console.log(err);
                            done(err);
                          });
                        })
                        .catch(function(err){
                          console.log('Error sorting for first question. Error: ');
                          console.log(err);
                          done(err);
                        });
                      }).catch(function(err){
                          console.log('Error saving user answers. Error: ');
                          console.log(err);
                          done(err);
                      });
                    }).catch(function(err){
                        console.log('Error survey user questions. Error: ');
                        console.log(err);
                        done(err);
                    });
                  }
                }).catch(function(err){
                    console.log('Error creating userSurvey. Error was:');
                    console.log(err);
                    done(err);
                });
              }else{//senario when the user does not has a survey
                  Userslength--;
                  if(msgs && msgs.length==Userslength){//only notifiy with msg array when all the users have been parsed)
                    resolve();
                  }
                }
            }).catch(function(err){
                console.log('Error generating Survey for registered user. Error was: ');
                console.log(err);
                done(err);
            });
          }
          
          
          
        });//end -.each
        
        });//end promise
        p.then(function(){//send notifications
           
            console.log("survey creation successful");
            var Msgslength = msgs.length;
            _.each(msgs,function(msg,pMsgIndex,msgs){
              notify(msg,pMsgIndex,Msgslength);
            });
            if(Msgslength===0){
              done();
            }
        });
        
      }
      
      
      function createMsgArray(pBody,pSubject,pEmail,pSurvey,pUser){
      
        _.templateSettings = {
          interpolate: /\{\{(.+?)\}\}/g
        };
        var template = _.template(pBody);
        var finalTemplate=template({name: pUser.lastName,survey_name:pSurvey.surveyName});
        msgs.push({
            model: 'sendGrid',
            survey:pSurvey,
            body: "from="+ pEmail+"&to="+ pUser.email+"&subject="+ pSubject+"&html="+ finalTemplate
        });
        
      }
      
      function notify(message,pIndex,pTotalMsgs) {
      
        var Model = message.model ? self.models(message.model) : undefined;
        if(Model !== undefined && Model.request) {
            Promise.promisify(Model.request)('create', {}, {}, { body: message.body })
              .then(function(resultMessage) {
                  sails.log.debug(message.model + ' responding with: ' + util.inspect(resultMessage));
                  
                  if(pIndex==(pTotalMsgs-1)){
                     done();
                  }
              })
              .catch(function(err) { 
               console.log('error ' + message.model + ': ' + util.inspect(err)); 
                done(err);
              });
        }
      }
      
      function logSurvey(pRecordsEffected){
        self.models("jobauditlogging").create({name:"30 day post child birth",created_at:new Date(),rows_effected:pRecordsEffected}).exec(function(err,result){
          if(err){
            console.log("failed to create job audit log:"+util.inspect(err));
          }else{
            console.log("audit log created for job:30 day post child birth");
          }
        });
      }

  },
  schedules: [ '5 14 * * *' ]
};