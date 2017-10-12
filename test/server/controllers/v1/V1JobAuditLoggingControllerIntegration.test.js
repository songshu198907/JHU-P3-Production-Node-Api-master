var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'Unauthenticated Default': {"actualChildBirth":"2015-02-01","address":"Ironically federal","cellPhone":"Biblical miscalculating","city":"Frost concentrate","clinicianCodeId":2841,"clinicName":"Stewardesses paleontologists","consentAcceptedOn":"1970-01-26 10:18:08 +0000","contactCellPhone":"Spins implants","contactEmail":"Photosensitive microseconds","contactHomePhone":"Simplifications reconstructed","contactName":"Triangulation extinguishable","deactivatedOn":"1978-02-26 00:42:55 +0000","educationId":90454,"email":"rico.kilback10@vaccinesurvey.com","expectedChildBirth":"2016-04-26","firstName":"Georgeann","hasContactUsers":false,"homePhone":"Depletion metaphors","interventionGroup":"Lafitte shipbuilding","isDeactive":true,"lastName":"Hegmann","parentRelationshipType":"Transmission Socratic","parentUserId":53284,"password":"password","passwordConfirmation":"password","passwordDigest":"Scarring sanctimoniously","patientType":22817,"postalCode":"Refurbishments outtakes","raceId":28355,"reasonForDeactivation":"Umpteen annals","resetPassword":true,"role":"Unauthenticated Default","state":"Effectuating regurgitates","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Chart worriers"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1JobAuditLogging', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"createdAt":"1989-07-21 15:51:01 +0000","name":"Morgan Muller","rowsEffected":"Arduously forbiddingly"});
  testObjects.push({"createdAt":"1997-02-13 23:59:20 +0000","name":"Jami Koch","rowsEffected":"Buttress strangulation"});
  testObjects.push({"createdAt":"2006-07-13 15:06:44 +0000","name":"Julissa Olson","rowsEffected":"Spitefulness correspondences"});
  testObjects.push({"createdAt":"2015-09-27 16:24:47 +0000","name":"Dwight Rowe","rowsEffected":"Bowdlerizing osmosis"});
  testObjects.push({"createdAt":"1980-09-10 18:35:24 +0000","name":"Brett Aimonetti","rowsEffected":"Thanks Coronado"});
  testObjects.push({"createdAt":"1970-05-23 23:47:14 +0000","name":"Harrison Koepp","rowsEffected":"Lollipop vacillations"});
  testObjects.push({"createdAt":"1983-10-13 23:07:21 +0000","name":"Raylene Hirthe","rowsEffected":"Discontinuances superintendency"});
  testObjects.push({"createdAt":"1977-02-28 11:50:06 +0000","name":"Susanna Pacocha","rowsEffected":"Procreates motorcycling"});
  testObjects.push({"createdAt":"2007-04-12 07:56:33 +0000","name":"Williams Jerde","rowsEffected":"Spends substantiations"});
  testObjects.push({"createdAt":"1990-02-17 08:59:33 +0000","name":"Pinkie Kuphal","rowsEffected":"Mounds demobilizing"});

V1JobAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
      V1JobAuditLogging.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of job_audit_loggings for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/job_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create job_audit_logging for unauthenticated', function (done) {
      var newObj = {"created_at":"1974-11-20 17:17:47 +0000","name":"Connie O'Reilly","rows_effected":"Clammy journeymen"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/job_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1JobAuditLogging.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show job_audit_logging for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/job_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update job_audit_logging for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"1988-02-11 07:59:47 +0000","name":"Curt Kris","rows_effected":"Turntable supertankers"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/job_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1JobAuditLogging.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1JobAuditLogging with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy job_audit_logging for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/job_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V1JobAuditLogging.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
});
