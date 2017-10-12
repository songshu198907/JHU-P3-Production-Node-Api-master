module.exports = {
  name: 'SurveyCompletionReminders',
  fn: function(done) {
    require('dotenv').load();
    var util=require("util");
    var Promise = require('bluebird');
    var userSurvey = this.models('usersurvey');
    var msgs=[];
    var self=this;

    var lCustomQuery="select us.*,u.first_name,u.last_name,u.email,u.cell_phone from user_surveys as us,users as u where us.is_complete = 0 and us.first_reminder = 0 and us.second_reminder = 0 "+
                    "and us.created_at <= curdate()-5 and us.user_id=u.id "+
                    "and us.user_id in (select id from users where is_deactive = 0) "+
                    "union all "+
                    "select us.*,u.first_name,u.last_name,u.email,u.cell_phone from user_surveys as us,users as u where us.is_complete = 0 and us.first_reminder = 1 and us.second_reminder = 0 "+
                    "and us.created_at <= curdate()-10 and us.user_id=u.id "+
                    "and us.user_id in (select id from users where is_deactive = 0 and cell_phone is not null);";

    userSurvey.query(lCustomQuery,function(err,result){
      if(err){
        console.log(util.inspect(err));
        done();
      }
      if(result && result.length>0){
        logJob(result.length);
        sendSurveyNotification(result);
      }else {
        logJob(0);
        done();//there are no surveys
      }
      console.log("find user survey completed");
    });
    function sendSurveyNotification(pSurveys){

        var settingsModel=self.models("setting");
        var fetchFields={surveyNotificatonFirstReminderEmailText:1,surveyNotificatonFirstReminderSubject:1,
          surveyNotificatonFinalSmsText:1,fromEmail:1,smsPhoneNumber:1};
        settingsModel.find({},{fields: fetchFields}).paginate({page: 1}, {limit: 1})
        .exec(function(err,response){
          if(err){
            done(err);
          }else if (response && response.length>0){
            var result=response[0];
            _.each(pSurveys, function(lSurvey, index) {
              if(lSurvey.first_reminder && lSurvey.cell_phone){
                console.log("going to send sms");
                console.log(util.inspect(lSurvey));
                sendSurveySms(result.surveyNotificationFinalSmsText,result.smsPhoneNumber,lSurvey.cell_phone,lSurvey);
              }else if(!lSurvey.first_reminder){
                console.log("going to send email");
                console.log(util.inspect(lSurvey));
                sendSurveyEmail(result.surveyNotificationFirstReminderEmailText,result.surveyNotificationFirstReminderSubject,result.fromEmail,lSurvey);
              }
              if(index==(pSurveys.length-1)){
                if(msgs && msgs.length>0){
                  _.each(msgs,function(msg,pIndex,msgs){
                    var lastMessage=(pIndex==msgs.length-1?true:false);
                    notify(msg,lastMessage);
                  });
                }else{
                    done();//no messages to be sent
                }

              }
            });
          }else{//no settings available
            done();
          }
        });
    }


    function sendSurveyEmail(pBody,pSubject,pEmail,pSurvey){

        _.templateSettings = {
          interpolate: /\{\{(.+?)\}\}/g
        };
        var template = _.template(pBody);
        var finalTemplate=template({last_name: pSurvey.last_name});
        msgs.push({
            model: 'sendGrid',
            survey:pSurvey,
            body: "from="+ pEmail+"&to="+ pSurvey.email+"&subject="+ pSubject+"&html="+ finalTemplate
        });
    }
    function sendSurveySms(pSurveyNotificationSmsText,pFromPhoneNumber,pCellNumber,pSurvey){
        msgs.push({
          model: 'twilio',
          survey:pSurvey,
          body:"From="+ pFromPhoneNumber+"&To="+ pCellNumber+"&Body="+ pSurveyNotificationSmsText

        });
    }

    function notify(message,pLastMessage) {

      var Model = message.model ? self.models(message.model) : undefined;
      if(Model !== undefined && Model.request) {
        Promise.promisify(Model.request)('create', {}, {}, { body: message.body })
            .then(function(resultMessage) {
                sails.log.debug(message.model + ' responding with: ' + util.inspect(resultMessage));
                if(message.model==='sendGrid'){//if model sendgrid then send email
                  updateSurveyReminder(message.survey,{first_reminder:true},pLastMessage);
                }else{
                  updateSurveyReminder(message.survey,{second_reminder:true},pLastMessage);
                }


            })
            .catch(function(err) {
             console.log('error ' + message.model + ': ' + util.inspect(err));
              done(err);
            });
      }
    }

    function updateSurveyReminder(pSurvey,pUpdateCriteria,pLastMessage){
      userSurvey.update({id:pSurvey.id},pUpdateCriteria)
      .then(function(result) {
        console.log('survey reminder status updated: ' + util.inspect(result));
         if(pLastMessage){
            done();
          }

      })
      .catch(function(err) {
        console.log('error in updating user suvery: ' + util.inspect(err));
        done(err);
      });
    }


    function logJob(pRecordsEffected){
        self.models("jobauditlogging").create({name:"survey completion reminder",created_at:new Date(),rows_effected:pRecordsEffected}).exec(function(err,result){
          if(err){
            console.log("failed to create job audit log");
          }else{
            console.log("audit log created for job:survey completion reminder");
          }
        });
      }
  },
  schedules: [ '2 14 * * *' ]
};
