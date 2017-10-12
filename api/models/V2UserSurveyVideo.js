var extensions          = require('./custom/v2/userSurveyVideoCustom'),
    callbacks           = require('./custom/v2/userSurveyVideoCallbacks'),
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
  
  if(undefined != attributes['is_complete']) {
    newAttributes['isComplete'] = DataUtils.toBoolean(attributes['is_complete']);
  }
  
  if(undefined != attributes['sort_order']) {
    newAttributes['sortOrder'] = Number(attributes['sort_order']);
  }
  
  if(undefined != attributes['user_survey_id']) {
    newAttributes['userSurveyId'] = Number(attributes['user_survey_id']);
  }
  
  if(undefined != attributes['video_number']) {
    newAttributes['videoNumber'] = Number(attributes['video_number']);
  }
  
  if(undefined != attributes['video_position']) {
    newAttributes['videoPosition'] = Number(attributes['video_position']);
  }
  
  if(undefined != attributes['video_source_version']) {
    newAttributes['videoSourceVersion'] = attributes['video_source_version'];
  }
  
  if(undefined != attributes['video_type']) {
    newAttributes['videoType'] = attributes['video_type'];
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2UserSurveyVideo = module.exports = {
  migrate: 'safe',
  tableName: 'user_survey_videos',
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
      
    
  
    
      
        isComplete: {
          
          
          
          
          columnName: 'is_complete',
          type: 'boolean',
          
        },
      
    
  
    
      
        sortOrder: {
          
          
          
          
          columnName: 'sort_order',
          type: 'integer',
          
        },
      
    
  
    
      
        userSurveyId: {
          
          
            required: true,
          
          
          
          columnName: 'user_survey_id',
          type: 'integer',
          
        },
      
    
  
    
      
        videoNumber: {
          
          
            required: true,
          
          
          
          columnName: 'video_number',
          type: 'integer',
          
        },
      
    
  
    
      
        videoPosition: {
          
          
          
          
          columnName: 'video_position',
          type: 'float',
          
        },
      
    
  
    
      
        videoSourceVersion: {
          
          
          
          
          columnName: 'video_source_version',
          type: 'text',
          
        },
      
    
  
    
      
        videoType: {
          
          
          
          
          columnName: 'video_type',
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

    var scope = V2UserSurveyVideo.find().where();
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

    var scope = V2UserSurveyVideo.find().where(transformAttributesForExactMatch(attributes));
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

    return V2UserSurveyVideo.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2UserSurveyVideo.count(transformAttributesForExactMatch(attributes));

  }
  ,
    getVideosForUserSurveyIdScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurveyVideo);
    if(attributes['user_survey_id']) {
      criteria = criteria.and({ userSurveyId: Number(attributes['user_survey_id']) });
    } else {
      criteria = criteria.and({ userSurveyId: null });
    }
    criteria = criteria.orderBy('videoType ASC');
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
    getVideoByIdScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserSurveyVideo);
    if(attributes['video_id']) {
      criteria = criteria.and({ id: Number(attributes['video_id']) });
    } else {
      criteria = criteria.and({ id: null });
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

// Augment/override definition of V2UserSurveyVideo using customizations provided via custom code
if(extensions) {
  extend(V2UserSurveyVideo, 'V2UserSurveyVideo', extensions, 'customCode');
}

if (callbacks) {
  extend(V2UserSurveyVideo, 'V2UserSurveyVideo', callbacks, 'callbacks');
}
