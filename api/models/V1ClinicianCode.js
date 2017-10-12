var extensions          = require('./custom/v1/clinicianCodeCustom'),
    callbacks           = require('./custom/v1/clinicianCodeCallbacks'),
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
  
  if(undefined != attributes['code']) {
    newAttributes['code'] = attributes['code'];
  }
  
  if(undefined != attributes['name']) {
    newAttributes['name'] = attributes['name'];
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V1ClinicianCode = module.exports = {
  migrate: 'safe',
  tableName: 'clinician_codes',
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
      
    
  
    
      
        code: {
          
          
            required: true,
          
          
          
          columnName: 'code',
          type: 'text',
          
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

  

  
    clinicianBlockRandomizers: {
      collection: 'V1ClinicianBlockRandomizer',
      via: 'clinicianCode'
    },
  
    users: {
      collection: 'V1User',
      via: 'clinicianCode'
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

    var scope = V1ClinicianCode.find().where();
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

    var scope = V1ClinicianCode.find().where(transformAttributesForExactMatch(attributes));
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

    return V1ClinicianCode.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V1ClinicianCode.count(transformAttributesForExactMatch(attributes));

  }
  ,
    sortedByNameScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1ClinicianCode);
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

// Augment/override definition of V1ClinicianCode using customizations provided via custom code
if(extensions) {
  extend(V1ClinicianCode, 'V1ClinicianCode', extensions, 'customCode');
}

if (callbacks) {
  extend(V1ClinicianCode, 'V1ClinicianCode', callbacks, 'callbacks');
}
