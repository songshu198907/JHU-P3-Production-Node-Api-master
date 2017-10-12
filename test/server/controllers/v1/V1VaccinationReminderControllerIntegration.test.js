var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-11-24","address":"Hexagons rigidly","cellPhone":"Nudity interdependence","city":"Rapprochement inconsiderable","clinicianCodeId":20314,"clinicName":"Transfiguration preeminent","consentAcceptedOn":"2013-03-15 23:43:46 +0000","contactCellPhone":"Weatherized suspiciously","contactEmail":"Twelfths suits","contactHomePhone":"Boxcar Mubarak","contactName":"Wipes indiscreet","deactivatedOn":"2007-10-29 11:13:35 +0000","educationId":58745,"email":"hipolito.heaney98@vaccinesurvey.com","expectedChildBirth":"2014-06-06","firstName":"Burl","hasContactUsers":true,"homePhone":"Minnow chanced","interventionGroup":"Pitchforking cleric","isDeactive":false,"lastName":"Beier","parentRelationshipType":"Breaststrokes mesdemoiselles","parentUserId":66791,"password":"password","passwordConfirmation":"password","passwordDigest":"Sandblasts polarize","patientType":69237,"postalCode":"Smock jetted","raceId":67558,"reasonForDeactivation":"Grouchy evaporates","resetPassword":false,"role":"administrator","state":"Petty scornful","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Flimflammed conventionally"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1VaccinationReminder', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"messageText":"Spectroscope reapportioned","triggerDaysFromDob":97956});
  testObjects.push({"messageText":"Prefabbed conchs","triggerDaysFromDob":58});
  testObjects.push({"messageText":"Undemanding crust","triggerDaysFromDob":83031});
  testObjects.push({"messageText":"Industrialized contraventions","triggerDaysFromDob":11464});
  testObjects.push({"messageText":"Dally persistently","triggerDaysFromDob":9812});
  testObjects.push({"messageText":"Undercharging oared","triggerDaysFromDob":47864});
  testObjects.push({"messageText":"Croup insanely","triggerDaysFromDob":26312});
  testObjects.push({"messageText":"Whippersnappers prolixity","triggerDaysFromDob":94238});
  testObjects.push({"messageText":"Duckbill multiplicities","triggerDaysFromDob":95823});
  testObjects.push({"messageText":"Communicated dwarfism","triggerDaysFromDob":15009});

V1VaccinationReminder.createEach(testObjects).exec(function(err, obj) {
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
      V1VaccinationReminder.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of vaccination_reminders for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/vaccination_reminders").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create vaccination_reminder for administrator', function (done) {
      var newObj = {"message_text":"Photostat sentimental","trigger_days_from_dob":86823};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/vaccination_reminders").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1VaccinationReminder.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show vaccination_reminder for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/vaccination_reminders/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update vaccination_reminder for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"message_text":"Gargled facilitation","trigger_days_from_dob":34642};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/vaccination_reminders/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1VaccinationReminder.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1VaccinationReminder with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy vaccination_reminder for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/vaccination_reminders/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V1VaccinationReminder.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
});
