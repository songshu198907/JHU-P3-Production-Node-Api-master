var extensions          = require('./custom/v1/userSurveyAnswerCustom'),
    callbacks           = require('./custom/v1/userSurveyAnswerCallbacks'),
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
  
  if(undefined != attributes['applied_skip_logic_id']) {
    newAttributes['appliedSkipLogicId'] = Number(attributes['applied_skip_logic_id']);
  }
  
  if(undefined != attributes['free_form_response']) {
    newAttributes['freeFormResponse'] = attributes['free_form_response'];
  }
  
  if(undefined != attributes['nextquestion']) {
    newAttributes['nextquestion'] = JSON.parse(attributes['nextquestion']);
  }
  
  if(undefined != attributes['previousquestion']) {
    newAttributes['previousquestion'] = JSON.parse(attributes['previousquestion']);
  }
  
  if(undefined != attributes['question_code_id']) {
    newAttributes['questionCodeId'] = Number(attributes['question_code_id']);
  }
  
  if(undefined != attributes['question_group']) {
    newAttributes['questionGroup'] = attributes['question_group'];
  }
  
  if(undefined != attributes['question_order']) {
    newAttributes['questionOrder'] = Number(attributes['question_order']);
  }
  
  if(undefined != attributes['skipped']) {
    newAttributes['skipped'] = DataUtils.toBoolean(attributes['skipped']);
  }
  
  if(undefined != attributes['survey_answer_id']) {
    newAttributes['surveyAnswerId'] = Number(attributes['survey_answer_id']);
  }
  
  if(undefined != attributes['survey_question_id']) {
    newAttributes['surveyQuestionId'] = Number(attributes['survey_question_id']);
  }
  
  if(undefined != attributes['user_survey_id']) {
    newAttributes['userSurveyId'] = Number(attributes['user_survey_id']);
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V1UserSurveyAnswer = module.exports = {
  migrate: 'safe',
  tableName: 'user_survey_answers',
  connection: [ adapter ],
  types: {
      
  },
  transientAttributes: [
    'nextquestion',
'previousquestion',
'questionGroup'
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
      
    
  
    
      
        appliedSkipLogicId: {
          
          
          
          
          columnName: 'applied_skip_logic_id',
          type: 'integer',
          
        },
      
    
  
    
      
        freeFormResponse: {
          
          
          
          
          columnName: 'free_form_response',
          type: 'text',
          
        },
      
    
  
    
      
        getNextquestion:function () { return this.nextquestion; },
      
    
  
    
      
        getPreviousquestion:function () { return this.previousquestion; },
      
    
  
    
      
        questionCodeId: {
          
          
          
          
          columnName: 'question_code_id',
          type: 'integer',
          
        },
      
    
  
    
      
        getQuestionGroup:function () { return this.questionGroup; },
      
    
  
    
      
        questionOrder: {
          
          
          
          
          columnName: 'question_order',
          type: 'integer',
          
        },
      
    
  
    
      
        skipped: {
          
          
          
          
          columnName: 'skipped',
          type: 'boolean',
          
        },
      
    
  
    
      
        surveyAnswerId: {
          
          
          
          
          columnName: 'survey_answer_id',
          type: 'integer',
          
        },
      
    
  
    
      
        surveyQuestionId: {
          
          
            required: true,
          
          
          
          columnName: 'survey_question_id',
          type: 'integer',
          
        },
      
    
  
    
      
        userSurveyId: {
          
          
            required: true,
          
          
          
          columnName: 'user_survey_id',
          type: 'integer',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
        obj.nextquestion = this.getNextquestion();
      
    
      
        obj.previousquestion = this.getPreviousquestion();
      
    
      
    
      
        obj.questionGroup = this.getQuestionGroup();
      
    
      
    
      
    
      
    
      
    
      
    
    return obj;
  },

  
    questionCode: {
      model: 'V1QuestionCode',
      
      columnName: 'question_code_id'
      
    },
  
    surveyAnswer: {
      model: 'V1SurveyAnswer',
      
      columnName: 'survey_answer_id'
      
    },
  
    surveyQuestion: {
      model: 'V1SurveyQuestion',
      
      columnName: 'survey_question_id'
      
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

    var scope = V1UserSurveyAnswer.find().where();
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

    var scope = V1UserSurveyAnswer.find().where(transformAttributesForExactMatch(attributes));
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

    return V1UserSurveyAnswer.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V1UserSurveyAnswer.count(transformAttributesForExactMatch(attributes));

  }
  ,
    previousquestionScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1UserSurveyAnswer);
    if(attributes['currentquestionid']) {
      criteria = criteria.and({ id: Number(attributes['currentquestionid']) });
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
      var _this = customCodeContext.createContext(1);

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

// Augment/override definition of V1UserSurveyAnswer using customizations provided via custom code
if(extensions) {
  extend(V1UserSurveyAnswer, 'V1UserSurveyAnswer', extensions, 'customCode');
}

if (callbacks) {
  extend(V1UserSurveyAnswer, 'V1UserSurveyAnswer', callbacks, 'callbacks');
}
