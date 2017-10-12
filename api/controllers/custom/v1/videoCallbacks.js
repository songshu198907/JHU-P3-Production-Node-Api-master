module.exports = {
  beforeCreate: function(req, done) {
    
done();

  },

  afterCreate: function(req, res, done) {
    
done();

  },

  beforeFind: function(req, done) {
    
done();

  },

  afterFind: function(req, res, done) {
    
done();

  },

  beforeUpdate: function(req, done) {
    
done();

  },

  afterUpdate: function(req, res, done) {
    
done();

  },

  beforeDestroy: function(req, done) {
    
done();

  },

  afterDestroy: function(req, res, done) {
    
done();

  },

  beforeAllScope: function(req, done) {
    
done();

  },

  afterAllScope: function(req, res, done) {
    
done();

  },

  beforeExactMatchScope: function(req, done) {
    
done();

  },

  afterExactMatchScope: function(req, res, done) {
    
done();

  },

  beforeCountScope: function(req, done) {
    
done();

  },

  afterCountScope: function(req, res, done) {
    
done();

  },

  beforeCountExactMatchScope: function(req, done) {
    
done();

  },

  afterCountExactMatchScope: function(req, res, done) {
    
done();

  },

  beforeSearchVideoScopedByRaceEduScope: function(req, done) {
    
var util=require("util");
    var searchKeyword=req.query.keyword;
    
    var CustomQuery="SELECT * FROM videos WHERE keywords ~* '"+ searchKeyword+"' OR title ~* '"+ searchKeyword+"' OR description ~* '"+ searchKeyword+"'";
    if(req.query.limit && req.query.offset)
    {
      CustomQuery+= " LIMIT "+ req.query.limit + " OFFSET " + req.query.offset +";";
    }else{
      CustomQuery+=";";
    }
    
    this.models('video').query(CustomQuery,function(err,retrievedVideos){
      
      if(err){
        sails.log.debug("videos search by keyword failed " + util.inspect(err));
        req.res.send(401,"search failed");
      }else{
        var data=retrievedVideos.rows;
        req.res.send(200,data);
      }
      return false;
    });

  },

  afterSearchVideoScopedByRaceEduScope: function(req, res, done) {
    
var util=require("util");
    var searchAuditLogging = this.models('searchAuditLogging');
    var audit_log={};
    audit_log.userId = req.context.current_user.id;
    audit_log.createdAt = new Date();
    audit_log.searchTerm=req.query.keyword;
    searchAuditLogging.create(audit_log)
      .then(function(resultAuditLog) {
        sails.log.debug('Search Audit Log creation responding with: ' + util.inspect(resultAuditLog));
        done();
      })
      .catch(function(err) {
        sails.log.debug('error in search Audit Log creation: ' + util.inspect(err));
        return done(util.inspect(err)); 
      });

  },

  beforeSearchVideoByKeywordScope: function(req, done) {
    
    var util=require("util");
    var Promise = require('bluebird');
    var userSurvey = this.models('userSurvey');
    var msgs=[];
    var self=this;
    var d = new Date();
    d.setDate(d.getDate()-5);
    var criteria={
      "is_complete":false,
      "first_reminder":false,
      "created_at": {
              '<' : d 
      }
    };
    userSurvey.find(criteria)
      .then(function(result) {
        if(result && result.length>0){
          sendSurveyNotification(true,result);//true means send email false means send sms
        }
      })
      .catch(function(err) {
        sails.log.debug('error in finding user suvery: ' + util.inspect(err));
        return done(util.inspect(err)); 
      });
    var d10=new Date();
    d10.setDate(d.getDate()-10);
    var criteria={
      "is_complete":false,
      "first_reminder":true,
      "second_reminder":false,
      "created_at": {
              '<' : d10
      }
    };
     userSurvey.find(criteria)
      .then(function(result) {
        if(result && result.length>0){
          sendSurveyNotification(false,result);//true means send email false means send sms
        }
      })
      .catch(function(err) {
        sails.log.debug('error in finding user suvery: ' + util.inspect(err));
        return done(util.inspect(err)); 
      });
    function sendSurveyNotification(pIsEmail,pSurvey){
        
        var settingsModel=self.models("setting");
        var fetchFields={surveyNotificatonFirstReminderEmailText:1,surveyNotificatonFirstReminderSubject:1,
          surveyNotificatonFinalSmsText:1,fromEmail:1,smsPhoneNumber:1};
        settingsModel.find({},{fields: fetchFields}).paginate({page: 1}, {limit: 1})
        .exec(function(err,response){
          if(err){
            req.res.json(401,"settings not available");
            return false;
          }else if (response && response.length>0){
            getSurveyUser(pSurvey,pIsEmail,response[0]);
          }
        });
      }
    function getSurveyUser(pSurveys,pIsEmail,pSettings){
      
      for(var i=0;i<pSurveys.length;i++){
        var userModel=self.models("user");
        var lSurvey=pSurveys[i];
        userModel.findOne({"id":lSurvey.userId,"is_deactive":false}).then(function(result){
          if(result){
            if(pIsEmail){
              
              sendSurveyEmail(pSettings.surveyNotificationFirstReminderEmailText,pSettings.surveyNotificationFirstReminderSubject,pSettings.fromEmail,lSurvey,result);
            }else{
              sendSurveySms(pSettings.surveyNotificationFinalSmsText,pSettings.smsPhoneNumber,result.cellPhone,lSurvey);
            }
            
          }
          if(i==pSurveys.length){
            _.each(msgs,function(msg,index,msgs){
              notify(msg);  
            });
            return req.res.end(200);
          }
        }).catch(function(err){
          sails.log.debug('error :' + util.inspect(err));
        });
      }
      
      
    }
    function sendSurveyEmail(pBody,pSubject,pEmail,pSurvey,pUser){
      
        _.templateSettings = {
          interpolate: /\{\{(.+?)\}\}/g
        };
        var template = _.template(pBody);
        var finalTemplate=template({last_name: pUser.lastName,survey_name:pSurvey.surveyName});
        msgs.push({
            model: 'sendGrid',
            survey:pSurvey,
            body: "from="+ pEmail+"&to="+ pUser.email+"&subject="+ pSubject+"&html="+ finalTemplate
        });
    }
    function sendSurveySms(pSurveyNotificationSmsText,pFromPhoneNumber,pCellNumber,pSurvey){
        msgs.push({
          model: 'twilio',
          survey:pSurvey,
          body:"From="+ pFromPhoneNumber+"&To="+ pCellNumber+"&Body="+ pSurveyNotificationSmsText
          
        });
    }
    function notify(message) {
      
      var Model = message.model ? self.models(message.model) : undefined;
      if(Model !== undefined && Model.request) {
        Promise.promisify(Model.request)('create', {}, {}, { body: message.body })
            .then(function(resultMessage) {
                sails.log.debug(message.model + ' responding with: ' + util.inspect(resultMessage));
                if(message.model==='sendGrid'){//if model sendgrid then send email
                  updateSurveyReminder(message.survey,{first_reminder:true});
                }else{
                  updateSurveyReminder(message.survey,{second_reminder:true});
                }
                
            })
            .catch(function(err) { sails.log.debug('error ' + message.model + ': ' + util.inspect(err)); });
      }
    }
    function updateSurveyReminder(pSurvey,pUpdateCriteria){
      userSurvey.update({id:pSurvey.id},pUpdateCriteria)
      .then(function(result) {
        sails.log.debug('survey reminder status updated: ' + util.inspect(result));
      })
      .catch(function(err) {
        sails.log.debug('error in updating user suvery: ' + util.inspect(err));
      });
    }

  },

  afterSearchVideoByKeywordScope: function(req, res, done) {
    
    done();

  },

  beforeSortedByNameScope: function(req, done) {
    
done();

  },

  afterSortedByNameScope: function(req, res, done) {
    
done();

  },

  beforeVideoGalleryScope: function(req, done) {
    
done();

  },

  afterVideoGalleryScope: function(req, res, done) {
    
done();

  },

};