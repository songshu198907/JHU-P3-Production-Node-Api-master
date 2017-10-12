var extensions          = require('./custom/v2/userAuditLoggingCustom'),
    callbacks           = require('./custom/v2/userAuditLoggingCallbacks'),
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
  
  if(undefined != attributes['ip_address']) {
    newAttributes['ipAddress'] = attributes['ip_address'];
  }
  
  if(undefined != attributes['logged_in_at']) {
    newAttributes['loggedInAt'] = new Date(attributes['logged_in_at']);
  }
  
  if(undefined != attributes['logged_out_at']) {
    newAttributes['loggedOutAt'] = new Date(attributes['logged_out_at']);
  }
  
  if(undefined != attributes['user_agent']) {
    newAttributes['userAgent'] = attributes['user_agent'];
  }
  
  if(undefined != attributes['user_id']) {
    newAttributes['userId'] = Number(attributes['user_id']);
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2UserAuditLogging = module.exports = {
  migrate: 'safe',
  tableName: 'user_audit_logging',
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
      
    
  
    
      
        ipAddress: {
          
          
          
          
          columnName: 'ip_address',
          type: 'text',
          
        },
      
    
  
    
      
        loggedInAt: {
          
          
          
          
          columnName: 'logged_in_at',
          type: 'datetime',
          
        },
      
    
  
    
      
        loggedOutAt: {
          
          
          
          
          columnName: 'logged_out_at',
          type: 'datetime',
          
        },
      
    
  
    
      
        userAgent: {
          
          
          
          
          columnName: 'user_agent',
          type: 'text',
          
        },
      
    
  
    
      
        userId: {
          
          
            required: true,
          
          
          
          columnName: 'user_id',
          type: 'integer',
          
        },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
    
      
    
      
    
    return obj;
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

    var scope = V2UserAuditLogging.find().where();
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

    var scope = V2UserAuditLogging.find().where(transformAttributesForExactMatch(attributes));
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

    return V2UserAuditLogging.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2UserAuditLogging.count(transformAttributesForExactMatch(attributes));

  }
  ,
    userAuditExportScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2UserAuditLogging);
    if(attributes['logged_in_at'] && attributes['logged_in_at'] != '') {
      criteria = criteria.and({ loggedInAt: { '>=': new Date(attributes['logged_in_at']) } }); 
    }
    criteria = criteria.orderBy('loggedInAt ASC');
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

// Augment/override definition of V2UserAuditLogging using customizations provided via custom code
if(extensions) {
  extend(V2UserAuditLogging, 'V2UserAuditLogging', extensions, 'customCode');
}

if (callbacks) {
  extend(V2UserAuditLogging, 'V2UserAuditLogging', callbacks, 'callbacks');
}
