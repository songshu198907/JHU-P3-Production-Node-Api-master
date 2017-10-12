var extensions          = require('./custom/v2/settingCustom'),
    callbacks           = require('./custom/v2/settingCallbacks'),
    Promise             = require('bluebird'),
    Criteria            = require('../services/query/Criteria'),
    util                = require('util'),
    _                   = require('lodash'),
    customCodeContext = require('../libs/customCodeContext');


var transformAttributesForExactMatch = function(attributes) {
  var newAttributes = {};
  
  if(undefined != attributes['id']) {
    newAttributes['id'] = Number(attributes['id']);
  }
  
  if(undefined != attributes['aws_healthcare_content_bucket_name']) {
    newAttributes['awsHealthcareContentBucketName'] = attributes['aws_healthcare_content_bucket_name'];
  }
  
  if(undefined != attributes['aws_video_bucket_name']) {
    newAttributes['awsVideoBucketName'] = attributes['aws_video_bucket_name'];
  }
  
  if(undefined != attributes['contact_user_registration_email_text']) {
    newAttributes['contactUserRegistrationEmailText'] = attributes['contact_user_registration_email_text'];
  }
  
  if(undefined != attributes['contact_user_registration_subject']) {
    newAttributes['contactUserRegistrationSubject'] = attributes['contact_user_registration_subject'];
  }
  
  if(undefined != attributes['forgot_password_email_text']) {
    newAttributes['forgotPasswordEmailText'] = attributes['forgot_password_email_text'];
  }
  
  if(undefined != attributes['forgot_password_subject']) {
    newAttributes['forgotPasswordSubject'] = attributes['forgot_password_subject'];
  }
  
  if(undefined != attributes['from_email']) {
    newAttributes['fromEmail'] = attributes['from_email'];
  }
  
  if(undefined != attributes['sms_phone_number']) {
    newAttributes['smsPhoneNumber'] = attributes['sms_phone_number'];
  }
  
  if(undefined != attributes['survey_completion_email_subject']) {
    newAttributes['surveyCompletionEmailSubject'] = attributes['survey_completion_email_subject'];
  }
  
  if(undefined != attributes['survey_completion_email_text']) {
    newAttributes['surveyCompletionEmailText'] = attributes['survey_completion_email_text'];
  }
  
  if(undefined != attributes['survey_notification_email_text']) {
    newAttributes['surveyNotificationEmailText'] = attributes['survey_notification_email_text'];
  }
  
  if(undefined != attributes['survey_notification_final_sms_text']) {
    newAttributes['surveyNotificationFinalSmsText'] = attributes['survey_notification_final_sms_text'];
  }
  
  if(undefined != attributes['survey_notification_first_reminder_email_text']) {
    newAttributes['surveyNotificationFirstReminderEmailText'] = attributes['survey_notification_first_reminder_email_text'];
  }
  
  if(undefined != attributes['survey_notification_first_reminder_subject']) {
    newAttributes['surveyNotificationFirstReminderSubject'] = attributes['survey_notification_first_reminder_subject'];
  }
  
  if(undefined != attributes['survey_notification_subject']) {
    newAttributes['surveyNotificationSubject'] = attributes['survey_notification_subject'];
  }
  
  if(undefined != attributes['terms_and_conditions']) {
    newAttributes['termsAndConditions'] = attributes['terms_and_conditions'];
  }

  if(undefined != attributes['take_first_survey_text']) {
    newAttributes['takeFirstSurveyText'] = attributes['take_first_survey_text'];
  }

  if(undefined != attributes['after_first_survey_complete_text']) {
    newAttributes['afterFirstSurveyCompleteText'] = attributes['after_first_survey_complete_text'];
  }

  if(undefined != attributes['post_video_thanking_text']) {
    newAttributes['postVideoThankingText'] = attributes['post_video_thanking_text'];
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2Setting = module.exports = {
  migrate: 'safe',
  tableName: 'settings',
  connection: [ adapter ],
  types: {
      
  },
  transientAttributes: [
    
  ],
  fileAttributes: [
    
  ],
  attributes: {
  
    
      
        id: {
          
            primaryKey: true,
          
          
          
            autoIncrement: true,
          
          
          columnName: 'id',
          type: 'integer',
          
        },
      
    
  
    
      
        awsHealthcareContentBucketName: {
          
          
          
          
          columnName: 'aws_healthcare_content_bucket_name',
          type: 'text',
          
        },
      
    
  
    
      
        awsVideoBucketName: {
          
          
          
          
          columnName: 'aws_video_bucket_name',
          type: 'text',
          
        },
      
    
  
    
      
        contactUserRegistrationEmailText: {
          
          
          
          
          columnName: 'contact_user_registration_email_text',
          type: 'text',
          
        },
      
    
  
    
      
        contactUserRegistrationSubject: {
          
          
          
          
          columnName: 'contact_user_registration_subject',
          type: 'text',
          
        },
      
    
  
    
      
        forgotPasswordEmailText: {
          
          
          
          
          columnName: 'forgot_password_email_text',
          type: 'text',
          
        },
      
    
  
    
      
        forgotPasswordSubject: {
          
          
          
          
          columnName: 'forgot_password_subject',
          type: 'text',
          
        },
      
    
  
    
      
        fromEmail: {
          
          
          
          
          columnName: 'from_email',
          type: 'text',
          
        },
      
    
  
    
      
        smsPhoneNumber: {
          
          
          
          
          columnName: 'sms_phone_number',
          type: 'text',
          
        },
      
    
  
    
      
        surveyCompletionEmailSubject: {
          
          
          
          
          columnName: 'survey_completion_email_subject',
          type: 'text',
          
        },
      
    
  
    
      
        surveyCompletionEmailText: {
          
          
          
          
          columnName: 'survey_completion_email_text',
          type: 'text',
          
        },
      
    
  
    
      
        surveyNotificationEmailText: {
          
          
          
          
          columnName: 'survey_notification_email_text',
          type: 'text',
          
        },
      
    
  
    
      
        surveyNotificationFinalSmsText: {
          
          
          
          
          columnName: 'survey_notification_final_sms_text',
          type: 'text',
          
        },
      
    
  
    
      
        surveyNotificationFirstReminderEmailText: {
          
          
          
          
          columnName: 'survey_notification_first_reminder_email_text',
          type: 'text',
          
        },
      
    
  
    
      
        surveyNotificationFirstReminderSubject: {
          
          
          
          
          columnName: 'survey_notification_first_reminder_subject',
          type: 'text',
          
        },
      
    
  
    
      
        surveyNotificationSubject: {
          
          
          
          
          columnName: 'survey_notification_subject',
          type: 'text',
          
        },
      
    
        takeFirstSurveyText: {
          
          
          
          
          columnName: 'take_first_survey_text',
          type: 'text',
          
        },
        afterFirstSurveyCompleteText: {
          
          
          
          
          columnName: 'after_first_survey_complete_text',
          type: 'text',
          
        },
        postVideoThankingText: {
          
          
          
          
          columnName: 'post_video_thanking_text',
          type: 'text',
          
        },
    
      
        termsAndConditions: {
          
          
          
          
          columnName: 'terms_and_conditions',
          type: 'text',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
    return obj;
  },

  

  

  


  
  },
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
    executeCallback: function() {
    var action = [].shift.call(arguments);
    var fn = this.callbacks[action];
    if (fn && _.isFunction(fn)) return fn.apply(null, arguments);
    return new Promise(function(resolve) { resolve(); });
  },
    // Scopes for data access
      allScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var scope = V2Setting.find().where();
    if(limit) {
      scope = scope.limit(limit);
    }
    if(offset) {
      scope = scope.skip(offset);
    }
    return scope;

  }
  ,
    exactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var scope = V2Setting.find().where(transformAttributesForExactMatch(attributes));
    if(limit) {
      scope = scope.limit(limit);
    }
    if(offset) {
      scope = scope.skip(offset);
    }
    return scope;

  }
  ,
    countScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2Setting.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2Setting.count(transformAttributesForExactMatch(attributes));

  },

};

function extend(baseObject, baseName, extensionObject, subObject) {
  // If no subObject is supplied, extend the baseObject.
  var sub = baseObject;
  if (subObject) sub = baseObject[subObject] = {};

  _.keys(extensionObject).forEach(function(key) {

    if (_.isFunction(extensionObject[key])) {
      var _this = customCodeContext.createContext(2);

      var wrapper = new WrapperService(extensionObject[key], _this, sails.log.error);

      // Generic customCode does not return a promise. Model/Controller callbacks do.
      if (subObject === 'customCode') {
        sub[key] = wrapper.invoke.bind(wrapper);
      } else {
        sub[key] = wrapper.invokeAsPromise.bind(wrapper);
      }
    } else {
      sub[key] = extensionObject[key];
    }
  });
}

// Augment/override definition of V2Setting using customizations provided via custom code
if(extensions) {
  extend(V2Setting, 'V2Setting', extensions, 'customCode');
}

if (callbacks) {
  extend(V2Setting, 'V2Setting', callbacks, 'callbacks');
}
