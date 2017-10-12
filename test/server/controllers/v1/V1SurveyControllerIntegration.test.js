var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2014-03-25","address":"Licentiousness reassessments","cellPhone":"Comeliest superficially","city":"Insubordination italicized","clinicianCodeId":96661,"clinicName":"Assemblyman symposium","consentAcceptedOn":"1998-10-02 01:11:34 +0000","contactCellPhone":"Disseminating pleads","contactEmail":"Flophouse overconfident","contactHomePhone":"Syllabification browbeats","contactName":"Persons Tomas","deactivatedOn":"1991-07-02 12:49:25 +0000","educationId":50841,"email":"terrence.lindgren70@vaccinesurvey.com","expectedChildBirth":"2016-06-04","firstName":"Eddie","hasContactUsers":false,"homePhone":"Broiled falsification","interventionGroup":"Mesdemoiselles consoled","isDeactive":false,"lastName":"Olson","parentRelationshipType":"Acquiesce multitasking","parentUserId":50217,"password":"password","passwordConfirmation":"password","passwordDigest":"Nonprescription licenses","patientType":92602,"postalCode":"Languid sideswiping","raceId":18088,"reasonForDeactivation":"Sensurround irremediably","resetPassword":true,"role":"administrator","state":"Leafs Butterfingers","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Psalter surrealistic"},
  'patient': {"actualChildBirth":"2015-03-23","address":"Mathematician Gregorio","cellPhone":"Democrats psychoanalyzing","city":"Sentimentalizes Rozelle","clinicianCodeId":57758,"clinicName":"Coots groves","consentAcceptedOn":"1981-06-01 04:35:38 +0000","contactCellPhone":"Erodes predictability","contactEmail":"Cowpuncher millionaires","contactHomePhone":"Misbehaved hotel","contactName":"Expropriated crystallizes","deactivatedOn":"2016-07-06 09:12:04 +0000","educationId":84919,"email":"lien.wisozk96@vaccinesurvey.com","expectedChildBirth":"2015-02-06","firstName":"Julian","hasContactUsers":true,"homePhone":"Backslappers disenchanting","interventionGroup":"Likeableness excommunication","isDeactive":true,"lastName":"O'Connell","parentRelationshipType":"Judged whimsical","parentUserId":22519,"password":"password","passwordConfirmation":"password","passwordDigest":"Countries drawstrings","patientType":35524,"postalCode":"Capitalistic disinheriting","raceId":47476,"reasonForDeactivation":"Bushwhackers percentages","resetPassword":false,"role":"patient","state":"Rumpelstiltskin roughen","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Expectoration reconciliations"},
  'health_care_provider': {"actualChildBirth":"2016-05-27","address":"Moorish filler","cellPhone":"Bridgeheads repossessions","city":"Hopeless niche","clinicianCodeId":89619,"clinicName":"Essentials outgo","consentAcceptedOn":"2007-06-08 00:42:03 +0000","contactCellPhone":"Sullenly gregarious","contactEmail":"Stripteasing Bryan","contactHomePhone":"Jetty unconditional","contactName":"Computerizing peppers","deactivatedOn":"2016-04-13 14:25:37 +0000","educationId":59859,"email":"sean.white71@vaccinesurvey.com","expectedChildBirth":"2016-01-24","firstName":"Santina","hasContactUsers":false,"homePhone":"Childproofs lubes","interventionGroup":"Conforms preventative","isDeactive":false,"lastName":"DuBuque","parentRelationshipType":"Complementing Mapplethorpe","parentUserId":84363,"password":"password","passwordConfirmation":"password","passwordDigest":"Restauranteur indulgently","patientType":7219,"postalCode":"Unimaginative trying","raceId":9260,"reasonForDeactivation":"Percolated screenwriters","resetPassword":false,"role":"health_care_provider","state":"Misrepresented indescribable","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Demonstratively marchionesses"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1Survey', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"interventionGroup":"Rodrigo crosschecking","isActive":true,"name":"Tawanda Konopelski","patientType":3897,"surveyType":"Multitudinous basement","totalQuestions":34815,"version":75503});
  testObjects.push({"interventionGroup":"Semiconductors Julia","isActive":true,"name":"Mario Schaefer","patientType":62340,"surveyType":"Gladioli cancellation","totalQuestions":43528,"version":32056});
  testObjects.push({"interventionGroup":"Scatterbrain deliveries","isActive":true,"name":"Abby Glover","patientType":98857,"surveyType":"Incarceration ambush","totalQuestions":12895,"version":48633});
  testObjects.push({"interventionGroup":"Untenable creeper","isActive":true,"name":"Phil Ferry","patientType":73311,"surveyType":"Belfry mannish","totalQuestions":97573,"version":88125});
  testObjects.push({"interventionGroup":"Intagli dynamically","isActive":false,"name":"Bud Kuhic","patientType":32887,"surveyType":"Andres articulates","totalQuestions":30409,"version":15859});
  testObjects.push({"interventionGroup":"Bangladeshis haphazard","isActive":true,"name":"Elvina Bashirian","patientType":16757,"surveyType":"Existence shafts","totalQuestions":58969,"version":97897});
  testObjects.push({"interventionGroup":"Candidly briskets","isActive":true,"name":"Son Abernathy","patientType":34332,"surveyType":"Incongruity disconsolately","totalQuestions":22651,"version":44180});
  testObjects.push({"interventionGroup":"Interactions Burton","isActive":false,"name":"Burton Boyle","patientType":20699,"surveyType":"Anthropoids Presbyterianism","totalQuestions":9581,"version":19424});
  testObjects.push({"interventionGroup":"Indirectness soaps","isActive":true,"name":"Jimmy Romaguera","patientType":99615,"surveyType":"Replaying sledgehammers","totalQuestions":41701,"version":67190});
  testObjects.push({"interventionGroup":"Mumbai Henderson","isActive":true,"name":"Kerry Kuhn","patientType":63180,"surveyType":"Discouragement wistful","totalQuestions":36025,"version":20233});

V1Survey.createEach(testObjects).exec(function(err, obj) {
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
      V1Survey.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of surveys for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey for administrator', function (done) {
      var newObj = {"intervention_group":"Gabriela embellishments","is_active":true,"name":"Perry Beatty","patient_type":75816,"survey_type":"Intensifies homogenization","total_questions":2542,"version":17487};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1Survey.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show survey for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"intervention_group":"Transcendence Urban","is_active":true,"name":"Pat Grady","patient_type":58150,"survey_type":"Bowlders dampest","total_questions":62460,"version":2938};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1Survey.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1Survey with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy survey for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of surveys for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create survey for patient', function (done) {
      var newObj = {"intervention_group":"Specialization adrift","is_active":true,"name":"Angila Walsh","patient_type":80654,"survey_type":"Torts newsstand","total_questions":88789,"version":44825};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"intervention_group":"Electrification typographically","is_active":false,"name":"Meda Reilly","patient_type":17148,"survey_type":"Protestors hastily","total_questions":66855,"version":78227};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of surveys for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create survey for health_care_provider', function (done) {
      var newObj = {"intervention_group":"Disadvantages scandalmongers","is_active":false,"name":"Jeremiah Conroy","patient_type":36199,"survey_type":"Midweeks bisection","total_questions":73116,"version":76789};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"intervention_group":"Barbarism distinctive","is_active":true,"name":"Roger Erdman","patient_type":54258,"survey_type":"Cinematographer scuffing","total_questions":18100,"version":3693};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
