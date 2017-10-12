var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2014-10-22","address":"Infections nappiest","cellPhone":"Elucidations misappropriate","city":"Environs mobility","clinicianCodeId":82918,"clinicName":"Tonga rainy","consentAcceptedOn":"1970-06-22 10:23:51 +0000","contactCellPhone":"Collaborator vamoosing","contactEmail":"Consecutively hospitalization","contactHomePhone":"Honed lavender","contactName":"Strangulating tremolos","deactivatedOn":"2003-05-16 19:32:13 +0000","educationId":24313,"email":"luke.mitchell36@vaccinesurvey.com","expectedChildBirth":"2014-11-11","firstName":"Song","hasContactUsers":true,"homePhone":"Angered elliptically","interventionGroup":"Philosophically Aeneid","isDeactive":false,"lastName":"Koch","parentRelationshipType":"Unworthy archeology","parentUserId":7725,"password":"password","passwordConfirmation":"password","passwordDigest":"Demoralization Randall","patientType":19314,"postalCode":"Docudramas beret","raceId":11451,"reasonForDeactivation":"Astronomically hedonist","resetPassword":true,"role":"administrator","state":"Disrobes punctilious","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Gotham ridicule"},
  'patient': {"actualChildBirth":"2015-02-10","address":"Auras engulf","cellPhone":"Timidest inspects","city":"Kelsey Pascal","clinicianCodeId":86823,"clinicName":"Pungency proportional","consentAcceptedOn":"1985-06-30 16:49:22 +0000","contactCellPhone":"Inaccessible internalizing","contactEmail":"Sjaelland sublimation","contactHomePhone":"Blankest wimpled","contactName":"Prodigiously bicentennials","deactivatedOn":"1991-02-22 18:27:06 +0000","educationId":1090,"email":"larae.schiller26@vaccinesurvey.com","expectedChildBirth":"2015-05-08","firstName":"Grady","hasContactUsers":false,"homePhone":"Prostitutes outstations","interventionGroup":"Liquored Asama","isDeactive":true,"lastName":"Romaguera","parentRelationshipType":"Atmospherically amendments","parentUserId":6593,"password":"password","passwordConfirmation":"password","passwordDigest":"Popularization countenancing","patientType":9973,"postalCode":"Indulges graduate","raceId":94093,"reasonForDeactivation":"Macaronies hyperventilated","resetPassword":false,"role":"patient","state":"Geese protuberances","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Allie centrifugal"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1SurveyAnswer', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Huckstering hitchhiked","label":"Borrower directorships","sortOrder":39477,"surveyQuestionId":14050,"videoTargetNumber":35110,"weight":8064});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Unsatisfying ultras","label":"Brasilia electroplating","sortOrder":18865,"surveyQuestionId":40216,"videoTargetNumber":28547,"weight":93749});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Prussian carelessness","label":"Theodosius crystallization","sortOrder":10950,"surveyQuestionId":15545,"videoTargetNumber":95545,"weight":55835});
  testObjects.push({"allowFreeForm":true,"freeFormDataType":"Exuberance wallflowers","label":"Meteorological guidance","sortOrder":42831,"surveyQuestionId":17065,"videoTargetNumber":60795,"weight":64950});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Melinda vulnerability","label":"Imperilling dines","sortOrder":71991,"surveyQuestionId":41967,"videoTargetNumber":66102,"weight":26896});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Unwrapping prosthetic","label":"Pusillanimous inuring","sortOrder":21460,"surveyQuestionId":60529,"videoTargetNumber":91022,"weight":94555});
  testObjects.push({"allowFreeForm":true,"freeFormDataType":"Embers systematize","label":"Processioned shuttered","sortOrder":60513,"surveyQuestionId":50820,"videoTargetNumber":47337,"weight":92183});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Radiotherapist philanthropies","label":"Obscures prepaying","sortOrder":67036,"surveyQuestionId":73562,"videoTargetNumber":49836,"weight":184});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Straightforward Olive","label":"Overwhelming porterhouses","sortOrder":85086,"surveyQuestionId":58261,"videoTargetNumber":24705,"weight":12296});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Tonsillectomy confederations","label":"Extrusion response","sortOrder":80630,"surveyQuestionId":50798,"videoTargetNumber":65665,"weight":95406});

V1SurveyAnswer.createEach(testObjects).exec(function(err, obj) {
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
      V1SurveyAnswer.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of survey_answers for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_answer for administrator', function (done) {
      var newObj = {"allow_free_form":true,"free_form_data_type":"Chronometers styli","label":"Clavichords conventions","sort_order":61636,"survey_question_id":29549,"video_target_number":87733,"weight":64696};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1SurveyAnswer.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show survey_answer for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_answer for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"allow_free_form":false,"free_form_data_type":"Contemporaneous administrative","label":"Threescore Pekingeses","sort_order":64357,"survey_question_id":10980,"video_target_number":36618,"weight":64911};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1SurveyAnswer.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1SurveyAnswer with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy survey_answer for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V1SurveyAnswer.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
    it('should attempt to get index of survey_answers for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_answer for patient', function (done) {
      var newObj = {"allow_free_form":false,"free_form_data_type":"Affrays snippy","label":"Lexicographers prudish","sort_order":6519,"survey_question_id":13122,"video_target_number":54373,"weight":96107};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey_answer for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_answer for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"allow_free_form":true,"free_form_data_type":"Categorizing falsifiable","label":"Nasal inhospitable","sort_order":51179,"survey_question_id":75511,"video_target_number":97975,"weight":73071};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey_answer for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_answers/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
