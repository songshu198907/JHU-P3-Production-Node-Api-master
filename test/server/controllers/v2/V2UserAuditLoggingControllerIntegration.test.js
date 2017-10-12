var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-01-13","address":"Latin bouillabaisse","cellPhone":"Strewed misapplying","city":"Invite Akbar","clinicianCodeId":30866,"clinicName":"Chalky telephoning","consentAcceptedOn":"1995-05-09 06:13:01 +0000","contactCellPhone":"Coachman disappointments","contactEmail":"Espressos Anguilla","contactHomePhone":"Overcharging trisecting","contactName":"Interpolate schlock","deactivatedOn":"1986-01-05 16:49:45 +0000","educationId":50445,"email":"edie.kuvalis18@vaccinesurvey.com","expectedChildBirth":"2015-11-24","firstName":"Irma","hasContactUsers":false,"homePhone":"Procrastinated pleasure","interventionGroup":"Joule eiders","isDeactive":true,"lastName":"Gottlieb","parentRelationshipType":"Quarrelled imponderable","parentUserId":1148,"password":"password","passwordConfirmation":"password","passwordDigest":"Britches airlifted","patientType":78585,"postalCode":"Veiled discomfort","raceId":8184,"reasonForDeactivation":"Differentiated fools","resetPassword":true,"role":"administrator","state":"Values pedestrianizing","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Choreographers counterexamples"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2UserAuditLogging', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"ipAddress":"Corroborations golfer","loggedInAt":"2010-06-08 02:41:14 +0000","loggedOutAt":"2002-07-20 23:57:56 +0000","userAgent":"Operatives glamoring","userId":30903});
  testObjects.push({"ipAddress":"Abler workstation","loggedInAt":"1984-10-07 00:05:19 +0000","loggedOutAt":"1982-03-27 12:55:34 +0000","userAgent":"Excelled fatty","userId":79035});
  testObjects.push({"ipAddress":"Pistils relating","loggedInAt":"2011-06-21 12:17:53 +0000","loggedOutAt":"1977-03-28 04:43:56 +0000","userAgent":"Unconventional Twila","userId":91781});
  testObjects.push({"ipAddress":"Remitting bombastic","loggedInAt":"1980-10-31 16:58:07 +0000","loggedOutAt":"2013-10-28 05:23:00 +0000","userAgent":"Gynecologist solstices","userId":34012});
  testObjects.push({"ipAddress":"Mitten windjammers","loggedInAt":"1981-02-07 06:35:15 +0000","loggedOutAt":"1975-02-05 08:04:35 +0000","userAgent":"Scientifically interconnection","userId":11919});
  testObjects.push({"ipAddress":"Conservationist confidentiality","loggedInAt":"2011-08-05 03:06:29 +0000","loggedOutAt":"1997-02-21 03:13:04 +0000","userAgent":"Supernumeraries discoloration","userId":9474});
  testObjects.push({"ipAddress":"Glimpses canonizations","loggedInAt":"1988-08-13 21:51:12 +0000","loggedOutAt":"2001-09-14 04:26:01 +0000","userAgent":"Nonconformist Souphanouvong","userId":92694});
  testObjects.push({"ipAddress":"Radiotelephone divide","loggedInAt":"1978-01-29 23:54:22 +0000","loggedOutAt":"1983-10-22 18:16:48 +0000","userAgent":"Superfluous clitoris","userId":48197});
  testObjects.push({"ipAddress":"Recuperate loudspeakers","loggedInAt":"2008-12-12 13:28:16 +0000","loggedOutAt":"1986-07-22 16:31:07 +0000","userAgent":"Neared consolidations","userId":78842});
  testObjects.push({"ipAddress":"Lineups overprotective","loggedInAt":"1986-03-31 16:54:01 +0000","loggedOutAt":"1974-08-05 12:04:11 +0000","userAgent":"Horribly industrializing","userId":5914});

V2UserAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
      V2UserAuditLogging.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of user_audit_loggings for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create user_audit_logging for administrator', function (done) {
      var newObj = {"ip_address":"Photojournalist assertions","logged_in_at":"2006-04-16 22:27:22 +0000","logged_out_at":"2006-05-20 13:50:16 +0000","user_agent":"Solicitations additionally","user_id":79198};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_audit_logging for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_audit_logging for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"ip_address":"Alimentary unselfish","logged_in_at":"2007-06-10 12:06:14 +0000","logged_out_at":"2011-10-19 02:12:34 +0000","user_agent":"Modicums folks","user_id":56359};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy user_audit_logging for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
