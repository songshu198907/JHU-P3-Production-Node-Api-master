module.exports = {
	'v2clinicianblockrandomizer': {
		'in': {
			
				'id': 'id',
			
				'clinician_code_id': 'clinicianCodeId',
			
				'intervention_group': 'interventionGroup',
			
				'patient_type': 'patientType',
			
		},
		'out': {
			
				'id': 'id',
			
				'clinicianCodeId': 'clinician_code_id',
			
				'interventionGroup': 'intervention_group',
			
				'patientType': 'patient_type',
			
		}
	},
	'v2cliniciancode': {
		'in': {
			
				'id': 'id',
			
				'code': 'code',
			
				'name': 'name',
			
		},
		'out': {
			
				'id': 'id',
			
				'code': 'code',
			
				'name': 'name',
			
		}
	},
	'v2education': {
		'in': {
			
				'id': 'id',
			
				'name': 'name',
			
		},
		'out': {
			
				'id': 'id',
			
				'name': 'name',
			
		}
	},
	'v2healthcareprovidercontent': {
		'in': {
			
				'id': 'id',
			
				'category_group': 'categoryGroup',
			
				'desc': 'desc',
			
				'external_link': 'externalLink',
			
				'keywords': 'keywords',
			
				'title': 'title',
			
				'topic_id': 'topicId',
			
		},
		'out': {
			
				'id': 'id',
			
				'categoryGroup': 'category_group',
			
				'desc': 'desc',
			
				'externalLink': 'external_link',
			
				'keywords': 'keywords',
			
				'title': 'title',
			
				'topicId': 'topic_id',
			
		}
	},
	'v2jobauditlogging': {
		'in': {
			
				'id': 'id',
			
				'created_at': 'createdAt',
			
				'name': 'name',
			
				'rows_effected': 'rowsEffected',
			
		},
		'out': {
			
				'id': 'id',
			
				'createdAt': 'created_at',
			
				'name': 'name',
			
				'rowsEffected': 'rows_effected',
			
		}
	},
	'v2questioncategory': {
		'in': {
			
				'id': 'id',
			
				'name': 'name',
			
		},
		'out': {
			
				'id': 'id',
			
				'name': 'name',
			
		}
	},
	'v2questioncode': {
		'in': {
			
				'id': 'id',
			
				'name': 'name',
			
		},
		'out': {
			
				'id': 'id',
			
				'name': 'name',
			
		}
	},
	'v2questiontype': {
		'in': {
			
				'id': 'id',
			
				'control_type': 'controlType',
			
				'name': 'name',
			
		},
		'out': {
			
				'id': 'id',
			
				'controlType': 'control_type',
			
				'name': 'name',
			
		}
	},
	'v2race': {
		'in': {
			
				'id': 'id',
			
				'name': 'name',
			
		},
		'out': {
			
				'id': 'id',
			
				'name': 'name',
			
		}
	},
	'v2searchauditlogging': {
		'in': {
			
				'id': 'id',
			
				'created_at': 'createdAt',
			
				'search_term': 'searchTerm',
			
				'user_id': 'userId',
			
		},
		'out': {
			
				'id': 'id',
			
				'createdAt': 'created_at',
			
				'searchTerm': 'search_term',
			
				'userId': 'user_id',
			
		}
	},
	'v2sendgrid': {
		'in': {
			
				'id': 'id',
			
		},
		'out': {
			
				'id': 'id',
			
		}
	},
	'v2setting': {
		'in': {
			
				'id': 'id',
			
				'aws_healthcare_content_bucket_name': 'awsHealthcareContentBucketName',
			
				'aws_video_bucket_name': 'awsVideoBucketName',
			
				'contact_user_registration_email_text': 'contactUserRegistrationEmailText',
			
				'contact_user_registration_subject': 'contactUserRegistrationSubject',
			
				'forgot_password_email_text': 'forgotPasswordEmailText',
			
				'forgot_password_subject': 'forgotPasswordSubject',
			
				'from_email': 'fromEmail',
			
				'sms_phone_number': 'smsPhoneNumber',
			
				'survey_completion_email_subject': 'surveyCompletionEmailSubject',
			
				'survey_completion_email_text': 'surveyCompletionEmailText',
			
				'survey_notification_email_text': 'surveyNotificationEmailText',
			
				'survey_notification_final_sms_text': 'surveyNotificationFinalSmsText',
			
				'survey_notification_first_reminder_email_text': 'surveyNotificationFirstReminderEmailText',
			
				'survey_notification_first_reminder_subject': 'surveyNotificationFirstReminderSubject',
			
				'survey_notification_subject': 'surveyNotificationSubject',

				'take_first_survey_text': 'takeFirstSurveyText',
  
				'after_first_survey_complete_text': 'afterFirstSurveyCompleteText',

				'post_video_thanking_text': 'postVideoThankingText',
			
				'terms_and_conditions': 'termsAndConditions',

				
  			
		},
		'out': {
			
				'id': 'id',
			
				'awsHealthcareContentBucketName': 'aws_healthcare_content_bucket_name',
			
				'awsVideoBucketName': 'aws_video_bucket_name',
			
				'contactUserRegistrationEmailText': 'contact_user_registration_email_text',
			
				'contactUserRegistrationSubject': 'contact_user_registration_subject',
			
				'forgotPasswordEmailText': 'forgot_password_email_text',
			
				'forgotPasswordSubject': 'forgot_password_subject',
			
				'fromEmail': 'from_email',
			
				'smsPhoneNumber': 'sms_phone_number',
			
				'surveyCompletionEmailSubject': 'survey_completion_email_subject',
			
				'surveyCompletionEmailText': 'survey_completion_email_text',
			
				'surveyNotificationEmailText': 'survey_notification_email_text',
			
				'surveyNotificationFinalSmsText': 'survey_notification_final_sms_text',
			
				'surveyNotificationFirstReminderEmailText': 'survey_notification_first_reminder_email_text',
			
				'surveyNotificationFirstReminderSubject': 'survey_notification_first_reminder_subject',
			
				'surveyNotificationSubject': 'survey_notification_subject',

				'takeFirstSurveyText':'take_first_survey_text',
  
				'afterFirstSurveyCompleteText':'after_first_survey_complete_text',
				
				'postVideoThankingText' :'post_video_thanking_text',
			
				'termsAndConditions': 'terms_and_conditions',
				
				
			
		}
	},
	'v2survey': {
		'in': {
			
				'id': 'id',
			
				'intervention_group': 'interventionGroup',
			
				'is_active': 'isActive',
			
				'name': 'name',
			
				'patient_type': 'patientType',
			
				'survey_type': 'surveyType',
			
				'total_questions': 'totalQuestions',
			
				'version': 'version',
			
		},
		'out': {
			
				'id': 'id',
			
				'interventionGroup': 'intervention_group',
			
				'isActive': 'is_active',
			
				'name': 'name',
			
				'patientType': 'patient_type',
			
				'surveyType': 'survey_type',
			
				'totalQuestions': 'total_questions',
			
				'version': 'version',
			
		}
	},
	'v2surveyanswer': {
		'in': {
			
				'id': 'id',
			
				'allow_free_form': 'allowFreeForm',
			
				'free_form_data_type': 'freeFormDataType',
			
				'label': 'label',
			
				'sort_order': 'sortOrder',
			
				'survey_question_id': 'surveyQuestionId',
			
				'video_target_number': 'videoTargetNumber',
			
				'weight': 'weight',
			
		},
		'out': {
			
				'id': 'id',
			
				'allowFreeForm': 'allow_free_form',
			
				'freeFormDataType': 'free_form_data_type',
			
				'label': 'label',
			
				'sortOrder': 'sort_order',
			
				'surveyQuestionId': 'survey_question_id',
			
				'videoTargetNumber': 'video_target_number',
			
				'weight': 'weight',
			
		}
	},
	'v2surveyquestion': {
		'in': {
			
				'id': 'id',
			
				'did_you_know_text': 'didYouKnowText',
			
				'label': 'label',
			
				'question_category_id': 'questionCategoryId',
			
				'question_code_id': 'questionCodeId',
			
				'question_group': 'questionGroup',
			
				'question_text': 'questionText',
			
				'question_type_id': 'questionTypeId',
			
				'required_answer': 'requiredAnswer',
			
				'sort_order': 'sortOrder',
			
				'survey_id': 'surveyId',
			
		},
		'out': {
			
				'id': 'id',
			
				'didYouKnowText': 'did_you_know_text',
			
				'label': 'label',
			
				'questionCategoryId': 'question_category_id',
			
				'questionCodeId': 'question_code_id',
			
				'questionGroup': 'question_group',
			
				'questionText': 'question_text',
			
				'questionTypeId': 'question_type_id',
			
				'requiredAnswer': 'required_answer',
			
				'sortOrder': 'sort_order',
			
				'surveyId': 'survey_id',
			
		}
	},
	'v2surveyquestionskiplogic': {
		'in': {
			
				'id': 'id',
			
				'skip_question_codes': 'skipQuestionCodes',
			
				'survey_answer_id': 'surveyAnswerId',
			
		},
		'out': {
			
				'id': 'id',
			
				'skipQuestionCodes': 'skip_question_codes',
			
				'surveyAnswerId': 'survey_answer_id',
			
		}
	},
	'v2topic': {
		'in': {
			
				'id': 'id',
			
				'name': 'name',
			
		},
		'out': {
			
				'id': 'id',
			
				'name': 'name',
			
		}
	},
	'v2twilio': {
		'in': {
			
				'id': 'id',
			
		},
		'out': {
			
				'id': 'id',
			
		}
	},
	'v2user': {
		'in': {
			
				'id': 'id',
			
				'actual_child_birth': 'actualChildBirth',
			
				'address': 'address',
			
				'cell_phone': 'cellPhone',
			
				'city': 'city',
			
				'clinician_code_id': 'clinicianCodeId',
			
				'clinic_name': 'clinicName',
			
				'consent_accepted_on': 'consentAcceptedOn',
			
				'contact_cell_phone': 'contactCellPhone',
			
				'contact_email': 'contactEmail',
			
				'contact_home_phone': 'contactHomePhone',
			
				'contact_name': 'contactName',
			
				'deactivated_on': 'deactivatedOn',
			
				'education_id': 'educationId',
			
				'email': 'email',
			
				'expected_child_birth': 'expectedChildBirth',
			
				'first_name': 'firstName',
			
				'has_contact_users': 'hasContactUsers',
			
				'home_phone': 'homePhone',
			
				'intervention_group': 'interventionGroup',
			
				'is_deactive': 'isDeactive',
			
				'last_name': 'lastName',
			
				'parent_relationship_type': 'parentRelationshipType',
			
				'parent_user_id': 'parentUserId',
			
				'password': 'password',
			
				'password_confirmation': 'passwordConfirmation',
			
				'password_digest': 'passwordDigest',
			
				'patient_type': 'patientType',
			
				'postal_code': 'postalCode',
			
				'race_id': 'raceId',
			
				'reason_for_deactivation': 'reasonForDeactivation',
			
				'reset_password': 'resetPassword',
			
				'role': 'role',
			
				'state': 'state',
			
				'updated_user_profile': 'updatedUserProfile',
			
				'vaccination_reminders': 'vaccinationReminders',

				'enrollment_id':'enrollmentId',
			
				'x_session_id': 'xSessionId',
			
		},
		'out': {
			
				'id': 'id',
			
				'actualChildBirth': 'actual_child_birth',
			
				'address': 'address',
			
				'cellPhone': 'cell_phone',
			
				'city': 'city',
			
				'clinicianCodeId': 'clinician_code_id',
			
				'clinicName': 'clinic_name',
			
				'consentAcceptedOn': 'consent_accepted_on',
			
				'contactCellPhone': 'contact_cell_phone',
			
				'contactEmail': 'contact_email',
			
				'contactHomePhone': 'contact_home_phone',
			
				'contactName': 'contact_name',
			
				'deactivatedOn': 'deactivated_on',
			
				'educationId': 'education_id',
			
				'email': 'email',
			
				'expectedChildBirth': 'expected_child_birth',
			
				'firstName': 'first_name',
			
				'hasContactUsers': 'has_contact_users',
			
				'homePhone': 'home_phone',
			
				'interventionGroup': 'intervention_group',
			
				'isDeactive': 'is_deactive',
			
				'lastName': 'last_name',
			
				'parentRelationshipType': 'parent_relationship_type',
			
				'parentUserId': 'parent_user_id',
			
				'password': 'password',
			
				'passwordConfirmation': 'password_confirmation',
			
				'passwordDigest': 'password_digest',
			
				'patientType': 'patient_type',
			
				'postalCode': 'postal_code',
			
				'raceId': 'race_id',
			
				'reasonForDeactivation': 'reason_for_deactivation',
			
				'resetPassword': 'reset_password',
			
				'role': 'role',
			
				'state': 'state',
			
				'updatedUserProfile': 'updated_user_profile',
			
				'vaccinationReminders': 'vaccination_reminders',

				'enrollmentId':'enrollment_id',
			
				'xSessionId': 'x_session_id',
			
		}
	},
	'v2userauditlogging': {
		'in': {
			
				'id': 'id',
			
				'ip_address': 'ipAddress',
			
				'logged_in_at': 'loggedInAt',
			
				'logged_out_at': 'loggedOutAt',
			
				'user_agent': 'userAgent',
			
				'user_id': 'userId',
			
		},
		'out': {
			
				'id': 'id',
			
				'ipAddress': 'ip_address',
			
				'loggedInAt': 'logged_in_at',
			
				'loggedOutAt': 'logged_out_at',
			
				'userAgent': 'user_agent',
			
				'userId': 'user_id',
			
		}
	},
	'v2usersurvey': {
		'in': {
			
				'id': 'id',
			
				'completed_at': 'completedAt',
			
				'completition': 'completition',
			
				'created_at': 'createdAt',
			
				'currentuseranswers': 'currentuseranswers',
			
				'first_question': 'firstQuestion',
			
				'first_question_id': 'firstQuestionId',
			
				'first_reminder': 'firstReminder',
			
				'is_complete': 'isComplete',
			
				'matched_videos': 'matchedVideos',
			
				'maternal_video_complete': 'maternalVideoComplete',
			
				'maternal_video_number': 'maternalVideoNumber',
			
				'maternal_video_position': 'maternalVideoPosition',
			
				'pediatric_video_complete': 'pediatricVideoComplete',
			
				'pediatric_video_number': 'pediatricVideoNumber',
			
				'pediatric_video_position': 'pediatricVideoPosition',
			
				'question_count': 'questionCount',
			
				'second_reminder': 'secondReminder',
			
				'survey_id': 'surveyId',
			
				'user_id': 'userId',
			
				'video_source_version': 'videoSourceVersion',
			
		},
		'out': {
			
				'id': 'id',
			
				'completedAt': 'completed_at',
			
				'completition': 'completition',
			
				'createdAt': 'created_at',
			
				'currentuseranswers': 'currentuseranswers',
			
				'firstQuestion': 'first_question',
			
				'firstQuestionId': 'first_question_id',
			
				'firstReminder': 'first_reminder',
			
				'isComplete': 'is_complete',
			
				'matchedVideos': 'matched_videos',
			
				'maternalVideoComplete': 'maternal_video_complete',
			
				'maternalVideoNumber': 'maternal_video_number',
			
				'maternalVideoPosition': 'maternal_video_position',
			
				'pediatricVideoComplete': 'pediatric_video_complete',
			
				'pediatricVideoNumber': 'pediatric_video_number',
			
				'pediatricVideoPosition': 'pediatric_video_position',
			
				'questionCount': 'question_count',
			
				'secondReminder': 'second_reminder',
			
				'surveyId': 'survey_id',
			
				'userId': 'user_id',
			
				'videoSourceVersion': 'video_source_version',
			
		}
	},
	'v2usersurveyanswer': {
		'in': {
			
				'id': 'id',
			
				'applied_skip_logic_id': 'appliedSkipLogicId',
			
				'free_form_response': 'freeFormResponse',
			
				'nextquestion': 'nextquestion',
			
				'previousquestion': 'previousquestion',
			
				'question_code_id': 'questionCodeId',
			
				'question_group': 'questionGroup',
			
				'question_order': 'questionOrder',
			
				'skipped': 'skipped',
			
				'survey_answer_id': 'surveyAnswerId',
			
				'survey_question_id': 'surveyQuestionId',
			
				'user_survey_id': 'userSurveyId',
			
		},
		'out': {
			
				'id': 'id',
			
				'appliedSkipLogicId': 'applied_skip_logic_id',
			
				'freeFormResponse': 'free_form_response',
			
				'nextquestion': 'nextquestion',
			
				'previousquestion': 'previousquestion',
			
				'questionCodeId': 'question_code_id',
			
				'questionGroup': 'question_group',
			
				'questionOrder': 'question_order',
			
				'skipped': 'skipped',
			
				'surveyAnswerId': 'survey_answer_id',
			
				'surveyQuestionId': 'survey_question_id',
			
				'userSurveyId': 'user_survey_id',
			
		}
	},
	'v2usersurveyvideo': {
		'in': {
			
				'id': 'id',
			
				'is_complete': 'isComplete',
			
				'sort_order': 'sortOrder',
			
				'user_survey_id': 'userSurveyId',
			
				'video_number': 'videoNumber',
			
				'video_position': 'videoPosition',
			
				'video_source_version': 'videoSourceVersion',
			
				'video_type': 'videoType',
			
		},
		'out': {
			
				'id': 'id',
			
				'isComplete': 'is_complete',
			
				'sortOrder': 'sort_order',
			
				'userSurveyId': 'user_survey_id',
			
				'videoNumber': 'video_number',
			
				'videoPosition': 'video_position',
			
				'videoSourceVersion': 'video_source_version',
			
				'videoType': 'video_type',
			
		}
	},
	'v2vaccinationreminder': {
		'in': {
			
				'id': 'id',
			
				'message_text': 'messageText',
			
				'trigger_days_from_dob': 'triggerDaysFromDob',
			
		},
		'out': {
			
				'id': 'id',
			
				'messageText': 'message_text',
			
				'triggerDaysFromDob': 'trigger_days_from_dob',
			
		}
	},
	'v2video': {
		'in': {
			
				'id': 'id',
			
				'desc': 'desc',
			
				'is_active': 'isActive',
			
				'keywords': 'keywords',
			
				'length': 'length',
			
				'question_group': 'questionGroup',
			
				'sort_order': 'sortOrder',
			
				'source_version': 'sourceVersion',
			
				'target_number': 'targetNumber',
			
				'title': 'title',
			
				'topic_id': 'topicId',
			
				'video_url': 'videoUrl',
			
		},
		'out': {
			
				'id': 'id',
			
				'desc': 'desc',
			
				'isActive': 'is_active',
			
				'keywords': 'keywords',
			
				'length': 'length',
			
				'questionGroup': 'question_group',
			
				'sortOrder': 'sort_order',
			
				'sourceVersion': 'source_version',
			
				'targetNumber': 'target_number',
			
				'title': 'title',
			
				'topicId': 'topic_id',
			
				'videoUrl': 'video_url',
			
		}
	},
	'v2videoauditlogging': {
		'in': {
			
				'id': 'id',
			
				'created_at': 'createdAt',
			
				'duration': 'duration',
			
				'user_id': 'userId',
			
				'video_id': 'videoId',
			
				'watched_entire_video': 'watchedEntireVideo',
			
		},
		'out': {
			
				'id': 'id',
			
				'createdAt': 'created_at',
			
				'duration': 'duration',
			
				'userId': 'user_id',
			
				'videoId': 'video_id',
			
				'watchedEntireVideo': 'watched_entire_video',
			
		}
	},
};
