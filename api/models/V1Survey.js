var extensions          = require('./custom/v1/surveyCustom'),
    callbacks           = require('./custom/v1/surveyCallbacks'),
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
  
  if(undefined != attributes['intervention_group']) {
    newAttributes['interventionGroup'] = attributes['intervention_group'];
  }
  
  if(undefined != attributes['is_active']) {
    newAttributes['isActive'] = DataUtils.toBoolean(attributes['is_active']);
  }
  
  if(undefined != attributes['name']) {
    newAttributes['name'] = attributes['name'];
  }
  
  if(undefined != attributes['patient_type']) {
    newAttributes['patientType'] = Number(attributes['patient_type']);
  }
  
  if(undefined != attributes['survey_type']) {
    newAttributes['surveyType'] = attributes['survey_type'];
  }
  
  if(undefined != attributes['total_questions']) {
    newAttributes['totalQuestions'] = Number(attributes['total_questions']);
  }
  
  if(undefined != attributes['version']) {
    newAttributes['version'] = Number(attributes['version']);
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V1Survey = module.exports = {
  migrate: 'safe',
  tableName: 'surveys',
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
      
    
  
    
      
        interventionGroup: {
          
          
          
          
          columnName: 'intervention_group',
          type: 'text',
          
        },
      
    
  
    
      
        isActive: {
          
          
          
          
          columnName: 'is_active',
          type: 'boolean',
          
        },
      
    
  
    
      
        name: {
          
          
            required: true,
          
          
          
          columnName: 'name',
          type: 'text',
          
        },
      
    
  
    
      
        patientType: {
          
          
          
          
          columnName: 'patient_type',
          type: 'integer',
          
        },
      
    
  
    
      
        surveyType: {
          
          
          
          
          columnName: 'survey_type',
          type: 'text',
          
        },
      
    
  
    
      
        totalQuestions: {
          
          
            required: true,
          
          
          
          columnName: 'total_questions',
          type: 'integer',
          
        },
      
    
  
    
      
        version: {
          
          
            required: true,
          
          
          
          columnName: 'version',
          type: 'integer',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
    return obj;
  },

  

  
    surveyQuestions: {
      collection: 'V1SurveyQuestion',
      via: 'survey'
    },
  
    userSurveys: {
      collection: 'V1UserSurvey',
      via: 'survey'
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

    var scope = V1Survey.find().where();
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

    var scope = V1Survey.find().where(transformAttributesForExactMatch(attributes));
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

    return V1Survey.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V1Survey.count(transformAttributesForExactMatch(attributes));

  }
  ,
    createCopyScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1Survey);
    if(attributes['survey_id'] && attributes['survey_id'] != '') {
      criteria = criteria.and({ id: Number(attributes['survey_id']) }); 
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
    activeSurveysByTypePatientScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1Survey);
    if(attributes['survey_type']) {
      criteria = criteria.and({ surveyType: attributes['survey_type'] });
    } else {
      criteria = criteria.and({ surveyType: null });
    }
    if(attributes['patient_type']) {
      criteria = criteria.and({ patientType: Number(attributes['patient_type']) });
    } else {
      criteria = criteria.and({ patientType: null });
    }
    criteria = criteria.and({ isActive: 1 });
    if(attributes['id']) {
      criteria = criteria.and({ id: { '!': Number(attributes['id']) } });
    } else {
      criteria = criteria.and({ id: { '!': null } });
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
    getSortedSurveysScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1Survey);
    criteria = criteria.orderBy('surveyType ASC');
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
    deleteSurveyScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1Survey);
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
    generateCsvResultsScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1Survey);
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

// Augment/override definition of V1Survey using customizations provided via custom code
if(extensions) {
  extend(V1Survey, 'V1Survey', extensions, 'customCode');
}

if (callbacks) {
  extend(V1Survey, 'V1Survey', callbacks, 'callbacks');
}
