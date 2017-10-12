var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2016-09-15","address":"Deflector condescending","cellPhone":"Syllabication aglow","city":"Romanticize wizes","clinicianCodeId":94590,"clinicName":"Kingliest lamed","consentAcceptedOn":"1989-10-29 00:54:08 +0000","contactCellPhone":"Interpolation dwarfism","contactEmail":"Goldsmith seeps","contactHomePhone":"Inculpate painless","contactName":"Cyclades desecrating","deactivatedOn":"1999-03-16 18:01:24 +0000","educationId":97811,"email":"luigi.emmerich89@vaccinesurvey.com","expectedChildBirth":"2014-11-27","firstName":"Maybell","hasContactUsers":false,"homePhone":"Shingles narcosis","interventionGroup":"Prepackaged peculiarities","isDeactive":false,"lastName":"Fay","parentRelationshipType":"Hesitated portage","parentUserId":6081,"password":"password","passwordConfirmation":"password","passwordDigest":"Unfamiliarity incriminatory","patientType":54190,"postalCode":"Quarterbacking amateurish","raceId":20741,"reasonForDeactivation":"Democratizing burritos","resetPassword":true,"role":"administrator","state":"Tonsillectomies fatalistic","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Demobilization implementations"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2SearchAuditLogging', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"createdAt":"1992-05-01 16:33:10 +0000","searchTerm":"Conner Finnish","userId":16847});
  testObjects.push({"createdAt":"1988-07-20 03:26:51 +0000","searchTerm":"Brotherhoods miscalculation","userId":94975});
  testObjects.push({"createdAt":"1990-02-07 23:20:38 +0000","searchTerm":"Roughens inconveniencing","userId":10657});
  testObjects.push({"createdAt":"1978-01-15 18:46:04 +0000","searchTerm":"Enhance misappropriates","userId":60540});
  testObjects.push({"createdAt":"1972-01-16 23:42:52 +0000","searchTerm":"Scrawl residencies","userId":68479});
  testObjects.push({"createdAt":"1980-01-22 17:40:39 +0000","searchTerm":"Procrastinated waywardness","userId":69692});
  testObjects.push({"createdAt":"1999-10-01 09:31:21 +0000","searchTerm":"Patrice segregationists","userId":53302});
  testObjects.push({"createdAt":"1996-03-10 01:50:12 +0000","searchTerm":"Brandenburg inconclusive","userId":65522});
  testObjects.push({"createdAt":"1997-11-03 08:27:15 +0000","searchTerm":"Mbini storefronts","userId":79787});
  testObjects.push({"createdAt":"1992-11-26 16:17:27 +0000","searchTerm":"Victoriously discombobulates","userId":70417});

V2SearchAuditLogging.createEach(testObjects).exec(function(err, obj) {
  obj.forEach(function(element) {
    objects.push(element);
  });
  assert(! err, "Received error " + util.inspect(err));

  if (objects.length === testObjects.length) {
    done();
  }
});

    });

    afterEach(function(done) {
      passportStub.logout();
      V2SearchAuditLogging.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

      done();
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
    
      adapter.drop('memory', 'user_survey_videos', [], function() {})
    
      adapter.drop('memory', 'vaccination_reminders', [], function() {})
    
      adapter.drop('memory', 'videos', [], function() {})
    
      adapter.drop('memory', 'video_audit_logging', [], function() {})
    
    // Recreate collections
    
      adapter.define('memory', 'clinic_block_randomizer', V2ClinicianBlockRandomizer.attributes, function() {})
    
      adapter.define('memory', 'clinician_codes', V2ClinicianCode.attributes, function() {})
    
      adapter.define('memory', 'educations', V2Education.attributes, function() {})
    
      adapter.define('memory', 'healthcare_provider_contents', V2HealthcareProviderContent.attributes, function() {})
    
      adapter.define('memory', 'job_audit_logging', V2JobAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'question_categories', V2QuestionCategory.attributes, function() {})
    
      adapter.define('memory', 'question_codes', V2QuestionCode.attributes, function() {})
    
      adapter.define('memory', 'question_types', V2QuestionType.attributes, function() {})
    
      adapter.define('memory', 'races', V2Race.attributes, function() {})
    
      adapter.define('memory', 'search_audit_logging', V2SearchAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'SendGrid', V2SendGrid.attributes, function() {})
    
      adapter.define('memory', 'settings', V2Setting.attributes, function() {})
    
      adapter.define('memory', 'surveys', V2Survey.attributes, function() {})
    
      adapter.define('memory', 'survey_answers', V2SurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'survey_questions', V2SurveyQuestion.attributes, function() {})
    
      adapter.define('memory', 'survey_question_skip_logic', V2SurveyQuestionSkipLogic.attributes, function() {})
    
      adapter.define('memory', 'topics', V2Topic.attributes, function() {})
    
      adapter.define('memory', 'Twilio', V2Twilio.attributes, function() {})
    
      adapter.define('memory', 'users', V2User.attributes, function() {})
    
      adapter.define('memory', 'user_audit_logging', V2UserAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'user_surveys', V2UserSurvey.attributes, function() {})
    
      adapter.define('memory', 'user_survey_answers', V2UserSurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'user_survey_videos', V2UserSurveyVideo.attributes, function() {})
    
      adapter.define('memory', 'vaccination_reminders', V2VaccinationReminder.attributes, function() {})
    
      adapter.define('memory', 'videos', V2Video.attributes, function() {})
    
      adapter.define('memory', 'video_audit_logging', V2VideoAuditLogging.attributes, function() {})
    
  });

  
  
    it('should attempt to get index of search_audit_loggings for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/search_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create search_audit_logging for administrator', function (done) {
      var newObj = {"created_at":"2002-09-19 17:21:18 +0000","search_term":"Souths shuns","user_id":4314};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/search_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show search_audit_logging for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/search_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update search_audit_logging for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"1970-08-27 09:42:58 +0000","search_term":"Cached disarrayed","user_id":78216};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/search_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy search_audit_logging for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/search_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
