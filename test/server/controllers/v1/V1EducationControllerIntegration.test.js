var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2014-01-14","address":"Misrepresenting desensitization","cellPhone":"Psychoanalyzing historically","city":"Sanctification reciprocated","clinicianCodeId":37350,"clinicName":"Inarticulately burdens","consentAcceptedOn":"1982-04-21 13:52:30 +0000","contactCellPhone":"Intentional autopsies","contactEmail":"Sappho benedictions","contactHomePhone":"Sandy triennials","contactName":"Admixture unmentionables","deactivatedOn":"2001-02-20 18:04:53 +0000","educationId":90969,"email":"parker.hintz48@vaccinesurvey.com","expectedChildBirth":"2013-11-09","firstName":"Kathlene","hasContactUsers":true,"homePhone":"Embracing inflorescence","interventionGroup":"Mummified Hangul","isDeactive":false,"lastName":"Stokes","parentRelationshipType":"Smuts chargeable","parentUserId":8716,"password":"password","passwordConfirmation":"password","passwordDigest":"Contribution masterpiece","patientType":14960,"postalCode":"Brightest sentimentalize","raceId":14433,"reasonForDeactivation":"Honshu misrepresenting","resetPassword":true,"role":"administrator","state":"Extinguishers punctuality","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Lessened unsuccessfully"},
  'patient': {"actualChildBirth":"2015-03-04","address":"Sledgehammered Shintos","cellPhone":"Funneling nonprofessional","city":"Ogles choreographing","clinicianCodeId":95875,"clinicName":"Expression besot","consentAcceptedOn":"1998-09-21 01:36:15 +0000","contactCellPhone":"Triflers Tegucigalpa","contactEmail":"Diminish transfixes","contactHomePhone":"Climb lither","contactName":"Chlorination mollycoddling","deactivatedOn":"1985-02-04 01:03:04 +0000","educationId":50158,"email":"laverne.stroman18@vaccinesurvey.com","expectedChildBirth":"2016-01-13","firstName":"Carlos","hasContactUsers":true,"homePhone":"Slipping fatalistic","interventionGroup":"Debited recitatives","isDeactive":false,"lastName":"Funk","parentRelationshipType":"Convalesced apprehensively","parentUserId":97515,"password":"password","passwordConfirmation":"password","passwordDigest":"Gilbert vaginae","patientType":82012,"postalCode":"Grouched broaches","raceId":16982,"reasonForDeactivation":"Subordination renegotiates","resetPassword":true,"role":"patient","state":"Extol recollections","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Cliff excommunicated"},
  'health_care_provider': {"actualChildBirth":"2015-04-04","address":"Impertinently hallucinating","cellPhone":"Aforementioned medulla","city":"Hydraulically stripteasing","clinicianCodeId":27466,"clinicName":"Tourists Barnabas","consentAcceptedOn":"2014-01-22 03:02:37 +0000","contactCellPhone":"Interpretation Chernomyrdin","contactEmail":"Dignifies psychologically","contactHomePhone":"Anthropologist demobilization","contactName":"Overachieves presage","deactivatedOn":"1994-08-12 20:09:26 +0000","educationId":93124,"email":"anissa.wiegand31@vaccinesurvey.com","expectedChildBirth":"2014-08-05","firstName":"Fabiola","hasContactUsers":true,"homePhone":"Merchandising ramshackle","interventionGroup":"Groundings Mamore","isDeactive":true,"lastName":"Koch","parentRelationshipType":"Hypothetically upstage","parentUserId":92522,"password":"password","passwordConfirmation":"password","passwordDigest":"Routinizes totalitarianism","patientType":77706,"postalCode":"Notwithstanding falsification","raceId":11262,"reasonForDeactivation":"Quick butterier","resetPassword":true,"role":"health_care_provider","state":"Congregates administrating","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Migrants Pablum"},
  'Unauthenticated Default': {"actualChildBirth":"2015-02-03","address":"Diners easterners","cellPhone":"Jitterbugs oversees","city":"Antagonize obstructiveness","clinicianCodeId":22565,"clinicName":"Rooting Rosemarie","consentAcceptedOn":"2005-08-29 15:24:24 +0000","contactCellPhone":"Apprenticeships Amaterasu","contactEmail":"Cannibalizes wrists","contactHomePhone":"Combating pompom","contactName":"Uncontrolled outstrips","deactivatedOn":"1989-05-09 18:04:33 +0000","educationId":31743,"email":"rigoberto.steuber30@vaccinesurvey.com","expectedChildBirth":"2015-12-24","firstName":"Shela","hasContactUsers":false,"homePhone":"Competitiveness Attlee","interventionGroup":"Superstructure birthday","isDeactive":false,"lastName":"Purdy","parentRelationshipType":"Prosaically presented","parentUserId":65362,"password":"password","passwordConfirmation":"password","passwordDigest":"Collectivize belies","patientType":53423,"postalCode":"Resent moderns","raceId":38790,"reasonForDeactivation":"Isolationists froth","resetPassword":false,"role":"Unauthenticated Default","state":"Moderator acknowledgments","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Polymerization augmentations"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1Education', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"name":"Kip Heller"});
  testObjects.push({"name":"Rosalind McKenzie"});
  testObjects.push({"name":"Charles Daniel"});
  testObjects.push({"name":"Leana Botsford"});
  testObjects.push({"name":"Ricky Mueller"});
  testObjects.push({"name":"Jarvis Schmidt"});
  testObjects.push({"name":"Joeann Kuphal"});
  testObjects.push({"name":"Hana Powlowski"});
  testObjects.push({"name":"Ignacio Volkman"});
  testObjects.push({"name":"Charline Prohaska"});

V1Education.createEach(testObjects).exec(function(err, obj) {
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
      V1Education.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of educations for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create education for administrator', function (done) {
      var newObj = {"name":"Mckinley Gulgowski"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1Education.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show education for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update education for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Omega Franecki"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1Education.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1Education with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy education for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of educations for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create education for patient', function (done) {
      var newObj = {"name":"Bart Schimmel"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show education for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update education for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Troy Douglas"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy education for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of educations for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create education for health_care_provider', function (done) {
      var newObj = {"name":"Archie Schneider"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show education for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update education for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Shon Beatty"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy education for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of educations for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create education for unauthenticated', function (done) {
      var newObj = {"name":"Winfred Buckridge"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show education for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update education for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Bryant Rosenbaum"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy education for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/educations/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
