var extensions          = require('./custom/v2/surveyQuestionCustom'),
    callbacks           = require('./custom/v2/surveyQuestionCallbacks'),
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
  
  if(undefined != attributes['did_you_know_text']) {
    newAttributes['didYouKnowText'] = attributes['did_you_know_text'];
  }
  
  if(undefined != attributes['label']) {
    newAttributes['label'] = attributes['label'];
  }
  
  if(undefined != attributes['question_category_id']) {
    newAttributes['questionCategoryId'] = Number(attributes['question_category_id']);
  }
  
  if(undefined != attributes['question_code_id']) {
    newAttributes['questionCodeId'] = Number(attributes['question_code_id']);
  }
  
  if(undefined != attributes['question_group']) {
    newAttributes['questionGroup'] = attributes['question_group'];
  }
  
  if(undefined != attributes['question_text']) {
    newAttributes['questionText'] = attributes['question_text'];
  }
  
  if(undefined != attributes['question_type_id']) {
    newAttributes['questionTypeId'] = Number(attributes['question_type_id']);
  }
  
  if(undefined != attributes['required_answer']) {
    newAttributes['requiredAnswer'] = DataUtils.toBoolean(attributes['required_answer']);
  }
  
  if(undefined != attributes['sort_order']) {
    newAttributes['sortOrder'] = Number(attributes['sort_order']);
  }
  
  if(undefined != attributes['survey_id']) {
    newAttributes['surveyId'] = Number(attributes['survey_id']);
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2SurveyQuestion = module.exports = {
  migrate: 'safe',
  tableName: 'survey_questions',
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
      
    
  
    
      
        didYouKnowText: {
          
          
          
          
          columnName: 'did_you_know_text',
          type: 'text',
          
        },
      
    
  
    
      
        label: {
          
          
            required: true,
          
          
          
          columnName: 'label',
          type: 'text',
          
        },
      
    
  
    
      
        questionCategoryId: {
          
          
          
          
          columnName: 'question_category_id',
          type: 'integer',
          
        },
      
    
  
    
      
        questionCodeId: {
          
          
          
          
          columnName: 'question_code_id',
          type: 'integer',
          
        },
      
    
  
    
      
        questionGroup: {
          
          
            required: true,
          
          
          
          columnName: 'question_group',
          type: 'text',
          
        },
      
    
  
    
      
        questionText: {
          
          
          
          
          columnName: 'question_text',
          type: 'text',
          
        },
      
    
  
    
      
        questionTypeId: {
          
          
            required: true,
          
          
          
          columnName: 'question_type_id',
          type: 'integer',
          
        },
      
    
  
    
      
        requiredAnswer: {
          
          
          
          
          columnName: 'required_answer',
          type: 'boolean',
          
        },
      
    
  
    
      
        sortOrder: {
          
          
            required: true,
          
          
          
          columnName: 'sort_order',
          type: 'integer',
          
        },
      
    
  
    
      
        surveyId: {
          
          
            required: true,
          
          
          
          columnName: 'survey_id',
          type: 'integer',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
    return obj;
  },

  
    questionCategory: {
      model: 'V2QuestionCategory',
      
      columnName: 'question_category_id'
      
    },
  
    questionCode: {
      model: 'V2QuestionCode',
      
      columnName: 'question_code_id'
      
    },
  
    questionType: {
      model: 'V2QuestionType',
      
      columnName: 'question_type_id'
      
    },
  
    survey: {
      model: 'V2Survey',
      
      columnName: 'survey_id'
      
    },
  

  
    surveyAnswers: {
      collection: 'V2SurveyAnswer',
      via: 'surveyQuestion'
    },
  
    userSurveyAnswers: {
      collection: 'V2UserSurveyAnswer',
      via: 'surveyQuestion'
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

    var scope = V2SurveyQuestion.find().where();
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

    var scope = V2SurveyQuestion.find().where(transformAttributesForExactMatch(attributes));
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

    return V2SurveyQuestion.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2SurveyQuestion.count(transformAttributesForExactMatch(attributes));

  }
  ,
    getQuestionBySurveyScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2SurveyQuestion);
    if(attributes['survey_id'] && attributes['survey_id'] != '') {
      criteria = criteria.and({ surveyId: Number(attributes['survey_id']) }); 
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
    deleteSurveyQuestionScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2SurveyQuestion);
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
  }
  ,
    getQuestionByQuestionCodeScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2SurveyQuestion);
    if(attributes['question_code_id']) {
      criteria = criteria.and({ questionCodeId: Number(attributes['question_code_id']) });
    } else {
      criteria = criteria.and({ questionCodeId: null });
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

// Augment/override definition of V2SurveyQuestion using customizations provided via custom code
if(extensions) {
  extend(V2SurveyQuestion, 'V2SurveyQuestion', extensions, 'customCode');
}

if (callbacks) {
  extend(V2SurveyQuestion, 'V2SurveyQuestion', callbacks, 'callbacks');
}
