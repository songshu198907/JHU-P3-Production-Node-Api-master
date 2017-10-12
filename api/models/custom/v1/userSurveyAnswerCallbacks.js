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
    
 var self=this;
    if(req.context.current_user.id){
      if(req.params.id){
         self.models('UserSurveyAnswer').findOne({id:req.params.id}).exec(function(err,pSurveyAnswer){
          if(err){
           done(err); 
          } else {
            if(!_.isUndefined(pSurveyAnswer) && !_.isNull(pSurveyAnswer) ){
              self.models('UserSurvey').findOne({id:pSurveyAnswer.userSurveyId,user_id:req.context.current_user.id}).exec(function(err,pSurvey){
                if(err){
                  done(err);
                } else {
                  if(pSurvey){
                    req.body.previousSurveyAnswerId = pSurveyAnswer.surveyAnswerId; //This is used to avoid any update on the afterAction callback if the answer didn't change!
                    done();
                  }else{
                    req.res.send(401);
                    req.res.end();
                    return false;
                  }
                }
              });
            }else{
              done();
            }
          }
        });
          
      }else{
        done();
      }
    }else{
      done();
    }
  },

  afterUpdate: function(models, req, done) {
    
if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var self = this;
    if(models && models.length>0 ){
      updateSurveyVideoSourceVersion(models[0]);
    }
    if(req.body.surveyAnswerId == req.body.previousSurveyAnswerId ){
      findNextQuestion(models[0].userSurveyId, models[0].questionOrder, function(err, nextQuestion){ // Now pull next question to return to the client
        if(err){
          req.res.send(err);
        } else {
          if(nextQuestion){
            setAnswerGroup(nextQuestion);
            models[0].nextquestion = nextQuestion;
          }
          req.res.send(models);
        }
      });
    }else{
      self.models('SurveyQuestionSkipLogic').find({survey_answer_id: models[0].surveyAnswer}).exec(function findSkipLogicCB(err, skipLogicResult){ // Find the skip logic rules for this answer
        if(err){
          req.res.send(err);
        } else {
          if(skipLogicResult.length === 0){ // We might have no skip logic associated to the answer perse but we might have on the previous answer so we need to undo those changes
            undoSkipQuestions(models, function(err){
              if(err){
                req.res.send(err);
              } else {
                findNextQuestion(models[0].userSurveyId, models[0].questionOrder, function(err, nextQuestion){ // Now pull next question to return to the client
                  if(err){
                    req.res.send(err);
                  } else {
                    if (nextQuestion) {
                      setAnswerGroup(nextQuestion);
                      models[0].nextquestion = nextQuestion;
                    }
                    req.res.send(models);
                  }
                });
              }
            });
          } else {
            undoSkipQuestions(models, function(err){ //Undo any previous skipping logic
              if(err){
                req.res.send(err);
              } else {
                skipQuestions(models, skipLogicResult, function (err) {
                  findNextQuestion(models[0].userSurveyId, models[0].questionOrder, function (err, nextQuestion) { // Now pull next question to return to the client
                    if(err){
                      req.res.send(err);
                    } else {
                      if (nextQuestion) {
                        setAnswerGroup(nextQuestion);
                        models[0].nextquestion = nextQuestion;
                      }
                      req.res.send(models);
                    }
                  });
                });
              }
            });
          }
        }
      });
      function updateSurveyVideoSourceVersion(pUserSurveyAnswer){
        if (pUserSurveyAnswer && pUserSurveyAnswer.questionCodeId){
          self.models("QuestionCode").findOne({id:pUserSurveyAnswer.questionCodeId}).exec(function(err,pQuestionCode){
            if(pQuestionCode && pQuestionCode.name==="trust information from obstetrician"){
              self.models('SurveyAnswer').findOne({id:pUserSurveyAnswer.surveyAnswerId}).exec(function(err,pSurveyAnswer){
                if(pSurveyAnswer){
                  var lVideoSourceVerion='B'
                  if(pSurveyAnswer.weight>3){
                    lVideoSourceVerion='A';
                  }
                  self.models("UserSurvey").update({id:pUserSurveyAnswer.userSurveyId},{video_source_version:lVideoSourceVerion},function(err,response){
                  });
                }
              });
            }
          });
        }
      }
      function setAnswerGroup(question){
        var lQuestion=question;
        if (question.survey_question_id){
          _.each(question.possibleAnswers,function(pAnswer){
            if(lQuestion.question_group === 'maternal'){
              pAnswer.questionGroup= 'Maternal Vaccines'
            } else if(lQuestion.question_group=== 'pediatric'){
              pAnswer.questionGroup='Pediatric Vaccines';
            } else {
              pAnswer.questionGroup=lQuestion.question_group;
            }
          });
        }
      }
      function skipQuestions(models, skipLogicData, callback){
        var inValue = skipLogicData[0].skipQuestionCodes.split(',');
        self.models('UserSurveyAnswer').find({question_code_id: inValue, user_survey_id: models[0].userSurveyId}).exec(function findQuestionsToSkipCB(err, QuestionsToSkipResult){ // Get the UserAnswers that need to be updated
          var updateThisIds = [];
          QuestionsToSkipResult.forEach(function(aUserAnswerToSkip){
            updateThisIds.push(aUserAnswerToSkip.id);
          });
          self.models('UserSurveyAnswer').update({id: models[0].id},{applied_skip_logic_id: skipLogicData[0].id}).exec(function updateCallback(err, updateResult){ // Updated them and return control to parent
            self.models('UserSurveyAnswer').update({id: updateThisIds},{skipped: true, survey_answer_id: null}).exec(function updateCallback(err, updateResult) { // Now save what skip_logic_id we used to make this changes so we can undo later
              callback(false); //@todo do proper error checking
            });
          });
        });
      }
      function undoSkipQuestions(models, callback){
        self.models('SurveyQuestionSkipLogic').find({id: req.body.previousSurveyAnswerId}).exec(function findSkipLogicCB(err, skipLogicResult) { // Find the skip logic rules for this answer
          if(err){
            callback(err);
          } else {
            if(skipLogicResult.length < 1){
              callback(false); //@todo do proper error checking
            } else {
              var inValue = skipLogicResult[0].skipQuestionCodes.split(',');
              self.models('UserSurveyAnswer').find({question_code_id: inValue, user_survey_id: models[0].userSurveyId}).exec(function findQuestionsToSkipCB(err, QuestionsToSkipResult) { // Get the UserAnswers that need to be updated
                if(err){
                  callback(err);
                } else {
                  var updateThisIds = [];
                  QuestionsToSkipResult.forEach(function (aUseranswerToSkip) {
                    updateThisIds.push(aUseranswerToSkip.id);
                  });
                  self.models('UserSurveyAnswer').update({id: models[0].id}, {applied_skip_logic_id: null}).exec(function updateCallback(err, updateResult) { // Updated them and return control to parent
                    self.models('UserSurveyAnswer').update({id: updateThisIds}, {skipped: false, survey_answer_id: null}).exec(function updateCallback(err, updateResult) { // Now save what skip_logic_id we used to make this changes so we can undo later
                      callback(false); //@todo do proper error checking
                    });
                  });
                }
              });
            }
          }
        });
      }
    }
    function findNextQuestion(userSurveyId, currentQuestionOrder, callback){
      var sql = 'SELECT sq.*, usa.skipped, usa.id as user_survey_answer_id, usa.user_survey_id, usa.survey_question_id, usa.survey_answer_id, usa.free_form_response, sqt.name question_type_name, sqt.control_type question_control_type ';
      sql += ' FROM user_survey_answers usa INNER JOIN survey_questions sq on sq.id = usa.survey_question_id INNER JOIN question_types sqt ON (sqt.id = sq.question_type_id) WHERE usa.user_survey_id = '+ userSurveyId;
      sql += ' AND usa.question_order > ' + currentQuestionOrder;
      sql += ' ORDER BY usa.question_order ASC';
      self.models('UserSurveyAnswer').query(sql, function findQuestionsCallback(err, Questions){
        if(err){
          callback(err, undefined);
        } else {
          var nextquestion;
          var totalQuestions = Questions.length;
          var i = 0;
          var toReturn={};
          for(i;i<totalQuestions;i++){
            if(Questions[i].skipped != 1){ // Found the next question in order after the current one being updated it break out!
              nextquestion = Questions[i];
              break;
            }
          }
          if(!_.isUndefined(nextquestion)){
            toReturn = nextquestion;
            toReturn.possibleAnswers = null;
            self.models('SurveyAnswer').find({survey_question_id: toReturn.id}).exec(function findPossibleAnswersCB(err, possibleAnswers){ // Now fetch the possible answers
              toReturn.possibleAnswers = _.sortBy(possibleAnswers, "sortOrder");
              callback( false, toReturn);
            });
          }else{
            callback(false, toReturn);
          }
        }
      });
    }
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

  beforePreviousquestionScope: function(values, req, done) {
    
 done();

  },

  afterPreviousquestionScope: function(models, req, done) {
    
  
     if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var self = this;
    var currentQuestion = models[0];
    self.models('UserSurvey').findOne({id: currentQuestion.userSurveyId}).exec(function findSurveyCB(err, result){
      if(req.user.id != result.userId){
        done('User does not owns this answer!');
      }else{
        self.models('UserSurveyAnswer').find({user_survey_id: currentQuestion.userSurveyId, question_order: { '<': currentQuestion.questionOrder } }).sort('question_order DESC').exec(function findCB(err, allUserSurveyAnswers){
          var i =0;
          var totalQuestions = allUserSurveyAnswers.length;
          var previousQuestionIdx = 0;
          if(totalQuestions === 0){ // we are on the first question return
            done();
          } else { // Start checking what is the previous question taking skipped questions into account
            for(i;i<totalQuestions;i++){
              if(allUserSurveyAnswers[i].skipped){ // question was skipped due to a previous answer so skip and keep searching
                continue;
              } else { // We found the previous question taking skipped ones into account
                previousQuestionIdx = i;
                break;
              }
            }
            var previousQuestion = allUserSurveyAnswers[previousQuestionIdx];
            var sql = 'SELECT sq.*, usa.skipped, usa.id as user_survey_answer_id, usa.user_survey_id, usa.survey_question_id, usa.survey_answer_id, usa.free_form_response, sqt.name question_type_name, sqt.control_type question_control_type ';
            sql += ' FROM user_survey_answers usa INNER JOIN survey_questions sq on sq.id = usa.survey_question_id INNER JOIN question_types sqt ON (sqt.id = sq.question_type_id) WHERE usa.id = '+ previousQuestion.id;
            self.models('UserSurveyAnswer').query(sql, function findQuestionsCallback(err, Questions){
              if(err){
                done(err);
              } else {
                var toReturn;
                toReturn = Questions[0];
                toReturn.possibleAnswers = null;
                self.models('SurveyAnswer').find({survey_question_id: toReturn.id}).exec(function findPossibleAnswersCB(err, possibleAnswers){ // Now fetch the possible answers
                  toReturn.possibleAnswers = possibleAnswers;
                  setAnswerGroup(toReturn);//set question group for answers
                  models[0].previousquestion = toReturn;
                  done();  
                });
              }
            });
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
  },

};