var extensions          = require('./custom/v1/healthcareProviderContentCustom'),
    callbacks           = require('./custom/v1/healthcareProviderContentCallbacks'),
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
  
  if(undefined != attributes['category_group']) {
    newAttributes['categoryGroup'] = attributes['category_group'];
  }
  
  if(undefined != attributes['desc']) {
    newAttributes['desc'] = attributes['desc'];
  }
  
  if(undefined != attributes['external_link']) {
    newAttributes['externalLink'] = attributes['external_link'];
  }
  
  if(undefined != attributes['keywords']) {
    newAttributes['keywords'] = attributes['keywords'];
  }
  
  if(undefined != attributes['title']) {
    newAttributes['title'] = attributes['title'];
  }
  
  if(undefined != attributes['topic_id']) {
    newAttributes['topicId'] = Number(attributes['topic_id']);
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V1HealthcareProviderContent = module.exports = {
  migrate: 'safe',
  tableName: 'healthcare_provider_contents',
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
      
    
  
    
      
        categoryGroup: {
          
          
          
          
          columnName: 'category_group',
          type: 'text',
          
        },
      
    
  
    
      
        desc: {
          
          
          
          
          columnName: 'description',
          type: 'text',
          
        },
      
    
  
    
      
        externalLink: {
          
          
          
          
          columnName: 'external_link',
          type: 'text',
          
        },
      
    
  
    
      
        keywords: {
          
          
          
          
          columnName: 'keywords',
          type: 'text',
          
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
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
    return obj;
  },

  
    topic: {
      model: 'V1Topic',
      
      columnName: 'topic_id'
      
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

    var scope = V1HealthcareProviderContent.find().where();
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

    var scope = V1HealthcareProviderContent.find().where(transformAttributesForExactMatch(attributes));
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

    return V1HealthcareProviderContent.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V1HealthcareProviderContent.count(transformAttributesForExactMatch(attributes));

  }
  ,
    searchContentScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1HealthcareProviderContent);
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
    sortedByNameScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1HealthcareProviderContent);
    if(attributes['category_group']) {
      criteria = criteria.and({ categoryGroup: attributes['category_group'] });
    } else {
      criteria = criteria.and({ categoryGroup: null });
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
    filterByCategoryGroupScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V1HealthcareProviderContent);
    if(attributes['category_group'] && attributes['category_group'] != '') {
      criteria = criteria.and({ categoryGroup: attributes['category_group'] }); 
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

// Augment/override definition of V1HealthcareProviderContent using customizations provided via custom code
if(extensions) {
  extend(V1HealthcareProviderContent, 'V1HealthcareProviderContent', extensions, 'customCode');
}

if (callbacks) {
  extend(V1HealthcareProviderContent, 'V1HealthcareProviderContent', callbacks, 'callbacks');
}
