module.exports = {
  beforeCreate: function(values, req, done) {
    
 done();

  },

  afterCreate: function(models, req, done) {
    
if (process.env.NODE_ENV === 'test' || !models.length) return done(); //don't run during tests or if there are no records
    if(models && models.length>0 && models[0].isActive){
      var self=this;
      self.models('survey').update({'survey_type':models[0].surveyType,'intervention_group':models[0].interventionGroup,'patient_type':models[0].patientType},{'is_active':0}).then(function(pResult){
        models[0].save();
        done();         
      },function(pError){
          done(pError);
      });
    }else{
      done();
    }

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
    
if (process.env.NODE_ENV === 'test' || !models.length) return done(); //don't run during tests or if there are no records
    if(models && models.length>0 && models[0].isActive){
      var self=this;
      self.models('survey').update({'survey_type':models[0].surveyType,'intervention_group':models[0].interventionGroup,'patient_type':models[0].patientType},{'is_active':0}).then(function(pResult){
        models[0].save();
        done();         
      },function(pError){
          done(pError);
      });
    }else{
      done();
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

  beforeCreateCopyScope: function(values, req, done) {
    
 done();

  },

  afterCreateCopyScope: function(models, req, done) {
    
if (process.env.NODE_ENV === 'test' || !models.length) return done(); //don't run during tests or if there are no records
    if(req.query && req.query.query && req.query.query.survey_id){
      var self=this;
      
      var surveyInsertSQL="insert into surveys (name, version , is_active,  total_questions, survey_type,intervention_group, patient_type) "+
        "select concat(name, '-copy'), (SELECT Max(version)+1 FROM surveys WHERE survey_type='"+models[0].surveyType+"' and patient_type"+(models[0].patientType==null?" is ":"=")+ models[0].patientType+" and intervention_group"+(models[0].interventionGroup==null?" is ":"=")+models[0].interventionGroup+") as version, 0 ,"+
       "total_questions, survey_type,intervention_group, patient_type "+
       "from surveys where  id ="+req.query.query.survey_id+";";
      
      self.models('survey').query(surveyInsertSQL, function functionAnswerDeleted(err, addedSurvey){
          if(err){
            return done(err);
          }
          if(addedSurvey && addedSurvey.affectedRows>0 && addedSurvey.insertId) // IS THE INTENTION OF THIS TO AVOID THE BELOW CODE TO EXECUTE? IF SO WE SHOULD ADD {} LEAVING AS IS AS I DON'T KNOW REAL INTENTION HERE
          
          var copySurveyId=addedSurvey.insertId;
          var questionInsertSQL="insert into survey_questions (survey_id,question_code_id,question_text,label,question_type_id,sort_order,required_answer,question_group,question_category_id,did_you_know_text)"+
          "select "+copySurveyId +", question_code_id, question_text, label, " +
          "question_type_id, sort_order, required_answer, question_group, question_category_id,did_you_know_text "+
          "from survey_questions where survey_id = "+req.query.query.survey_id+";";
          
          self.models('SurveyQuestion').query(questionInsertSQL, function functionAnswerDeleted(err, addedQuestions){
            if(err){
              return done(err);
            }
            if(addedQuestions && addedQuestions.affectedRows>0 && addedQuestions.insertId){
              
                
                        var answerInsertSQL="insert into survey_answers (survey_question_id, allow_free_form, label, weight, sort_order, "+
                            "free_form_data_type, video_target_number) "+
                            "select newsq.id, "+
                            "sa.allow_free_form, sa.label, sa.weight, sa.sort_order, sa.free_form_data_type, sa.video_target_number from survey_questions oldsq "+
                            "join  survey_questions newsq "+
                            "on newsq.sort_order = oldsq.sort_order "+
                            "join survey_answers sa "+
                            "on sa.survey_question_id = oldsq.id "+
                            "and oldsq.survey_id = "+req.query.query.survey_id+
                            " and newsq.survey_id = "+copySurveyId+";";
                        
                        
                         
                        self.models('SurveyAnswer').query(answerInsertSQL, function functionAnswerDeleted(err, addedAnswers){
                          
                          if(err){
                            return done(err);
                          }
                          if(addedAnswers && addedAnswers.affectedRows>0 && addedAnswers.insertId)
                          {
                              
                              
                                    var insertSkipLogic="insert into survey_question_skip_logic (survey_answer_id, skip_question_codes) "+
                                        "select newsa.id, oldskip.skip_question_codes from "+
                                        "survey_answers oldsa, survey_answers newsa, survey_questions oldsq, survey_questions newsq, "+
                                        "survey_question_skip_logic oldskip "+
                                        "where oldsa.sort_order = newsa.sort_order "+
                                        "and oldsa.survey_question_id = oldsq.id "+
                                        "and newsa.survey_question_id = newsq.id "+
                                        "and oldsq.sort_order = newsq.sort_order "+
                                        "and oldsa.id = oldskip.survey_answer_id "+
                                        "and oldsq.survey_id = "+req.query.query.survey_id+
                                        " and newsq.survey_id = "+copySurveyId+";";
                                    
                                    
                                    self.models('SurveyAnswer').query(insertSkipLogic, function functionAnswerDeleted(err, skipResults){
                                      if(err){
                                        return done(err);
                                      }
                                      req.res.json(200,{});
                                      return false;
                                    });
                                    
                          }else{
                            req.res.json(200,{});
                            return false;
                          }
                          
                        });
                    
                
            }else{
              req.res.json(200,{});
              return false;
            }
  
          });
          
          
        });
    }else{
      done();
    }
  },

  beforeActiveSurveysByTypePatientScope: function(values, req, done) {
    
 done();

  },

  afterActiveSurveysByTypePatientScope: function(models, req, done) {
    
done();

  },

  beforeGetSortedSurveysScope: function(values, req, done) {
    
 if (process.env.NODE_ENV === 'test') return done(); //don't run during tests or if there are no records
 var customSQL="select id,intervention_group as interventionGroup,is_active as isActive,name,patient_type as patientType,survey_type as surveyType,total_questions as totalQuestions,version "+
            "from surveys "+
            "order by survey_type asc, patient_type asc, intervention_group asc, version asc;";
  this.models('survey').query(customSQL, function surveysFound(err, surveys){
      if(err){
        done(err);
      }
      req.res.json(200,surveys);       
      return false;
  });

  },

  afterGetSortedSurveysScope: function(models, req, done) {
    
done();

  },

  beforeDeleteSurveyScope: function(values, req, done) {
    
 if (process.env.NODE_ENV === 'test') return done(); //don't run during tests 
  if(req.query && req.query.query && req.query.query.id){
    var self=this;
    var sql_survey_quest_skip_logic_delete="DELETE from survey_question_skip_logic where survey_answer_id in (select id from "+
                "survey_answers where survey_question_id in "+
                "(select id from survey_questions where survey_id="+ req.query.query.id+"));";
    self.models("SurveyQuestionSkipLogic").query(sql_survey_quest_skip_logic_delete,function skipLogicDeleted(err,skipLogic){
      if(err){
        return done(err);
      }
       var customSQL="Delete from survey_answers where survey_question_id in ( "+
                       "Select id from survey_questions where survey_id="+req.query.query.id+
                      ");"; 
        self.models('SurveyAnswer').query(customSQL, function functionAnswerDeleted(err, answers){
            if(err){
              return done(err);
            }
            self.models('SurveyQuestion').destroy({survey_id:req.query.query.id}).exec(function(err,success){
              self.models('Survey').destroy({id:req.query.query.id}).exec(function(err,success){
                req.res.json(200);       
                return false;
              });
            });
            
            
          });
    });
   
  }else{
    done();
  }

  },

  afterDeleteSurveyScope: function(models, req, done) {
    
done();

  },

  beforeGenerateCsvResultsScope: function(values, req, done) {
    
 done();

  },

  afterGenerateCsvResultsScope: function(models, req, done) {
    
if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var self=this;
    var os = require('os');
    
    if(models && models.length>0)
    {
      var csvData="";
      
      createCSVResponse = function(obj,pFields,pFieldNames,addLine) {
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
          fields : pFields,
          fieldNames:pFieldNames,
          data: data
        };
        
        json2csv(config, function(err, csv) {
            if (err) console.log(err);
            csvData+=csv;
            if(addLine){
              csvData+=os.EOL;
            }
        });
        
      };
      
      for (var i=0;i<5;i++){
        var Emptysurvey = { "id":"","name":"","version":"","isActive":"","totalQuestions":"","surveyType":"","interventionGroup":"","patientType":"" };
        models.push(Emptysurvey);  
      }
      var fields = ["id","name","version","isActive","totalQuestions","surveyType","interventionGroup","patientType"];
      var fieldNames =["ID","Name","Version","Is Active", "Total Quesitons","Survey Type","Intervention Group","Patient Type"];
      
      createCSVResponse(models,fields,fieldNames,true);
      var Promise = require('bluebird');
      var p = new Promise(function(resolve, reject) {
        
        var selectSurveyQuestions="select sq.id, question_code_id, qc.name as question_code , question_text, label, question_type_id, qt.name as question_type_name,"+
            "sort_order, required_answer, question_group, question_category_id, qcat.name as question_category_name, did_you_know_text "+
            "from survey_questions sq "+
            "inner join question_types qt "+
            "on sq.question_type_id = qt.id "+
            "and survey_id = "+req.query.query.id+
            " left outer join question_codes qc "+
            "on sq.question_code_id = qc.id "+
            "left outer join question_categories qcat "+
            "on sq.question_category_id = qcat.id "+
            "order by sort_order;";
        self.models("SurveyQuestion").query(selectSurveyQuestions,function(err,result){
                
          if(result && result.length>0){
            
            for (var i=0;i<5;i++){
              var Emptyrow = { "id":"", "question_code_id":"", "question_code":"" , "question_text":"", "label":"", "question_type_id":"", "question_type_name":"","sort_order":"", "required_answer":"", "question_group":"", "question_category_id":"", "question_category_name":"", "did_you_know_text":"" };
              result.push(Emptyrow);  
            }
            var fields=["id", "question_code_id", "question_code" , "question_text", "label", "question_type_id", "question_type_name","sort_order", "required_answer", "question_group", "question_category_id", "question_category_name", "did_you_know_text"];
            var fieldNames=["ID", "Question Code ID", "Question Code" , "Question Text", "Label", "Question Type ID", "Question Type Name","Sort Order", "Required Answer", "Question Group", "Question Category ID", "Question Category Name", "Did You Know Text"];
            createCSVResponse(result,fields,fieldNames,true);
            var selectQuestionAnswers="select sa.*, sk.skip_question_codes "+
                            "from survey_answers sa "+
                            "left outer join survey_question_skip_logic sk "+
                            "on sa.id = sk.survey_answer_id "+
                             "where sa.survey_question_id in (select "+
                            "id from survey_questions where survey_id = "+req.query.query.id+") "+
                            "order by survey_question_id, sort_order;";
             self.models("SurveyAnswer").query(selectQuestionAnswers,function(err,answers){
                  debugger;
                if(answers && answers.length>0){
                  
                  for (var i=0;i<5;i++){
                    var Emptyrow = { "id":"", "survey_question_id":"", "allow_free_form":"", "label":"","weight":"", "sort_order":"", "free_form_data_type":"" , "video_target_number":"","skip_question_codes":""};
                    answers.push(Emptyrow);  
                  }
                  var fields=["id", "survey_question_id", "allow_free_form", "label","weight", "sort_order","free_form_data_type" , "video_target_number", "skip_question_codes"];
                  var fieldNames=["ID", "Survey Question ID", "Allow Free Form", "Label","Weight", "Sort Order", "Free Form Data Type" , "Video Target Number", "Skip Question Codes"];
                  createCSVResponse(answers,fields,fieldNames);
                  resolve();
                }else{
                  resolve();
                }
              });
          }else{
            resolve();
          }
        });
      });
      p.then(function(){
        var filename = "survey-export.csv";
            req.res.attachment(filename);
            req.res.end(csvData, 'UTF-8');
            return false;
      });
     
        
      
    }else{
      done();
    }
  },

};