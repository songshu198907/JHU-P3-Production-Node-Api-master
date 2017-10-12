module.exports = {
  name: 'VaccinationReminders',
  fn: function(done) {
    
    var util=require("util");
    var Promise = require('bluebird');
    var self=this;
    var msgs=[];
    var d = new Date();
    var lCustomQuery="SELECT * FROM users,vaccination_reminders WHERE "+
      "CASE WHEN users.actual_child_birth IS NOT NULL THEN current_date+vaccination_reminders.trigger_days_from_dob=date_format(users.actual_child_birth,'%Y%m%d') "+
      "ELSE current_date+vaccination_reminders.trigger_days_from_dob=date_format(users.expected_child_birth,'%Y%m%d') "+
      "END "+
    "AND users.id IN (SELECT users.id FROM users WHERE role = 'patient' and patient_type != 2 and is_deactive = FALSE and vaccination_reminders = TRUE and cell_phone IS NOT NULL);";
    
    console.log("vaccination reminders job called");
    this.models('vaccinationreminder').query(lCustomQuery,function(err,retrievedUsers){
      
      if(err){
        sails.log.debug("vaccination reminders search failed " + util.inspect(err));
        done();
      }else{
        var data=retrievedUsers;
        if(data && data.length>0){
          logJob(data.length);
          sendNotification(data);//send email and sms notifications  
        }else{
          logJob(0);
          done();
        }
        
      }
    });
    function sendNotification(pData){
      
      var settingsModel=self.models("setting");
      console.log(settingsModel);
      var fetchFields={smsPhoneNumber:1};
      settingsModel.find({},{fields: fetchFields}).paginate({page: 1}, {limit: 1})
      .exec(function(err,response){
        if(err){
          done(err);
        }else if (response && response.length>0){
          sendSms(response[0].smsPhoneNumber,pData);//create messages array
          if(msgs && msgs.length>0){
            _.each(msgs,function(msg,pIndex,msgs){//send messages
              var lastMessage= (pIndex==(msgs.length-1))?true:false;
              notify(msg,lastMessage);  
            }); 
          }else{
           done(); 
          }
        }
      });
    }
    function sendSms(pFromNumber,pUsers){
      
      _.each(pUsers,function(user,index,pUsers){
         msgs.push({
          model: 'twilio',
          body:"From="+ pFromNumber+"&To="+ user.cell_phone+"&Body="+ user.message_text
        });
      });
    }
    function notify(message,pLastMessage) {
      
      var Model = message.model ? self.models(message.model) : undefined;
      if(Model !== undefined && Model.request) {
        Promise.promisify(Model.request)('create', {}, {}, { body: message.body })
            .then(function(resultMessage) {
                console.log(message.model + ' responding with: ' + util.inspect(resultMessage));
                if(pLastMessage){
                  done();
                }
            })
            .catch(function(err) { 
              console.log('error ' + message.model + ': ' + util.inspect(err)); 
              done(err);
            });
      }
    }
    
    
    
    function logJob(pRecordsEffected){
      self.models("jobauditlogging").create({name:"vaccination reminders",created_at:new Date(),rows_effected:pRecordsEffected}).exec(function(err,result){
        if(err){
          console.log("failed to create job audit log");
        }else{
          console.log("audit log created for job:vaccination reminders");
        }
      });
    }

  },
  schedules: [ '0 14 * * *' ]
};