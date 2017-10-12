var extensions          = require('./custom/v2/videoAuditLoggingCustom'),
    callbacks           = require('./custom/v2/videoAuditLoggingCallbacks'),
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
  
  if(undefined != attributes['created_at']) {
    newAttributes['createdAt'] = new Date(attributes['created_at']);
  }
  
  if(undefined != attributes['duration']) {
    newAttributes['duration'] = Number(attributes['duration']);
  }
  
  if(undefined != attributes['user_id']) {
    newAttributes['userId'] = Number(attributes['user_id']);
  }
  
  if(undefined != attributes['video_id']) {
    newAttributes['videoId'] = Number(attributes['video_id']);
  }
  
  if(undefined != attributes['watched_entire_video']) {
    newAttributes['watchedEntireVideo'] = DataUtils.toBoolean(attributes['watched_entire_video']);
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2VideoAuditLogging = module.exports = {
  migrate: 'safe',
  tableName: 'video_audit_logging',
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
      
    
  
    
      
        createdAt: {
          
          
          
          
          columnName: 'created_at',
          type: 'datetime',
          
        },
      
    
  
    
      
        duration: {
          
          
          
          
          columnName: 'duration',
          type: 'float',
          
        },
      
    
  
    
      
        userId: {
          
          
          
          
          columnName: 'user_id',
          type: 'integer',
          
        },
      
    
  
    
      
        videoId: {
          
          
          
          
          columnName: 'video_id',
          type: 'integer',
          
        },
      
    
  
    
      
        watchedEntireVideo: {
          
          
          
          
          columnName: 'watched_entire_video',
          type: 'boolean',
          
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

    var scope = V2VideoAuditLogging.find().where();
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

    var scope = V2VideoAuditLogging.find().where(transformAttributesForExactMatch(attributes));
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

    return V2VideoAuditLogging.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2VideoAuditLogging.count(transformAttributesForExactMatch(attributes));

  }
  ,
    exportVideoLogScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2VideoAuditLogging);
    if(attributes['created_at'] && attributes['created_at'] != '') {
      criteria = criteria.and({ createdAt: { '>=': new Date(attributes['created_at']) } }); 
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
  }
  ,
    byVideoAndUserIdScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2VideoAuditLogging);
    if(attributes['user_id'] && attributes['user_id'] != '') {
      criteria = criteria.and({ userId: Number(attributes['user_id']) }); 
    }
    if(attributes['video_id'] && attributes['video_id'] != '') {
      criteria = criteria.and({ videoId: Number(attributes['video_id']) }); 
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

// Augment/override definition of V2VideoAuditLogging using customizations provided via custom code
if(extensions) {
  extend(V2VideoAuditLogging, 'V2VideoAuditLogging', extensions, 'customCode');
}

if (callbacks) {
  extend(V2VideoAuditLogging, 'V2VideoAuditLogging', callbacks, 'callbacks');
}
