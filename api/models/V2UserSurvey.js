var extensions          = require('./custom/v2/userSurveyCustom'),
    callbacks           = require('./custom/v2/userSurveyCallbacks'),
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
  
  if(undefined != attributes['completed_at']) {
    newAttributes['completedAt'] = attributes['completed_at'];
  }
  
  if(undefined != attributes['completition']) {
    newAttributes['completition'] = Number(attributes['completition']);
  }
  
  if(undefined != attributes['created_at']) {
    newAttributes['createdAt'] = new Date(attributes['created_at']);
  }
  
  if(undefined != attributes['currentuseranswers']) {
    newAttributes['currentuseranswers'] = JSON.parse(attributes['currentuseranswers']);
  }
  
  if(undefined != attributes['first_question']) {
    newAttributes['firstQuestion'] = JSON.parse(attributes['first_question']);
  }
  
  if(undefined != attributes['first_question_id']) {
    newAttributes['firstQuestionId'] = Number(attributes['first_question_id']);
  }
  
  if(undefined != attributes['first_reminder']) {
    newAttributes['firstReminder'] = DataUtils.toBoolean(attributes['first_reminder']);
  }
  
  if(undefined != attributes['is_complete']) {
    newAttributes['isComplete'] = DataUtils.toBoolean(attributes['is_complete']);
  }
  
  if(undefined != attributes['matched_videos']) {
    newAttributes['matchedVideos'] = JSON.parse(attributes['matched_videos']);
  }
  
  if(undefined != attributes['maternal_video_complete']) {
    newAttributes['maternalVideoComplete'] = DataUtils.toBoolean(attributes['maternal_video_complete']);
  }
  
  if(undefined != attributes['maternal_video_number']) {
    newAttributes['maternalVideoNumber'] = attributes['maternal_video_number'];
  }
  
  if(undefined != attributes['maternal_video_position']) {
    newAttributes['maternalVideoPosition'] = Number(attributes['maternal_video_position']);
  }
  
  if(undefined != attributes['pediatric_video_complete']) {
    newAttributes['pediatricVideoComplete'] = DataUtils.toBoolean(attributes['pediatric_video_complete']);
  }
  
  if(undefined != attributes['pediatric_video_number']) {
    newAttributes['pediatricVideoNumber'] = attributes['pediatric_video_number'];
  }
  
  if(undefined != attributes['pediatric_video_position']) {
    newAttributes['pediatricVideoPosition'] = Number(attributes['pediatric_video_position']);
  }
  
  if(undefined != attributes['question_count']) {
    newAttributes['questionCount'] = Number(attributes['question_count']);
  }
  
  if(undefined != attributes['second_reminder']) {
    newAttributes['secondReminder'] = DataUtils.toBoolean(attributes['second_reminder']);
  }
  
  if(undefined != attributes['survey_id']) {
    newAttributes['surveyId'] = Number(attributes['survey_id']);
  }
  
  if(undefined != attributes['user_id']) {
    newAttributes['userId'] = Number(attributes['user_id']);
  }
  
  if(undefined != attributes['video_source_version']) {
    newAttributes['videoSourceVersion'] = attributes['video_source_version'];
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2UserSurvey = module.exports = {
  migrate: 'safe',
  tableName: 'user_surveys',
  connection: [ adapter ],
  types: {
      
  },
  transientAttributes: [
    'completition',
'currentuseranswers',
'firstQuestion',
'matchedVideos'
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
      
    
  
    
      
        completedAt: {
          
          
          
          
          columnName: 'completed_at',
          type: 'text',
          
        },
      
    
  
    
      
        getCompletition:function () { return this.completition; },
      
    
  
    
      
        createdAt: {
          
          
          
          
          columnName: 'created_at',
          type: 'datetime',
          
        },
      
    
  
    
      
        getCurrentuseranswers:function () { return this.currentuseranswers; },
      
    
  
    
      
        getFirstQuestion:function () { return this.firstQuestion; },
      
    
  
    
      
        firstQuestionId: {
          
          
          
          
          columnName: 'first_question_id',
          type: 'integer',
          
        },
      
    
  
    
      
        firstReminder: {
          
          
          
          
          columnName: 'first_reminder',
          type: 'boolean',
          
        },
      
    
  
    
      
        isComplete: {
          
          
          
          
          columnName: 'is_complete',
          type: 'boolean',
          
        },
      
    
  
    
      
        getMatchedVideos:function () { return this.matchedVideos; },
      
    
  
    
      
        maternalVideoComplete: {
          
          
          
          
          columnName: 'maternal_video_complete',
          type: 'boolean',
          
        },
      
    
  
    
      
        maternalVideoNumber: {
          
          
          
          
          columnName: 'maternal_video_number',
          type: 'text',
          
        },
      
    
  
    
      
        maternalVideoPosition: {
          
          
          
          
          columnName: 'maternal_video_position',
          type: 'float',
          
        },
      
    
  
    
      
        pediatricVideoComplete: {
          
          
          
          
          columnName: 'pediatric_video_complete',
          type: 'boolean',
          
        },
      
    
  
    
      
        pediatricVideoNumber: {
          
          
          
          
          columnName: 'pediatric_video_number',
          type: 'text',
          
        },
      
    
  
    
      
        pediatricVideoPosition: {
          
          
          
          
          columnName: 'pediatric_video_position',
          type: 'float',
          
        },
      
    
  
    
      
        questionCount: {
          
          
          
          
          columnName: 'question_count',
          type: 'integer',
          
        },
      
    
  
    
      
        secondReminder: {
          
          
          
          
          columnName: 'second_reminder',
          type: 'boolean',
          
        },
      
    
  
    
      
        surveyId: {
          
          
            required: true,
          
          
          
          columnName: 'survey_id',
          type: 'integer',
          
        },
      
    
  
    
      
        userId: {
          
          
            required: true,
          
          
          
          columnName: 'user_id',
          type: 'integer',
          
        },
      
    
  
    
      
        videoSourceVersion: {
          
          
          
          
          columnName: 'video_source_version',
          type: 'text',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
        obj.completition = this.getCompletition();
      
    
      
    
      
        obj.currentuseranswers = this.getCurrentuseranswers();
      
    
      
        obj.firstQuestion = this.getFirstQuestion();
      
    
      
    
      
    
      
    
      
        obj.matchedVideos = this.getMatchedVideos();
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
    return obj;
  },

  
    survey: {
      model: 'V2Survey',
      
      columnName: 'survey_id'
      
    },
  
    user: {
      model: 'V2User',
      
      columnName: 'user_id'
      
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

    var scope = V2UserSurvey.find().where();
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

    var scope = V2UserSurvey.find().where(transformAttributesForExactMatch(attributes));
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

    return V2UserSurvey.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2UserSurvey.count(transformAttributesForExactMatch(attributes));

  }
  ,
    getPatientsSurveyScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurvey);
    if(userAttributes['id']) {
      criteria = criteria.and({ userId: userAttributes['id'] });
    } else {
      criteria = criteria.and({ userId: null });
    }
    criteria = criteria.orderBy('id ASC');
    if(offset) {
      criteria = criteria.offset(offset);
    }
    if(limit) {
      criteria = criteria.limit(limit);
    }
    sails.log.debug("Query scope was called with attributes " + util.inspect(attributes) + " and user attributes " + util.inspect(userAttributes));
    return criteria.query();
  }
  ,
    getfirstquestionScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurvey);
    if(attributes['usersurveyid']) {
      criteria = criteria.and({ id: Number(attributes['usersurveyid']) });
    } else {
      criteria = criteria.and({ id: null });
    }
    if(userAttributes['id']) {
      criteria = criteria.and({ userId: userAttributes['id'] });
    } else {
      criteria = criteria.and({ userId: null });
    }
    criteria = criteria.orderBy('id ASC');
    if(offset) {
      criteria = criteria.offset(offset);
    }
    if(limit) {
      criteria = criteria.limit(limit);
    }
    sails.log.debug("Query scope was called with attributes " + util.inspect(attributes) + " and user attributes " + util.inspect(userAttributes));
    return criteria.query();
  }
  ,
    compeleteSurveyScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurvey);
    if(userAttributes['id'] && userAttributes['id'] != '') {
      criteria = criteria.and({ userId: userAttributes['id'] }); 
    }
    if(attributes['usersurveyid'] && attributes['usersurveyid'] != '') {
      criteria = criteria.and({ id: Number(attributes['usersurveyid']) }); 
    }
    criteria = criteria.orderBy('id ASC');
    if(offset) {
      criteria = criteria.offset(offset);
    }
    if(limit) {
      criteria = criteria.limit(limit);
    }
    sails.log.debug("Query scope was called with attributes " + util.inspect(attributes) + " and user attributes " + util.inspect(userAttributes));
    return criteria.query();
  }
  ,
    getVideoSurveyScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurvey);
    if(userAttributes['user_id'] && userAttributes['user_id'] != '') {
      criteria = criteria.and({ userId: userAttributes['user_id'] }); 
    }
    if(attributes['user_survey_id'] && attributes['user_survey_id'] != '') {
      criteria = criteria.and({ id: Number(attributes['user_survey_id']) }); 
    }
    criteria = criteria.orderBy('id ASC');
    if(offset) {
      criteria = criteria.offset(offset);
    }
    if(limit) {
      criteria = criteria.limit(limit);
    }
    sails.log.debug("Query scope was called with attributes " + util.inspect(attributes) + " and user attributes " + util.inspect(userAttributes));
    return criteria.query();
  }
  ,
    checkSurveyExistsScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurvey);
    if(attributes['survey_id']) {
      criteria = criteria.and({ surveyId: Number(attributes['survey_id']) });
    } else {
      criteria = criteria.and({ surveyId: null });
    }
    criteria = criteria.count('id');
    sails.log.debug("Query scope was called with attributes " + util.inspect(attributes) + " and user attributes " + util.inspect(userAttributes));
    return criteria.query();
  }
  ,
    checkSurveyCountScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurvey);
    if(attributes['survey_id']) {
      criteria = criteria.and({ surveyId: Number(attributes['survey_id']) });
    } else {
      criteria = criteria.and({ surveyId: null });
    }
    criteria = criteria.orderBy('id ASC');
    if(offset) {
      criteria = criteria.offset(offset);
    }
    if(limit) {
      criteria = criteria.limit(limit);
    }
    sails.log.debug("Query scope was called with attributes " + util.inspect(attributes) + " and user attributes " + util.inspect(userAttributes));
    return criteria.query();
  }
  ,
    generateCsvResultsScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurvey);
    if(attributes['clinic_name']) {
      criteria = criteria.and({ videoSourceVersion: attributes['clinic_name'] });
    } else {
      criteria = criteria.and({ videoSourceVersion: null });
    }
    if(userAttributes['id']) {
      criteria = criteria.and({ userId: userAttributes['id'] });
    } else {
      criteria = criteria.and({ userId: null });
    }
    criteria = criteria.orderBy('createdAt ASC');
    if(offset) {
      criteria = criteria.offset(offset);
    }
    if(limit) {
      criteria = criteria.limit(limit);
    }
    sails.log.debug("Query scope was called with attributes " + util.inspect(attributes) + " and user attributes " + util.inspect(userAttributes));
    return criteria.query();
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

// Augment/override definition of V2UserSurvey using customizations provided via custom code
if(extensions) {
  extend(V2UserSurvey, 'V2UserSurvey', extensions, 'customCode');
}

if (callbacks) {
  extend(V2UserSurvey, 'V2UserSurvey', callbacks, 'callbacks');
}
