module.exports = {
  beforeCreate: function(values, req, done) {
    
 done();

  },

  afterCreate: function(models, req, done) {
    
done();

  },

  beforeFind: function(values, req, done) {
    
 done();

  },

  afterFind: function(models, req, done) {
    
done();

  },

  beforeUpdate: function(values, req, done) {
    
 done();

  },

  afterUpdate: function(models, req, done) {
    
    
    done();
    
  },

  beforeDestroy: function(values, req, done) {
    
 done();

  },

  afterDestroy: function(models, req, done) {
    
done();

  },

  beforeAllScope: function(values, req, done) {
    
 done();

  },

  afterAllScope: function(models, req, done) {
    
done();

  },

  beforeExactMatchScope: function(values, req, done) {
    
 done();

  },

  afterExactMatchScope: function(models, req, done) {
    
done();

  },

  beforeCountScope: function(values, req, done) {
    
 done();

  },

  afterCountScope: function(models, req, done) {
    
done();

  },

  beforeCountExactMatchScope: function(values, req, done) {
    
 done();

  },

  afterCountExactMatchScope: function(models, req, done) {
    
done();

  },

  beforeGetPatientsSurveyScope: function(values, req, done) {
    
 done();

  },

  afterGetPatientsSurveyScope: function(models, req, done) {
    
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var self = this;
    var filterModels=[];
    if(models.length > 0 ){
      
     
      
      var sql="SELECT us.* From user_surveys us,surveys s "+
          "WHERE  us.survey_id=s.id AND us.user_id= "+req.context.current_user.id+
          " AND (us.is_complete=0 OR (us.is_complete=1 AND 0<(SELECT count(*) FROM user_survey_videos where user_survey_id=us.id and is_complete=0))) AND s.survey_type <> 'video' "+ 
          "ORDER BY us.created_at asc "+
          "LIMIT 1;";
          self.models('UserSurvey').query(sql,function(err,result){
          if(result && result.length>0 && result[0].id){
             
            _.each(models,function(model){
              if(model.id == result[0].id){//filter surveys that are incomplete
                filterModels.push(model);
              }
            });
            models=filterModels;
             var sql = 'select \'maternal\' as question_group, v.title, v.video_url, v.description ,usv.id ,usv.video_position,usv.is_complete,usv.sort_order '; 
              sql  += 'from user_survey_videos usv ';
              sql  += 'right outer join videos v ';
              sql  += 'on usv.video_number = v.target_number ';
              sql  += 'and usv.video_source_version = v.source_version ';
              sql  += 'and v.question_group in (\'maternal\', \'both\') ';
              sql  += 'and v.is_active = 1 ';
              sql  += 'and usv.video_type = \'maternal\' ';
              sql  += 'where usv.user_survey_id = ' + models[0].id;
              sql  += ' UNION ALL ';
              sql  += 'select \'pediatric\' as question_group, v.title, v.video_url, v.description ,usv.id ,usv.video_position,usv.is_complete,usv.sort_order ';
              sql  += 'from user_survey_videos usv ';
              sql  += 'right outer join videos v ';
              sql  += 'on usv.video_number = v.target_number ';
              sql  += 'and usv.video_source_version = v.source_version ';
              sql  += 'and v.question_group in (\'pediatric\', \'both\') ';
              sql  += 'and v.is_active = 1 ';
              sql  += 'and usv.video_type = \'pediatric\' ';
              sql  += 'where usv.user_survey_id = ' + models[0].id;
              
              sails.log.debug('sqlOutput',sql);
              self.models('Video').query(sql, function findMatchingVideos(err, matchingVideos){
                  if(err){
                    return req.res.send(200,models);
                  }
                  var maternalArray=_.filter(matchingVideos, function(video){ return video.question_group == 'maternal'; });
                  var pediatricArray=_.filter(matchingVideos, function(video){ return video.question_group == 'pediatric'; });

                  /*use cloud front url instead of S3 bucket */
                  maternalArray && _.each(maternalArray,function(video){
                    if(video.video_url && video.video_url!==""){
                      video.video_url=process.env.AWS_CLOUD_FRONT_URL+encodeURIComponent(decodeURIComponent(video.video_url)).split("%2F").pop();
                    }
                    
                  });

                 pediatricArray && _.each(pediatricArray,function(video){
                    if(video.video_url && video.video_url!==""){
                      video.video_url=process.env.AWS_CLOUD_FRONT_URL+encodeURIComponent(decodeURIComponent(video.video_url)).split("%2F").pop();
                    }
                    
                  });

                  var videos={maternals:maternalArray,pediatrics:pediatricArray};
                  models[0].matchedVideos=videos;
                  req.res.send(200,models);
                  return false;
              });
          }else{
            req.res.send(200,[]);
            return false;
          }
        });
      }else {
        done();
      }
  },

  beforeGetfirstquestionScope: function(values, req, done) {
    
 done();

  },

  afterGetfirstquestionScope: function(models, req, done) {
        if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var Promise = require('bluebird');
    if(models.length > 0 ){
      var self=this;
      
     
        updateQuestionWithAnswers();
      
      function updateQuestionWithAnswers(){
          var sql = "select sq.*, usa.survey_answer_id, usa.free_form_response, usa.skipped, usa.user_survey_id, usa.id as user_survey_answer_id , sqt.name question_type_name, sqt.control_type question_control_type "+
           "from user_survey_answers usa, survey_questions sq, question_types sqt "+
          " where sq.id = usa.survey_question_id AND sqt.id = sq.question_type_id "+
          " and user_survey_id = "+ models[0].id +
          " and usa.survey_answer_id is NULL and usa.free_form_response is NULL ORDER BY question_order Limit 1";
          //" and sq.sort_order = 1;";
        self.models('UserSurveyAnswer').query(sql, function findQuestionsCallback(err, Question){
          if(err){
            done(err);
          } else {
            var toReturn;
            
            toReturn = Question[0];
            toReturn.possibleAnswers = null;
            self.models('SurveyAnswer').find({survey_question_id: toReturn.id}).exec(function findPossibleAnswersCB(err, possibleAnswers){ // Now fetch the possible answers
            if(err){
              done(err)
            } else {
              toReturn.possibleAnswers = _.sortBy(possibleAnswers, "sortOrder");
              setAnswerGroup(toReturn);
              models[0].firstQuestion = toReturn;
              var prevUsrSurvyAnsSql = "select usa.id as user_survey_answer_id "+
                     "from user_survey_answers usa, survey_questions sq "+
                    " where sq.id = usa.survey_question_id "+
                    " and user_survey_id = "+ models[0].id +
                    " and (usa.survey_answer_id is not NULL OR usa.free_form_response is not NULL) ORDER BY question_order";
              self.models('UserSurveyAnswer').query(prevUsrSurvyAnsSql,function findQuestionsCallback(err, UserSurveyAnswers){
                if(err){
                  done(err);
                }else{
                  if(UserSurveyAnswers && UserSurveyAnswers.length>0){
                    UserSurveyAnswers.push({"user_survey_answer_id":models[0].firstQuestion.user_survey_answer_id});
                    console.log(UserSurveyAnswers);
                    models[0].firstQuestion.prevSurveyQuesIds=UserSurveyAnswers;  
                  }else{
                    models[0].firstQuestion.prevSurveyQuesIds=[];  
                  }

                  done();  
                }
                
              })
              
            }
            });
          }
        });
        
       
        function setAnswerGroup(question){
          var lQuestion=question;
          if (question.survey_question_id){
            _.each(question.possibleAnswers,function(pAnswer){
                if(lQuestion.question_group === 'maternal'){
                  pAnswer.questionGroup= 'Maternal Vaccines';
                } else if(lQuestion.question_group=== 'pediatric'){
                  pAnswer.questionGroup='Pediatric Vaccines';
                } else {
                  pAnswer.questionGroup=lQuestion.question_group;
                } 
              
            });
          }
        }
      }
      
    } else {
      done();
    }
    
  },

  beforeCompeleteSurveyScope: function(values, req, done) {
    
 done();

  },

  afterCompeleteSurveyScope: function(models, req, done) {
    
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var self = this;
    var util = require("util");
    var Promise = require('bluebird');
    var msgs=[];
    if(models.length>0){
      var surveyUpdate={is_complete:true,completed_at:new Date()};
      if(models[0].isComplete){
        return done();
      }else if(models[0].videoSourceVersion==null){
        surveyUpdate.video_source_version="B";
      }
      self.models('UserSurvey').update({id: models[0].id},surveyUpdate).then(function(result){
        models[0].isComplete=true;
        models[0].completedAt=surveyUpdate.completed_at;
        self.models('Survey').findOne({id:result[0].surveyId},function(err,response){
          
          if(response && (response.surveyType=="30 day" || response.surveyType=="18 months" || (response.surveyType=="registration" && req.context.current_user.patientType==2))){
            var p = new Promise(function(resolve, reject) {
              sendSurveyCompletionEmail(resolve);
            });//end promise
            p.then(function(){//create video survey if not exists
              if(req.context.current_user.patientType!=0)
              {
                if(response.surveyType=="registration"){
                  setVideoNumbersAfterRegistrationSurveyComplete(true);
                }else{
                  createVideoSurveyIfNotExists();  
                }
              }else{
                if(response.surveyType=="registration"){
                  setVideoNumbersAfterRegistrationSurveyComplete(false);//false means don't create video survey
                }else{
                  done();  
                }
                
              }
            });
          }else if(req.context.current_user.patientType!=0){
            
            if(response.surveyType=="registration"){
              setVideoNumbersAfterRegistrationSurveyComplete(true); //true means also create video survry
            }else{
              createVideoSurveyIfNotExists();
            }
          }else{
            done();
          }
        });
        
      }).catch(function(err){
        req.res.send(400,{"message":"failed to update  user survey"});
      });
    }else{
      req.res.send(400,{"message":"failed to find  user survey"});
    }
    function sendSurveyCompletionEmail(resolve){
      
      var settingsModel=self.models("setting");
        var fetchFields={surveyCompletionEmailText:1,surveyCompletionEmailSubject:1,
          fromEmail:1};
        settingsModel.find({},{fields: fetchFields}).paginate({page: 1}, {limit: 1})
        .exec(function(err,response){
          if(err){
            done(err);
          }else if (response && response.length>0){
            var result=response[0];
           sendSurveyEmail(result.surveyCompletionEmailText,result.surveyCompletionEmailSubject,result.fromEmail);
            if(msgs && msgs.length>0){
              _.each(msgs,function(msg,pIndex,msgs){
                notify(msg,resolve);  
              });
            }else{
                resolve();//no messages to be sent
            }
          }
        });
    }
    function sendSurveyEmail(pBody,pSubject,pEmail){
        msgs.push({
            model: 'sendGrid',
            body: "from="+ pEmail+"&to="+ req.context.current_user.email+"&subject="+ pSubject+"&html="+ pBody
        });
    }
    function notify(message,resolve) {
      
      var Model = message.model ? self.models(message.model) : undefined;
      if(Model !== undefined && Model.request) {
        Promise.promisify(Model.request)('create', {}, {}, { body: message.body })
            .then(function(resultMessage) {
                sails.log.debug(message.model + ' responding with: ' + util.inspect(resultMessage));
                if(message.model==='sendGrid'){//if model sendgrid then send email
                  resolve();
                }
            })
            .catch(function(err) { 
             console.log('error ' + message.model + ': ' + util.inspect(err)); 
              done(err);
            });
      }
    }
    
    
  function notifyMissingVideo(data, callback) {
      var subject = 'Targeted video number not found for user survey' ;
      var userEmail = req.context.current_user.email;
      var surveyId = models[0].survey_id;
      if(data.missingMaternal == null && data.missingPediatric == null ){
        var pBody = `When user ${userEmail} finished survey ${surveyId}, it did not find a targeted video number for pediatric or maternal targeted videos`;
      } else {
        if(data.missingMaternal){
          var missingVideoType = 'Maternal';
        } else if(data.missingPediatric){
          var missingVideoType = 'Pediatric';
        }
        var pBody = `When user ${userEmail} finished survey ${surveyId}, it did not find a targeted video number for ${missingVideoType} targeted video`;
        var pBody = `When user ${userEmail} finished survey ${surveyId}, it did not find a targeted video number for pediatric targeted video (this can be replaced with maternal if it did not find maternal. or if it did not find a number for both, say 'pediatric and maternal targeted video`;
      }
      self.models('Setting').find({}).paginate({page: 1}, {limit: 1}).exec(function(err,emailSetting){
        var body =  "from="+ emailSetting[0].fromEmail+"&to="+ emailSetting[0].fromEmail + "&subject="+ subject +"&html="+ pBody;
        Promise.promisify(self.models('SendGrid').request)('create', {}, {}, { body: body })
          .then(function(resultMessage) {
            sails.log.debug('Sendgrid responding with: ' + util.inspect(resultMessage));
            callback(false);
          })
          .catch(function(err) {
            callback(err);
          });
      });
    }
    
    function setVideoNumbersAfterRegistrationSurveyComplete(pVideoSurveyCreate){
     
      
      var updatedSurvey = models[0];
      
      var sql = '(select DISTINCT(sa.video_target_number), us.video_source_version, a.survey_answer_id, q.question_group, q.label, sa.label, ';
      sql += ' v.sort_order ';
      sql += ' from user_survey_answers a , survey_answers sa, survey_questions q, videos v, user_surveys us ';
      sql += ' where a.user_survey_id =  ' + updatedSurvey.id;
      sql += ' and us.id = a.user_survey_id ';
      sql += ' and a.survey_question_id = q.id ';
      sql += ' and a.survey_answer_id = sa.id ';
      sql += ' and sa.survey_question_id= q.id ';
      sql += ' and sa.video_target_number is not null ';
      sql += ' and sa.video_target_number = v.target_number ';
      sql += ' and us.video_source_version = v.source_version ';
      sql += ' and v.is_active = 1 ';
      sql += ' and q.question_group = \'maternal\' ';
      sql += ' GROUP BY sa.video_target_number';
      sql += ' order by v.sort_order asc)';
      sql += ' UNION ';
      sql += ' (select DISTINCT(sa.video_target_number), us.video_source_version, a.survey_answer_id, q.question_group, q.label, sa.label, ';
      sql += ' v.sort_order ';
      sql += ' from user_survey_answers a , survey_answers sa, survey_questions q, videos v, user_surveys us ';
      sql += ' where a.user_survey_id = ' + updatedSurvey.id;
      sql += ' and us.id = a.user_survey_id ';
      sql += ' and a.survey_question_id = q.id ';
      sql += ' and a.survey_answer_id = sa.id ';
      sql += ' and sa.survey_question_id= q.id ';
      sql += ' and sa.video_target_number is not null ';
      sql += ' and sa.video_target_number = v.target_number ';
      sql += ' and us.video_source_version = v.source_version ';
      sql += ' and v.is_active = 1 ';
      sql += ' and q.question_group = \'pediatric\' ';
      sql += ' GROUP BY sa.video_target_number';
      sql += ' order by v.sort_order asc)';
  
      self.models('Video').query(sql,function(err, matchingVideos){
        if(matchingVideos && matchingVideos.length>0){
          if(matchingVideos.length>=2){
            matchingVideos=_.uniq(matchingVideos, function (item, key, a) {
                return item.video_target_number+item.video_source_version;
              });  
            var maternalArray=_.filter(matchingVideos, function(video){ return video.question_group == 'maternal'; });
            var pediatricArray=_.filter(matchingVideos, function(video){ return video.question_group == 'pediatric'; });
            var lUpdateVideoStatus={};
            if(maternalArray.length===0){
              lUpdateVideoStatus.maternal_video_complete=1;
            }else{
              lUpdateVideoStatus.maternal_video_number =  _.pluck(maternalArray, 'video_target_number').toString();
              console.log("MATERNAL VIDEO NUMBER");
              console.log(lUpdateVideoStatus.maternal_video_number);
            }
            if(pediatricArray.length===0){
              lUpdateVideoStatus.pediatric_video_complete=1;
            }else{
              lUpdateVideoStatus.pediatric_video_number =  _.pluck(pediatricArray, 'video_target_number').toString();
              console.log("PEDIATRIC VIDEO NUMBER");
              console.log(lUpdateVideoStatus.pediatric_video_number);
            }
            self.models('UserSurvey').update({id: updatedSurvey.id}, lUpdateVideoStatus)
            .exec(function updateCallback(err, updateResult) {
              
            });
       
        } else if( matchingVideos.length == 1 ){
            var data = {};
            var videoType = matchingVideos[0].question_group;
            var lUpdateVideoStatus = {};
            if(videoType === 'maternal'){
              data.missingPediatric = true;
              data.missingMaternal = false;
              lUpdateVideoStatus.maternal_video_number = matchingVideos[0].video_target_number;
              lUpdateVideoStatus.pediatric_video_complete = 1;
            } else if(videoType === 'pediatric'){
              data.missingMaternal = true;
              data.missingPediatric = false;
              lUpdateVideoStatus.pediatric_video_number = matchingVideos[0].video_target_number;
              lUpdateVideoStatus.maternal_video_complete =1;
            }
            
            self.models('UserSurvey').update({id: updatedSurvey.id}, lUpdateVideoStatus)
            .exec(function updateCallback(err, updateResult) {
              
            });
            
           
          }
          _.each(matchingVideos,function(item,index){
            
            var lObj={"userSurveyId":updatedSurvey.id,"videoNumber":item.video_target_number,
                      "videoSourceVersion":item.video_source_version,"videoType":item.question_group ,
                      "sortOrder":item.sort_order,"isComplete":0};
            self.models('usersurveyvideo').create(lObj).exec(function addVideosToUserSurvey(err, created){
              if(matchingVideos.length-1==index){
                if (pVideoSurveyCreate) {
                  createVideoSurveyIfNotExists();
                } else {
                  done();
                }
              }
            });  
          });
        }else{
          
          if (pVideoSurveyCreate) {
              createVideoSurveyIfNotExists();
          } else {
            done();
          }
        }
      });
        
    }
    function createVideoSurveyIfNotExists(){
      
      var sql="SELECT Count(*) as count From user_surveys,surveys WHERE surveys.survey_type='video' AND user_surveys.survey_id=surveys.id and user_surveys.user_id="+models[0].userId+" and surveys.intervention_group='"+req.context.current_user.interventionGroup+"'";
      
      self.models('UserSurvey').query(sql,function(err,result){
        
        if(result && result[0].count==0){//check if video user survey answers not added then add them.
          var surveySelectionCriteria = {survey_type: 'video', is_active: true, intervention_group:req.context.current_user.interventionGroup};
          var surveys = self.models('Survey');
          surveys.find(surveySelectionCriteria).exec(function(err, results){
            
            if(err){
              console.log('Error generating Survey for registered user. Error was: ');
              console.log(err);
            } else if(results && results.length>0){
              var surveyTemplate = results[0];
              var userSurvey = {};
              userSurvey.surveyId = surveyTemplate.id;
              userSurvey.createdAt = new Date();
              userSurvey.isComplete = 'f';
              userSurvey.firstReminder = 1;
              userSurvey.secondReminder = 1;
              userSurvey.userId = models[0].userId;
              userSurvey.questionCount = surveyTemplate.totalQuestions;
              userSurvey.maternalVideoComplete = 1;
              userSurvey.pediatricVideoComplete = 1;
              
              self.models('UserSurvey').create(userSurvey).exec(function createCB(err, created){
                if(err){
                  console.log('Error creating userSurve. Error was:');
                  console.log(err);
                  done(err);
                } else if(created){ // Now create empty answers with the questions.
                    
                    self.models('SurveyQuestion').find({survey_id: created.surveyId, question_group: 'video' }).exec(function(err, surveyQuestions){
                      if(surveyQuestions && surveyQuestions.length>0){
                        var i=0;
                        var len = surveyQuestions.length;
                        var surveyAnswers = [];
                        
                        for(i;i<len;i++){
                          surveyAnswers.push( { userSurveyId: created.id, surveyQuestionId: surveyQuestions[i].id, questionOrder:surveyQuestions[i].sortOrder, questionCodeId:surveyQuestions[i].questionCodeId  } );
                        }
                        self.models('UserSurveyAnswer').create(surveyAnswers).exec(function(err, savedResult){
                          if(err){
                            console.log('Error saving user answers. Error: ');
                            console.log(err);
                            done(err);
                          } else {// Update the user survey with the first question id so the front-end knows where to start the survey
                            self.models('UserSurveyAnswer').findOne({user_survey_id: created.id}).sort('question_order ASC').exec(function findCB(err, result){
                              self.models('UserSurvey').update({id:created.id },{first_question_id: result.id }).exec(function updateCB(err, result){
                                done();
                              });
                            });
                          }
                        });
                      }else{
                          done();
                      }
                    });
                }else{
                  done();
                  
                }
              });
            }else{
              done();
              
            }
          });
        }else{
          done();
        }
      });
        
    }
    
    
    
  },

  beforeGetVideoSurveyScope: function(values, req, done) {
    
 done();

  },

  afterGetVideoSurveyScope: function(models, req, done) {
    
 if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
 var self=this;
    var filterModels=[];
  if(models.length > 0 ){
      var sql="SELECT user_surveys.* From user_surveys,surveys WHERE surveys.survey_type='video' AND user_surveys.survey_id=surveys.id and user_surveys.user_id="+req.context.current_user.id +
              " ORDER BY user_surveys.id asc "+
              "LIMIT 1;";
      self.models('UserSurvey').query(sql,function(err,result){
        
        if(result && result.length>0 && result[0].id){
          _.each(models,function(model){
            if(!model.isComplete && model.id==result[0].id){//filter surveys that are incomplete
              filterModels.push(model);
            }
          });
          models=filterModels;
          req.res.send(200,models);
          return false;
      
        }else{
          req.res.send(200,[]);
          return false;
        }
        
        
      });
    }else{
      done();
    }
  },

  beforeCheckSurveyExistsScope: function(values, req, done) {
    
 done();

  },

  afterCheckSurveyExistsScope: function(models, req, done) {
    
done();

  },

  beforeCheckSurveyCountScope: function(values, req, done) {
    
 done();

  },

  afterCheckSurveyCountScope: function(models, req, done) {
    
done();

  },

  beforeGenerateCsvResultsScope: function(values, req, done) {
    
    //req.client.server.setTimeout(400000);
    var self = this; // Backup this
    var clinicName="All";
    var csvFieldList = ["email","user_id","clinic_name","patient_type","intervention_group","first_name","last_name","address", "city", "state","postal_code","cell_phone","home_phone",
      "has_contact_users","parent_user_id","parent_relationship_type","consent_accepted_on","race_id", "education_id","expected_child_birth","actual_child_birth","contact_name",
      "contact_email","contact_cell_phone", "contact_home_phone", "is_deactive", "reason_for_deactivation", "deactivated_on", "registration_survey_id", "registration_created_at",
      "registration_completed_at", "registration_is_complete", "registration_maternal_video", "registration_maternal_video_complete", "registration_pediatric_video",
      "registration_pediatric_video_complete", "registration_video_source"
    ];
    var surveyQuestionsByTemplateSql = `SELECT sq.sort_order, sq.survey_id, sq.id AS question_id, qt.name, s.survey_type FROM survey_questions sq, question_types qt, surveys s WHERE
                                        -- sq.question_code_id = qt.id
                                        sq.question_type_id = qt.id
                                        AND
                                        s.id = sq.survey_id
                                        -- AND survey_type != 'video'
                                        ORDER BY survey_type DESC, survey_id, sort_order ASC`;
    console.log("before  user survey query");                                        
    self.models('UserSurvey').query(surveyQuestionsByTemplateSql, function(err, result){
      if(err){
        done(err);
      } else {
        var csvSql = `SELECT
                      u.email,
                      u.id AS user_id,
                      c.name AS clinic_name,
                      CASE WHEN u.patient_type = '' OR u.patient_type IS NULL THEN '' ELSE u.patient_type END AS patient_type,
                      CASE WHEN u.intervention_group = '' OR u.intervention_group IS NULL THEN '' ELSE u.intervention_group END AS intervention_group,
                      u.first_name,
                      u.last_name,
                      CASE WHEN u.address IS NULL THEN '' ELSE u.address END AS address,
                      CASE WHEN u.city IS NULL THEN '' ELSE u.city END AS city,
                      CASE WHEN u.state IS NULL THEN '' ELSE u.state END AS state,
                      CASE WHEN u.postal_code IS NULL THEN '' ELSE u.postal_code END AS postal_code,
                      CASE WHEN u.cell_phone IS NULL THEN '' ELSE u.cell_phone END AS cell_phone,
                      CASE WHEN u.home_phone IS NULL THEN '' ELSE u.home_phone END AS home_phone,
                      CASE WHEN u.has_contact_users IS NULL THEN '' ELSE u.has_contact_users END AS has_contact_users,
                      CASE WHEN u.parent_user_id IS NULL THEN '' ELSE u.parent_user_id END AS parent_user_id,
                      CASE WHEN u.parent_relationship_type IS NULL THEN '' ELSE u.parent_relationship_type END AS parent_relationship_type,
                      CASE WHEN u.consent_accepted_on IS NULL THEN '' ELSE u.consent_accepted_on END AS consent_accepted_on,
                      CASE WHEN u.race_id IS NULL THEN '' ELSE u.race_id END AS race_id,
                      CASE WHEN u.education_id IS NULL THEN '' ELSE u.education_id END AS education_id,
                      CASE WHEN u.expected_child_birth IS NULL THEN '' ELSE u.expected_child_birth END AS expected_child_birth,
                      CASE WHEN actual_child_birth IS NULL THEN '' ELSE actual_child_birth END AS actual_child_birth,
                      CASE WHEN u.contact_name IS NULL THEN '' ELSE u.contact_name END AS contact_name,
                      CASE WHEN u.contact_email IS NULL THEN '' ELSE u.contact_email END AS contact_email,
                      CASE WHEN u.contact_cell_phone IS NULL THEN '' ELSE u.contact_cell_phone END AS contact_cell_phone,
                      CASE WHEN u.contact_home_phone IS NULL THEN '' ELSE u.contact_home_phone END AS contact_home_phone,
                      CASE WHEN u.is_deactive IS NULL THEN '' ELSE u.is_deactive END AS is_deactive,
                      CASE WHEN u.reason_for_deactivation IS NULL THEN '' ELSE u.reason_for_deactivation END AS reason_for_deactivation,
                      CASE WHEN u.deactivated_on IS NULL THEN '' ELSE u.deactivated_on END AS deactivated_on,
                      MAX(CASE WHEN s.survey_type = 'registration'  THEN us.survey_id ELSE '' END) AS registration_survey_id,
                      MAX(CASE WHEN s.survey_type = 'registration' AND us.survey_id = s.id THEN s.name ELSE NULL END) AS registration_survey_name,
                      MAX(CASE WHEN s.survey_type = 'registration'  THEN us.created_at ELSE '' END) AS registration_created_at,
                      MAX(CASE WHEN s.survey_type = 'registration' THEN us.completed_at ELSE '' END) AS registration_completed_at,
                      MAX(CASE WHEN s.survey_type = 'registration'  THEN us.is_complete ELSE '' END) AS registration_is_complete,
                      MAX(CASE WHEN s.survey_type = 'registration'  THEN us.maternal_video_number ELSE '' END) AS registration_maternal_video,
                      MAX(CASE WHEN s.survey_type = 'registration'  THEN us.maternal_video_complete ELSE '' END) AS registration_maternal_video_complete,
                      MAX(CASE WHEN s.survey_type = 'registration'  THEN us.pediatric_video_number ELSE '' END) AS registration_pediatric_video,
                      MAX(CASE WHEN s.survey_type = 'registration'  THEN us.pediatric_video_complete ELSE '' END) AS registration_pediatric_video_complete,
                      MAX(CASE WHEN s.survey_type = 'registration'  THEN us.video_source_version ELSE '' END) AS registration_video_source,`;
        var dynamicFields = '';
        var previousType = null;
        var videoFields = [];
        result.forEach(function(aSurveyQuestion){
          if(aSurveyQuestion.survey_type != 'video'){
            if(previousType == null ){ // Deal with first case
              previousType = aSurveyQuestion.survey_type;
            }
            if(previousType!=aSurveyQuestion.survey_type) // Deal with all other cases
            {
              previousType = aSurveyQuestion.survey_type;
              if(previousType == '30 day'){
                csvFieldList.push('30_survey_id', '30_created_at', '30_completed_at', '30_is_complete');
              } else if (previousType == '18 months') {
                csvFieldList.push('18_survey_id','18_created_at','18_is_complete','18_completed_at');
              }
            }
            
            
            dynamicFields += `MAX(
                                CASE WHEN
                                      sq.sort_order = ${aSurveyQuestion.sort_order}
                                    AND
                                      s.survey_type = '${aSurveyQuestion.survey_type}'
                                    AND
                                      s.id = ${aSurveyQuestion.survey_id}
                                    AND
                                      usa.survey_answer_id = sa.id AND qt.name = 'Free-Form'
                                   THEN
                                    usa.free_form_response
                                           ELSE
                                    (CASE WHEN
                                          sq.sort_order = ${aSurveyQuestion.sort_order}
                                        AND
                                          s.survey_type = '${aSurveyQuestion.survey_type}'
                                        AND
                                          s.id = ${aSurveyQuestion.survey_id}
                                        AND
                                          usa.survey_answer_id = sa.id
                                        THEN
                                        sa.label else ''
                                    END )
                                END)  AS 'question_${aSurveyQuestion.question_id}', \n`;
            
            csvFieldList.push('question_'+aSurveyQuestion.question_id); // Add the question_id that's being used as label to the list of fields for cvs2json
          } else {
                        dynamicFields += `MAX(
                                CASE WHEN
                                      sq.sort_order = ${aSurveyQuestion.sort_order}
                                    AND
                                      s.survey_type = '${aSurveyQuestion.survey_type}'
                                    AND
                                      s.id = ${aSurveyQuestion.survey_id}
                                    AND
                                      usa.survey_answer_id = sa.id AND qt.name = 'Free-Form'
                                   THEN
                                    usa.free_form_response
                                           ELSE
                                    (CASE WHEN
                                          sq.sort_order = ${aSurveyQuestion.sort_order}
                                        AND
                                          s.survey_type = '${aSurveyQuestion.survey_type}'
                                        AND
                                          s.id = ${aSurveyQuestion.survey_id}
                                        AND
                                          usa.survey_answer_id = sa.id
                                        THEN
                                        sa.label else ''
                                    END )
                                END)  AS 'question_${aSurveyQuestion.question_id}', \n`;
            
            videoFields.push('question_'+aSurveyQuestion.question_id);
          }
        });
        csvFieldList.push('video_survey_id','video_created_at','video_completed_at','video_is_complete');
        videoFields.forEach(function(aVideoField){
          csvFieldList.push(aVideoField);
        });
        csvSql += dynamicFields;
        csvSql +=`MAX(CASE WHEN s.survey_type = '30 day'  THEN us.survey_id ELSE '' END) AS 30_survey_id,
                  MAX(CASE WHEN s.survey_type = '30 day' AND us.survey_id = s.id THEN s.name ELSE NULL END) AS 30_survey_name,
                  MAX(CASE WHEN s.survey_type = '30 day'  THEN us.created_at ELSE '' END) AS 30_created_at,
                  MAX(CASE WHEN s.survey_type = '30 day' THEN us.completed_at ELSE '' END) AS 30_completed_at,
                  MAX(CASE WHEN s.survey_type = '30 day'  THEN us.is_complete ELSE '' END) AS 30_is_complete,
                  MAX(CASE WHEN s.survey_type = '18 months'  THEN us.survey_id ELSE '' END) AS 18_survey_id,
                  MAX(CASE WHEN s.survey_type = '18 months' AND us.survey_id = s.id THEN s.name ELSE NULL END) AS 18_survey_name,
                  MAX(CASE WHEN s.survey_type = '18 months'  THEN us.created_at ELSE '' END) AS 18_created_at,
                  MAX(CASE WHEN s.survey_type = '18 months' THEN us.completed_at ELSE '' END) AS 18_completed_at,
                  MAX(CASE WHEN s.survey_type = '18 months'  THEN us.is_complete ELSE '' END) AS 18_is_complete,
                  MAX(CASE WHEN s.survey_type = 'video'  THEN us.survey_id ELSE '' END) AS video_survey_id,
                  MAX(CASE WHEN s.survey_type = 'video' AND us.survey_id = s.id THEN s.name ELSE NULL END) AS video_survey_name,
                  MAX(CASE WHEN s.survey_type = 'video'  THEN us.created_at ELSE '' END) AS video_created_at,
                  MAX(CASE WHEN s.survey_type = 'video' THEN us.completed_at ELSE '' END) AS video_completed_at,
                  MAX(CASE WHEN s.survey_type = 'video'  THEN us.is_complete ELSE '' END) AS video_is_complete
                  -- FROM surveys s, survey_questions sq, survey_answers sa, user_surveys us,
                  -- user_survey_answers usa, users u, clinician_codes c, question_types qt
                  -- WHERE u.id = us.user_id
                  -- AND s.id = sq.survey_id
                  -- AND sq.id = sa.survey_question_id
                  -- AND us.id = usa.user_survey_id
                  -- AND s.id = us.survey_id
                  -- AND sq.id = usa.survey_question_id
                  -- AND sa.id = usa.survey_answer_id
                  -- AND c.id = u.clinician_code_id
                  -- AND qt.id = sq.question_type_id
                  FROM  clinician_codes c
                  INNER JOIN users u ON ( u.clinician_code_id = c.id )
                  INNER JOIN user_surveys us ON ( us.user_id = u.id )
                  INNER JOIN surveys s ON ( s.id = us.survey_id )
                  INNER JOIN survey_questions sq ON ( sq.survey_id = s.id )
                  INNER JOIN question_types qt ON ( qt.id = sq.question_type_id )
                  INNER JOIN survey_answers sa ON ( sa.survey_question_id = sq.id )
                  LEFT OUTER JOIN user_survey_answers usa ON usa.survey_answer_id = sa.id
                  WHERE usa.survey_question_id = sq.id
                  AND usa.user_survey_id = us.id
                  `;
                  
                  if( req.query.query && req.query.query.clinic_name ){
                    
                    clinicName=decodeURIComponent(req.query.query.clinic_name);
                    console.log(clinicName);

                    csvSql += ` AND c.name = '`+clinicName.replace("'","''")+`' `;
                  }
                  
        csvSql +=` GROUP BY u.email, u.id , c.name , u.patient_type, u.first_name, u.last_name, u.address, u.city,
                  u.state, u.postal_code, u.cell_phone, u.home_phone, u.has_contact_users, u.parent_user_id, u.intervention_group,
                  u.parent_relationship_type, u.consent_accepted_on, u.race_id, u.education_id, u.expected_child_birth, actual_child_birth,
                  u.contact_name, u.contact_email, u.contact_cell_phone, u.contact_home_phone, u.is_deactive, u.reason_for_deactivation, u.deactivated_on `;

        sendEmailAttachment=function(csvData,pfileName,clinicName,pName,pEmail,pFromEmail){
            var helper = require('sendgrid').mail;
            //_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
            var email_body_text="<span style='font-size: 25px ; font-weight: bold ; font-family: &quot;arial bold&quot; , sans-serif ; color: #333333 ; line-height: 35px'>SURVEY TEMPLATE EXPORT</span><br>"+
            "<p style='font-size: 12px ; font-family: &quot;arial&quot; , sans-serif ; color: #333333 ; line-height: 25px'>Hi "+pName+",<br></p>"+
            "<span style='font-size: 14px ; font-style: italic ; font-family: &quot;arial&quot; , sans-serif ; color: #009933 ; line-height: 25px'>Please find attached survey template export for clinic <b>"+clinicName+"</b></span><br>"+
            "&nbsp;<br>";
            //var template = _.template(email_body_text);
            var email_body = email_body_text;//template({CLINIC_NAME: clinicName,NAME:pName});
            
            var fromEmail = new helper.Email(pFromEmail);
            var toEmail = new helper.Email(pEmail);
            var subject = "User Template Export for Clinic <"+clinicName+">";
            var content = new helper.Content('text/html', email_body);
            var mail = new helper.Mail(fromEmail, subject, toEmail, content);
            attachment = new helper.Attachment();
            attachment.setContent(csvData);
            attachment.setType("application/csv");
            attachment.setFilename(pfileName);
            attachment.setDisposition("attachment");
            mail.addAttachment(attachment);
            var sg = require('sendgrid')(process.env.SEND_GRID_API_KEY);
            var request = sg.emptyRequest({
              method: 'POST',
              path: '/v3/mail/send',
              body: mail.toJSON()
            });
            console.log(process.env.SEND_GRID_FROM_EMAIL);
            console.log(process.env.SEND_GRID_API_KEY);

            sg.API(request, function (error, response) {
              if (error) {
                console.log(JSON.stringify(err));
              }
              // var NotificationLogObj = {
              //   message: "success",
              //   notification_type: 'Templat Export for '+clinicName,
              //   user_name: pEmail,
              //   sent_at: new Date()
              // };
              console.log(response);
            });  
          }
          console.log(csvSql);
        self.models('UserSurvey').query(csvSql, function(err, csvData){
          
          if(err){
            console.log(err);
          }

          sendCSVResponse = function(obj) {
            var body = '';
            var data=[];//extract attributes only
            _.each(obj,function(item,index){
              var row={};
              for(var key in item) {
                if(item.hasOwnProperty(key)) {
                  row[key] = item[key];
                }
              }
              data.push(row);
            });
            
            var json2csv = require('json2csv');
            var config={
              fields : csvFieldList,
              data: data
            };
            json2csv(config, function(err, csv) {
              if (err) {
                console.log(err);
                req.res.status(500).send({error:'Error generating CSV.'});
              } else {
                //csv = csv.replace(/question_(?=[0-9])/gi, ''); // As we have numbers as column names, they will break JS so we use a prefix and here we remove said prefix
                csv=new Buffer(csv).toString('base64');
                var filename = "survey_export_log_"+new Date().getTime()+".csv";
                /*req.res.attachment(filename);
                req.res.end(csv, 'UTF-8');
                req.context.current_user.lastName*/
                self.models('Setting').find({}).paginate({page: 1}, {limit: 1}).exec(function(err,emailSetting){
                  var from_email = emailSetting[0].fromEmail;
                  sendEmailAttachment(csv,filename,clinicName,req.context.current_user.lastName,req.context.current_user.email,from_email);
                  //sendEmailAttachment(csv,filename,clinicName,req.context.current_user.lastName,"shahzadhassan10@gmail.com",from_email);
                });
              }
            });
          };
          sendCSVResponse(csvData);
        });

        req.res.send(200,[]);
        return false;
      }
    });

  },

  afterGenerateCsvResultsScope: function(models, req, done) {

    
    done();
  },

};