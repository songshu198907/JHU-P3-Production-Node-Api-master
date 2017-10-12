var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2014-08-28","address":"Pooch pluperfect","cellPhone":"Trimly sidestrokes","city":"Halted sunflowers","clinicianCodeId":20215,"clinicName":"Transpositions patricians","consentAcceptedOn":"1970-10-02 19:21:11 +0000","contactCellPhone":"Fleeces gloved","contactEmail":"Overpowered virulently","contactHomePhone":"Counterattacks safari","contactName":"Dalliance colloquially","deactivatedOn":"2006-08-14 00:40:54 +0000","educationId":74337,"email":"inocencia.stoltenberg32@vaccinesurvey.com","expectedChildBirth":"2016-05-16","firstName":"Yen","hasContactUsers":true,"homePhone":"Convocations succeeding","interventionGroup":"Incredibly topographers","isDeactive":true,"lastName":"Toy","parentRelationshipType":"Diplomata therapeutically","parentUserId":81404,"password":"password","passwordConfirmation":"password","passwordDigest":"Boardwalks interrogatories","patientType":875,"postalCode":"Pharmacopoeias momentum","raceId":73184,"reasonForDeactivation":"Detoxification electorate","resetPassword":false,"role":"patient","state":"Infrequently anaesthetist","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Inconclusively debts"},
  'health_care_provider': {"actualChildBirth":"2014-05-28","address":"Pharmaceutical configurations","cellPhone":"Ferrets uneconomical","city":"Northeastward battlefield","clinicianCodeId":66452,"clinicName":"Muftis captivation","consentAcceptedOn":"1996-12-09 09:28:54 +0000","contactCellPhone":"Noninterference chumps","contactEmail":"Fraternization muggings","contactHomePhone":"Unconscionably landslid","contactName":"Compiled pinwheeling","deactivatedOn":"1988-06-26 06:23:55 +0000","educationId":25805,"email":"vicki.cormier88@vaccinesurvey.com","expectedChildBirth":"2016-07-13","firstName":"Randall","hasContactUsers":false,"homePhone":"Counterattacked lingual","interventionGroup":"Resultants comically","isDeactive":false,"lastName":"Friesen","parentRelationshipType":"Hydrotherapy guarding","parentUserId":58886,"password":"password","passwordConfirmation":"password","passwordDigest":"Magnificence attitudinizing","patientType":93464,"postalCode":"Winnows worsening","raceId":43925,"reasonForDeactivation":"Blacklists vetted","resetPassword":true,"role":"health_care_provider","state":"Stultification whitewalls","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Resourcefully libertine"},
  'administrator': {"actualChildBirth":"2013-10-29","address":"Magnetize recriminations","cellPhone":"Scalloping countersigning","city":"Sateen curtly","clinicianCodeId":18103,"clinicName":"Prevarications beaver","consentAcceptedOn":"1996-05-14 08:54:50 +0000","contactCellPhone":"Steppingstones intimidation","contactEmail":"Controverting icings","contactHomePhone":"Embodying indecisiveness","contactName":"Semiconscious debarring","deactivatedOn":"2013-07-13 19:36:26 +0000","educationId":68714,"email":"jame.feeney56@vaccinesurvey.com","expectedChildBirth":"2016-07-03","firstName":"Eusebio","hasContactUsers":false,"homePhone":"Treks cuckolded","interventionGroup":"Tsimshian parenthetically","isDeactive":false,"lastName":"Pollich","parentRelationshipType":"Interconnecting redecorate","parentUserId":82308,"password":"password","passwordConfirmation":"password","passwordDigest":"Juniper warfare","patientType":92447,"postalCode":"Contraception Xingu","raceId":31397,"reasonForDeactivation":"Inclusively suspense","resetPassword":true,"role":"administrator","state":"Tibia miscellaneous","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Amazons pharmacopeia"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1VideoAuditLogging', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"createdAt":"1989-09-24 19:02:43 +0000","duration":68439.23125716324,"userId":1602,"videoId":24941,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"1997-10-19 19:29:09 +0000","duration":8840.687877412041,"userId":29013,"videoId":15113,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"1976-01-24 14:20:46 +0000","duration":34118.07633946933,"userId":14771,"videoId":59072,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"1996-12-13 11:03:43 +0000","duration":41116.500013777135,"userId":84987,"videoId":43616,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"1970-02-08 21:41:22 +0000","duration":1527.8172145719827,"userId":77407,"videoId":37247,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"2003-06-19 02:14:28 +0000","duration":25348.847130902523,"userId":97553,"videoId":45235,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"1997-02-05 04:43:03 +0000","duration":42743.184469230386,"userId":50859,"videoId":39958,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"1972-11-28 19:21:11 +0000","duration":75193.35026555482,"userId":98783,"videoId":28712,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"2010-01-02 19:43:55 +0000","duration":78170.10451377004,"userId":21827,"videoId":10450,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"1979-01-23 20:44:31 +0000","duration":35596.73975937228,"userId":46209,"videoId":75111,"watchedEntireVideo":true});

V1VideoAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
      V1VideoAuditLogging.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of video_audit_loggings for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create video_audit_logging for patient', function (done) {
      var newObj = {"created_at":"1987-10-09 14:20:59 +0000","duration":65849.34358487024,"user_id":75302,"video_id":20348,"watched_entire_video":true};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1VideoAuditLogging.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show video_audit_logging for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video_audit_logging for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"1998-09-28 18:40:05 +0000","duration":81755.62863040781,"user_id":89509,"video_id":86068,"watched_entire_video":false};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1VideoAuditLogging.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1VideoAuditLogging with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy video_audit_logging for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of video_audit_loggings for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create video_audit_logging for health_care_provider', function (done) {
      var newObj = {"created_at":"1996-12-28 01:40:59 +0000","duration":41384.54798797031,"user_id":30626,"video_id":84242,"watched_entire_video":true};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1VideoAuditLogging.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show video_audit_logging for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video_audit_logging for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"1973-11-17 23:08:25 +0000","duration":88705.61713548089,"user_id":52137,"video_id":88782,"watched_entire_video":false};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1VideoAuditLogging.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1VideoAuditLogging with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy video_audit_logging for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of video_audit_loggings for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create video_audit_logging for administrator', function (done) {
      var newObj = {"created_at":"1985-12-30 11:52:03 +0000","duration":76427.40490692641,"user_id":86742,"video_id":84116,"watched_entire_video":true};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show video_audit_logging for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video_audit_logging for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"2003-06-10 01:20:27 +0000","duration":55973.177106582356,"user_id":28210,"video_id":91908,"watched_entire_video":false};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy video_audit_logging for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/video_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
