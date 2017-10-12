var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2013-10-26","address":"Industriousness blinkering","cellPhone":"Intermission homesteaders","city":"Overconfident encouraged","clinicianCodeId":80141,"clinicName":"January lemony","consentAcceptedOn":"1972-04-29 08:49:42 +0000","contactCellPhone":"Apprehensive webmasters","contactEmail":"Disemboweling Zachariah","contactHomePhone":"Susanna twofer","contactName":"Shorthorn imponderables","deactivatedOn":"1979-04-07 08:18:36 +0000","educationId":60823,"email":"chi.beatty56@vaccinesurvey.com","expectedChildBirth":"2014-02-01","firstName":"Pam","hasContactUsers":true,"homePhone":"Disinterestedly dreadnoughts","interventionGroup":"Championships transcendental","isDeactive":false,"lastName":"Blanda","parentRelationshipType":"Stereotypical consonances","parentUserId":59347,"password":"password","passwordConfirmation":"password","passwordDigest":"Terminological corroborations","patientType":64933,"postalCode":"Individualizing tonsils","raceId":4709,"reasonForDeactivation":"Proboscides entertainingly","resetPassword":true,"role":"administrator","state":"Chime advertise","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Merck horse"},
  'patient': {"actualChildBirth":"2015-05-29","address":"Elixirs telecommuting","cellPhone":"Acres precipitates","city":"Interns crumblier","clinicianCodeId":41278,"clinicName":"Spanning preregisters","consentAcceptedOn":"2010-02-07 19:28:09 +0000","contactCellPhone":"Nests mountains","contactEmail":"Bedevilling overexposes","contactHomePhone":"Depopulation rejuvenating","contactName":"Lionizing indefinite","deactivatedOn":"2013-09-28 15:45:50 +0000","educationId":94920,"email":"jamey.o'keefe16@vaccinesurvey.com","expectedChildBirth":"2013-11-22","firstName":"Mathew","hasContactUsers":true,"homePhone":"Dotty warring","interventionGroup":"Plenipotentiary brunching","isDeactive":true,"lastName":"Borer","parentRelationshipType":"Forthrightly diced","parentUserId":37551,"password":"password","passwordConfirmation":"password","passwordDigest":"Waterfront newbie","patientType":15192,"postalCode":"Disparities technologically","raceId":75980,"reasonForDeactivation":"Jettisons dulcimer","resetPassword":false,"role":"patient","state":"Pleasings hostel","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Unrefined methadon"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1SurveyQuestion', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"didYouKnowText":"Extrapolated steeplejacks","label":"Disinformation winterizes","questionCategoryId":12255,"questionCodeId":87503,"questionGroup":"Vatican uncontrollable","questionText":"Intercepting purity","questionTypeId":34016,"requiredAnswer":false,"sortOrder":71202,"surveyId":99575});
  testObjects.push({"didYouKnowText":"Misanthropic installed","label":"Splays simplistic","questionCategoryId":15717,"questionCodeId":50782,"questionGroup":"Raced commutations","questionText":"Tidiest sedates","questionTypeId":35960,"requiredAnswer":false,"sortOrder":56529,"surveyId":46117});
  testObjects.push({"didYouKnowText":"Grinds misogynist","label":"Utopias uninformative","questionCategoryId":57033,"questionCodeId":25820,"questionGroup":"Miniaturization moped","questionText":"Smithies tenured","questionTypeId":76250,"requiredAnswer":true,"sortOrder":93918,"surveyId":54917});
  testObjects.push({"didYouKnowText":"Airlifted Mondale","label":"Gilts legitimacy","questionCategoryId":27681,"questionCodeId":21629,"questionGroup":"Insurrectionist copier","questionText":"Incorrigibility remonstrates","questionTypeId":70983,"requiredAnswer":true,"sortOrder":81137,"surveyId":89752});
  testObjects.push({"didYouKnowText":"Backslash sultans","label":"Legitimizes rebutting","questionCategoryId":72461,"questionCodeId":5836,"questionGroup":"Geneva purveys","questionText":"Desirable Ankara","questionTypeId":83743,"requiredAnswer":true,"sortOrder":59186,"surveyId":79317});
  testObjects.push({"didYouKnowText":"Dunedin unidentified","label":"Falsehoods correspondents","questionCategoryId":6438,"questionCodeId":46768,"questionGroup":"Transliterates determinations","questionText":"Gentrification contemplatives","questionTypeId":19751,"requiredAnswer":false,"sortOrder":89090,"surveyId":18643});
  testObjects.push({"didYouKnowText":"Inconsequential mechanism","label":"Physiotherapist depoliticizes","questionCategoryId":42396,"questionCodeId":10089,"questionGroup":"Physiotherapist dryads","questionText":"Pornographers wrappings","questionTypeId":92942,"requiredAnswer":true,"sortOrder":24469,"surveyId":99775});
  testObjects.push({"didYouKnowText":"Partridges contamination","label":"Puzzlement salami","questionCategoryId":98435,"questionCodeId":91762,"questionGroup":"Highfaluting Alhena","questionText":"Representatives tattoo","questionTypeId":13687,"requiredAnswer":false,"sortOrder":55597,"surveyId":6736});
  testObjects.push({"didYouKnowText":"Parishioner consonants","label":"Harvesting enemies","questionCategoryId":49117,"questionCodeId":33577,"questionGroup":"Specification adenoidal","questionText":"Coroners haberdasher","questionTypeId":31902,"requiredAnswer":true,"sortOrder":55384,"surveyId":39009});
  testObjects.push({"didYouKnowText":"Tunneling Angelico","label":"Extenuating aurae","questionCategoryId":69381,"questionCodeId":68861,"questionGroup":"Splotch underachievers","questionText":"Smuggles Ruben","questionTypeId":46150,"requiredAnswer":true,"sortOrder":40118,"surveyId":40849});

V1SurveyQuestion.createEach(testObjects).exec(function(err, obj) {
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
      V1SurveyQuestion.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of survey_questions for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_question for administrator', function (done) {
      var newObj = {"did_you_know_text":"Sepulchered treatise","label":"Sinuous lethargically","question_category_id":19566,"question_code_id":84154,"question_group":"Inarticulate misplayed","question_text":"Discountenances booklets","question_type_id":85938,"required_answer":false,"sort_order":30489,"survey_id":63575};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1SurveyQuestion.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show survey_question for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_question for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"did_you_know_text":"Conceptions archers","label":"Interrogations sportsmanship","question_category_id":33682,"question_code_id":10550,"question_group":"Tailpipe insufferable","question_text":"Manitoulin impressionistic","question_type_id":56203,"required_answer":false,"sort_order":98380,"survey_id":28799};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1SurveyQuestion.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1SurveyQuestion with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy survey_question for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V1SurveyQuestion.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
    it('should attempt to get index of survey_questions for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_question for patient', function (done) {
      var newObj = {"did_you_know_text":"Basalt exotic","label":"Godson correspondences","question_category_id":28709,"question_code_id":95219,"question_group":"Outsets calumnies","question_text":"Extracurricular postures","question_type_id":80574,"required_answer":false,"sort_order":66830,"survey_id":50168};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey_question for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_question for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"did_you_know_text":"Preset Beard","label":"Reconvening larking","question_category_id":76285,"question_code_id":41199,"question_group":"Overstocking recommences","question_text":"Transliterates puppetry","question_type_id":84473,"required_answer":true,"sort_order":78308,"survey_id":61714};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey_question for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/survey_questions/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
