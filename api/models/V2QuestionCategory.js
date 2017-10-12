var extensions          = require('./custom/v2/questionCategoryCustom'),
    callbacks           = require('./custom/v2/questionCategoryCallbacks'),
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
  
  if(undefined != attributes['name']) {
    newAttributes['name'] = attributes['name'];
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2QuestionCategory = module.exports = {
  migrate: 'safe',
  tableName: 'question_categories',
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
      
    
  
    
      
        name: {
          
          
            required: true,
          
          
          
          columnName: 'name',
          type: 'text',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
    return obj;
  },

  

  
    surveyQuestions: {
      collection: 'V2SurveyQuestion',
      via: 'questionCategory'
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

    var scope = V2QuestionCategory.find().where();
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

    var scope = V2QuestionCategory.find().where(transformAttributesForExactMatch(attributes));
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

    return V2QuestionCategory.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2QuestionCategory.count(transformAttributesForExactMatch(attributes));

  }
  ,
    sortedByNameScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2QuestionCategory);
    criteria = criteria.orderBy('name ASC');
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

// Augment/override definition of V2QuestionCategory using customizations provided via custom code
if(extensions) {
  extend(V2QuestionCategory, 'V2QuestionCategory', extensions, 'customCode');
}

if (callbacks) {
  extend(V2QuestionCategory, 'V2QuestionCategory', callbacks, 'callbacks');
}
