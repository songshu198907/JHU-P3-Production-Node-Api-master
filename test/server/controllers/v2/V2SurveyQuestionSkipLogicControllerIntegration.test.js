var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2015-09-24","address":"Prevaricated lavished","cellPhone":"Watchtowers lamer","city":"Famishes askew","clinicianCodeId":83114,"clinicName":"Wooden hallucinogenic","consentAcceptedOn":"1994-05-08 06:20:34 +0000","contactCellPhone":"Spokesperson arbor","contactEmail":"Ctesiphon czars","contactHomePhone":"Beaumarchais overpass","contactName":"Astutest Billie","deactivatedOn":"2016-06-12 04:56:16 +0000","educationId":47624,"email":"benton.adams85@vaccinesurvey.com","expectedChildBirth":"2017-01-12","firstName":"Trinidad","hasContactUsers":false,"homePhone":"Spectroscopy arduous","interventionGroup":"Glamours Myles","isDeactive":false,"lastName":"Blick","parentRelationshipType":"Traditionally tulle","parentUserId":27828,"password":"password","passwordConfirmation":"password","passwordDigest":"Blindfold Mansfield","patientType":78610,"postalCode":"Ditching multitudinous","raceId":98370,"reasonForDeactivation":"Transpositions pretentiously","resetPassword":true,"role":"patient","state":"Reliably adversest","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Telecommuting countersinking"},
  'administrator': {"actualChildBirth":"2015-08-21","address":"Cline retraced","cellPhone":"Interdependence resubmits","city":"Oversampling tenderer","clinicianCodeId":65615,"clinicName":"Unspecified motivation","consentAcceptedOn":"1979-06-08 14:17:48 +0000","contactCellPhone":"Facilitating Leigh","contactEmail":"Mourns storytellers","contactHomePhone":"Leanne nationalization","contactName":"Windmilling boobs","deactivatedOn":"1990-04-01 08:35:01 +0000","educationId":26744,"email":"erika.bosco75@vaccinesurvey.com","expectedChildBirth":"2016-08-29","firstName":"Quentin","hasContactUsers":true,"homePhone":"Multiplications revolting","interventionGroup":"Pizzeria puffins","isDeactive":true,"lastName":"Ebert","parentRelationshipType":"Bilge transposition","parentUserId":52804,"password":"password","passwordConfirmation":"password","passwordDigest":"Wheelbarrows planetariums","patientType":51001,"postalCode":"Danubian stranglers","raceId":67061,"reasonForDeactivation":"Catafalques tragicomedies","resetPassword":false,"role":"administrator","state":"Meaty reinforcements","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Christened Seconal"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2SurveyQuestionSkipLogic', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"skipQuestionCodes":"Hobbit uncontaminated","surveyAnswerId":"Perfidy typical"});
  testObjects.push({"skipQuestionCodes":"Saskatchewan sanctimonious","surveyAnswerId":"December superstitiously"});
  testObjects.push({"skipQuestionCodes":"Myrrh interdependence","surveyAnswerId":"Yakima hippopotami"});
  testObjects.push({"skipQuestionCodes":"Unscrambles brochure","surveyAnswerId":"Dismally improprieties"});
  testObjects.push({"skipQuestionCodes":"Debilitation Cousteau","surveyAnswerId":"Distinctiveness frayed"});
  testObjects.push({"skipQuestionCodes":"Scion baring","surveyAnswerId":"Impoverishment unobjectionable"});
  testObjects.push({"skipQuestionCodes":"Ludicrousness Waite","surveyAnswerId":"Misappropriated chicaneries"});
  testObjects.push({"skipQuestionCodes":"Enhance categorizations","surveyAnswerId":"Afterthoughts ligatures"});
  testObjects.push({"skipQuestionCodes":"Outmoded department","surveyAnswerId":"Crucially discombobulates"});
  testObjects.push({"skipQuestionCodes":"Canonizations hallucinogenic","surveyAnswerId":"Aural faucet"});

V2SurveyQuestionSkipLogic.createEach(testObjects).exec(function(err, obj) {
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
      V2SurveyQuestionSkipLogic.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of survey_question_skip_logics for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_question_skip_logic for patient', function (done) {
      var newObj = {"skip_question_codes":"Scoured eavesdropping","survey_answer_id":"Modicums refurbishments"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey_question_skip_logic for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_question_skip_logic for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"skip_question_codes":"Sisterhoods bittersweet","survey_answer_id":"Jolly tarrier"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey_question_skip_logic for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of survey_question_skip_logics for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_question_skip_logic for administrator', function (done) {
      var newObj = {"skip_question_codes":"Serialization barefaced","survey_answer_id":"Koshering unobjectionable"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2SurveyQuestionSkipLogic.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show survey_question_skip_logic for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_question_skip_logic for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"skip_question_codes":"Conspiratorial sacrilegious","survey_answer_id":"Bulldogging persistence"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2SurveyQuestionSkipLogic.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2SurveyQuestionSkipLogic with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy survey_question_skip_logic for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_question_skip_logics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V2SurveyQuestionSkipLogic.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
});
