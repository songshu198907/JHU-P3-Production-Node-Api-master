var extensions          = require('./custom/v2/sendGridCustom'),
    callbacks           = require('./custom/v2/sendGridCallbacks'),
    Promise             = require('bluebird'),
    Criteria            = require('../services/query/Criteria'),
    util                = require('util'),
    _                   = require('lodash'),
    customCodeContext = require('../libs/customCodeContext');

var adapter = 'storage_adapter_8753';

V2SendGrid = module.exports = {
  migrate: 'safe',
  connection : adapter,
  transientAttributes: [

  ],
  attributes: {


        id: {
          type: 'integer'
        },


  },
  http: {
      read : {
    verb: 'GET',
    path: '',
    format: 'json',
    objectNameMapping: '',
    pathSelector: '$',
    bodyPayloadTemplate: "",
    limit: '',
    offset: '',
    headers: {

    },
    urlParameters: {

    },

    mapping: {
      request: {

          'id': 'id',

      },
      response: {

          'id': 'id',

      }
    }
  },

      update : {
    verb: 'PUT',
    path: '',
    format: 'json',
    objectNameMapping: '',
    pathSelector: '$',
    bodyPayloadTemplate: "",
    limit: '',
    offset: '',
    headers: {

    },
    urlParameters: {

    },

    mapping: {
      request: {

          'id': 'id',

      },
      response: {

          'id': 'id',

      }
    }
  },

      delete : {
    verb: 'DELETE',
    path: '',
    format: 'json',
    objectNameMapping: '',
    pathSelector: '',
    bodyPayloadTemplate: "",
    limit: '',
    offset: '',
    headers: {

    },
    urlParameters: {

    },

    mapping: {
      request: {

          'id': 'id',

      },
      response: {

          'id': 'id',

      }
    }
  },

      create : {
    verb: 'POST',
    path: '/mail.send.json',
    format: 'json',
    objectNameMapping: '',
    pathSelector: '$',
    bodyPayloadTemplate: "{{{body}}}",
    limit: '',
    offset: '',
    headers: {

        'Content-Type': 'application/x-www-form-urlencoded',

        'Accept': 'application/json',

    },
    urlParameters: {

        'api_user': '{{env.SEND_GRID_USERNAME}}',

        'api_key': '{{env.SEND_GRID_PASSWORD_PLAIN_TEXT}}',

    },

    mapping: {
      request: {

          'id': 'id',

      },
      response: {

          'id': 'id',

      }
    }
  },


        allScope : {
    verb: 'GET',
    path: '',
    format: 'json',
    objectNameMapping: '',
    pathSelector: '$.*',
    bodyPayloadTemplate: "",
    limit: 'limit',
    offset: 'offset',
    headers: {

    },
    urlParameters: {

    },

    defaultParams: {

    },

    mapping: {
      request: {

          'id': 'id',

      },
      response: {

          'id': 'id',

      }
    }
  },


        exactMatchScope : {
    verb: 'GET',
    path: '',
    format: 'json',
    objectNameMapping: '',
    pathSelector: '$.*',
    bodyPayloadTemplate: "",
    limit: 'limit',
    offset: 'offset',
    headers: {

    },
    urlParameters: {

    },

    defaultParams: {

    },

    mapping: {
      request: {

          'id': 'id',

      },
      response: {

          'id': 'id',

      }
    }
  },


        countScope : {
    verb: 'GET',
    path: '',
    format: 'json',
    objectNameMapping: '',
    pathSelector: '$',
    bodyPayloadTemplate: "",
    limit: 'limit',
    offset: 'offset',
    headers: {

    },
    urlParameters: {

    },

    defaultParams: {

    },

    mapping: {
      request: {

          'id': 'id',

      },
      response: {

          'id': 'id',

      }
    }
  },


        countExactMatchScope : {
    verb: 'GET',
    path: '',
    format: 'json',
    objectNameMapping: '',
    pathSelector: '$',
    bodyPayloadTemplate: "",
    limit: 'limit',
    offset: 'offset',
    headers: {

    },
    urlParameters: {

    },

    defaultParams: {

    },

    mapping: {
      request: {

          'id': 'id',

      },
      response: {

          'id': 'id',

      }
    }
  },


  },
  autoCreatedAt: false,
  autoUpdatedAt: false,
  executeCallback: function() {
  var action = [].shift.call(arguments);
  var fn = this.callbacks[action];
  if (fn && _.isFunction(fn)) return fn.apply(null, arguments);
  return new Promise(function(resolve) { resolve(); });
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

// Augment/override definition of V2SendGrid using customizations provided via custom code
if(extensions) {
  extend(V2SendGrid, 'V2SendGrid', extensions, 'customCode');
}

if (callbacks) {
  extend(V2SendGrid, 'V2SendGrid', callbacks, 'callbacks');
}
