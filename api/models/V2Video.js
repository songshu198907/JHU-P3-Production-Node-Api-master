var extensions          = require('./custom/v2/videoCustom'),
    callbacks           = require('./custom/v2/videoCallbacks'),
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
  
  if(undefined != attributes['desc']) {
    newAttributes['desc'] = attributes['desc'];
  }
  
  if(undefined != attributes['is_active']) {
    newAttributes['isActive'] = DataUtils.toBoolean(attributes['is_active']);
  }
  
  if(undefined != attributes['keywords']) {
    newAttributes['keywords'] = attributes['keywords'];
  }
  
  if(undefined != attributes['length']) {
    newAttributes['length'] = Number(attributes['length']);
  }
  
  if(undefined != attributes['question_group']) {
    newAttributes['questionGroup'] = attributes['question_group'];
  }
  
  if(undefined != attributes['sort_order']) {
    newAttributes['sortOrder'] = Number(attributes['sort_order']);
  }
  
  if(undefined != attributes['source_version']) {
    newAttributes['sourceVersion'] = attributes['source_version'];
  }
  
  if(undefined != attributes['target_number']) {
    newAttributes['targetNumber'] = Number(attributes['target_number']);
  }
  
  if(undefined != attributes['title']) {
    newAttributes['title'] = attributes['title'];
  }
  
  if(undefined != attributes['topic_id']) {
    newAttributes['topicId'] = Number(attributes['topic_id']);
  }
  
  if(undefined != attributes['video_url']) {
    newAttributes['videoUrl'] = attributes['video_url'];
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2Video = module.exports = {
  migrate: 'safe',
  tableName: 'videos',
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
      
    
  
    
      
        desc: {
          
          
          
          
          columnName: 'description',
          type: 'text',
          
        },
      
    
  
    
      
        isActive: {
          
          
          
          
          columnName: 'is_active',
          type: 'boolean',
          
        },
      
    
  
    
      
        keywords: {
          
          
          
          
          columnName: 'keywords',
          type: 'text',
          
        },
      
    
  
    
      
        length: {
          
          
          
          
          columnName: 'length',
          type: 'float',
          
        },
      
    
  
    
      
        questionGroup: {
          
          
          
          
          columnName: 'question_group',
          type: 'text',
          
        },
      
    
  
    
      
        sortOrder: {
          
          
          
          
          columnName: 'sort_order',
          type: 'integer',
          
        },
      
    
  
    
      
        sourceVersion: {
          
          
          
          
          columnName: 'source_version',
          type: 'text',
          
        },
      
    
  
    
      
        targetNumber: {
          
          
          
          
          columnName: 'target_number',
          type: 'integer',
          
        },
      
    
  
    
      
        title: {
          
          
            required: true,
          
          
          
          columnName: 'title',
          type: 'text',
          
        },
      
    
  
    
      
        topicId: {
          
          
          
          
          columnName: 'topic_id',
          type: 'integer',
          
        },
      
    
  
    
      
        videoUrl: {
          
          
          
          
          columnName: 'video_url',
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

    var scope = V2Video.find().where();
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

    var scope = V2Video.find().where(transformAttributesForExactMatch(attributes));
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

    return V2Video.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2Video.count(transformAttributesForExactMatch(attributes));

  }
  ,
    searchVideoScopedByRaceEduScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2Video);
    if(attributes['is_active']) {
      criteria = criteria.and({ isActive: DataUtils.toBoolean(attributes['is_active']) });
    } else {
      criteria = criteria.and({ isActive: 1 });
    }
    criteria = criteria.orderBy('title ASC');
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
    searchVideoByKeywordScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2Video);
    if(attributes['is_active']) {
      criteria = criteria.and({ isActive: DataUtils.toBoolean(attributes['is_active']) });
    } else {
      criteria = criteria.and({ isActive: 1 });
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
    sortedByNameScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2Video);
    if(attributes['is_active']) {
      criteria = criteria.and({ isActive: DataUtils.toBoolean(attributes['is_active']) });
    } else {
      criteria = criteria.and({ isActive: 1 });
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
    videoGalleryScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2Video);
    if(attributes['is_active']) {
      criteria = criteria.and({ isActive: DataUtils.toBoolean(attributes['is_active']) });
    } else {
      criteria = criteria.and({ isActive: 1 });
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

// Augment/override definition of V2Video using customizations provided via custom code
if(extensions) {
  extend(V2Video, 'V2Video', extensions, 'customCode');
}

if (callbacks) {
  extend(V2Video, 'V2Video', callbacks, 'callbacks');
}
