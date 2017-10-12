var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'Unauthenticated Default': {"actualChildBirth":"2015-11-13","address":"Walter lashes","cellPhone":"Exhibitionist semipermeable","city":"Transshipment recurrent","clinicianCodeId":85799,"clinicName":"Pimento transitional","consentAcceptedOn":"2014-12-25 05:35:55 +0000","contactCellPhone":"Mollification archbishoprics","contactEmail":"Bluff distaffs","contactHomePhone":"Installing competently","contactName":"Provisioning underestimating","deactivatedOn":"1981-11-29 13:58:30 +0000","educationId":12443,"email":"brooke.krajcik96@vaccinesurvey.com","expectedChildBirth":"2014-12-14","firstName":"Rheba","hasContactUsers":false,"homePhone":"Maintainers depopulated","interventionGroup":"Exporter smoothly","isDeactive":false,"lastName":"Frami","parentRelationshipType":"Diabolically demonstrations","parentUserId":31808,"password":"password","passwordConfirmation":"password","passwordDigest":"Compromise confiscating","patientType":20872,"postalCode":"Instrumentalist collages","raceId":30412,"reasonForDeactivation":"Marauds chats","resetPassword":false,"role":"Unauthenticated Default","state":"Zoroastrianisms designer","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Poisonously affirms"},
  'administrator': {"actualChildBirth":"2014-09-02","address":"Toweled forested","cellPhone":"Bantamweights Adriatic","city":"Concisest oversensitive","clinicianCodeId":62035,"clinicName":"Octobers tolerable","consentAcceptedOn":"2002-04-28 22:36:54 +0000","contactCellPhone":"Reverence hakes","contactEmail":"Mohammedanisms unquestioningly","contactHomePhone":"Backbite Imelda","contactName":"Huguenots northerner","deactivatedOn":"2008-11-03 15:07:54 +0000","educationId":69218,"email":"pierre.padberg92@vaccinesurvey.com","expectedChildBirth":"2015-08-13","firstName":"Chuck","hasContactUsers":false,"homePhone":"Reallocating encouraging","interventionGroup":"Sized generalizations","isDeactive":false,"lastName":"Maggio","parentRelationshipType":"Spectroscopes immortally","parentUserId":95980,"password":"password","passwordConfirmation":"password","passwordDigest":"Eaglet goalkeepers","patientType":6812,"postalCode":"Underachieved appeasement","raceId":5917,"reasonForDeactivation":"Accelerators taproom","resetPassword":true,"role":"administrator","state":"Reconstitutes violators","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Richmond denouncements"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2QuestionType', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"controlType":"Jeopardy decry","name":"Johnetta Marvin"});
  testObjects.push({"controlType":"Pay Pal contradictions","name":"Lacy Hermann"});
  testObjects.push({"controlType":"Unseemliness participated","name":"Charles Treutel"});
  testObjects.push({"controlType":"Flattery invade","name":"Ebonie Berge"});
  testObjects.push({"controlType":"Forcefulness Midas","name":"Samatha Casper"});
  testObjects.push({"controlType":"Commissioners governmental","name":"Isaias Abbott"});
  testObjects.push({"controlType":"Departmentalize veneer","name":"Modesto Dach"});
  testObjects.push({"controlType":"Cleaners nonpoisonous","name":"Glenna Upton"});
  testObjects.push({"controlType":"Interchangeable grandfathering","name":"Norbert Koch"});
  testObjects.push({"controlType":"Numerated Vilma","name":"Russell Bayer"});

V2QuestionType.createEach(testObjects).exec(function(err, obj) {
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
      V2QuestionType.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of question_types for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create question_type for unauthenticated', function (done) {
      var newObj = {"control_type":"Foist fragmentary","name":"Odell Emmerich"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2QuestionType.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show question_type for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update question_type for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"control_type":"Hydrants imminently","name":"Krystin Yundt"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2QuestionType.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2QuestionType with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy question_type for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of question_types for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create question_type for administrator', function (done) {
      var newObj = {"control_type":"Ascendent tortoiseshells","name":"Mel Balistreri"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2QuestionType.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show question_type for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update question_type for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"control_type":"Thimbleful parthenogenesis","name":"Marisela Quigley"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2QuestionType.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2QuestionType with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy question_type for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/question_types/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
