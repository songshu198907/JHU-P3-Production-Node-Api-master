var extensions          = require('./custom/v2/userCustom'),
    callbacks           = require('./custom/v2/userCallbacks'),
    Promise             = require('bluebird'),
    Criteria            = require('../services/query/Criteria'),
    util                = require('util'),
    _                   = require('lodash'),
    customCodeContext = require('../libs/customCodeContext');

var bcrypt = require('bcrypt');

function hashPassword(values, next) {
  if (values.password) {
    bcrypt.hash(values.password, 10, function(err, res) {
      if (err) return next(err);

      values.passwordDigest = res;
      delete values.password;
      delete values.passwordConfirmation;
      next();
    });
  }
}

var transformAttributesForExactMatch = function(attributes) {
  var newAttributes = {};
  
  if(undefined != attributes['id']) {
    newAttributes['id'] = Number(attributes['id']);
  }
  
  if(undefined != attributes['actual_child_birth']) {
    newAttributes['actualChildBirth'] = new Date(attributes['actual_child_birth']);
  }
  
  if(undefined != attributes['address']) {
    newAttributes['address'] = attributes['address'];
  }
  
  if(undefined != attributes['cell_phone']) {
    newAttributes['cellPhone'] = attributes['cell_phone'];
  }
  
  if(undefined != attributes['city']) {
    newAttributes['city'] = attributes['city'];
  }
  
  if(undefined != attributes['clinician_code_id']) {
    newAttributes['clinicianCodeId'] = Number(attributes['clinician_code_id']);
  }
  
  if(undefined != attributes['clinic_name']) {
    newAttributes['clinicName'] = attributes['clinic_name'];
  }
  
  if(undefined != attributes['consent_accepted_on']) {
    newAttributes['consentAcceptedOn'] = new Date(attributes['consent_accepted_on']);
  }
  
  if(undefined != attributes['contact_cell_phone']) {
    newAttributes['contactCellPhone'] = attributes['contact_cell_phone'];
  }
  
  if(undefined != attributes['contact_email']) {
    newAttributes['contactEmail'] = attributes['contact_email'];
  }
  
  if(undefined != attributes['contact_home_phone']) {
    newAttributes['contactHomePhone'] = attributes['contact_home_phone'];
  }
  
  if(undefined != attributes['contact_name']) {
    newAttributes['contactName'] = attributes['contact_name'];
  }
  
  if(undefined != attributes['deactivated_on']) {
    newAttributes['deactivatedOn'] = new Date(attributes['deactivated_on']);
  }
  
  if(undefined != attributes['education_id']) {
    newAttributes['educationId'] = Number(attributes['education_id']);
  }
  
  if(undefined != attributes['email']) {
    newAttributes['email'] = attributes['email'];
  }
  
  if(undefined != attributes['expected_child_birth']) {
    newAttributes['expectedChildBirth'] = new Date(attributes['expected_child_birth']);
  }
  
  if(undefined != attributes['first_name']) {
    newAttributes['firstName'] = attributes['first_name'];
  }
  
  if(undefined != attributes['has_contact_users']) {
    newAttributes['hasContactUsers'] = DataUtils.toBoolean(attributes['has_contact_users']);
  }
  
  if(undefined != attributes['home_phone']) {
    newAttributes['homePhone'] = attributes['home_phone'];
  }
  
  if(undefined != attributes['intervention_group']) {
    newAttributes['interventionGroup'] = attributes['intervention_group'];
  }
  
  if(undefined != attributes['is_deactive']) {
    newAttributes['isDeactive'] = DataUtils.toBoolean(attributes['is_deactive']);
  }
  
  if(undefined != attributes['last_name']) {
    newAttributes['lastName'] = attributes['last_name'];
  }
  
  if(undefined != attributes['parent_relationship_type']) {
    newAttributes['parentRelationshipType'] = attributes['parent_relationship_type'];
  }
  
  if(undefined != attributes['parent_user_id']) {
    newAttributes['parentUserId'] = Number(attributes['parent_user_id']);
  }
  
  if(undefined != attributes['password']) {
    newAttributes['password'] = attributes['password'];
  }
  
  if(undefined != attributes['password_confirmation']) {
    newAttributes['passwordConfirmation'] = attributes['password_confirmation'];
  }
  
  if(undefined != attributes['password_digest']) {
    newAttributes['passwordDigest'] = attributes['password_digest'];
  }
  
  if(undefined != attributes['patient_type']) {
    newAttributes['patientType'] = Number(attributes['patient_type']);
  }
  
  if(undefined != attributes['postal_code']) {
    newAttributes['postalCode'] = attributes['postal_code'];
  }
  
  if(undefined != attributes['race_id']) {
    newAttributes['raceId'] = Number(attributes['race_id']);
  }
  
  if(undefined != attributes['reason_for_deactivation']) {
    newAttributes['reasonForDeactivation'] = attributes['reason_for_deactivation'];
  }
  
  if(undefined != attributes['reset_password']) {
    newAttributes['resetPassword'] = DataUtils.toBoolean(attributes['reset_password']);
  }
  
  if(undefined != attributes['role']) {
    newAttributes['role'] = attributes['role'];
  }
  
  if(undefined != attributes['state']) {
    newAttributes['state'] = attributes['state'];
  }
  
  if(undefined != attributes['updated_user_profile']) {
    newAttributes['updatedUserProfile'] = DataUtils.toBoolean(attributes['updated_user_profile']);
  }
  
  if(undefined != attributes['vaccination_reminders']) {
    newAttributes['vaccinationReminders'] = DataUtils.toBoolean(attributes['vaccination_reminders']);
  }

  if(undefined != attributes['enrollment_id']) {
    newAttributes['enrollmentId'] = attributes['enrollment_id'];
  }

  if(undefined != attributes['x_session_id']) {
    newAttributes['xSessionId'] = attributes['x_session_id'];
  }
  
  return newAttributes;
};

