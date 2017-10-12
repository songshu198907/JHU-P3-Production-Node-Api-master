var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2014-10-03","address":"Holster straitjacketed","cellPhone":"Frats wriest","city":"Towelled skivvy","clinicianCodeId":68566,"clinicName":"Orthographies subtotalling","consentAcceptedOn":"1976-08-01 12:45:20 +0000","contactCellPhone":"Junipers wheedle","contactEmail":"Everglade excitation","contactHomePhone":"Disrespectfully singer","contactName":"Embellish canting","deactivatedOn":"1998-09-30 11:53:34 +0000","educationId":78562,"email":"sabrina.bosco3@vaccinesurvey.com","expectedChildBirth":"2015-09-01","firstName":"Lashell","hasContactUsers":true,"homePhone":"Purses torsi","interventionGroup":"Comprehensively Snowbelt","isDeactive":false,"lastName":"Jacobs","parentRelationshipType":"Staple reverent","parentUserId":25864,"password":"password","passwordConfirmation":"password","passwordDigest":"Paperweights dispatching","patientType":20821,"postalCode":"Columbines teleconferenced","raceId":62720,"reasonForDeactivation":"Hitchhiked differently","resetPassword":false,"role":"administrator","state":"Counsels dangles","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Camper rummaging"},
  'patient': {"actualChildBirth":"2015-03-28","address":"Lunchrooms Priam","cellPhone":"Multiplexed Frenchmen","city":"Prospers shoemakers","clinicianCodeId":48987,"clinicName":"Graciously excel","consentAcceptedOn":"1989-03-19 07:41:09 +0000","contactCellPhone":"Hoedown clogs","contactEmail":"Rabbi swish","contactHomePhone":"Playhouse Vandal","contactName":"Disorientation mineralogist","deactivatedOn":"2010-05-27 08:16:43 +0000","educationId":34469,"email":"woodrow.marvin58@vaccinesurvey.com","expectedChildBirth":"2017-01-14","firstName":"Billy","hasContactUsers":true,"homePhone":"Rehabilitation requested","interventionGroup":"Encroach meowing","isDeactive":false,"lastName":"Keeling","parentRelationshipType":"Prescient communicate","parentUserId":8523,"password":"password","passwordConfirmation":"password","passwordDigest":"Sentimentalists Eridanus","patientType":35129,"postalCode":"Chaperoning breathtakingly","raceId":5139,"reasonForDeactivation":"Noncooperation faintness","resetPassword":true,"role":"patient","state":"Preconditioning condenses","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Meditations industriousness"},
  'health_care_provider': {"actualChildBirth":"2015-04-11","address":"Monopolization sequenced","cellPhone":"Homestretches hardtop","city":"Uncontroversial Azores","clinicianCodeId":12008,"clinicName":"Crape computationally","consentAcceptedOn":"1989-10-04 05:20:34 +0000","contactCellPhone":"Oceanographers beams","contactEmail":"Administrate candlelight","contactHomePhone":"Scantest wrongfulness","contactName":"Demagnetization reconditioning","deactivatedOn":"1977-11-09 05:36:39 +0000","educationId":88281,"email":"yan.king19@vaccinesurvey.com","expectedChildBirth":"2015-05-26","firstName":"Adolfo","hasContactUsers":false,"homePhone":"Cleans conspiratorial","interventionGroup":"Disapprovingly banish","isDeactive":false,"lastName":"Runolfsdottir","parentRelationshipType":"Traditionally defensiveness","parentUserId":77475,"password":"password","passwordConfirmation":"password","passwordDigest":"Unsanctioned rectifications","patientType":43973,"postalCode":"Buccaneering swampy","raceId":56562,"reasonForDeactivation":"Fallacious walleyed","resetPassword":false,"role":"health_care_provider","state":"Pictograph individual","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Parthenogenesis mechanistic"},
  'Unauthenticated Default': {"actualChildBirth":"2015-05-30","address":"Psychological consultants","cellPhone":"Establishment conglomeration","city":"Sympathetic monorail","clinicianCodeId":19364,"clinicName":"Punctures abnormalities","consentAcceptedOn":"1985-05-06 20:23:38 +0000","contactCellPhone":"Howdy slurs","contactEmail":"Sympathetically resourcefulness","contactHomePhone":"Jalopies Donnell","contactName":"Underachieves standoffish","deactivatedOn":"1994-07-16 21:59:14 +0000","educationId":4262,"email":"jonna.gutkowski11@vaccinesurvey.com","expectedChildBirth":"2016-05-06","firstName":"Neal","hasContactUsers":true,"homePhone":"Ovary adzes","interventionGroup":"Drying subcontinents","isDeactive":false,"lastName":"Hamill","parentRelationshipType":"Embodying unappreciative","parentUserId":24506,"password":"password","passwordConfirmation":"password","passwordDigest":"Compartments unintelligibly","patientType":94794,"postalCode":"Afghans cookie","raceId":5091,"reasonForDeactivation":"Outrider philharmonics","resetPassword":true,"role":"Unauthenticated Default","state":"Colleague teletypewriter","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Zoroastrian moppet"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2Race', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"name":"Raul Veum"});
  testObjects.push({"name":"Ying Cassin"});
  testObjects.push({"name":"Carmelo Williamson"});
  testObjects.push({"name":"Ariel Sawayn"});
  testObjects.push({"name":"Marcel Morar"});
  testObjects.push({"name":"Francene Feeney"});
  testObjects.push({"name":"Jody Runolfsdottir"});
  testObjects.push({"name":"Bev Bashirian"});
  testObjects.push({"name":"Carlton Funk"});
  testObjects.push({"name":"Cornelius Franecki"});

V2Race.createEach(testObjects).exec(function(err, obj) {
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
      V2Race.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of races for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create race for administrator', function (done) {
      var newObj = {"name":"See Bahringer"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2Race.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show race for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update race for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Joseph Beer"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2Race.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2Race with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy race for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of races for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create race for patient', function (done) {
      var newObj = {"name":"Tina Nitzsche"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show race for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update race for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Mohamed Lueilwitz"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy race for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of races for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create race for health_care_provider', function (done) {
      var newObj = {"name":"Leona Steuber"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show race for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update race for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Elliott Osinski"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy race for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of races for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create race for unauthenticated', function (done) {
      var newObj = {"name":"Ginger Gleason"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show race for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update race for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Erwin Effertz"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy race for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/races/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
