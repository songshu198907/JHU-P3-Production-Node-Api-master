var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-09-26","address":"Unobstructed misconstruction","cellPhone":"Petard eccentricities","city":"Calicos bodywork","clinicianCodeId":30228,"clinicName":"Enacts interrelates","consentAcceptedOn":"1986-04-11 05:38:50 +0000","contactCellPhone":"Dissatisfaction retires","contactEmail":"Sepulchral liefer","contactHomePhone":"Enterprises northwesterly","contactName":"Fragrance vigorously","deactivatedOn":"1975-08-20 08:07:03 +0000","educationId":24988,"email":"damian.brekke15@vaccinesurvey.com","expectedChildBirth":"2015-01-15","firstName":"Porter","hasContactUsers":false,"homePhone":"Conglomerations voodooing","interventionGroup":"Clarinettist confers","isDeactive":false,"lastName":"Williamson","parentRelationshipType":"Distrustfully comportment","parentUserId":75131,"password":"password","passwordConfirmation":"password","passwordDigest":"Procrastinators Owens","patientType":47457,"postalCode":"Vanity acquisitiveness","raceId":31398,"reasonForDeactivation":"Wheeler showiness","resetPassword":false,"role":"administrator","state":"Principalities pheasants","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Spartan weekended"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2QuestionCode', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"name":"Annelle Hermiston"});
  testObjects.push({"name":"Carolyne Graham"});
  testObjects.push({"name":"Josephina Wehner"});
  testObjects.push({"name":"Jed Shanahan"});
  testObjects.push({"name":"Bobette Barrows"});
  testObjects.push({"name":"Vincenzo Altenwerth"});
  testObjects.push({"name":"Donnie Greenfelder"});
  testObjects.push({"name":"Otilia Weber"});
  testObjects.push({"name":"Merrill Hand"});
  testObjects.push({"name":"Brooks Fahey"});

V2QuestionCode.createEach(testObjects).exec(function(err, obj) {
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
      V2QuestionCode.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of question_codes for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_codes").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create question_code for administrator', function (done) {
      var newObj = {"name":"Titus Legros"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_codes").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2QuestionCode.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show question_code for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_codes/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update question_code for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Cinderella Borer"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_codes/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2QuestionCode.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2QuestionCode with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy question_code for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_codes/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V2QuestionCode.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
});
