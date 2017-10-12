var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-06-24","address":"Speckled Kristina","cellPhone":"Touchiest avails","city":"Oceangoing outspreading","clinicianCodeId":27352,"clinicName":"Hypoallergenic prefabricates","consentAcceptedOn":"2006-02-26 10:05:56 +0000","contactCellPhone":"Honeycomb raiment","contactEmail":"Discourteously disenfranchised","contactHomePhone":"Evaluation Jewry","contactName":"Crumbed geckoes","deactivatedOn":"1996-12-13 12:30:25 +0000","educationId":52906,"email":"benedict.cummerata95@vaccinesurvey.com","expectedChildBirth":"2016-02-10","firstName":"Dewayne","hasContactUsers":true,"homePhone":"Merging bankrolled","interventionGroup":"Goods experimenting","isDeactive":false,"lastName":"Kessler","parentRelationshipType":"Congeniality torpedo","parentUserId":5248,"password":"password","passwordConfirmation":"password","passwordDigest":"Mephistopheles Jacobs","patientType":80675,"postalCode":"Slows pharmacopeias","raceId":11948,"reasonForDeactivation":"Hubris flatcar","resetPassword":false,"role":"administrator","state":"Marlin spadeful","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Fives Mattie"},
  'patient': {"actualChildBirth":"2015-06-13","address":"Deejays teeter","cellPhone":"Interrogatory megaphone","city":"Stringers uncompromising","clinicianCodeId":79283,"clinicName":"Pursuer improvisations","consentAcceptedOn":"1976-01-24 13:53:09 +0000","contactCellPhone":"Salisbury euphemistically","contactEmail":"Psychopaths insufficiently","contactHomePhone":"Fanned cornbread","contactName":"Reaffirm diaries","deactivatedOn":"2001-08-01 12:04:33 +0000","educationId":78271,"email":"loraine.connelly78@vaccinesurvey.com","expectedChildBirth":"2016-07-16","firstName":"Joana","hasContactUsers":true,"homePhone":"Pesticide triglycerides","interventionGroup":"Hygrometers skyscrapers","isDeactive":false,"lastName":"Pouros","parentRelationshipType":"Cocksuckers wrappings","parentUserId":55599,"password":"password","passwordConfirmation":"password","passwordDigest":"Recessives maple","patientType":9996,"postalCode":"Hazings ingenuity","raceId":55816,"reasonForDeactivation":"Qualification reconstruction","resetPassword":false,"role":"patient","state":"Unbarred disciplining","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Prefabricating operettas"},
  'health_care_provider': {"actualChildBirth":"2015-03-02","address":"Stepbrothers whippersnappers","cellPhone":"Unkindliest indeterminately","city":"Sheol hypothesizes","clinicianCodeId":79993,"clinicName":"Understaffed renews","consentAcceptedOn":"1984-04-25 07:48:51 +0000","contactCellPhone":"Guidebooks genuflected","contactEmail":"Quayle Keisha","contactHomePhone":"Anthologize sleighing","contactName":"Witness preconceives","deactivatedOn":"1990-06-30 15:53:44 +0000","educationId":86433,"email":"chung.macejkovic73@vaccinesurvey.com","expectedChildBirth":"2014-01-09","firstName":"Shawnta","hasContactUsers":false,"homePhone":"Unscrewing overspecialize","interventionGroup":"Acupuncturists psychologically","isDeactive":false,"lastName":"Torphy","parentRelationshipType":"Mortarboards dibbling","parentUserId":84554,"password":"password","passwordConfirmation":"password","passwordDigest":"Brandishes substructure","patientType":54760,"postalCode":"Septuagenarians owner","raceId":60512,"reasonForDeactivation":"Transplantation Afghanistan","resetPassword":false,"role":"health_care_provider","state":"Immutability Narragansett","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Nanette coagulation"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1ClinicianCode', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"code":"Twice familiar","name":"Hubert Morar"});
  testObjects.push({"code":"Sentimentalists overtly","name":"Latricia Dooley"});
  testObjects.push({"code":"Hazlitt beatifications","name":"Danille Schuster"});
  testObjects.push({"code":"Mangrove superstitiously","name":"Valentine Smitham"});
  testObjects.push({"code":"Slanders truths","name":"Onie Romaguera"});
  testObjects.push({"code":"Transacted indecipherable","name":"Jayson Kohler"});
  testObjects.push({"code":"Shoving redeveloped","name":"Vertie Roob"});
  testObjects.push({"code":"Disobediently anchorperson","name":"Romeo Shanahan"});
  testObjects.push({"code":"Screen belligerents","name":"Charlie Dickens"});
  testObjects.push({"code":"Philanthropy ostracized","name":"Jazmin Stoltenberg"});

V1ClinicianCode.createEach(testObjects).exec(function(err, obj) {
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
      V1ClinicianCode.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of clinician_codes for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create clinician_code for administrator', function (done) {
      var newObj = {"code":"Misplayed concentration","name":"Shirleen Hintz"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1ClinicianCode.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show clinician_code for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update clinician_code for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"code":"Blackberrying tenderfoot","name":"Cristine Macejkovic"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1ClinicianCode.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1ClinicianCode with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy clinician_code for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of clinician_codes for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create clinician_code for patient', function (done) {
      var newObj = {"code":"Catalyst reflexively","name":"Kasey Lehner"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show clinician_code for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update clinician_code for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"code":"Individualizes overwrites","name":"Anisa O'Connell"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy clinician_code for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of clinician_codes for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create clinician_code for health_care_provider', function (done) {
      var newObj = {"code":"Wilting decontaminating","name":"Annita Kertzmann"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show clinician_code for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update clinician_code for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"code":"Spontaneously intelligentsia","name":"Randy Hahn"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy clinician_code for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_codes/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
