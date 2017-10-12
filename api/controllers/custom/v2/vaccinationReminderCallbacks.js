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

  beforeSortedByTriggerDaysScope: function(req, done) {
    
done();

  },

  afterSortedByTriggerDaysScope: function(req, res, done) {
    
done();

  },

  beforeSendVaccinationRemindersScope: function(req, done) {
    
var util=require("util");
    var Promise = require('bluebird');
    var self=this;
    var msgs=[];
    var d = new Date();
    var lCustomQuery="SELECT * FROM users,vaccination_reminders WHERE "+
      "CASE WHEN users.actual_child_birth IS NOT NULL THEN current_date+vaccination_reminders.trigger_days_from_dob=users.actual_child_birth "+
      "ELSE current_date+vaccination_reminders.trigger_days_from_dob=users.expected_child_birth "+
      "END "+
    "AND users.id IN (SELECT users.id FROM users WHERE role = 'patient' and patient_type = 1 and is_deactive = FALSE and vaccination_reminders = TRUE and cell_phone IS NOT NULL);"
    this.models('vaccinationReminder').query(lCustomQuery,function(err,retrievedUsers){
      
      if(err){
        sails.log.debug("vaccination reminder failed " + util.inspect(err));
        req.res.send(401,"vaccination reminder failed");
      }else{
        var data=retrievedUsers.rows;
        sendSurveyNotification(data);//true means send email false means send sms
      }
      return false;
    });
    function sendSurveyNotification(pData){
      var settingsModel=self.models("setting");
      var fetchFields={smsPhoneNumber:1};
      settingsModel.find({},{fields: fetchFields}).paginate({page: 1}, {limit: 1})
      .exec(function(err,response){
        if(err){
          req.res.json(401,"settings not available");
          return false;
        }else if (response && response.length>0){
          sendSurveySms(response[0].smsPhoneNumber,pData);//create messages array
           _.each(msgs,function(msg,index,msgs){//send messages
              notify(msg);
              if(index===(msgs.length-1)){
                done();
              }
            });
        }
      });
    }
    function sendSurveySms(pFromNumber,pUsers){
      _.each(pUsers,function(user,index,pUsers){
         msgs.push({
          model: 'twilio',
          body:"From="+ pFromNumber+"&To="+ user.cell_phone+"&Body="+ user.message_text
        });
      });
    }
    function notify(message) {
      var Model = message.model ? self.models(message.model) : undefined;
      if(Model !== undefined && Model.request) {
        Promise.promisify(Model.request)('create', {}, {}, { body: message.body })
            .then(function(resultMessage) {
                sails.log.debug(message.model + ' responding with: ' + util.inspect(resultMessage));
                
            })
            .catch(function(err) { sails.log.debug('error ' + message.model + ': ' + util.inspect(err)); });
      }
    }

  },

  afterSendVaccinationRemindersScope: function(req, res, done) {
    
done();

  },

};