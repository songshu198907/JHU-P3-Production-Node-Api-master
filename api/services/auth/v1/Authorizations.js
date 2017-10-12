module.exports = {
//uses_authentication && has_object_role_authorizations	
  'v1clinicianblockrandomizer': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'sortedByClinicId', 'filterByClinicId' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'id', 'clinicianCodeId', 'interventionGroup', 'patientType' ],
        'updatable': [ 'id', 'clinicianCodeId', 'interventionGroup', 'patientType' ],
        'readable' : [ 'id', 'clinicianCodeId', 'interventionGroup', 'patientType' ]
			}
		},
		
	},
	
  'v1cliniciancode': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'code', 'name' ],
        'updatable': [ 'code', 'name' ],
        'readable' : [ 'id', 'code', 'name' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'all', 'exactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'code', 'name' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'all', 'exactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'code', 'name' ]
			}
		},
		
	},
	
  'v1education': {
    'requiresAuthentication': false,
		
    'administrator': {
      'permittedScopes': [ 'exactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'name' ],
        'updatable': [ 'name' ],
        'readable' : [ 'id', 'name' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'name' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'name' ]
			}
		},
		
    'Unauthenticated Default': {
      'permittedScopes': [ 'all', 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'name' ]
			}
		},
		
	},
	
  'v1healthcareprovidercontent': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'searchContent', 'filterByCategoryGroup' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': [ 'categoryGroup', 'desc', 'externalLink', 'keywords', 'title', 'topicId' ],
        'updatable': [ 'categoryGroup', 'desc', 'externalLink', 'keywords', 'title', 'topicId' ],
        'readable' : [ 'id', 'categoryGroup', 'desc', 'externalLink', 'keywords', 'title', 'topicId' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'all', 'exactMatch', 'searchContent', 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'categoryGroup', 'desc', 'externalLink', 'keywords', 'title', 'topicId' ]
			}
		},
		
	},
	
  'v1jobauditlogging': {
    'requiresAuthentication': false,
		
    'Unauthenticated Default': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': [ 'createdAt', 'name', 'rowsEffected' ],
        'updatable': [ 'createdAt', 'name', 'rowsEffected' ],
        'readable' : [ 'id', 'createdAt', 'name', 'rowsEffected' ]
			}
		},
		
	},
	
  'v1questioncategory': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'name' ],
        'updatable': [ 'name' ],
        'readable' : [ 'id', 'name' ]
			}
		},
		
	},
	
  'v1questioncode': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'exactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'name' ],
        'updatable': [ 'name' ],
        'readable' : [ 'id', 'name' ]
			}
		},
		
	},
	
  'v1questiontype': {
    'requiresAuthentication': false,
		
    'Unauthenticated Default': {
      'permittedScopes': [ 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'controlType', 'name' ],
        'updatable': [ 'controlType', 'name' ],
        'readable' : [ 'id', 'controlType', 'name' ]
			}
		},
		
    'administrator': {
      'permittedScopes': [ 'exactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'controlType', 'name' ],
        'updatable': [ 'controlType', 'name' ],
        'readable' : [ 'id', 'controlType', 'name' ]
			}
		},
		
	},
	
  'v1race': {
    'requiresAuthentication': false,
		
    'administrator': {
      'permittedScopes': [ 'exactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'name' ],
        'updatable': [ 'name' ],
        'readable' : [ 'id', 'name' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'name' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'name' ]
			}
		},
		
    'Unauthenticated Default': {
      'permittedScopes': [ 'all', 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'name' ]
			}
		},
		
	},
	
  'v1searchauditlogging': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'createdAt', 'searchTerm' ]
			}
		},
		
	},
	
  'v1sendgrid': {
    'requiresAuthentication': false,
		
    'Unauthenticated Default': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id' ]
			}
		},
		
	},
	
  'v1setting': {
    'requiresAuthentication': true,
		
    'patient': {
      'permittedScopes': [ 'all' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'termsAndConditions' ]
			}
		},
		
    'administrator': {
      'permittedScopes': [ 'all' ],
      'objectLevelPermissions': [ 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'awsHealthcareContentBucketName', 'awsVideoBucketName', 'surveyCompletionEmailSubject', 'surveyCompletionEmailText' ],
        'updatable': [ 'awsHealthcareContentBucketName', 'awsVideoBucketName', 'contactUserRegistrationEmailText', 'contactUserRegistrationSubject', 'forgotPasswordEmailText', 'forgotPasswordSubject', 'fromEmail', 'smsPhoneNumber', 'surveyCompletionEmailSubject', 'surveyCompletionEmailText', 'surveyNotificationEmailText', 'surveyNotificationFinalSmsText', 'surveyNotificationFirstReminderEmailText', 'surveyNotificationFirstReminderSubject', 'surveyNotificationSubject', 'termsAndConditions' ],
        'readable' : [ 'id', 'awsHealthcareContentBucketName', 'awsVideoBucketName', 'contactUserRegistrationEmailText', 'contactUserRegistrationSubject', 'forgotPasswordEmailText', 'forgotPasswordSubject', 'fromEmail', 'smsPhoneNumber', 'surveyCompletionEmailSubject', 'surveyCompletionEmailText', 'surveyNotificationEmailText', 'surveyNotificationFinalSmsText', 'surveyNotificationFirstReminderEmailText', 'surveyNotificationFirstReminderSubject', 'surveyNotificationSubject', 'termsAndConditions' ]
			}
		},
		
	},
	
  'v1survey': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'createCopy', 'activeSurveysByTypePatient', 'getSortedSurveys', 'deleteSurvey', 'generateCsvResults' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'interventionGroup', 'isActive', 'name', 'patientType', 'surveyType', 'totalQuestions', 'version' ],
        'updatable': [ 'interventionGroup', 'isActive', 'name', 'patientType', 'surveyType', 'totalQuestions', 'version' ],
        'readable' : [ 'id', 'interventionGroup', 'isActive', 'name', 'patientType', 'surveyType', 'totalQuestions', 'version' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'exactMatch' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'isActive', 'name', 'surveyType', 'totalQuestions', 'version' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'exactMatch' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'isActive', 'name', 'surveyType', 'totalQuestions', 'version' ]
			}
		},
		
	},
	
  'v1surveyanswer': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'getAnswersByQuestion', 'deleteQuestionAnswer' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': [ 'allowFreeForm', 'freeFormDataType', 'label', 'sortOrder', 'surveyQuestionId', 'videoTargetNumber', 'weight' ],
        'updatable': [ 'allowFreeForm', 'freeFormDataType', 'label', 'sortOrder', 'surveyQuestionId', 'videoTargetNumber', 'weight' ],
        'readable' : [ 'id', 'allowFreeForm', 'freeFormDataType', 'label', 'sortOrder', 'surveyQuestionId', 'videoTargetNumber', 'weight' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'allowFreeForm', 'freeFormDataType', 'label', 'sortOrder', 'surveyQuestionId', 'videoTargetNumber', 'weight' ]
			}
		},
		
	},
	
  'v1surveyquestion': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'getQuestionBySurvey', 'deleteSurveyQuestion' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': [ 'didYouKnowText', 'label', 'questionCategoryId', 'questionCodeId', 'questionGroup', 'questionText', 'questionTypeId', 'requiredAnswer', 'sortOrder', 'surveyId' ],
        'updatable': [ 'didYouKnowText', 'label', 'questionCategoryId', 'questionCodeId', 'questionGroup', 'questionText', 'questionTypeId', 'requiredAnswer', 'sortOrder', 'surveyId' ],
        'readable' : [ 'id', 'didYouKnowText', 'label', 'questionCategoryId', 'questionCodeId', 'questionGroup', 'questionText', 'questionTypeId', 'requiredAnswer', 'sortOrder', 'surveyId' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'all', 'exactMatch' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'didYouKnowText', 'label', 'questionCategoryId', 'questionCodeId', 'questionGroup', 'questionText', 'questionTypeId', 'requiredAnswer', 'sortOrder', 'surveyId' ]
			}
		},
		
	},
	
  'v1surveyquestionskiplogic': {
    'requiresAuthentication': true,
		
    'patient': {
      'permittedScopes': [ 'all', 'exactMatch' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'skipQuestionCodes', 'surveyAnswerId' ]
			}
		},
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'getSkipLogicByAnswers' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': [ 'skipQuestionCodes', 'surveyAnswerId' ],
        'updatable': [ 'skipQuestionCodes', 'surveyAnswerId' ],
        'readable' : [ 'id', 'skipQuestionCodes', 'surveyAnswerId' ]
			}
		},
		
	},
	
  'v1topic': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'exactMatch', 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'name' ],
        'updatable': [ 'name' ],
        'readable' : [ 'id', 'name' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'name' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'sortedByName' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'name' ]
			}
		},
		
	},
	
  'v1twilio': {
    'requiresAuthentication': false,
		
    'Unauthenticated Default': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id' ]
			}
		},
		
	},
	
  'v1user': {
    'requiresAuthentication': false,
		
    'Unauthenticated Default': {
      'permittedScopes': [ 'resetPassword' ],
      'objectLevelPermissions': [ 'create', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'address', 'cellPhone', 'city', 'clinicianCodeId', 'contactCellPhone', 'contactEmail', 'contactHomePhone', 'contactName', 'educationId', 'email', 'expectedChildBirth', 'firstName', 'homePhone', 'interventionGroup', 'lastName', 'password', 'passwordConfirmation', 'postalCode', 'raceId', 'resetPassword', 'state', 'vaccinationReminders' ],
        'updatable': [ 'resetPassword' ],
        'readable' : [ 'id' ]
			}
		},
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'deactivate', 'myprofile', 'getPatientsByClinics', 'getHealthcareByClinic', 'patientSurveyExport' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'cellPhone', 'city', 'clinicianCodeId', 'email', 'firstName', 'homePhone', 'lastName', 'password', 'passwordConfirmation', 'postalCode', 'resetPassword', 'state' ],
        'updatable': [ 'actualChildBirth', 'address', 'cellPhone', 'city', 'clinicianCodeId', 'consentAcceptedOn', 'contactCellPhone', 'contactEmail', 'contactHomePhone', 'contactName', 'deactivatedOn', 'educationId', 'email', 'expectedChildBirth', 'firstName', 'hasContactUsers', 'homePhone', 'isDeactive', 'lastName', 'parentRelationshipType', 'password', 'passwordConfirmation', 'patientType', 'postalCode', 'raceId', 'reasonForDeactivation', 'resetPassword', 'state', 'vaccinationReminders' ],
        'readable' : [ 'id', 'actualChildBirth', 'address', 'cellPhone', 'city', 'clinicianCodeId', 'clinicName', 'consentAcceptedOn', 'contactCellPhone', 'contactEmail', 'contactHomePhone', 'contactName', 'deactivatedOn', 'educationId', 'email', 'expectedChildBirth', 'firstName', 'hasContactUsers', 'homePhone', 'interventionGroup', 'isDeactive', 'lastName', 'parentRelationshipType', 'parentUserId', 'patientType', 'postalCode', 'raceId', 'reasonForDeactivation', 'resetPassword', 'role', 'state', 'vaccinationReminders' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'consentAccepted', 'deactivate', 'myprofile', 'getMyContacts' ],
      'objectLevelPermissions': [ 'create', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'address', 'cellPhone', 'city', 'email', 'firstName', 'homePhone', 'lastName', 'parentRelationshipType', 'parentUserId', 'patientType', 'resetPassword', 'role', 'state' ],
        'updatable': [ 'actualChildBirth', 'address', 'cellPhone', 'city', 'consentAcceptedOn', 'contactCellPhone', 'contactEmail', 'contactHomePhone', 'contactName', 'deactivatedOn', 'educationId', 'email', 'expectedChildBirth', 'firstName', 'homePhone', 'isDeactive', 'lastName', 'parentRelationshipType', 'password', 'passwordConfirmation', 'postalCode', 'raceId', 'reasonForDeactivation', 'resetPassword', 'state', 'updatedUserProfile', 'vaccinationReminders' ],
        'readable' : [ 'id', 'actualChildBirth', 'address', 'cellPhone', 'city', 'clinicianCodeId', 'consentAcceptedOn', 'contactCellPhone', 'contactEmail', 'contactHomePhone', 'contactName', 'educationId', 'email', 'expectedChildBirth', 'firstName', 'hasContactUsers', 'homePhone', 'interventionGroup', 'lastName', 'parentRelationshipType', 'parentUserId', 'patientType', 'postalCode', 'raceId', 'role', 'state', 'updatedUserProfile', 'vaccinationReminders','enrollmentId' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'resetPassword', 'myprofile' ],
      'objectLevelPermissions': [ 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': [ 'address', 'cellPhone', 'city', 'clinicianCodeId', 'email', 'firstName', 'hasContactUsers', 'homePhone', 'isDeactive', 'lastName', 'password', 'passwordConfirmation', 'patientType', 'postalCode', 'raceId', 'reasonForDeactivation', 'resetPassword', 'state' ],
        'readable' : [ 'id', 'address', 'cellPhone', 'city', 'clinicianCodeId', 'email', 'firstName', 'homePhone', 'interventionGroup', 'lastName', 'password', 'patientType', 'postalCode', 'raceId', 'reasonForDeactivation', 'resetPassword', 'role', 'state', 'updatedUserProfile','enrollmentId' ]
			}
		},
		
	},
	
  'v1userauditlogging': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'userAuditExport' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'ipAddress', 'loggedInAt', 'loggedOutAt', 'userAgent', 'userId' ]
			}
		},
		
	},
	
  'v1usersurvey': {
    'requiresAuthentication': true,
		
    'patient': {
      'permittedScopes': [ 'getPatientsSurvey', 'getfirstquestion', 'compeleteSurvey', 'getVideoSurvey', 'generateCsvResults' ],
      'objectLevelPermissions': [ 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'completition', 'currentuseranswers', 'firstQuestion', 'firstQuestionId', 'questionCount' ],
        'updatable': [ 'completedAt', 'completition', 'currentuseranswers', 'firstQuestion', 'firstQuestionId', 'isComplete', 'maternalVideoComplete', 'maternalVideoPosition', 'pediatricVideoComplete', 'pediatricVideoPosition', 'questionCount' ],
        'readable' : [ 'id', 'completedAt', 'completition', 'createdAt', 'currentuseranswers', 'firstQuestion', 'firstQuestionId', 'firstReminder', 'isComplete', 'matchedVideos', 'maternalVideoComplete', 'maternalVideoNumber', 'maternalVideoPosition', 'pediatricVideoComplete', 'pediatricVideoNumber', 'pediatricVideoPosition', 'questionCount', 'secondReminder', 'surveyId', 'userId', 'videoSourceVersion' ]
			}
		},
		
    'administrator': {
      'permittedScopes': [ 'checkSurveyExists', 'checkSurveyCount', 'generateCsvResults' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'completedAt', 'completition', 'createdAt', 'currentuseranswers', 'firstQuestion', 'firstQuestionId', 'firstReminder', 'isComplete', 'matchedVideos', 'maternalVideoComplete', 'maternalVideoNumber', 'maternalVideoPosition', 'pediatricVideoComplete', 'pediatricVideoNumber', 'pediatricVideoPosition', 'questionCount', 'secondReminder', 'surveyId', 'userId', 'videoSourceVersion' ]
			}
		},
		
	},
	
  'v1usersurveyanswer': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'previousquestion' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': [ 'appliedSkipLogicId', 'nextquestion', 'previousquestion', 'questionCodeId', 'questionGroup', 'questionOrder', 'skipped' ],
        'updatable': [ 'appliedSkipLogicId', 'nextquestion', 'previousquestion', 'questionCodeId', 'questionGroup', 'questionOrder', 'skipped' ],
        'readable' : [ 'id', 'appliedSkipLogicId', 'freeFormResponse', 'nextquestion', 'previousquestion', 'questionCodeId', 'questionGroup', 'questionOrder', 'skipped', 'surveyAnswerId', 'surveyQuestionId', 'userSurveyId' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'exactMatch', 'previousquestion' ],
      'objectLevelPermissions': [ 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'appliedSkipLogicId', 'nextquestion', 'previousquestion', 'questionCodeId', 'questionGroup', 'questionOrder' ],
        'updatable': [ 'appliedSkipLogicId', 'freeFormResponse', 'nextquestion', 'previousquestion', 'questionCodeId', 'questionGroup', 'surveyAnswerId' ],
        'readable' : [ 'id', 'appliedSkipLogicId', 'freeFormResponse', 'nextquestion', 'previousquestion', 'questionCodeId', 'questionGroup', 'questionOrder', 'skipped', 'surveyAnswerId', 'surveyQuestionId', 'userSurveyId' ]
			}
		},
		
	},
	
  'v1vaccinationreminder': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'exactMatch', 'sortedByTriggerDays', 'sendVaccinationReminders' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': [ 'messageText', 'triggerDaysFromDob' ],
        'updatable': [ 'messageText', 'triggerDaysFromDob' ],
        'readable' : [ 'id', 'messageText', 'triggerDaysFromDob' ]
			}
		},
		
	},
	
  'v1video': {
    'requiresAuthentication': true,
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'count', 'countExactMatch', 'searchVideoScopedByRaceEdu', 'searchVideoByKeyword', 'sortedByName' ],
      'objectLevelPermissions': [ 'create', 'read', 'update', 'delete' ],
      'fieldLevelPermissions': {
        'creatable': [ 'desc', 'isActive', 'keywords', 'length', 'questionGroup', 'sortOrder', 'sourceVersion', 'targetNumber', 'title', 'topicId', 'videoUrl' ],
        'updatable': [ 'desc', 'isActive', 'keywords', 'length', 'questionGroup', 'sortOrder', 'sourceVersion', 'targetNumber', 'title', 'topicId', 'videoUrl' ],
        'readable' : [ 'id', 'desc', 'isActive', 'keywords', 'length', 'questionGroup', 'sortOrder', 'sourceVersion', 'targetNumber', 'title', 'topicId', 'videoUrl' ]
			}
		},
		
    'patient': {
      'permittedScopes': [ 'all', 'searchVideoScopedByRaceEdu', 'searchVideoByKeyword', 'videoGallery' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'desc', 'isActive', 'keywords', 'length', 'questionGroup', 'sortOrder', 'sourceVersion', 'targetNumber', 'title', 'topicId', 'videoUrl' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'all', 'searchVideoScopedByRaceEdu', 'searchVideoByKeyword', 'sortedByName', 'videoGallery' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'id', 'desc', 'isActive', 'keywords', 'length', 'questionGroup', 'sortOrder', 'sourceVersion', 'targetNumber', 'title', 'topicId', 'videoUrl' ]
			}
		},
		
	},
	
  'v1videoauditlogging': {
    'requiresAuthentication': true,
		
    'patient': {
      'permittedScopes': [ 'exactMatch', 'byVideoAndUserId' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'createdAt', 'duration', 'userId', 'videoId', 'watchedEntireVideo' ],
        'updatable': [ 'duration', 'watchedEntireVideo' ],
        'readable' : [ 'id', 'createdAt', 'duration', 'userId', 'videoId', 'watchedEntireVideo' ]
			}
		},
		
    'health_care_provider': {
      'permittedScopes': [ 'exactMatch', 'byVideoAndUserId' ],
      'objectLevelPermissions': [ 'create', 'read', 'update' ],
      'fieldLevelPermissions': {
        'creatable': [ 'createdAt', 'duration', 'userId', 'videoId', 'watchedEntireVideo' ],
        'updatable': [ 'duration', 'watchedEntireVideo' ],
        'readable' : null
			}
		},
		
    'administrator': {
      'permittedScopes': [ 'all', 'exactMatch', 'exportVideoLog' ],
      'objectLevelPermissions': [ 'read' ],
      'fieldLevelPermissions': {
        'creatable': null,
        'updatable': null,
        'readable' : [ 'createdAt', 'duration', 'userId', 'videoId', 'watchedEntireVideo' ]
			}
		},
		
	},
	
};