var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-03-05","address":"Sinks greenhorn","cellPhone":"Steeplechase overreaction","city":"Chernobyl transfiguration","clinicianCodeId":56366,"clinicName":"Bloodthirstier disembarking","consentAcceptedOn":"2008-01-07 05:34:51 +0000","contactCellPhone":"Justifications locoweeds","contactEmail":"Internationale bulletproofed","contactHomePhone":"Ericka trusses","contactName":"Statesmanship adenoids","deactivatedOn":"2009-06-27 18:21:19 +0000","educationId":19910,"email":"alexander.johnson21@vaccinesurvey.com","expectedChildBirth":"2015-03-24","firstName":"German","hasContactUsers":false,"homePhone":"Finds umpire","interventionGroup":"Expectations Yevtushenko","isDeactive":true,"lastName":"Jacobson","parentRelationshipType":"Peccadillos syllabifying","parentUserId":14253,"password":"password","passwordConfirmation":"password","passwordDigest":"Detonator quintessential","patientType":44175,"postalCode":"Walsh caroming","raceId":47687,"reasonForDeactivation":"Circus axiomatically","resetPassword":true,"role":"administrator","state":"Simper intransigents","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Aromatic wattled"},
  'patient': {"actualChildBirth":"2016-03-15","address":"Antiperspirants rectifications","cellPhone":"Straitjacketing accreditation","city":"Raccoons inefficiently","clinicianCodeId":42260,"clinicName":"Preferentially psychoanalyzing","consentAcceptedOn":"2000-11-04 17:32:49 +0000","contactCellPhone":"Roomfuls derive","contactEmail":"Spokeswoman comptrollers","contactHomePhone":"Minnie playwright","contactName":"Synchronizing frostbites","deactivatedOn":"2012-07-03 13:42:13 +0000","educationId":45872,"email":"sanora.ullrich66@vaccinesurvey.com","expectedChildBirth":"2016-06-11","firstName":"Ramon","hasContactUsers":false,"homePhone":"Arrangements grasshopper","interventionGroup":"Kaleidoscopes Smetana","isDeactive":false,"lastName":"Quitzon","parentRelationshipType":"Songs handier","parentUserId":23462,"password":"password","passwordConfirmation":"password","passwordDigest":"Tweaks imperceptibly","patientType":39036,"postalCode":"Wildflowers nihilists","raceId":48700,"reasonForDeactivation":"Cigar inexpressible","resetPassword":false,"role":"patient","state":"Haydn flinty","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Manageability clarinettists"},
  'health_care_provider': {"actualChildBirth":"2014-01-05","address":"Folded blame","cellPhone":"Dementia Olajuwon","city":"Unreconstructed bloodthirstiest","clinicianCodeId":90288,"clinicName":"Commercialism differentiate","consentAcceptedOn":"2010-04-16 14:43:54 +0000","contactCellPhone":"Mucilage Liston","contactEmail":"Trendiest infrastructure","contactHomePhone":"Deletions interrogatives","contactName":"Struggling encyclopedia","deactivatedOn":"2015-08-19 06:27:30 +0000","educationId":19979,"email":"maritza.rogahn70@vaccinesurvey.com","expectedChildBirth":"2014-10-27","firstName":"Dalia","hasContactUsers":false,"homePhone":"Sassiest birthplace","interventionGroup":"Policyholders typographers","isDeactive":false,"lastName":"Brakus","parentRelationshipType":"Proselytes insignificance","parentUserId":76401,"password":"password","passwordConfirmation":"password","passwordDigest":"Countermanding catboat","patientType":86050,"postalCode":"Campy represented","raceId":81567,"reasonForDeactivation":"Complaisance gospels","resetPassword":false,"role":"health_care_provider","state":"Quote disenchants","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Shiner rakes"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1Topic', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"name":"Chanda Ankunding"});
  testObjects.push({"name":"Norine Flatley"});
  testObjects.push({"name":"Florrie Crona"});
  testObjects.push({"name":"Marcia Hand"});
  testObjects.push({"name":"Theodore Ryan"});
  testObjects.push({"name":"Wallace Miller"});
  testObjects.push({"name":"Gladis Crooks"});
  testObjects.push({"name":"Luanna Reichel"});
  testObjects.push({"name":"Son Hills"});
  testObjects.push({"name":"Deirdre Dickinson"});

V1Topic.createEach(testObjects).exec(function(err, obj) {
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
      V1Topic.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of topics for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create topic for administrator', function (done) {
      var newObj = {"name":"Lorinda Thompson"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1Topic.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show topic for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update topic for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Dorothy Wilkinson"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1Topic.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1Topic with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy topic for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of topics for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create topic for patient', function (done) {
      var newObj = {"name":"Bernard Green"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show topic for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update topic for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Enoch Hintz"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy topic for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of topics for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create topic for health_care_provider', function (done) {
      var newObj = {"name":"Earnest Turcotte"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show topic for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update topic for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Jimmie Lakin"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy topic for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/topics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