var adapter = (sails.config && sails.config.environment === 'test') ? 'memory' : 'storage_adapter_8755';

V2User = module.exports = {
  migrate: 'safe',
  tableName: 'users',
  connection: [ adapter ],
  types: {
      
      matchesConfirmation: function(password) {
        return password === this.passwordConfirmation;
      },
      
  },
  transientAttributes: [
    'clinicName',
'password',
'passwordConfirmation',
'xSessionId'
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
      
    
  
    
      
        actualChildBirth: {
          
          
          
          
          columnName: 'actual_child_birth',
          type: 'date',
          
        },
      
    
  
    
      
        address: {
          
          
          
          
          columnName: 'address',
          type: 'text',
          
        },
      
    
  
    
      
        cellPhone: {
          
          
          
          
          columnName: 'cell_phone',
          type: 'text',
          
        },
      
    
  
    
      
        city: {
          
          
          
          
          columnName: 'city',
          type: 'text',
          
        },
      
    
  
    
      
        clinicianCodeId: {
          
          
          
          
          columnName: 'clinician_code_id',
          type: 'integer',
          
        },
      
    
  
    
      
        getClinicName:function () { return this.clinicName; },
      
    
  
    
      
        consentAcceptedOn: {
          
          
          
          
          columnName: 'consent_accepted_on',
          type: 'datetime',
          
        },
      
    
  
    
      
        contactCellPhone: {
          
          
          
          
          columnName: 'contact_cell_phone',
          type: 'text',
          
        },
      
    
  
    
      
        contactEmail: {
          
          
          
          
          columnName: 'contact_email',
          type: 'text',
          
        },
      
    
  
    
      
        contactHomePhone: {
          
          
          
          
          columnName: 'contact_home_phone',
          type: 'text',
          
        },
      
    
  
    
      
        contactName: {
          
          
          
          
          columnName: 'contact_name',
          type: 'text',
          
        },
      
    
  
    
      
        deactivatedOn: {
          
          
          
          
          columnName: 'deactivated_on',
          type: 'datetime',
          
        },
      
    
  
    
      
        educationId: {
          
          
          
          
          columnName: 'education_id',
          type: 'integer',
          
        },
      
    
  
    
      
        email: {
          
          
          
          
          columnName: 'email',
          type: 'text',
          
        },
      
    
  
    
      
        expectedChildBirth: {
          
          
          
          
          columnName: 'expected_child_birth',
          type: 'date',
          
        },
      
    
  
    
      
        firstName: {
          
          
            required: true,
          
          
          
          columnName: 'first_name',
          type: 'text',
          
        },
      
    
  
    
      
        hasContactUsers: {
          
          
          
          
          columnName: 'has_contact_users',
          type: 'boolean',
          
        },
      
    
  
    
      
        homePhone: {
          
          
          
          
          columnName: 'home_phone',
          type: 'text',
          
        },
      
    
  
    
      
        interventionGroup: {
          
          
          
          
          columnName: 'intervention_group',
          type: 'text',
          
        },
      
    
  
    
      
        isDeactive: {
          
          
          
          
          columnName: 'is_deactive',
          type: 'boolean',
          
        },
      
    
  
    
      
        lastName: {
          
          
            required: true,
          
          
          
          columnName: 'last_name',
          type: 'text',
          
        },
      
    
  
    
      
        parentRelationshipType: {
          
          
          
          
          columnName: 'parent_relationship_type',
          type: 'text',
          
        },
      
    
  
    
      
        parentUserId: {
          
          
          
          
          columnName: 'parent_user_id',
          type: 'integer',
          
        },
      
    
  
    
      
        getPassword:function () { return this.password; },
      
    
  
    
      
        getPasswordConfirmation:function () { return this.passwordConfirmation; },
      
    
  
    
      
        passwordDigest: {
          
          
          
          
          columnName: 'password_digest',
          type: 'text',
          
        },
      
    
  
    
      
        patientType: {
          
          
          
          
          columnName: 'patient_type',
          type: 'integer',
          
        },
      
    
  
    
      
        postalCode: {
          
          
          
          
          columnName: 'postal_code',
          type: 'text',
          
        },
      
    
  
    
      
        raceId: {
          
          
          
          
          columnName: 'race_id',
          type: 'integer',
          
        },
      
    
  
    
      
        reasonForDeactivation: {
          
          
          
          
          columnName: 'reason_for_deactivation',
          type: 'text',
          
        },
      
    
  
    
      
        resetPassword: {
          
          
          
          
          columnName: 'reset_password',
          type: 'boolean',
          
        },
      
    
  
    
      
        role: {
          
          
          
          
          columnName: 'role',
          type: 'text',
          
        },
      
    
  
    
      
        state: {
          
          
          
          
          columnName: 'state',
          type: 'text',
          
        },
      
    
  
    
      
        updatedUserProfile: {
          
          
          
          
          columnName: 'updated_user_profile',
          type: 'boolean',
          
        },
      
    
  
    
      
        vaccinationReminders: {
          
          
          
          
          columnName: 'vaccination_reminders',
          type: 'boolean',
          
        },

        enrollmentId: {
          
          
          
          
          columnName: 'enrollment_id',
          type: 'text',
          
        },
      
    
  
    
      
        getXSessionId:function () { return this.xSessionId; },
      
    
  

  toJSON: function () {
    var obj = this;
    
      
    
      
    
      
    
      
    
      
    
      
    
      
        obj.clinicName = this.getClinicName();
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
        obj.password = this.getPassword();
      
    
      
        obj.passwordConfirmation = this.getPasswordConfirmation();
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
        obj.xSessionId = this.getXSessionId();
      
    
    return obj;
  },

  
    clinicianCode: {
      model: 'V2ClinicianCode',
      
      columnName: 'clinician_code_id'
      
    },
  
    education: {
      model: 'V2Education',
      
      columnName: 'education_id'
      
    },
  
    race: {
      model: 'V2Race',
      
      columnName: 'race_id'
      
    },
  

  
    userAuditLoggings: {
      collection: 'V2UserAuditLogging',
      via: 'user'
    },
  
    searchAuditLoggings: {
      collection: 'V2SearchAuditLogging',
      via: 'user'
    },
  
    userSurveys: {
      collection: 'V2UserSurvey',
      via: 'user'
    },
  

  


  
    // user defined authenticatable objects are not system admins (unlike api/models/Admin)
    isAdmin: function() {
      return false;
    }
  
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

    var scope = V2User.find().where();
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

    var scope = V2User.find().where(transformAttributesForExactMatch(attributes));
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

    return V2User.count();

  }
  ,
    countExactMatchScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    return V2User.count(transformAttributesForExactMatch(attributes));

  }
  ,
    resetPasswordScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
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
    consentAcceptedScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
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
    deactivateScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
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
    myprofileScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
    if(userAttributes['id']) {
      criteria = criteria.and({ id: userAttributes['id'] });
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
    getMyContactsScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
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
    getPatientsByClinicsScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
    if(attributes['role']) {
      criteria = criteria.and({ role: attributes['role'] });
    } else {
      criteria = criteria.and({ role: "patient" });
    }
    if(attributes['clinician_code_id'] && attributes['clinician_code_id'] != '') {
      criteria = criteria.and({ clinicianCodeId: Number(attributes['clinician_code_id']) }); 
    }
    if(attributes['is_deactivate']) {
      criteria = criteria.and({ isDeactive: DataUtils.toBoolean(attributes['is_deactivate']) });
    } else {
      criteria = criteria.and({ isDeactive: 0 });
    }
    criteria = criteria.orderBy('lastName ASC');
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
  getUsersByRaceScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
    if(attributes['role']) {
      criteria = criteria.and({ role: attributes['role'] });
    } else {
      criteria = criteria.and({ role: "patient" });
    }
    if(attributes['race_id'] && attributes['race_id'] != '') {
      criteria = criteria.and({ clinicianCodeId: Number(attributes['race_id']) }); 
    }
    if(attributes['is_deactivate']) {
      criteria = criteria.and({ isDeactive: DataUtils.toBoolean(attributes['is_deactivate']) });
    } else {
      criteria = criteria.and({ isDeactive: 0 });
    }
    criteria = criteria.orderBy('lastName ASC');
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
  getUsersByEducationScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
    if(attributes['role']) {
      criteria = criteria.and({ role: attributes['role'] });
    } else {
      criteria = criteria.and({ role: "patient" });
    }
    if(attributes['education_id'] && attributes['education_id'] != '') {
      criteria = criteria.and({ clinicianCodeId: Number(attributes['education_id']) }); 
    }
    if(attributes['is_deactivate']) {
      criteria = criteria.and({ isDeactive: DataUtils.toBoolean(attributes['is_deactivate']) });
    } else {
      criteria = criteria.and({ isDeactive: 0 });
    }
    criteria = criteria.orderBy('lastName ASC');
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
    getHealthcareByClinicScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
    if(attributes['role']) {
      criteria = criteria.and({ role: attributes['role'] });
    } else {
      criteria = criteria.and({ role: "health_care_provider" });
    }
    if(attributes['is_deactivate']) {
      criteria = criteria.and({ isDeactive: DataUtils.toBoolean(attributes['is_deactivate']) });
    } else {
      criteria = criteria.and({ isDeactive: 0 });
    }
    criteria = criteria.orderBy('lastName ASC');
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
    patientSurveyExportScope: function(attributes, userAttributes, offset, limit) {
      attributes = attributes || {};
      userAttributes = userAttributes || {};
      offset = offset || null;
      limit = limit || null;

    var criteria = new Criteria(V2User);
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

  
  
  logoutCb: 'auditlogout',
  
  role: function(user) {
    var role = user['role'];
    if(role === undefined || _.isEmpty(role)) {
      return "Authenticated Without Role Default";
    }
    else {
      return role;
    }
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

// Augment/override definition of V2User using customizations provided via custom code
if(extensions) {
  extend(V2User, 'V2User', extensions, 'customCode');
}

if (callbacks) {
  extend(V2User, 'V2User', callbacks, 'callbacks');
}
