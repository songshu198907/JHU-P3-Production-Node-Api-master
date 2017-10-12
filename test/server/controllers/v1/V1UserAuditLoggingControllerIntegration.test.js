var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2014-09-06","address":"Infirmities coronas","cellPhone":"Fichte gangling","city":"Controversially teazle","clinicianCodeId":60258,"clinicName":"Minutiae arbutus","consentAcceptedOn":"1991-06-08 23:20:30 +0000","contactCellPhone":"Sublimer tonsillectomies","contactEmail":"Impenetrability clarinets","contactHomePhone":"Receptions mythological","contactName":"Comfort grasshopper","deactivatedOn":"1977-09-04 16:08:56 +0000","educationId":73630,"email":"alejandra.jaskolski76@vaccinesurvey.com","expectedChildBirth":"2015-11-27","firstName":"Devon","hasContactUsers":true,"homePhone":"Upstaging subtotaling","interventionGroup":"Handpicking gnarly","isDeactive":false,"lastName":"Mitchell","parentRelationshipType":"Mournfulness categorized","parentUserId":82923,"password":"password","passwordConfirmation":"password","passwordDigest":"Lithographing toxicologists","patientType":18172,"postalCode":"Yachtsmen sarsaparillas","raceId":26085,"reasonForDeactivation":"Hundredweights impiously","resetPassword":false,"role":"administrator","state":"Pilot disbarment","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Precondition apexes"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1UserAuditLogging', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"ipAddress":"Disrespectfully womanized","loggedInAt":"1998-08-01 09:23:56 +0000","loggedOutAt":"2015-12-30 23:28:39 +0000","userAgent":"Tarred pennyweight","userId":51444});
  testObjects.push({"ipAddress":"Seedy comprehension","loggedInAt":"1994-09-28 08:19:29 +0000","loggedOutAt":"1989-08-18 10:53:17 +0000","userAgent":"Domestication urethra","userId":27097});
  testObjects.push({"ipAddress":"Commercial instigating","loggedInAt":"2013-08-14 19:48:32 +0000","loggedOutAt":"1995-01-28 04:12:24 +0000","userAgent":"Nicaraguan maces","userId":40760});
  testObjects.push({"ipAddress":"Flabbergast noninterference","loggedInAt":"1974-03-25 13:53:58 +0000","loggedOutAt":"2009-06-15 13:34:36 +0000","userAgent":"Overprice caustic","userId":15918});
  testObjects.push({"ipAddress":"Robitussin administrations","loggedInAt":"1989-10-29 20:50:21 +0000","loggedOutAt":"1971-04-29 17:23:41 +0000","userAgent":"Caudal truffle","userId":89796});
  testObjects.push({"ipAddress":"Gongs squelches","loggedInAt":"1998-09-14 06:04:55 +0000","loggedOutAt":"2010-07-02 17:39:21 +0000","userAgent":"Simmons liberalism","userId":71508});
  testObjects.push({"ipAddress":"Enjoin distinguishable","loggedInAt":"2008-04-15 05:09:04 +0000","loggedOutAt":"2014-11-03 09:27:08 +0000","userAgent":"Counterattacked oversampling","userId":82732});
  testObjects.push({"ipAddress":"Chivalrously immunize","loggedInAt":"1985-12-11 21:41:28 +0000","loggedOutAt":"2014-06-01 14:29:56 +0000","userAgent":"Overwrought electrification","userId":42416});
  testObjects.push({"ipAddress":"Sentimentalizes incommensurate","loggedInAt":"2012-04-06 12:14:02 +0000","loggedOutAt":"1970-01-22 17:56:37 +0000","userAgent":"Exorcisms littering","userId":22071});
  testObjects.push({"ipAddress":"Impenetrability sultanas","loggedInAt":"1986-03-17 23:45:21 +0000","loggedOutAt":"1971-06-20 15:36:05 +0000","userAgent":"Frontiersmen arrangement","userId":85196});

V1UserAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
      V1UserAuditLogging.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of user_audit_loggings for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create user_audit_logging for administrator', function (done) {
      var newObj = {"ip_address":"Horsewhipped Micky","logged_in_at":"1999-09-14 03:30:54 +0000","logged_out_at":"2014-01-16 17:14:34 +0000","user_agent":"Antacid exemplification","user_id":70112};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_audit_logging for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_audit_logging for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"ip_address":"Epics accommodation","logged_in_at":"2014-07-20 10:46:52 +0000","logged_out_at":"2012-02-16 20:00:36 +0000","user_agent":"Inters twine","user_id":76642};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy user_audit_logging for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
