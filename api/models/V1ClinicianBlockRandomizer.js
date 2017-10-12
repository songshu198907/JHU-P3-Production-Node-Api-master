var extensions          = require('./custom/v1/clinicianBlockRandomizerCustom'),
    callbacks           = require('./custom/v1/clinicianBlockRandomizerCallbacks'),
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
  
  if(undefined != attributes['clinician_code_id']) {
    newAttributes['clinicianCodeId'] = Number(attributes['clinician_code_id']);
  }
  
  if(undefined != attributes['intervention_group']) {
    newAttributes['interventionGroup'] = attributes['intervention_group'];
  }
  
  if(undefined != attributes['patient_type']) {
    newAttributes['patientType'] = attributes['patient_type'];
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V1ClinicianBlockRandomizer = module.exports = {
  migrate: 'safe',
  tableName: 'clinic_block_randomizer',
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
          
          
          
          
          columnName: 'id',
          type: 'integer',
          
        },
      
    
  
    
      
        clinicianCodeId: {
          
          
            required: true,
          
          
          
          columnName: 'clinician_code_id',
          type: 'integer',
          
        },
      
    
  
    
      
        interventionGroup: {
          
          
          
          
          columnName: 'intervention_group',
          type: 'text',
          
        },
      
    
  
    
      
        patientType: {
          
          
            required: true,
          
          
          
          columnName: 'patient_type',
          type: 'text',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
    
    return obj;
  },

  
    clinicianCode: {
      model: 'V1ClinicianCode',
      
      columnName: 'clinician_code_id'
      
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

    var scope = V1ClinicianBlockRandomizer.find().where();
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

    var scope = V1ClinicianBlockRandomizer.find().where(transformAttributesForExactMatch(attributes));
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

    return V1ClinicianBlockRandomizer.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V1ClinicianBlockRandomizer.count(transformAttributesForExactMatch(attributes));

  }
  ,
    sortedByClinicIdScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1ClinicianBlockRandomizer);
    criteria = criteria.orderBy('clinicianCodeId ASC');
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
    filterByClinicIdScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1ClinicianBlockRandomizer);
    if(attributes['clinician_code_id'] && attributes['clinician_code_id'] != '') {
      criteria = criteria.and({ clinicianCodeId: Number(attributes['clinician_code_id']) }); 
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

// Augment/override definition of V1ClinicianBlockRandomizer using customizations provided via custom code
if(extensions) {
  extend(V1ClinicianBlockRandomizer, 'V1ClinicianBlockRandomizer', extensions, 'customCode');
}

if (callbacks) {
  extend(V1ClinicianBlockRandomizer, 'V1ClinicianBlockRandomizer', callbacks, 'callbacks');
}
