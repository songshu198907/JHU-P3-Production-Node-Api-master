var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-04-01","address":"Murmuring wigged","cellPhone":"Deflection animosities","city":"Zedong faker","clinicianCodeId":95850,"clinicName":"Supercilious superintendents","consentAcceptedOn":"2009-05-25 16:55:58 +0000","contactCellPhone":"Butchery honest","contactEmail":"Tinniest sporadically","contactHomePhone":"Intellectualism besiegers","contactName":"Racing extradites","deactivatedOn":"2011-07-27 15:29:17 +0000","educationId":85402,"email":"vicente.wiegand86@vaccinesurvey.com","expectedChildBirth":"2014-01-24","firstName":"Claudine","hasContactUsers":false,"homePhone":"Mavin icebound","interventionGroup":"Classifications decaffeinating","isDeactive":false,"lastName":"Jakubowski","parentRelationshipType":"Individualizes graveyards","parentUserId":93484,"password":"password","passwordConfirmation":"password","passwordDigest":"Chauvinist precautionary","patientType":2340,"postalCode":"Upbringings sidearm","raceId":84336,"reasonForDeactivation":"Fasts intermediates","resetPassword":true,"role":"administrator","state":"Thermoplastic counterbalances","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Parried differently"},
  'patient': {"actualChildBirth":"2014-04-09","address":"Creosotes raved","cellPhone":"Circulations suntans","city":"Diffuseness implanting","clinicianCodeId":6820,"clinicName":"Anticyclones croon","consentAcceptedOn":"1993-02-13 10:51:42 +0000","contactCellPhone":"Epson soundproof","contactEmail":"Lullaby laywomen","contactHomePhone":"Commercialized Hendricks","contactName":"Stallone goobers","deactivatedOn":"1978-03-20 10:35:14 +0000","educationId":15025,"email":"oliver.homenick73@vaccinesurvey.com","expectedChildBirth":"2016-06-22","firstName":"Willy","hasContactUsers":true,"homePhone":"Utilitarianism partitioned","interventionGroup":"Crowds dioxide","isDeactive":true,"lastName":"Koepp","parentRelationshipType":"Depraved Proterozoic","parentUserId":86141,"password":"password","passwordConfirmation":"password","passwordDigest":"Manifestoes evidences","patientType":76324,"postalCode":"Cartilages expiring","raceId":88646,"reasonForDeactivation":"Bindings invulnerability","resetPassword":false,"role":"patient","state":"Optima approaching","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Caesarian warbling"},
  'health_care_provider': {"actualChildBirth":"2013-12-11","address":"Toxicologists overcompensated","cellPhone":"Abridgment imperilling","city":"Cheated energies","clinicianCodeId":18511,"clinicName":"Fleshing femininity","consentAcceptedOn":"2000-10-11 14:25:19 +0000","contactCellPhone":"Propositioning comprehensively","contactEmail":"Cleanlier artlessness","contactHomePhone":"Consciousness disillusionment","contactName":"Cantered fervid","deactivatedOn":"1985-04-05 19:33:13 +0000","educationId":3916,"email":"matt.champlin82@vaccinesurvey.com","expectedChildBirth":"2014-04-27","firstName":"Wilford","hasContactUsers":true,"homePhone":"Luxuriantly Dulles","interventionGroup":"Birthplaces refurbishment","isDeactive":false,"lastName":"Daniel","parentRelationshipType":"Array Travolta","parentUserId":58366,"password":"password","passwordConfirmation":"password","passwordDigest":"Prefiguring unselfishness","patientType":85946,"postalCode":"Disenchanting straightaway","raceId":59670,"reasonForDeactivation":"Chloroform concentrate","resetPassword":false,"role":"health_care_provider","state":"Gretel assassination","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Circuits blundering"},
  'Unauthenticated Default': {"actualChildBirth":"2015-09-03","address":"Padlocking memento","cellPhone":"Count Walden","city":"Relocate canards","clinicianCodeId":54248,"clinicName":"Overlooking Lowery","consentAcceptedOn":"2014-06-25 14:09:05 +0000","contactCellPhone":"Zoroastrianism tropism","contactEmail":"Sauce upsetting","contactHomePhone":"Shriving duplicating","contactName":"Commiserate treating","deactivatedOn":"2006-11-30 16:33:13 +0000","educationId":86866,"email":"avery.kulas3@vaccinesurvey.com","expectedChildBirth":"2014-07-25","firstName":"Paulina","hasContactUsers":false,"homePhone":"Transliteration professionalism","interventionGroup":"Scull jailers","isDeactive":false,"lastName":"Kilback","parentRelationshipType":"Unsuccessfully interference","parentUserId":93635,"password":"password","passwordConfirmation":"password","passwordDigest":"Disinterestedly misdirection","patientType":48142,"postalCode":"Photographer bloodthirstier","raceId":59059,"reasonForDeactivation":"Reals Ijsselmeer","resetPassword":true,"role":"Unauthenticated Default","state":"Projectionists juice","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Bonaventure choppered"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1Race', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"name":"Mina Gaylord"});
  testObjects.push({"name":"Lillian Strosin"});
  testObjects.push({"name":"Quintin Ferry"});
  testObjects.push({"name":"Pamela Sipes"});
  testObjects.push({"name":"Kesha Wuckert"});
  testObjects.push({"name":"Arnold Pacocha"});
  testObjects.push({"name":"Preston Lindgren"});
  testObjects.push({"name":"Mack Grimes"});
  testObjects.push({"name":"Noriko Dibbert"});
  testObjects.push({"name":"Ernesto Price"});

V1Race.createEach(testObjects).exec(function(err, obj) {
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
      V1Race.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of races for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create race for administrator', function (done) {
      var newObj = {"name":"Carlotta Pfannerstill"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1Race.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show race for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update race for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Larita Ziemann"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1Race.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1Race with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy race for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of races for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create race for patient', function (done) {
      var newObj = {"name":"Enda Franecki"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show race for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update race for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Gary Casper"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy race for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of races for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create race for health_care_provider', function (done) {
      var newObj = {"name":"Pete Hintz"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show race for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update race for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Magen Fahey"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy race for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of races for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create race for unauthenticated', function (done) {
      var newObj = {"name":"Irwin Rolfson"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show race for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update race for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Barry Howell"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy race for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/races/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
