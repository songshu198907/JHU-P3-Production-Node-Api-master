var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2013-10-28","address":"Bacteriologists slender","cellPhone":"Proprietorship resin","city":"Shaun providers","clinicianCodeId":2345,"clinicName":"Knobs underclassmen","consentAcceptedOn":"1994-09-26 19:43:43 +0000","contactCellPhone":"Decommissions Butterfingers","contactEmail":"Vanessa trysting","contactHomePhone":"Repelling prostitution","contactName":"Rationalists tinged","deactivatedOn":"1984-09-07 03:40:17 +0000","educationId":33071,"email":"lovetta.o'conner100@vaccinesurvey.com","expectedChildBirth":"2016-06-26","firstName":"Renato","hasContactUsers":false,"homePhone":"Conquistadores partway","interventionGroup":"Debilitate amalgamation","isDeactive":true,"lastName":"Champlin","parentRelationshipType":"Singularities relevant","parentUserId":10429,"password":"password","passwordConfirmation":"password","passwordDigest":"Desalinated talkativeness","patientType":55418,"postalCode":"Daintier Iowas","raceId":38167,"reasonForDeactivation":"Substantiations decaf","resetPassword":false,"role":"patient","state":"Negotiable Adirondacks","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Mutual pricks"},
  'administrator': {"actualChildBirth":"2014-11-04","address":"Vouchsafed socialism","cellPhone":"Disappointments sanctimoniously","city":"Rubberized inverse","clinicianCodeId":87856,"clinicName":"Hypnotized bedfellow","consentAcceptedOn":"1996-01-16 11:11:08 +0000","contactCellPhone":"Caldrons ambient","contactEmail":"Exoduses undergarment","contactHomePhone":"Rebroadcasted nominees","contactName":"Houseplants esophaguses","deactivatedOn":"1979-12-30 13:57:38 +0000","educationId":11424,"email":"jewel.schmeler6@vaccinesurvey.com","expectedChildBirth":"2013-12-01","firstName":"Claudio","hasContactUsers":true,"homePhone":"Condescended rider","interventionGroup":"Dispossession antiseptically","isDeactive":true,"lastName":"Simonis","parentRelationshipType":"Innovated soundproofing","parentUserId":31056,"password":"password","passwordConfirmation":"password","passwordDigest":"Mountain hairstyle","patientType":31125,"postalCode":"Gainsborough exasperating","raceId":23406,"reasonForDeactivation":"Flightiness regularized","resetPassword":true,"role":"administrator","state":"Derision illness","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Emboldening extortionists"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1SurveyQuestionSkipLogic', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"skipQuestionCodes":"Pomona uncontroversial","surveyAnswerId":"Polly Laotian"});
  testObjects.push({"skipQuestionCodes":"Whaler collating","surveyAnswerId":"Concretes leggiest"});
  testObjects.push({"skipQuestionCodes":"Regimentation dingiest","surveyAnswerId":"Guesstimating assassinations"});
  testObjects.push({"skipQuestionCodes":"Manure mescaline","surveyAnswerId":"Retrenchments numbers"});
  testObjects.push({"skipQuestionCodes":"Practicalities mathematics","surveyAnswerId":"Cains ethnics"});
  testObjects.push({"skipQuestionCodes":"Sidetracking Luxembourger","surveyAnswerId":"Balms demurred"});
  testObjects.push({"skipQuestionCodes":"Wagons mariner","surveyAnswerId":"Melancholics Ghana"});
  testObjects.push({"skipQuestionCodes":"Asphyxiates transcription","surveyAnswerId":"Crete ginger"});
  testObjects.push({"skipQuestionCodes":"Deconstructions hilariously","surveyAnswerId":"Technologists spends"});
  testObjects.push({"skipQuestionCodes":"Pistillate hullabaloo","surveyAnswerId":"Woolier conic"});

V1SurveyQuestionSkipLogic.createEach(testObjects).exec(function(err, obj) {
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
      V1SurveyQuestionSkipLogic.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of survey_question_skip_logics for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_question_skip_logic for patient', function (done) {
      var newObj = {"skip_question_codes":"Standardizes technologically","survey_answer_id":"Psychoanalyzing docudramas"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey_question_skip_logic for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_question_skip_logic for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"skip_question_codes":"Skylarked fondling","survey_answer_id":"Squads discomfits"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey_question_skip_logic for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of survey_question_skip_logics for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_question_skip_logic for administrator', function (done) {
      var newObj = {"skip_question_codes":"Rides salty","survey_answer_id":"Wristbands birdies"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1SurveyQuestionSkipLogic.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show survey_question_skip_logic for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_question_skip_logic for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"skip_question_codes":"Disapprobation questionnaires","survey_answer_id":"Foretaste intercollegiate"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1SurveyQuestionSkipLogic.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1SurveyQuestionSkipLogic with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy survey_question_skip_logic for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_question_skip_logics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V1SurveyQuestionSkipLogic.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
});
