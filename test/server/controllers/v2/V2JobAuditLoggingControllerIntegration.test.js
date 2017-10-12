var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'Unauthenticated Default': {"actualChildBirth":"2016-04-10","address":"Espinoza weightless","cellPhone":"Symbolize Americanization","city":"Guadalquivir allegorically","clinicianCodeId":46103,"clinicName":"Healthiness cockily","consentAcceptedOn":"2006-07-09 15:56:11 +0000","contactCellPhone":"Overachieves underexposed","contactEmail":"Reuther cheekily","contactHomePhone":"Androgynous fearlessly","contactName":"Finds hammed","deactivatedOn":"2009-08-02 03:57:41 +0000","educationId":43793,"email":"nigel.harris22@vaccinesurvey.com","expectedChildBirth":"2014-08-17","firstName":"Darron","hasContactUsers":false,"homePhone":"Overbalance bulldozing","interventionGroup":"Divisor cleanliest","isDeactive":true,"lastName":"Huel","parentRelationshipType":"Palest adjustors","parentUserId":97595,"password":"password","passwordConfirmation":"password","passwordDigest":"Rawhide mischance","patientType":49640,"postalCode":"Landry Kawabata","raceId":23918,"reasonForDeactivation":"Heralds religions","resetPassword":false,"role":"Unauthenticated Default","state":"Leaflets Bergman","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Dulness choked"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2JobAuditLogging', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"createdAt":"1998-05-24 01:27:01 +0000","name":"Lorrie Bartell","rowsEffected":"Uninteresting acquaints"});
  testObjects.push({"createdAt":"2006-01-02 03:50:07 +0000","name":"Nell Hickle","rowsEffected":"Afflictions crawlspaces"});
  testObjects.push({"createdAt":"2015-07-06 16:49:10 +0000","name":"Chong Lind","rowsEffected":"Triumvirate attack"});
  testObjects.push({"createdAt":"1995-04-25 19:25:32 +0000","name":"Katrice Gleichner","rowsEffected":"Mythologist destructiveness"});
  testObjects.push({"createdAt":"2009-09-12 15:57:26 +0000","name":"Athena Bode","rowsEffected":"Interconnecting mists"});
  testObjects.push({"createdAt":"1971-06-21 10:21:43 +0000","name":"Jose Altenwerth","rowsEffected":"Augur mandarin"});
  testObjects.push({"createdAt":"1994-04-18 06:21:21 +0000","name":"Carrie Hartmann","rowsEffected":"Plodded discoloration"});
  testObjects.push({"createdAt":"1970-03-16 14:47:37 +0000","name":"Elvis Beahan","rowsEffected":"Halyard Pechora"});
  testObjects.push({"createdAt":"1984-10-23 13:49:21 +0000","name":"Carolina Stiedemann","rowsEffected":"Informants perfidy"});
  testObjects.push({"createdAt":"1990-07-25 22:57:24 +0000","name":"Berry Kunde","rowsEffected":"Weekly subcontracts"});

V2JobAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
      V2JobAuditLogging.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of job_audit_loggings for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/job_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create job_audit_logging for unauthenticated', function (done) {
      var newObj = {"created_at":"1977-10-07 20:45:25 +0000","name":"Horacio Schaden","rows_effected":"Resets glamourizing"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/job_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2JobAuditLogging.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show job_audit_logging for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/job_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update job_audit_logging for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"1990-04-29 22:33:32 +0000","name":"Edie Weissnat","rows_effected":"Confluent lubes"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/job_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2JobAuditLogging.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2JobAuditLogging with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy job_audit_logging for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/job_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V2JobAuditLogging.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
});
