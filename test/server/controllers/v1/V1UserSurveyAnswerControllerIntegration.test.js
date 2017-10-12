var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2013-12-22","address":"Gonzales remotes","cellPhone":"Philosophize subordination","city":"Nontransferable impracticality","clinicianCodeId":34373,"clinicName":"Harboring overcompensated","consentAcceptedOn":"1972-02-05 03:11:38 +0000","contactCellPhone":"Affluently freedman","contactEmail":"Abscessed provincials","contactHomePhone":"Grandads loops","contactName":"Besotting radiotherapists","deactivatedOn":"1977-06-26 05:58:40 +0000","educationId":10416,"email":"leonard.conroy56@vaccinesurvey.com","expectedChildBirth":"2015-12-27","firstName":"Jermaine","hasContactUsers":false,"homePhone":"Obsessed criminologists","interventionGroup":"Predetermine ecclesiastics","isDeactive":true,"lastName":"Hegmann","parentRelationshipType":"Discomfiture decaffeinating","parentUserId":75114,"password":"password","passwordConfirmation":"password","passwordDigest":"Southeasterly discouragement","patientType":51953,"postalCode":"Plasterboard Schopenhauer","raceId":91046,"reasonForDeactivation":"Babysitters bonnie","resetPassword":false,"role":"administrator","state":"Melancholics handicapper","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Undistinguished trappers"},
  'patient': {"actualChildBirth":"2015-02-24","address":"Players redeployed","cellPhone":"Guano submerged","city":"Hatchway Raleigh","clinicianCodeId":27150,"clinicName":"Psychics anticipations","consentAcceptedOn":"1983-11-08 03:03:58 +0000","contactCellPhone":"Antiquarians penitentiaries","contactEmail":"Homogeneously redistributes","contactHomePhone":"Bluing scouts","contactName":"Unfettering euphemistically","deactivatedOn":"1993-09-24 14:03:17 +0000","educationId":46349,"email":"milton.kuvalis61@vaccinesurvey.com","expectedChildBirth":"2016-02-06","firstName":"Odelia","hasContactUsers":true,"homePhone":"Invertebrate spits","interventionGroup":"Scanty Cartesian","isDeactive":true,"lastName":"Steuber","parentRelationshipType":"Irremediably symbolically","parentUserId":2947,"password":"password","passwordConfirmation":"password","passwordDigest":"Unexplored March","patientType":37178,"postalCode":"Eddie woodpeckers","raceId":6486,"reasonForDeactivation":"Academicians torridest","resetPassword":false,"role":"patient","state":"Uneasier retrorockets","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Gyros rainier"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1UserSurveyAnswer', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"appliedSkipLogicId":67461,"freeFormResponse":"Millionaires initialize","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":61024,"questionGroup":"Discounting counterbalances","questionOrder":7046,"skipped":false,"surveyAnswerId":25009,"surveyQuestionId":46440,"userSurveyId":64176});
  testObjects.push({"appliedSkipLogicId":84754,"freeFormResponse":"Protecting interruption","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":68583,"questionGroup":"Tyrannosauruses sprouts","questionOrder":76108,"skipped":false,"surveyAnswerId":75297,"surveyQuestionId":83769,"userSurveyId":53134});
  testObjects.push({"appliedSkipLogicId":29648,"freeFormResponse":"Pricing bodes","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":41329,"questionGroup":"Intelligently servomechanisms","questionOrder":43271,"skipped":false,"surveyAnswerId":37433,"surveyQuestionId":54704,"userSurveyId":43127});
  testObjects.push({"appliedSkipLogicId":60124,"freeFormResponse":"Bavarian aggravation","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":15691,"questionGroup":"Austerest windowpanes","questionOrder":84658,"skipped":true,"surveyAnswerId":55404,"surveyQuestionId":55984,"userSurveyId":85893});
  testObjects.push({"appliedSkipLogicId":38397,"freeFormResponse":"Obstetricians vociferating","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":87350,"questionGroup":"European fruitlessly","questionOrder":39740,"skipped":false,"surveyAnswerId":39311,"surveyQuestionId":48182,"userSurveyId":65306});
  testObjects.push({"appliedSkipLogicId":81587,"freeFormResponse":"Infelicitous wikis","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":10286,"questionGroup":"Hydrometer wordy","questionOrder":32660,"skipped":false,"surveyAnswerId":34351,"surveyQuestionId":65072,"userSurveyId":76664});
  testObjects.push({"appliedSkipLogicId":46,"freeFormResponse":"Contortionists clippers","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":82791,"questionGroup":"Refrigerants Israelis","questionOrder":66756,"skipped":true,"surveyAnswerId":98134,"surveyQuestionId":61498,"userSurveyId":52897});
  testObjects.push({"appliedSkipLogicId":25365,"freeFormResponse":"Metamorphoses Edwardo","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":99601,"questionGroup":"Misconstruction informal","questionOrder":45013,"skipped":false,"surveyAnswerId":12843,"surveyQuestionId":52102,"userSurveyId":3135});
  testObjects.push({"appliedSkipLogicId":22912,"freeFormResponse":"Reorganizations Constitution","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":4989,"questionGroup":"Incrimination bouquet","questionOrder":67006,"skipped":false,"surveyAnswerId":73389,"surveyQuestionId":90324,"userSurveyId":72804});
  testObjects.push({"appliedSkipLogicId":34364,"freeFormResponse":"Edema overseen","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":63276,"questionGroup":"Boisterous horticulture","questionOrder":18289,"skipped":true,"surveyAnswerId":63893,"surveyQuestionId":11649,"userSurveyId":19216});

V1UserSurveyAnswer.createEach(testObjects).exec(function(err, obj) {
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
      V1UserSurveyAnswer.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of user_survey_answers for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create user_survey_answer for administrator', function (done) {
      var newObj = {"applied_skip_logic_id":73799,"free_form_response":"Recommending amniocentesis","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"question_code_id":51994,"question_group":"Hazels leaseholder","question_order":75542,"skipped":true,"survey_answer_id":43056,"survey_question_id":52600,"user_survey_id":48032};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey_answer for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey_answer for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"applied_skip_logic_id":50881,"free_form_response":"Predicting overcompensate","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"question_code_id":20343,"question_group":"Discoverers Dudley","question_order":9182,"skipped":false,"survey_answer_id":63417,"survey_question_id":22554,"user_survey_id":38534};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy user_survey_answer for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of user_survey_answers for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user_survey_answer for patient', function (done) {
      var newObj = {"applied_skip_logic_id":3938,"free_form_response":"Saddest Ingram","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"question_code_id":63632,"question_group":"Physiotherapist chigger","question_order":29526,"skipped":false,"survey_answer_id":40383,"survey_question_id":92029,"user_survey_id":34962};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey_answer for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey_answer for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"applied_skip_logic_id":6958,"free_form_response":"Authentications hatchback","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"question_code_id":67041,"question_group":"Hocking grouped","question_order":91935,"skipped":false,"survey_answer_id":91607,"survey_question_id":57080,"user_survey_id":49279};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1UserSurveyAnswer.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1UserSurveyAnswer with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user_survey_answer for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_survey_answers/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
