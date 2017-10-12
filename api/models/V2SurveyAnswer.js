var extensions          = require('./custom/v2/surveyAnswerCustom'),
    callbacks           = require('./custom/v2/surveyAnswerCallbacks'),
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
  
  if(undefined != attributes['allow_free_form']) {
    newAttributes['allowFreeForm'] = DataUtils.toBoolean(attributes['allow_free_form']);
  }
  
  if(undefined != attributes['free_form_data_type']) {
    newAttributes['freeFormDataType'] = attributes['free_form_data_type'];
  }
  
  if(undefined != attributes['label']) {
    newAttributes['label'] = attributes['label'];
  }
  
  if(undefined != attributes['sort_order']) {
    newAttributes['sortOrder'] = Number(attributes['sort_order']);
  }
  
  if(undefined != attributes['survey_question_id']) {
    newAttributes['surveyQuestionId'] = Number(attributes['survey_question_id']);
  }
  
  if(undefined != attributes['video_target_number']) {
    newAttributes['videoTargetNumber'] = Number(attributes['video_target_number']);
  }
  
  if(undefined != attributes['weight']) {
    newAttributes['weight'] = Number(attributes['weight']);
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2SurveyAnswer = module.exports = {
  migrate: 'safe',
  tableName: 'survey_answers',
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
      
    
  
    
      
        allowFreeForm: {
          
          
          
          
          columnName: 'allow_free_form',
          type: 'boolean',
          
        },
      
    
  
    
      
        freeFormDataType: {
          
          
          
          
          columnName: 'free_form_data_type',
          type: 'text',
          
        },
      
    
  
    
      
        label: {
          
          
            required: true,
          
          
          
          columnName: 'label',
          type: 'text',
          
        },
      
    
  
    
      
        sortOrder: {
          
          
            required: true,
          
          
          
          columnName: 'sort_order',
          type: 'integer',
          
        },
      
    
  
    
      
        surveyQuestionId: {
          
          
            required: true,
          
          
          
          columnName: 'survey_question_id',
          type: 'integer',
          
        },
      
    
  
    
      
        videoTargetNumber: {
          
          
          
          
          columnName: 'video_target_number',
          type: 'integer',
          
        },
      
    
  
    
      
        weight: {
          
          
          
          
          columnName: 'weight',
          type: 'integer',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
    return obj;
  },

  
    surveyQuestion: {
      model: 'V2SurveyQuestion',
      
      columnName: 'survey_question_id'
      
    },
  

  
    userSurveyAnswers: {
      collection: 'V2UserSurveyAnswer',
      via: 'surveyAnswer'
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

    var scope = V2SurveyAnswer.find().where();
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

    var scope = V2SurveyAnswer.find().where(transformAttributesForExactMatch(attributes));
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

    return V2SurveyAnswer.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2SurveyAnswer.count(transformAttributesForExactMatch(attributes));

  }
  ,
    getAnswersByQuestionScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2SurveyAnswer);
    if(attributes['survey_question_id'] && attributes['survey_question_id'] != '') {
      criteria = criteria.and({ surveyQuestionId: Number(attributes['survey_question_id']) }); 
    }
    criteria = criteria.orderBy('sortOrder ASC');
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
    deleteQuestionAnswerScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2SurveyAnswer);
    if(attributes['id']) {
      criteria = criteria.and({ id: Number(attributes['id']) });
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

// Augment/override definition of V2SurveyAnswer using customizations provided via custom code
if(extensions) {
  extend(V2SurveyAnswer, 'V2SurveyAnswer', extensions, 'customCode');
}

if (callbacks) {
  extend(V2SurveyAnswer, 'V2SurveyAnswer', callbacks, 'callbacks');
}
