module.exports = {
  beforeCreate: function(values, req, done) {
    
   
   
if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var util=require('util'),
      Promise = require('bluebird');
    var currentUser=req.context.current_user;
    
    req.body.password=req.context.body.password;
    req.body.passwordConfirmation=req.context.body.password_confirmation;
    req.body.role=req.context.body.role;
    req.body.race_id=req.context.body.race_id;
    req.body.education_id=req.context.body.education_id;
    
    var self=this;
    var isValid=validateRequiredFields();
    if(!isValid){//validations failed
      return false;
    }
    if(currentUser && req.body.role!='patient'){
      req.body.email=req.body.email.toLowerCase();
      if(currentUser.role === 'administrator'){
        req.body.role = 'health_care_provider';
        req.body.race_id = process.env.DEFAULT_RACE;
        req.body.education_id = process.env.DEFAULT_EDUCATION;
        req.body.patient_type = null;
        var newPassword=generatePassword();
        req.body.password=newPassword;
        req.body.passwordConfirmation=newPassword;
        req.body.reset_password = true;
        checkIfEmailExists(true);//true check clinician code and run block randomizer
        
      }else if(currentUser.role === 'patient' && currentUser.patientType ===1){
        if(currentUser.hasContactUsers){
          req.body.role = 'patient';
          req.body.patient_type = 2;
          req.body.parent_user_id = currentUser.id;
          if(typeof req.body.cellPhone==="undefined" || req.body.cellPhone=== null){
            req.body.vaccination_reminders=false;
          }else{
            req.body.vaccination_reminders=true;
          }
          req.body.clinician_code_id=currentUser.clinicianCodeId;
          var newPassword=generatePassword();
          req.body.password=newPassword;
          req.body.passwordConfirmation=newPassword;
          req.body.reset_password = true;
          checkIfEmailExists(false);//don't check clinician code and no need to run block randomizer
        }else{
          
          req.res.json(401,{"message":"user does not has permissions to create user"});
          req.res.end();
          return false;
        }
      }
      
      
    }else{
      if(!req.body.role){
        req.body.role='patient';
      }
      req.body.email=req.body.email.toLowerCase();
      if(typeof req.body.cellPhone==="undefined" || req.body.cellPhone=== null){
        req.body.vaccination_reminders=false;
      }else{
        req.body.vaccination_reminders=true;
      }
      checkIfEmailExists(true);
    }
    function blockRandomizer(pClinicId){
      var blockRandomizerModel=self.models("clinicianBlockRandomizer");
      blockRandomizerModel.findOne({"clinician_code_id":pClinicId}).sort('id ASC').exec(function(error,result){
        if(result && result.patientType!==null){
          req.body.block_randomizer_id=result.id;//so that this can be deleted
          if(result.patientType=="Group A"){
            req.body.patient_type=1;
            var rand=!!Math.floor(Math.random() * 2);
            if(rand){
              req.body.has_contact_users=true;
            }else{
              req.body.has_contact_users=false; 
            }
            if(result.interventionGroup==1){
              req.body.intervention_group=1;
              done();
            }else if(result.interventionGroup==2){
              req.body.intervention_group=2;
              done();
            }else{
              sendBlockRandErrEmailToAdmin(pClinicId);
            }
            
          }else{
            req.body.patient_type=0;
            done();
          }
          
        }else if(error){
          req.res.json(420,{"message":"failed to create patient"});
          req.res.end();
          return false;
        }else if(typeof result=="undefined"){
          sendBlockRandErrEmailToAdmin(pClinicId);
        }
      });
    }
    function sendBlockRandErrEmailToAdmin(pClinicId){
      var settingsModel=self.models("setting");
        settingsModel.find({},{fields: {fromEmail:1}}).paginate({page: 1}, {limit: 1})
        .exec(function(err,response){
          if(err){
            req.res.json(401,"settings not available");
            return false;
          }else if (response && response.length>0){
            sendEmail(process.env.BLOCK_RANDOM_ERROR_EMAIL_TEXT,process.env.BLOCK_RANDOM_EMAIL_SUBJECT,response[0].fromEmail,{"clinic_id":pClinicId},response[0].fromEmail);
            req.res.json(401,{"message":"Clinic Code does not exist in randomizer. Please contact System Administrator."});
            req.res.end();
            return false;
          }
        });
    }
    function checkIfEmailExists(pGetClinicCode){
      var UserModel=self.models("user");
      UserModel.findOne({"email":req.body.email},function(error,result){
        if(error){
          done(error);
        } else {
          if(result && result.id!==null){
            req.res.json(420,{"message":"duplicate email"});
            return false;
          }else{
            if(pGetClinicCode){
              checkClinicCode();
            }else{
              done();
            }
          }
        }
      });
    }
    function checkClinicCode(){
      
      var clinicModel=self.models("clinicianCode");
      clinicModel.find({code:req.context.body.clinician_code},function(err,response){
        if(err){
          console.log('Error for query finding clinic code, error was: ');
          console.log(err);
          req.res.json(500,{"message":"Invalid Clinician Code."});
          req.res.end();
          return false;
        }else if (response && response.length>0){
          req.body.clinicianCodeId=response[0].id;
          if(req.body.role !='administrator' && req.body.role !='health_care_provider' && req.body.patient_type!==2){
            blockRandomizer(req.body.clinicianCodeId);
          }else{
            done();  
          }
          
        }else{
          req.res.json(422,{"message":"Invalid Clinician Code."});
          req.res.end();
          return false;
        }
        
      });
    }
    function generatePassword(){
      var length = 10,
          charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
          retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
   
    function validateRequiredFields(){
      if(typeof req.context.body.email === "undefined" || req.context.body.email===""){
        req.res.json(422,{"message":"Missing required parameter email"});
        return false;
      }
      if(typeof req.context.body.first_name === "undefined" || req.context.body.first_name===""){
        req.res.json(422,{"message":"Missing required parameter first_name"});
        return false;
      }
      if(typeof req.context.body.last_name === "undefined" || req.context.body.last_name===""){
        req.res.json(422,{"message":"Missing required parameter last_name"});
        return false;
      }
      if(!currentUser){
        if(typeof req.context.body.password === "undefined" || req.context.body.password===""){
          req.res.json(422,{"message":"Missing required parameter password"});
          return false;
        }
        if(typeof req.context.body.password_confirmation === "undefined" || req.context.body.password_confirmation===""){
          req.res.json(422,{"message":"Missing required parameter password confirmation"});
          return false;
        }
      }
      return true;
    }
    function sendEmail(pBody,pSubject,pFromEmail,templateMapper,pToEmail){
      var SendGrid = self.models('sendGrid');
      _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g
      };
      var template = _.template(pBody);
      var finalTemplate=template(templateMapper);
      var msgBody="from="+pFromEmail+"&to="+pToEmail +"&subject="+ pSubject+"&html="+ finalTemplate;
      
      Promise.promisify(SendGrid.request)('create', {}, {}, {body:msgBody})
        .then(function(resultSendGrid) {
          sails.log.debug("Sendgrid responding with object: " + util.inspect(resultSendGrid));
        })
        .catch(function(err) {
          sails.log.debug('error Sendgrid: ' + util.inspect(err));
          return false;
        });
    }
  },

  afterCreate: function(models, req, done) {
    
 
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var util=require('util'),
      Promise = require('bluebird');
      var self=this;
      
    if(models && models.length>0){
      var currentUser=models[0];
      if(req.body.block_randomizer_id){//if block randomizer used then delete the record so that the next record is used after this create
        deleteClinicBlockRandomizerRecord(req.body.block_randomizer_id);
      }
      
      if(currentUser.resetPassword){
        var settingsModel=this.models("setting");
        settingsModel.find({},{fields: {contactUserRegistrationEmailText:1,contactUserRegistrationSubject:1,forgotPasswordEmailText:1,forgotPasswordSubject:1,fromEmail:1}}).paginate({page: 1}, {limit: 1})
        .exec(function(err,response){
          if(err){
            req.res.json(401,"settings not available");
            return false;
          }else if (response && response.length>0){
            var p = new Promise(function(resolve, reject) {
              if(currentUser.patientType==2){//create registration survey for contact user.
                createRegistrationSurvey(true,response[0].contactUserRegistrationEmailText,response[0].contactUserRegistrationSubject,response[0].fromEmail,{name:req.context.current_user.firstName+" "+ req.context.current_user.lastName},resolve);//also sends email
              }else{
                resolve();
              }
            });
            p.then(new Promise(function(resolve,reject){
              sendEmail(response[0].forgotPasswordEmailText,response[0].forgotPasswordSubject,response[0].fromEmail,{password: currentUser.password},resolve);
            }));
            p.then(function(){
              done();
            });
          }
        });
        
      }else{
        if(
          (req.session.currentUser !== undefined)
          &&
          ( ( req.session.currentUser.role == 'patient' && req.session.currentUser.patientType != 1 ) || req.session.currentUser.role != 'admin' )
        ){
          console.log('User is not admin or patient can not create users!');
          done();
        } else {
          createRegistrationSurvey(false);//false means does not has promise so it can call done
        }
      }
    }else{
      done();
    }
    function deleteClinicBlockRandomizerRecord(pRandomizerId){
      var clinicianBlockRandModel=self.models("clinicianBlockRandomizer");
      clinicianBlockRandModel.destroy({id:pRandomizerId}).exec(function (err){
        if (err) {
          sails.log.debug("clinician block randomizer responding with error "+util.inspect(err));
        }
        
      });
    }
    function sendEmail(pBody,pSubject,pFromEmail,templateMapper,pResolve){
      var SendGrid = self.models('sendGrid');
      _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g
      };
      var template = _.template(pBody);
      var finalTemplate=template(templateMapper);
      var msgBody="from="+pFromEmail+"&to="+ currentUser.email+"&subject="+ pSubject+"&html="+ finalTemplate;
      
      Promise.promisify(SendGrid.request)('create', {}, {}, {body:msgBody})
        .then(function(resultSendGrid) {
          sails.log.debug("Sendgrid responding with object: " + util.inspect(resultSendGrid));
          pResolve();
        })
        .catch(function(err) {
          sails.log.debug('error Sendgrid: ' + util.inspect(err));
          req.res.json(401,{message:"failed to send contact registeration email notification"});
          req.res.end();
          return false;
        });
    }
    function createRegistrationSurvey(pHasPromise,pEmailText,pEmailSubject,pFromEmail,pTemplate,pResolve){
        var surveySelectionCriteria = {};
        
        if(models[0].role === 'patient' && (models[0].patientType == 0 || models[0].patientType == 1 || models[0].patientType == 2) ){
          surveySelectionCriteria = {survey_type: 'registration', is_active: true,patient_type:models[0].patientType,intervention_group:models[0].interventionGroup};
        } 
  
        var surveys = self.models('Survey');
        surveys.find(surveySelectionCriteria).exec(function(err, results){
          if(err){
            console.log('Error generating Survey for registered user. Error was: ');
            console.log(err);
          } else {
            var surveyTemplate = results[0];
            var userSurvey = {};
            userSurvey.surveyId = surveyTemplate.id;
            userSurvey.createdAt = new Date();
            userSurvey.isComplete = 'f';
            userSurvey.firstReminder = 'f';
            userSurvey.secondReminder = 'f';
            userSurvey.userId = models[0].id;
            userSurvey.questionCount = surveyTemplate.totalQuestions;
            if(models[0].patientType==0){
              userSurvey.maternalVideoComplete = 1;
              userSurvey.pediatricVideoComplete = 1;
            }
            self.models('UserSurvey').create(userSurvey).exec(function createCB(err, created){
              if(err){
                console.log('Error creating userSurve. Error was:');
                console.log(err);
                done(err);
              } else { // Now create empty answers with the questions.
                self.models('SurveyQuestion').find({survey_id: created.surveyId }).exec(function(err, surveyQuestions){
                  var i=0;
                  var len = surveyQuestions.length;
                  var surveyAnswers = [];
                  for(i;i<len;i++){
                    surveyAnswers.push( { userSurveyId: created.id, surveyQuestionId: surveyQuestions[i].id, questionOrder:surveyQuestions[i].sortOrder, questionCodeId:surveyQuestions[i].questionCodeId} );
                  }
                  self.models('UserSurveyAnswer').create(surveyAnswers).exec(function(err, savedResult){
                    if(err){
                      console.log('Error saving user answers. Error: ');
                      console.log(err);
                      done(err);
                    } else {// Update the user survey with the first question id so the front-end knows where to start the survey
                      self.models('UserSurveyAnswer').findOne({user_survey_id: created.id}).sort('question_order ASC').exec(function findCB(err, result){
                        self.models('UserSurvey').update({id:created.id },{first_question_id: result.id }).exec(function updateCB(err, result){
                          if(currentUser.patientType==2){
                            sendEmail(pEmailText,pEmailSubject,pFromEmail,pTemplate,pResolve);
                          }
                          if(!pHasPromise){
                            done();  
                          }
                        });
                      });
                    }
                  });
                });
              }
  
            });
          }
        });
      }
  },

  beforeFind: function(values, req, done) {
    
 done();

  },

  afterFind: function(models, req, done) {
    
done();

  },

  beforeUpdate: function(values, req, done) {
    
if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
var self=this;
    function checkIfEmailExists(){
      var UserModel=self.models("user");
      
      UserModel.findOne({"email":req.body.email},function(error,result){
        if(error){
          done(error);
        } else {
          if(result && result.id!=req.params.id){
            req.res.json(420,{"message":"duplicate email"});
            return false;
          }else{
            if(typeof req.body.cellPhone !== 'undefined' && (req.body.cellPhone === null || req.body.cellPhone === '')){
              req.body.vaccination_reminders=false;
            }else{
              req.body.vaccination_reminders=true;
            }
            if(req.params.id!= req.context.current_user.id && req.context.current_user.role=="administrator"){
                delete req.body.password;
                delete req.body.password_confirmation;
                done();   
            }else if(req.params.id!= req.context.current_user.id){ // if user.id not equal to current_user.id return 401 unauthorized response
              req.res.json(401,{"message":"failed to change the password ->login required"});
              req.res.end();
              return false;
            }else{
              done();  
            }
          }
        }
      });
    }
    checkIfEmailExists();
  },

  afterUpdate: function(models, req, done) {
    
 if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
  if(models && models.length>0){
    req.res.json(200,models);
    return false;
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

  beforeResetPasswordScope: function(values, req, done) {
    
 done();

  },

  afterResetPasswordScope: function(models, req, done) {
    
done();

  },

  beforeConsentAcceptedScope: function(values, req, done) {
    
 done();

  },

  afterConsentAcceptedScope: function(models, req, done) {
    
    if(models && models.length>0){
      req.res.json(200,{});
      return false;
    } else {
      done();
    }
  },

  beforeDeactivateScope: function(values, req, done) {
    
 done();

  },

  afterDeactivateScope: function(models, req, done) {
    
done();

  },

  beforeMyprofileScope: function(values, req, done) {
    
 done();

  },

  afterMyprofileScope: function(models, req, done) {
    
done();

  },

  beforeGetMyContactsScope: function(values, req, done) {
    
 done();

  },

  afterGetMyContactsScope: function(models, req, done) {
    
 if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    
      var lCurrentUser=req.context.current_user;
      if(lCurrentUser){
        var criteria={
                "parent_user_id":lCurrentUser.id
        };
        this.models('user').find(criteria)
            .then(function(result) {
              if(result && result.length>0){
                console.log(result);
                req.res.json(200,result);
              }else {
                req.res.json(200,{});
              }
              req.res.end();
              return false;
            })
            .catch(function(err) {
              sails.log.debug('error in finding user suvery: ' + util.inspect(err));
              return done(util.inspect(err)); 
            });
            
      }else{
        done();
      }
    
    
  },

  beforeGetPatientsByClinicsScope: function(values, req, done) {
    
 done();
  },

  afterGetPatientsByClinicsScope: function(models, req, done) {
    
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
  if(models && models.length>0){
    var self=this;
    var util=require("util");
    if(req.query && req.query.query && req.query.query.clinicia_code_id){
      self.models("clinicianCode").findOne({id:models[0].clinicianCodeId},function(err,result){
         if(err){
            console.log(util.inspect(err));
            done(err);
          }
          if(result && result.name){
            _.each(models,function(model){
              model.clinicName=result.name;  
            });
            done();
          }else{
            done();
          }
      });
    }else{
      _.each(models,function(model,index){
        self.models("clinicianCode").findOne({id:model.clinicianCodeId},function(err,result){
           if(err){
              console.log(util.inspect(err));
              done(err);
            }
            if(result && result.name){
              model.clinicName=result.name;
            }
            if(index==models.length-1){
              done();  
            }
            
        });
      });
    }
    
  }else{
    done();
  }
  },

  beforeGetHealthcareByClinicScope: function(values, req, done) {
    
 done();

  },

  afterGetHealthcareByClinicScope: function(models, req, done) {
    
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
  if(models && models.length>0){
    var self=this;
    var util=require("util");
    _.each(models,function(model,index){
      self.models("clinicianCode").findOne({id:model.clinicianCodeId},function(err,result){
         if(err){
            console.log(util.inspect(err));
            done(err);
          }
          if(result && result.name){
            model.clinicName=result.name;
          }
          if(index==models.length-1){
            done();  
          }
          
      });
    });
  }else{
    done();
  }

  },

  beforePatientSurveyExportScope: function(values, req, done) {
    
 done();

  },

  afterPatientSurveyExportScope: function(models, req, done) {
    
done();

  },

};