var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'Unauthenticated Default': {"actualChildBirth":"2014-10-08","address":"Abandonment copulating","cellPhone":"Catchalls pocketknife","city":"Hyperventilates convalescences","clinicianCodeId":68046,"clinicName":"Misadventures realer","consentAcceptedOn":"2000-04-05 18:16:46 +0000","contactCellPhone":"Allegorically church","contactEmail":"Anesthesiology texts","contactHomePhone":"Hidden housecleaning","contactName":"Vitamin misapplication","deactivatedOn":"1996-10-07 22:58:04 +0000","educationId":93949,"email":"luigi.kuvalis63@vaccinesurvey.com","expectedChildBirth":"2015-02-04","firstName":"Chang","hasContactUsers":false,"homePhone":"Acknowledgments intrepidly","interventionGroup":"Thundercloud celery","isDeactive":true,"lastName":"Morar","parentRelationshipType":"Spate eavesdropping","parentUserId":12825,"password":"password","passwordConfirmation":"password","passwordDigest":"Augmentations microprocessor","patientType":47691,"postalCode":"Expeditiously pathologically","raceId":76509,"reasonForDeactivation":"Bailey luminary","resetPassword":true,"role":"Unauthenticated Default","state":"Minaret actors","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Insufficiency Christa"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1SendGrid', function() {
  
    beforeEach(function() {
      objects = [];
      agent = superagent.agent();
      
        objects.push({"id":22761});
      
        objects.push({"id":40518});
      
        objects.push({"id":53302});
      
        objects.push({"id":8612});
      
        objects.push({"id":72541});
      
        objects.push({"id":34448});
      
        objects.push({"id":65725});
      
        objects.push({"id":64894});
      
        objects.push({"id":48113});
      
        objects.push({"id":74780});
      
      V1SendGrid.request = function(a, url, vals, context, cb) {
        cb(null, objects);
      };
    });

    afterEach(function() {
      passportStub.logout();
    });
  

  before(function() {
    // Drop existing collections
    
      adapter.drop('memory', 'clinic_block_randomizer', [], function() {})
    
      adapter.drop('memory', 'clinician_codes', [], function() {})
    
      adapter.drop('memory', 'educations', [], function() {})
    
      adapter.drop('memory', 'healthcare_provider_contents', [], function() {})
    
      adapter.drop('memory', 'job_audit_logging', [], function() {})
    
      adapter.drop('memory', 'question_categories', [], function() {})
    
      adapter.drop('memory', 'question_codes', [], function() {})
    
      adapter.drop('memory', 'question_types', [], function() {})
    
      adapter.drop('memory', 'races', [], function() {})
    
      adapter.drop('memory', 'search_audit_logging', [], function() {})
    
      adapter.drop('memory', 'SendGrid', [], function() {})
    
      adapter.drop('memory', 'settings', [], function() {})
    
      adapter.drop('memory', 'surveys', [], function() {})
    
      adapter.drop('memory', 'survey_answers', [], function() {})
    
      adapter.drop('memory', 'survey_questions', [], function() {})
    
      adapter.drop('memory', 'survey_question_skip_logic', [], function() {})
    
      adapter.drop('memory', 'topics', [], function() {})
    
      adapter.drop('memory', 'Twilio', [], function() {})
    
      adapter.drop('memory', 'users', [], function() {})
    
      adapter.drop('memory', 'user_audit_logging', [], function() {})
    
      adapter.drop('memory', 'user_surveys', [], function() {})
    
      adapter.drop('memory', 'user_survey_answers', [], function() {})
    
      adapter.drop('memory', 'vaccination_reminders', [], function() {})
    
      adapter.drop('memory', 'videos', [], function() {})
    
      adapter.drop('memory', 'video_audit_logging', [], function() {})
    
    // Recreate collections
    
      adapter.define('memory', 'clinic_block_randomizer', V1ClinicianBlockRandomizer.attributes, function() {})
    
      adapter.define('memory', 'clinician_codes', V1ClinicianCode.attributes, function() {})
    
      adapter.define('memory', 'educations', V1Education.attributes, function() {})
    
      adapter.define('memory', 'healthcare_provider_contents', V1HealthcareProviderContent.attributes, function() {})
    
      adapter.define('memory', 'job_audit_logging', V1JobAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'question_categories', V1QuestionCategory.attributes, function() {})
    
      adapter.define('memory', 'question_codes', V1QuestionCode.attributes, function() {})
    
      adapter.define('memory', 'question_types', V1QuestionType.attributes, function() {})
    
      adapter.define('memory', 'races', V1Race.attributes, function() {})
    
      adapter.define('memory', 'search_audit_logging', V1SearchAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'SendGrid', V1SendGrid.attributes, function() {})
    
      adapter.define('memory', 'settings', V1Setting.attributes, function() {})
    
      adapter.define('memory', 'surveys', V1Survey.attributes, function() {})
    
      adapter.define('memory', 'survey_answers', V1SurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'survey_questions', V1SurveyQuestion.attributes, function() {})
    
      adapter.define('memory', 'survey_question_skip_logic', V1SurveyQuestionSkipLogic.attributes, function() {})
    
      adapter.define('memory', 'topics', V1Topic.attributes, function() {})
    
      adapter.define('memory', 'Twilio', V1Twilio.attributes, function() {})
    
      adapter.define('memory', 'users', V1User.attributes, function() {})
    
      adapter.define('memory', 'user_audit_logging', V1UserAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'user_surveys', V1UserSurvey.attributes, function() {})
    
      adapter.define('memory', 'user_survey_answers', V1UserSurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'vaccination_reminders', V1VaccinationReminder.attributes, function() {})
    
      adapter.define('memory', 'videos', V1Video.attributes, function() {})
    
      adapter.define('memory', 'video_audit_logging', V1VideoAuditLogging.attributes, function() {})
    
  });

  
  
    it('should attempt to get index of send_grids for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/send_grids").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create send_grid for unauthenticated', function (done) {
      var newObj = {"id":81101};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/send_grids").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show send_grid for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/send_grids/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update send_grid for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"id":274};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/send_grids/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy send_grid for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/send_grids/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          done();
        
  
      });
    });

  
  
});
