var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-04-24","address":"Executives palmists","cellPhone":"Remonstrates Pepsi","city":"Slenderer neodymium","clinicianCodeId":4045,"clinicName":"Shortcuts nonrestrictive","consentAcceptedOn":"2013-10-20 21:50:31 +0000","contactCellPhone":"Unpleasantness alternatively","contactEmail":"Elizabethans riced","contactHomePhone":"Farmyard wheat","contactName":"Commercializes vituperate","deactivatedOn":"1992-06-15 01:01:10 +0000","educationId":86929,"email":"tameka.wolff72@vaccinesurvey.com","expectedChildBirth":"2016-05-19","firstName":"Joe","hasContactUsers":false,"homePhone":"Halon electroplating","interventionGroup":"Triceps loggerheads","isDeactive":true,"lastName":"Schaefer","parentRelationshipType":"Bareheaded nozzle","parentUserId":65134,"password":"password","passwordConfirmation":"password","passwordDigest":"Mothers duplex","patientType":53895,"postalCode":"Nonconductors investigations","raceId":85379,"reasonForDeactivation":"Nitroglycerin plugs","resetPassword":false,"role":"administrator","state":"Acclimatized mannishness","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Crawlspaces prefabrication"},
  'patient': {"actualChildBirth":"2014-10-11","address":"Noncommercials Donny","cellPhone":"Operationally Maoisms","city":"Popped reapers","clinicianCodeId":45439,"clinicName":"Rabat imitates","consentAcceptedOn":"1991-04-23 22:14:05 +0000","contactCellPhone":"Fruitlessness manifestations","contactEmail":"Dimensionless arousing","contactHomePhone":"Aloes currant","contactName":"Schemed asynchronously","deactivatedOn":"2013-04-25 00:17:20 +0000","educationId":50488,"email":"octavio.jacobson10@vaccinesurvey.com","expectedChildBirth":"2016-02-08","firstName":"Ivan","hasContactUsers":false,"homePhone":"Bernie commercializing","interventionGroup":"Counterbalanced batsman","isDeactive":true,"lastName":"Bergstrom","parentRelationshipType":"Kaunas nexuses","parentUserId":5429,"password":"password","passwordConfirmation":"password","passwordDigest":"Rosecrans abortions","patientType":75371,"postalCode":"Indivisibility streamers","raceId":55636,"reasonForDeactivation":"Concordance outspokenness","resetPassword":true,"role":"patient","state":"Rehabilitation Amharic","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Tirelessly disinterestedly"},
  'health_care_provider': {"actualChildBirth":"2016-05-07","address":"Buttercup wildlife","cellPhone":"Shipwrecked compilation","city":"Superstition recollecting","clinicianCodeId":99744,"clinicName":"Examines Hohenzollern","consentAcceptedOn":"1971-04-19 20:43:14 +0000","contactCellPhone":"Cuchulain footballs","contactEmail":"Impressionistic crumb","contactHomePhone":"Misappropriates impersonations","contactName":"Nontrivial psychotherapy","deactivatedOn":"1989-05-04 15:09:27 +0000","educationId":938,"email":"lea.tillman54@vaccinesurvey.com","expectedChildBirth":"2015-03-24","firstName":"Randal","hasContactUsers":true,"homePhone":"Karin Kewpie","interventionGroup":"Conversational deescalated","isDeactive":false,"lastName":"Dach","parentRelationshipType":"Monopolistic condensations","parentUserId":25545,"password":"password","passwordConfirmation":"password","passwordDigest":"Spaatz transgressions","patientType":4310,"postalCode":"Griffith stormier","raceId":84161,"reasonForDeactivation":"Gorillas moused","resetPassword":false,"role":"health_care_provider","state":"Coastline accompaniment","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Tranquillized patricians"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2ClinicianCode', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"code":"Valedictorian oiliest","name":"Zane Watsica"});
  testObjects.push({"code":"Undeceives instrumentalist","name":"Jesus Prosacco"});
  testObjects.push({"code":"Personalized transformers","name":"Lucretia O'Reilly"});
  testObjects.push({"code":"Unauthenticated wheezy","name":"Silas Terry"});
  testObjects.push({"code":"Renovated schmaltziest","name":"Jolanda Wilkinson"});
  testObjects.push({"code":"Sheryl trait","name":"Zachery Brakus"});
  testObjects.push({"code":"Eavesdropper straitjacketed","name":"Hisako Volkman"});
  testObjects.push({"code":"Cinematographer democratically","name":"Emerson Spinka"});
  testObjects.push({"code":"Incompatibility cosmetologists","name":"Melania Klocko"});
  testObjects.push({"code":"Reparations complemented","name":"Melaine Hagenes"});

V2ClinicianCode.createEach(testObjects).exec(function(err, obj) {
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
      V2ClinicianCode.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of clinician_codes for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create clinician_code for administrator', function (done) {
      var newObj = {"code":"Wilfredo sympathizes","name":"Angelic Daugherty"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2ClinicianCode.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show clinician_code for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update clinician_code for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"code":"Immobilization cosmopolitans","name":"Leonia Abernathy"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2ClinicianCode.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2ClinicianCode with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy clinician_code for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of clinician_codes for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create clinician_code for patient', function (done) {
      var newObj = {"code":"Working airport","name":"Dylan Veum"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show clinician_code for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update clinician_code for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"code":"Shamelessly artisan","name":"Kali Block"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy clinician_code for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of clinician_codes for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create clinician_code for health_care_provider', function (done) {
      var newObj = {"code":"Distressingly cordons","name":"Felix Beier"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show clinician_code for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update clinician_code for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"code":"Precisely Walpurgisnacht","name":"Anastacia Upton"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy clinician_code for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/clinician_codes/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
