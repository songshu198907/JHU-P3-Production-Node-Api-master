var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'Unauthenticated Default': {"actualChildBirth":"2014-10-28","address":"Dawson backers","cellPhone":"Barbadians arithmetically","city":"Flukes petites","clinicianCodeId":74037,"clinicName":"Rottweiler cheater","consentAcceptedOn":"2012-05-12 14:10:53 +0000","contactCellPhone":"Sledgehammering graphologist","contactEmail":"Wholesalers discountenances","contactHomePhone":"Decentralizing obstetricians","contactName":"Licorices radiotherapists","deactivatedOn":"1993-11-06 23:58:21 +0000","educationId":30257,"email":"ardith.goldner3@vaccinesurvey.com","expectedChildBirth":"2014-04-24","firstName":"Sumiko","hasContactUsers":true,"homePhone":"Administering immolated","interventionGroup":"Incongruities accountability","isDeactive":true,"lastName":"Bode","parentRelationshipType":"Sluicing cuspid","parentUserId":29687,"password":"password","passwordConfirmation":"password","passwordDigest":"Interneship abdicated","patientType":71336,"postalCode":"Hummingbirds vandalizing","raceId":94214,"reasonForDeactivation":"Helms bibliography","resetPassword":false,"role":"Unauthenticated Default","state":"Terminologies scrolled","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Underestimated coldest"},
  'administrator': {"actualChildBirth":"2015-05-10","address":"Gobbing nuncios","cellPhone":"Insolubility industrializing","city":"Shadowboxes sphinxes","clinicianCodeId":40971,"clinicName":"Meats furtive","consentAcceptedOn":"1983-10-19 04:43:11 +0000","contactCellPhone":"Servomechanism information","contactEmail":"Inkwell sprig","contactHomePhone":"Giants memos","contactName":"Inexhaustibly icecap","deactivatedOn":"1979-02-28 09:12:18 +0000","educationId":83618,"email":"chang.considine56@vaccinesurvey.com","expectedChildBirth":"2015-03-10","firstName":"Peter","hasContactUsers":true,"homePhone":"Decommissioning drolly","interventionGroup":"Adjustments gushed","isDeactive":false,"lastName":"Crooks","parentRelationshipType":"Intermarriages unfriendliness","parentUserId":34379,"password":"password","passwordConfirmation":"password","passwordDigest":"Insurrections extinguishable","patientType":44453,"postalCode":"Chilly chromatic","raceId":4636,"reasonForDeactivation":"Superstitiously exhibitionists","resetPassword":false,"role":"administrator","state":"Petrified Iceland","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Internationally baccalaureates"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1QuestionType', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"controlType":"Couplings prevention","name":"Berta Hettinger"});
  testObjects.push({"controlType":"Gigahertz Clairol","name":"Federico Lockman"});
  testObjects.push({"controlType":"Meandering divvy","name":"Belva Mayer"});
  testObjects.push({"controlType":"Inauguration troubleshooter","name":"Russ McCullough"});
  testObjects.push({"controlType":"Invisibly doggy","name":"Abram Hansen"});
  testObjects.push({"controlType":"Plusses unsanitary","name":"Pierre Romaguera"});
  testObjects.push({"controlType":"Inconsistencies experimented","name":"Donette Jerde"});
  testObjects.push({"controlType":"Spectroscopy storeroom","name":"Henrietta Greenfelder"});
  testObjects.push({"controlType":"Germinated potent","name":"Troy Ritchie"});
  testObjects.push({"controlType":"Sledgehammers cockscombs","name":"Eli Renner"});

V1QuestionType.createEach(testObjects).exec(function(err, obj) {
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
      V1QuestionType.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of question_types for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create question_type for unauthenticated', function (done) {
      var newObj = {"control_type":"Technologically gayly","name":"Kymberly Tremblay"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1QuestionType.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show question_type for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update question_type for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"control_type":"Described collaborates","name":"Annalee McKenzie"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1QuestionType.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1QuestionType with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy question_type for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of question_types for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create question_type for administrator', function (done) {
      var newObj = {"control_type":"Preservative uncontrollable","name":"Ouida Bailey"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1QuestionType.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show question_type for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update question_type for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"control_type":"Disadvantageous depreciating","name":"Towanda Reichel"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1QuestionType.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1QuestionType with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy question_type for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/question_types/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
