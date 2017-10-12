var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2016-11-17","address":"Grazed hypoglycemic","cellPhone":"Relic hailstorms","city":"Callousing seamen","clinicianCodeId":71132,"clinicName":"Sorrows instrumentation","consentAcceptedOn":"2000-07-17 00:21:51 +0000","contactCellPhone":"Combustibility piped","contactEmail":"Experimentally grindstones","contactHomePhone":"Mercerized heterosexuality","contactName":"Disfigurement magnet","deactivatedOn":"1991-10-29 07:31:13 +0000","educationId":59000,"email":"ted.yundt80@vaccinesurvey.com","expectedChildBirth":"2015-10-17","firstName":"Ophelia","hasContactUsers":false,"homePhone":"Disappointments America","interventionGroup":"Checkers destructiveness","isDeactive":true,"lastName":"Gutmann","parentRelationshipType":"Papilla Trevor","parentUserId":77545,"password":"password","passwordConfirmation":"password","passwordDigest":"Infantile saxophonist","patientType":61154,"postalCode":"Rephrases discrepancies","raceId":93004,"reasonForDeactivation":"Bitterness coven","resetPassword":false,"role":"administrator","state":"Norse comprehensives","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Circumnavigate carousing"},
  'patient': {"actualChildBirth":"2016-08-18","address":"Easygoing attributively","cellPhone":"Conway prophylaxis","city":"Rework hyperbolae","clinicianCodeId":8581,"clinicName":"Algebraic bigmouth","consentAcceptedOn":"2002-09-12 06:10:34 +0000","contactCellPhone":"Ornamentation crookedness","contactEmail":"Monarch obfuscated","contactHomePhone":"Overdoing miter","contactName":"Frieze mines","deactivatedOn":"1998-12-24 09:28:20 +0000","educationId":41460,"email":"mervin.wyman82@vaccinesurvey.com","expectedChildBirth":"2017-03-13","firstName":"Anjelica","hasContactUsers":true,"homePhone":"Ornery preliminaries","interventionGroup":"Regenerating smirches","isDeactive":true,"lastName":"Osinski","parentRelationshipType":"Anaesthetized mortising","parentUserId":67704,"password":"password","passwordConfirmation":"password","passwordDigest":"Walpurgisnacht elides","patientType":7851,"postalCode":"Obstinate weatherizes","raceId":62764,"reasonForDeactivation":"Entrapping chortle","resetPassword":true,"role":"patient","state":"Outings Faeroe","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Prize Bessel"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2UserSurveyAnswer', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"appliedSkipLogicId":11459,"freeFormResponse":"Acclimate babbling","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":80634,"questionGroup":"Fondles demoting","questionOrder":6755,"skipped":true,"surveyAnswerId":90630,"surveyQuestionId":13590,"userSurveyId":66956});
  testObjects.push({"appliedSkipLogicId":51917,"freeFormResponse":"Miked singletons","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":27257,"questionGroup":"Broncos divisiveness","questionOrder":25438,"skipped":false,"surveyAnswerId":15401,"surveyQuestionId":73085,"userSurveyId":39965});
  testObjects.push({"appliedSkipLogicId":76614,"freeFormResponse":"Wollstonecraft introduced","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":95073,"questionGroup":"Gymnasiums spastic","questionOrder":18581,"skipped":false,"surveyAnswerId":20092,"surveyQuestionId":85203,"userSurveyId":51831});
  testObjects.push({"appliedSkipLogicId":71591,"freeFormResponse":"Families ruefully","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":2658,"questionGroup":"Hospitalization mournfulness","questionOrder":88095,"skipped":true,"surveyAnswerId":15802,"surveyQuestionId":30751,"userSurveyId":70494});
  testObjects.push({"appliedSkipLogicId":43429,"freeFormResponse":"Weird heightening","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":61284,"questionGroup":"Classified dyspeptics","questionOrder":62601,"skipped":true,"surveyAnswerId":41449,"surveyQuestionId":28613,"userSurveyId":69577});
  testObjects.push({"appliedSkipLogicId":96017,"freeFormResponse":"Restructured scribe","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":5822,"questionGroup":"Despatching abnegates","questionOrder":39647,"skipped":true,"surveyAnswerId":61566,"surveyQuestionId":51334,"userSurveyId":59911});
  testObjects.push({"appliedSkipLogicId":69781,"freeFormResponse":"Straightforward impertinent","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":59025,"questionGroup":"Volunteered gaudier","questionOrder":14936,"skipped":false,"surveyAnswerId":48519,"surveyQuestionId":78960,"userSurveyId":97416});
  testObjects.push({"appliedSkipLogicId":32346,"freeFormResponse":"Slaughterhouses vacuously","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":72883,"questionGroup":"Classifications complexities","questionOrder":61291,"skipped":true,"surveyAnswerId":90654,"surveyQuestionId":69902,"userSurveyId":81585});
  testObjects.push({"appliedSkipLogicId":62593,"freeFormResponse":"Sonar interrelates","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":58232,"questionGroup":"Currycombed personification","questionOrder":75098,"skipped":true,"surveyAnswerId":13129,"surveyQuestionId":91404,"userSurveyId":75498});
  testObjects.push({"appliedSkipLogicId":47452,"freeFormResponse":"Expressionism prognosticators","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":11696,"questionGroup":"Servomechanisms disobliging","questionOrder":90684,"skipped":false,"surveyAnswerId":11348,"surveyQuestionId":97542,"userSurveyId":11578});

V2UserSurveyAnswer.createEach(testObjects).exec(function(err, obj) {
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
      V2UserSurveyAnswer.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of user_survey_answers for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create user_survey_answer for administrator', function (done) {
      var newObj = {"applied_skip_logic_id":53948,"free_form_response":"Inconsiderate fundamentalists","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"question_code_id":58274,"question_group":"Hitches brassieres","question_order":71625,"skipped":true,"survey_answer_id":46061,"survey_question_id":87990,"user_survey_id":56680};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey_answer for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey_answer for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"applied_skip_logic_id":23699,"free_form_response":"Industriousness covetously","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"question_code_id":6108,"question_group":"Wildest ecstatically","question_order":43133,"skipped":true,"survey_answer_id":90876,"survey_question_id":25348,"user_survey_id":87663};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy user_survey_answer for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of user_survey_answers for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user_survey_answer for patient', function (done) {
      var newObj = {"applied_skip_logic_id":11189,"free_form_response":"Weatherproofed enrolment","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"question_code_id":70199,"question_group":"Depoliticizing syntax","question_order":3274,"skipped":true,"survey_answer_id":47841,"survey_question_id":59902,"user_survey_id":59479};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey_answer for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey_answer for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"applied_skip_logic_id":8567,"free_form_response":"Repelling Halloween","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"question_code_id":12356,"question_group":"Pelvis courtroom","question_order":83207,"skipped":true,"survey_answer_id":26158,"survey_question_id":26514,"user_survey_id":30006};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2UserSurveyAnswer.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2UserSurveyAnswer with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user_survey_answer for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_answers/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
