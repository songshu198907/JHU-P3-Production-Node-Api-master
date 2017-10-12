'use strict';


// Declare app level module which depends on filters, and services
angular.module('adminConsole', [
  'ngRoute',
  'adminConsole.services',
  'adminConsole.controllers',
  'adminConsole.controllers.AnalyticsControllers',
  'adminConsole.controllers.DeviceControllers',
  'adminConsole.controllers.MessageControllers',
  'adminConsole.controllers.ChannelControllers',
  'adminConsole.controllers.AppControllers',
  'adminConsole.controllers.V2ClinicianBlockRandomizerControllers',
  'adminConsole.controllers.V2ClinicianCodeControllers',
  'adminConsole.controllers.V2EducationControllers',
  'adminConsole.controllers.V2HealthcareProviderContentControllers',
  'adminConsole.controllers.V2JobAuditLoggingControllers',
  'adminConsole.controllers.V2QuestionCategoryControllers',
  'adminConsole.controllers.V2QuestionCodeControllers',
  'adminConsole.controllers.V2QuestionTypeControllers',
  'adminConsole.controllers.V2RaceControllers',
  'adminConsole.controllers.V2SearchAuditLoggingControllers',
  'adminConsole.controllers.V2SendGridControllers',
  'adminConsole.controllers.V2SettingControllers',
  'adminConsole.controllers.V2SurveyControllers',
  'adminConsole.controllers.V2SurveyAnswerControllers',
  'adminConsole.controllers.V2SurveyQuestionControllers',
  'adminConsole.controllers.V2SurveyQuestionSkipLogicControllers',
  'adminConsole.controllers.V2TopicControllers',
  'adminConsole.controllers.V2TwilioControllers',
  'adminConsole.controllers.V2UserControllers',
  'adminConsole.controllers.V2UserAuditLoggingControllers',
  'adminConsole.controllers.V2UserSurveyControllers',
  'adminConsole.controllers.V2UserSurveyAnswerControllers',
  'adminConsole.controllers.V2UserSurveyVideoControllers',
  'adminConsole.controllers.V2VaccinationReminderControllers',
  'adminConsole.controllers.V2VideoControllers',
  'adminConsole.controllers.V2VideoAuditLoggingControllers',
  'adminConsole.directives'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', { templateUrl: 'templates/views/partials/mainIndex.html', controller: 'MainIndexController' });
  $routeProvider.when('/sign_in', { templateUrl: 'templates/views/partials/signIn.html', controller: 'LoginController' });
  $routeProvider.when('/docs', { templateUrl: 'templates/views/partials/docs.html' });
  $routeProvider.when('/sign_out', { template: '', controller: 'LogoutController' });
  $routeProvider.when('/clinician_block_randomizers', {templateUrl: 'templates/views/partials/clinician_block_randomizers/index.html', controller: 'V2ClinicianBlockRandomizerListController', resolve: {
    pagination: ['PaginationService', 'V2ClinicianBlockRandomizer', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'clinician_block_randomizers', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/clinician_block_randomizers/index', {templateUrl: 'templates/views/partials/clinician_block_randomizers/index.html', controller: 'V2ClinicianBlockRandomizerListController'});
  $routeProvider.when('/clinician_block_randomizers/new', {templateUrl: 'templates/views/partials/clinician_block_randomizers/create.html', controller: 'V2ClinicianBlockRandomizerCreateController'});
  $routeProvider.when('/clinician_block_randomizers/:objectId/edit', {templateUrl: 'templates/views/partials/clinician_block_randomizers/edit.html', controller: 'V2ClinicianBlockRandomizerEditController'});
  $routeProvider.when('/clinician_block_randomizers/:objectId', {templateUrl: 'templates/views/partials/clinician_block_randomizers/show.html', controller: 'V2ClinicianBlockRandomizerDetailController'});
  $routeProvider.when('/clinician_codes', {templateUrl: 'templates/views/partials/clinician_codes/index.html', controller: 'V2ClinicianCodeListController', resolve: {
    pagination: ['PaginationService', 'V2ClinicianCode', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'clinician_codes', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/clinician_codes/index', {templateUrl: 'templates/views/partials/clinician_codes/index.html', controller: 'V2ClinicianCodeListController'});
  $routeProvider.when('/clinician_codes/new', {templateUrl: 'templates/views/partials/clinician_codes/create.html', controller: 'V2ClinicianCodeCreateController'});
  $routeProvider.when('/clinician_codes/:objectId/edit', {templateUrl: 'templates/views/partials/clinician_codes/edit.html', controller: 'V2ClinicianCodeEditController'});
  $routeProvider.when('/clinician_codes/:objectId', {templateUrl: 'templates/views/partials/clinician_codes/show.html', controller: 'V2ClinicianCodeDetailController'});
  $routeProvider.when('/educations', {templateUrl: 'templates/views/partials/educations/index.html', controller: 'V2EducationListController', resolve: {
    pagination: ['PaginationService', 'V2Education', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'educations', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/educations/index', {templateUrl: 'templates/views/partials/educations/index.html', controller: 'V2EducationListController'});
  $routeProvider.when('/educations/new', {templateUrl: 'templates/views/partials/educations/create.html', controller: 'V2EducationCreateController'});
  $routeProvider.when('/educations/:objectId/edit', {templateUrl: 'templates/views/partials/educations/edit.html', controller: 'V2EducationEditController'});
  $routeProvider.when('/educations/:objectId', {templateUrl: 'templates/views/partials/educations/show.html', controller: 'V2EducationDetailController'});
  $routeProvider.when('/healthcare_provider_contents', {templateUrl: 'templates/views/partials/healthcare_provider_contents/index.html', controller: 'V2HealthcareProviderContentListController', resolve: {
    pagination: ['PaginationService', 'V2HealthcareProviderContent', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'healthcare_provider_contents', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/healthcare_provider_contents/index', {templateUrl: 'templates/views/partials/healthcare_provider_contents/index.html', controller: 'V2HealthcareProviderContentListController'});
  $routeProvider.when('/healthcare_provider_contents/new', {templateUrl: 'templates/views/partials/healthcare_provider_contents/create.html', controller: 'V2HealthcareProviderContentCreateController'});
  $routeProvider.when('/healthcare_provider_contents/:objectId/edit', {templateUrl: 'templates/views/partials/healthcare_provider_contents/edit.html', controller: 'V2HealthcareProviderContentEditController'});
  $routeProvider.when('/healthcare_provider_contents/:objectId', {templateUrl: 'templates/views/partials/healthcare_provider_contents/show.html', controller: 'V2HealthcareProviderContentDetailController'});
  $routeProvider.when('/job_audit_loggings', {templateUrl: 'templates/views/partials/job_audit_loggings/index.html', controller: 'V2JobAuditLoggingListController', resolve: {
    pagination: ['PaginationService', 'V2JobAuditLogging', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'job_audit_loggings', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/job_audit_loggings/index', {templateUrl: 'templates/views/partials/job_audit_loggings/index.html', controller: 'V2JobAuditLoggingListController'});
  $routeProvider.when('/job_audit_loggings/new', {templateUrl: 'templates/views/partials/job_audit_loggings/create.html', controller: 'V2JobAuditLoggingCreateController'});
  $routeProvider.when('/job_audit_loggings/:objectId/edit', {templateUrl: 'templates/views/partials/job_audit_loggings/edit.html', controller: 'V2JobAuditLoggingEditController'});
  $routeProvider.when('/job_audit_loggings/:objectId', {templateUrl: 'templates/views/partials/job_audit_loggings/show.html', controller: 'V2JobAuditLoggingDetailController'});
  $routeProvider.when('/question_categories', {templateUrl: 'templates/views/partials/question_categories/index.html', controller: 'V2QuestionCategoryListController', resolve: {
    pagination: ['PaginationService', 'V2QuestionCategory', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'question_categories', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/question_categories/index', {templateUrl: 'templates/views/partials/question_categories/index.html', controller: 'V2QuestionCategoryListController'});
  $routeProvider.when('/question_categories/new', {templateUrl: 'templates/views/partials/question_categories/create.html', controller: 'V2QuestionCategoryCreateController'});
  $routeProvider.when('/question_categories/:objectId/edit', {templateUrl: 'templates/views/partials/question_categories/edit.html', controller: 'V2QuestionCategoryEditController'});
  $routeProvider.when('/question_categories/:objectId', {templateUrl: 'templates/views/partials/question_categories/show.html', controller: 'V2QuestionCategoryDetailController'});
  $routeProvider.when('/question_codes', {templateUrl: 'templates/views/partials/question_codes/index.html', controller: 'V2QuestionCodeListController', resolve: {
    pagination: ['PaginationService', 'V2QuestionCode', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'question_codes', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/question_codes/index', {templateUrl: 'templates/views/partials/question_codes/index.html', controller: 'V2QuestionCodeListController'});
  $routeProvider.when('/question_codes/new', {templateUrl: 'templates/views/partials/question_codes/create.html', controller: 'V2QuestionCodeCreateController'});
  $routeProvider.when('/question_codes/:objectId/edit', {templateUrl: 'templates/views/partials/question_codes/edit.html', controller: 'V2QuestionCodeEditController'});
  $routeProvider.when('/question_codes/:objectId', {templateUrl: 'templates/views/partials/question_codes/show.html', controller: 'V2QuestionCodeDetailController'});
  $routeProvider.when('/question_types', {templateUrl: 'templates/views/partials/question_types/index.html', controller: 'V2QuestionTypeListController', resolve: {
    pagination: ['PaginationService', 'V2QuestionType', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'question_types', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/question_types/index', {templateUrl: 'templates/views/partials/question_types/index.html', controller: 'V2QuestionTypeListController'});
  $routeProvider.when('/question_types/new', {templateUrl: 'templates/views/partials/question_types/create.html', controller: 'V2QuestionTypeCreateController'});
  $routeProvider.when('/question_types/:objectId/edit', {templateUrl: 'templates/views/partials/question_types/edit.html', controller: 'V2QuestionTypeEditController'});
  $routeProvider.when('/question_types/:objectId', {templateUrl: 'templates/views/partials/question_types/show.html', controller: 'V2QuestionTypeDetailController'});
  $routeProvider.when('/races', {templateUrl: 'templates/views/partials/races/index.html', controller: 'V2RaceListController', resolve: {
    pagination: ['PaginationService', 'V2Race', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'races', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/races/index', {templateUrl: 'templates/views/partials/races/index.html', controller: 'V2RaceListController'});
  $routeProvider.when('/races/new', {templateUrl: 'templates/views/partials/races/create.html', controller: 'V2RaceCreateController'});
  $routeProvider.when('/races/:objectId/edit', {templateUrl: 'templates/views/partials/races/edit.html', controller: 'V2RaceEditController'});
  $routeProvider.when('/races/:objectId', {templateUrl: 'templates/views/partials/races/show.html', controller: 'V2RaceDetailController'});
  $routeProvider.when('/search_audit_loggings', {templateUrl: 'templates/views/partials/search_audit_loggings/index.html', controller: 'V2SearchAuditLoggingListController', resolve: {
    pagination: ['PaginationService', 'V2SearchAuditLogging', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'search_audit_loggings', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/search_audit_loggings/index', {templateUrl: 'templates/views/partials/search_audit_loggings/index.html', controller: 'V2SearchAuditLoggingListController'});
  $routeProvider.when('/search_audit_loggings/new', {templateUrl: 'templates/views/partials/search_audit_loggings/create.html', controller: 'V2SearchAuditLoggingCreateController'});
  $routeProvider.when('/search_audit_loggings/:objectId/edit', {templateUrl: 'templates/views/partials/search_audit_loggings/edit.html', controller: 'V2SearchAuditLoggingEditController'});
  $routeProvider.when('/search_audit_loggings/:objectId', {templateUrl: 'templates/views/partials/search_audit_loggings/show.html', controller: 'V2SearchAuditLoggingDetailController'});
  $routeProvider.when('/send_grids', {templateUrl: 'templates/views/partials/send_grids/index.html', controller: 'V2SendGridListController', resolve: {
    pagination: ['PaginationService', 'V2SendGrid', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'send_grids', supportsServerPagination: false});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/send_grids/index', {templateUrl: 'templates/views/partials/send_grids/index.html', controller: 'V2SendGridListController'});
  $routeProvider.when('/send_grids/new', {templateUrl: 'templates/views/partials/send_grids/create.html', controller: 'V2SendGridCreateController'});
  $routeProvider.when('/send_grids/:objectId/edit', {templateUrl: 'templates/views/partials/send_grids/edit.html', controller: 'V2SendGridEditController'});
  $routeProvider.when('/send_grids/:objectId', {templateUrl: 'templates/views/partials/send_grids/show.html', controller: 'V2SendGridDetailController'});
  $routeProvider.when('/settings', {templateUrl: 'templates/views/partials/settings/index.html', controller: 'V2SettingListController', resolve: {
    pagination: ['PaginationService', 'V2Setting', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'settings', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/settings/index', {templateUrl: 'templates/views/partials/settings/index.html', controller: 'V2SettingListController'});
  $routeProvider.when('/settings/new', {templateUrl: 'templates/views/partials/settings/create.html', controller: 'V2SettingCreateController'});
  $routeProvider.when('/settings/:objectId/edit', {templateUrl: 'templates/views/partials/settings/edit.html', controller: 'V2SettingEditController'});
  $routeProvider.when('/settings/:objectId', {templateUrl: 'templates/views/partials/settings/show.html', controller: 'V2SettingDetailController'});
  $routeProvider.when('/surveys', {templateUrl: 'templates/views/partials/surveys/index.html', controller: 'V2SurveyListController', resolve: {
    pagination: ['PaginationService', 'V2Survey', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'surveys', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/surveys/index', {templateUrl: 'templates/views/partials/surveys/index.html', controller: 'V2SurveyListController'});
  $routeProvider.when('/surveys/new', {templateUrl: 'templates/views/partials/surveys/create.html', controller: 'V2SurveyCreateController'});
  $routeProvider.when('/surveys/:objectId/edit', {templateUrl: 'templates/views/partials/surveys/edit.html', controller: 'V2SurveyEditController'});
  $routeProvider.when('/surveys/:objectId', {templateUrl: 'templates/views/partials/surveys/show.html', controller: 'V2SurveyDetailController'});
  $routeProvider.when('/survey_answers', {templateUrl: 'templates/views/partials/survey_answers/index.html', controller: 'V2SurveyAnswerListController', resolve: {
    pagination: ['PaginationService', 'V2SurveyAnswer', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'survey_answers', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/survey_answers/index', {templateUrl: 'templates/views/partials/survey_answers/index.html', controller: 'V2SurveyAnswerListController'});
  $routeProvider.when('/survey_answers/new', {templateUrl: 'templates/views/partials/survey_answers/create.html', controller: 'V2SurveyAnswerCreateController'});
  $routeProvider.when('/survey_answers/:objectId/edit', {templateUrl: 'templates/views/partials/survey_answers/edit.html', controller: 'V2SurveyAnswerEditController'});
  $routeProvider.when('/survey_answers/:objectId', {templateUrl: 'templates/views/partials/survey_answers/show.html', controller: 'V2SurveyAnswerDetailController'});
  $routeProvider.when('/survey_questions', {templateUrl: 'templates/views/partials/survey_questions/index.html', controller: 'V2SurveyQuestionListController', resolve: {
    pagination: ['PaginationService', 'V2SurveyQuestion', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'survey_questions', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/survey_questions/index', {templateUrl: 'templates/views/partials/survey_questions/index.html', controller: 'V2SurveyQuestionListController'});
  $routeProvider.when('/survey_questions/new', {templateUrl: 'templates/views/partials/survey_questions/create.html', controller: 'V2SurveyQuestionCreateController'});
  $routeProvider.when('/survey_questions/:objectId/edit', {templateUrl: 'templates/views/partials/survey_questions/edit.html', controller: 'V2SurveyQuestionEditController'});
  $routeProvider.when('/survey_questions/:objectId', {templateUrl: 'templates/views/partials/survey_questions/show.html', controller: 'V2SurveyQuestionDetailController'});
  $routeProvider.when('/survey_question_skip_logics', {templateUrl: 'templates/views/partials/survey_question_skip_logics/index.html', controller: 'V2SurveyQuestionSkipLogicListController', resolve: {
    pagination: ['PaginationService', 'V2SurveyQuestionSkipLogic', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'survey_question_skip_logics', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/survey_question_skip_logics/index', {templateUrl: 'templates/views/partials/survey_question_skip_logics/index.html', controller: 'V2SurveyQuestionSkipLogicListController'});
  $routeProvider.when('/survey_question_skip_logics/new', {templateUrl: 'templates/views/partials/survey_question_skip_logics/create.html', controller: 'V2SurveyQuestionSkipLogicCreateController'});
  $routeProvider.when('/survey_question_skip_logics/:objectId/edit', {templateUrl: 'templates/views/partials/survey_question_skip_logics/edit.html', controller: 'V2SurveyQuestionSkipLogicEditController'});
  $routeProvider.when('/survey_question_skip_logics/:objectId', {templateUrl: 'templates/views/partials/survey_question_skip_logics/show.html', controller: 'V2SurveyQuestionSkipLogicDetailController'});
  $routeProvider.when('/topics', {templateUrl: 'templates/views/partials/topics/index.html', controller: 'V2TopicListController', resolve: {
    pagination: ['PaginationService', 'V2Topic', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'topics', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/topics/index', {templateUrl: 'templates/views/partials/topics/index.html', controller: 'V2TopicListController'});
  $routeProvider.when('/topics/new', {templateUrl: 'templates/views/partials/topics/create.html', controller: 'V2TopicCreateController'});
  $routeProvider.when('/topics/:objectId/edit', {templateUrl: 'templates/views/partials/topics/edit.html', controller: 'V2TopicEditController'});
  $routeProvider.when('/topics/:objectId', {templateUrl: 'templates/views/partials/topics/show.html', controller: 'V2TopicDetailController'});
  $routeProvider.when('/twilios', {templateUrl: 'templates/views/partials/twilios/index.html', controller: 'V2TwilioListController', resolve: {
    pagination: ['PaginationService', 'V2Twilio', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'twilios', supportsServerPagination: false});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/twilios/index', {templateUrl: 'templates/views/partials/twilios/index.html', controller: 'V2TwilioListController'});
  $routeProvider.when('/twilios/new', {templateUrl: 'templates/views/partials/twilios/create.html', controller: 'V2TwilioCreateController'});
  $routeProvider.when('/twilios/:objectId/edit', {templateUrl: 'templates/views/partials/twilios/edit.html', controller: 'V2TwilioEditController'});
  $routeProvider.when('/twilios/:objectId', {templateUrl: 'templates/views/partials/twilios/show.html', controller: 'V2TwilioDetailController'});
  $routeProvider.when('/users', {templateUrl: 'templates/views/partials/users/index.html', controller: 'V2UserListController', resolve: {
    pagination: ['PaginationService', 'V2User', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'users', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/users/index', {templateUrl: 'templates/views/partials/users/index.html', controller: 'V2UserListController'});
  $routeProvider.when('/users/new', {templateUrl: 'templates/views/partials/users/create.html', controller: 'V2UserCreateController'});
  $routeProvider.when('/users/:objectId/edit', {templateUrl: 'templates/views/partials/users/edit.html', controller: 'V2UserEditController'});
  $routeProvider.when('/users/:objectId', {templateUrl: 'templates/views/partials/users/show.html', controller: 'V2UserDetailController'});
  $routeProvider.when('/user_audit_loggings', {templateUrl: 'templates/views/partials/user_audit_loggings/index.html', controller: 'V2UserAuditLoggingListController', resolve: {
    pagination: ['PaginationService', 'V2UserAuditLogging', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'user_audit_loggings', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/user_audit_loggings/index', {templateUrl: 'templates/views/partials/user_audit_loggings/index.html', controller: 'V2UserAuditLoggingListController'});
  $routeProvider.when('/user_audit_loggings/new', {templateUrl: 'templates/views/partials/user_audit_loggings/create.html', controller: 'V2UserAuditLoggingCreateController'});
  $routeProvider.when('/user_audit_loggings/:objectId/edit', {templateUrl: 'templates/views/partials/user_audit_loggings/edit.html', controller: 'V2UserAuditLoggingEditController'});
  $routeProvider.when('/user_audit_loggings/:objectId', {templateUrl: 'templates/views/partials/user_audit_loggings/show.html', controller: 'V2UserAuditLoggingDetailController'});
  $routeProvider.when('/user_surveys', {templateUrl: 'templates/views/partials/user_surveys/index.html', controller: 'V2UserSurveyListController', resolve: {
    pagination: ['PaginationService', 'V2UserSurvey', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'user_surveys', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/user_surveys/index', {templateUrl: 'templates/views/partials/user_surveys/index.html', controller: 'V2UserSurveyListController'});
  $routeProvider.when('/user_surveys/new', {templateUrl: 'templates/views/partials/user_surveys/create.html', controller: 'V2UserSurveyCreateController'});
  $routeProvider.when('/user_surveys/:objectId/edit', {templateUrl: 'templates/views/partials/user_surveys/edit.html', controller: 'V2UserSurveyEditController'});
  $routeProvider.when('/user_surveys/:objectId', {templateUrl: 'templates/views/partials/user_surveys/show.html', controller: 'V2UserSurveyDetailController'});
  $routeProvider.when('/user_survey_answers', {templateUrl: 'templates/views/partials/user_survey_answers/index.html', controller: 'V2UserSurveyAnswerListController', resolve: {
    pagination: ['PaginationService', 'V2UserSurveyAnswer', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'user_survey_answers', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/user_survey_answers/index', {templateUrl: 'templates/views/partials/user_survey_answers/index.html', controller: 'V2UserSurveyAnswerListController'});
  $routeProvider.when('/user_survey_answers/new', {templateUrl: 'templates/views/partials/user_survey_answers/create.html', controller: 'V2UserSurveyAnswerCreateController'});
  $routeProvider.when('/user_survey_answers/:objectId/edit', {templateUrl: 'templates/views/partials/user_survey_answers/edit.html', controller: 'V2UserSurveyAnswerEditController'});
  $routeProvider.when('/user_survey_answers/:objectId', {templateUrl: 'templates/views/partials/user_survey_answers/show.html', controller: 'V2UserSurveyAnswerDetailController'});
  $routeProvider.when('/user_survey_videos', {templateUrl: 'templates/views/partials/user_survey_videos/index.html', controller: 'V2UserSurveyVideoListController', resolve: {
    pagination: ['PaginationService', 'V2UserSurveyVideo', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'user_survey_videos', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/user_survey_videos/index', {templateUrl: 'templates/views/partials/user_survey_videos/index.html', controller: 'V2UserSurveyVideoListController'});
  $routeProvider.when('/user_survey_videos/new', {templateUrl: 'templates/views/partials/user_survey_videos/create.html', controller: 'V2UserSurveyVideoCreateController'});
  $routeProvider.when('/user_survey_videos/:objectId/edit', {templateUrl: 'templates/views/partials/user_survey_videos/edit.html', controller: 'V2UserSurveyVideoEditController'});
  $routeProvider.when('/user_survey_videos/:objectId', {templateUrl: 'templates/views/partials/user_survey_videos/show.html', controller: 'V2UserSurveyVideoDetailController'});
  $routeProvider.when('/vaccination_reminders', {templateUrl: 'templates/views/partials/vaccination_reminders/index.html', controller: 'V2VaccinationReminderListController', resolve: {
    pagination: ['PaginationService', 'V2VaccinationReminder', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'vaccination_reminders', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/vaccination_reminders/index', {templateUrl: 'templates/views/partials/vaccination_reminders/index.html', controller: 'V2VaccinationReminderListController'});
  $routeProvider.when('/vaccination_reminders/new', {templateUrl: 'templates/views/partials/vaccination_reminders/create.html', controller: 'V2VaccinationReminderCreateController'});
  $routeProvider.when('/vaccination_reminders/:objectId/edit', {templateUrl: 'templates/views/partials/vaccination_reminders/edit.html', controller: 'V2VaccinationReminderEditController'});
  $routeProvider.when('/vaccination_reminders/:objectId', {templateUrl: 'templates/views/partials/vaccination_reminders/show.html', controller: 'V2VaccinationReminderDetailController'});
  $routeProvider.when('/videos', {templateUrl: 'templates/views/partials/videos/index.html', controller: 'V2VideoListController', resolve: {
    pagination: ['PaginationService', 'V2Video', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'videos', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/videos/index', {templateUrl: 'templates/views/partials/videos/index.html', controller: 'V2VideoListController'});
  $routeProvider.when('/videos/new', {templateUrl: 'templates/views/partials/videos/create.html', controller: 'V2VideoCreateController'});
  $routeProvider.when('/videos/:objectId/edit', {templateUrl: 'templates/views/partials/videos/edit.html', controller: 'V2VideoEditController'});
  $routeProvider.when('/videos/:objectId', {templateUrl: 'templates/views/partials/videos/show.html', controller: 'V2VideoDetailController'});
  $routeProvider.when('/video_audit_loggings', {templateUrl: 'templates/views/partials/video_audit_loggings/index.html', controller: 'V2VideoAuditLoggingListController', resolve: {
    pagination: ['PaginationService', 'V2VideoAuditLogging', function(PaginationService, model) {
      var service = new PaginationService({model: model, modelName: 'video_audit_loggings', supportsServerPagination: true});
      return service.paginate();
    }]
  }});
  $routeProvider.when('/video_audit_loggings/index', {templateUrl: 'templates/views/partials/video_audit_loggings/index.html', controller: 'V2VideoAuditLoggingListController'});
  $routeProvider.when('/video_audit_loggings/new', {templateUrl: 'templates/views/partials/video_audit_loggings/create.html', controller: 'V2VideoAuditLoggingCreateController'});
  $routeProvider.when('/video_audit_loggings/:objectId/edit', {templateUrl: 'templates/views/partials/video_audit_loggings/edit.html', controller: 'V2VideoAuditLoggingEditController'});
  $routeProvider.when('/video_audit_loggings/:objectId', {templateUrl: 'templates/views/partials/video_audit_loggings/show.html', controller: 'V2VideoAuditLoggingDetailController'});
  $routeProvider.when('/messaging', { templateUrl: 'templates/views/partials/messaging/index.html', controller:'AppListController'});
 $routeProvider.when('/messaging/:app_id/index', { templateUrl: 'templates/views/partials/messaging/app/index_app.html', controller: 'MessagingIndexController', resolve: {
    channelPagination: ['PaginationService', 'Channel', '$route', function(PaginationService, model, $route) {
      var app_id = $route.current.params.app_id;
      var service = new PaginationService({model: model, limit: 5, pageParamName: 'channelPage', modelName: 'channel', params: {app_id: app_id}, supportsServerPagination: true});
      return service.paginate();
    }],
    devicePagination: ['PaginationService', 'Device', '$route', function(PaginationService, model, $route) {
      var app_id = $route.current.params.app_id;
      var service = new PaginationService({model: model, limit: 5, pageParamName: 'devicePage', modelName: 'device', params: {app_id: app_id}, supportsServerPagination: true});
      return service.paginate();
    }],
    messagePagination: ['PaginationService', 'Message', '$route', function(PaginationService, model, $route) {
      var app_id = $route.current.params.app_id;
      var service = new PaginationService({model: model, limit: 5, pageParamName: 'messagePage', modelName: 'message', params: {app_id: app_id}, supportsServerPagination: true });
      return service.paginate();
    }]
  }});
$routeProvider.when('/documentation', { templateUrl: 'templates/views/partials/documentation/documentation.html', controller: 'MainIndexController'});
  $routeProvider.when('/messaging/device/index', { templateUrl: 'templates/views/partials/messaging/device/index_device.html', controller: 'DeviceListController'});
  $routeProvider.when('/messaging/:app_id/device/new', { templateUrl: 'templates/views/partials/messaging/device/create_device.html', controller: 'DeviceCreateController'});
  $routeProvider.when('/messaging/new', { templateUrl: 'templates/views/partials/messaging/app/create_app.html', controller: 'AppCreateController'});
  $routeProvider.when('/messaging/:app_id/edit', { templateUrl: 'templates/views/partials/messaging/app/edit_app.html', controller: 'AppEditController'});
  $routeProvider.when('/messaging/:app_id/device/:id/edit', { templateUrl: 'templates/views/partials/messaging/device/edit_device.html', controller: 'DeviceEditController'});
  $routeProvider.when('/messaging/:app_id/device/:id', { templateUrl: 'templates/views/partials/messaging/device/show_device.html', controller: 'DeviceDetailController'});
  $routeProvider.when('/messaging/:app_id/channel/new', { templateUrl: 'templates/views/partials/messaging/channel/create_channel.html', controller: 'ChannelCreateController'});
  $routeProvider.when('/messaging/channel/index', { templateUrl: 'templates/views/partials/messaging/channel/index_channel.html', controller: 'ChannelListController'});
  $routeProvider.when('/messaging/:app_id/channel/:id/edit', { templateUrl: 'templates/views/partials/messaging/channel/edit_channel.html', controller: 'ChannelEditController'});
  $routeProvider.when('/messaging/:app_id/channel/:id', { templateUrl: 'templates/views/partials/messaging/channel/show_channel.html', controller: 'ChannelDetailController'});
  $routeProvider.when('/messaging/message/index', { templateUrl: 'templates/views/partials/messaging/message/index_message.html', controller: 'MessageListController'});
  $routeProvider.when('/messaging/message/new', { templateUrl: 'templates/views/partials/messaging/message/create_message.html', controller: 'MessageCreateController'});
  $routeProvider.when('/messaging/message/:objectId/edit', { templateUrl: 'templates/views/partials/messaging/message/edit_message.html', controller: 'MessageEditController'});
  $routeProvider.when('/messaging/message/:objectId', { templateUrl: 'templates/views/partials/messaging/message/show_message.html', controller: 'MessageDetailController'});
  $routeProvider.when('/analytics', { templateUrl: 'templates/views/partials/analytics/analytics.html', controller: 'AnalyticsMainController' });
  $routeProvider.otherwise({redirectTo: '/index'});
}])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('ResponseInterceptor');
}])
.run(['$rootScope', '$location', 'UserService', function($rootScope, $location, UserService) {
  $rootScope.$on('$locationChangeStart', function(event, next, current) {
    if ( UserService.getCurrentUser() == null ) {
      // Only redirect to sign in page if not already going there
      if ( next.templateUrl !== "templates/views/partials/signIn.html" ) {
        $location.path( "sign_in" );
      }
    }
  });
}]);
