var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2015-04-12","address":"Islet bolts","cellPhone":"Bites dissects","city":"Haunts ophthalmologist","clinicianCodeId":90521,"clinicName":"Karol computed","consentAcceptedOn":"1978-03-10 01:19:09 +0000","contactCellPhone":"Hamburgers reconstructions","contactEmail":"Stupefy Kamchatka","contactHomePhone":"Retrospectively distinguishable","contactName":"Spadework Alcibiades","deactivatedOn":"2001-04-21 06:32:31 +0000","educationId":37846,"email":"leif.kirlin31@vaccinesurvey.com","expectedChildBirth":"2014-11-28","firstName":"Foster","hasContactUsers":true,"homePhone":"Bacteriologists provocation","interventionGroup":"Kleptomaniacs congratulations","isDeactive":true,"lastName":"Corwin","parentRelationshipType":"Mayor procrastinate","parentUserId":75666,"password":"password","passwordConfirmation":"password","passwordDigest":"Mullion supervises","patientType":83141,"postalCode":"Illegitimately whippersnappers","raceId":3273,"reasonForDeactivation":"Mississippians peccadilloes","resetPassword":true,"role":"patient","state":"Mudslinging teakettle","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Delineation rhapsodizing"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2UserSurveyVideo', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"isComplete":true,"sortOrder":87836,"userSurveyId":55267,"videoNumber":6635,"videoPosition":23288.905993100605,"videoSourceVersion":"Curie aesthetically","videoType":"Revilers circumlocution"});
  testObjects.push({"isComplete":false,"sortOrder":16067,"userSurveyId":30055,"videoNumber":76357,"videoPosition":78966.11392070673,"videoSourceVersion":"Tobogganing honking","videoType":"Unconcernedly paratrooper"});
  testObjects.push({"isComplete":true,"sortOrder":85134,"userSurveyId":2761,"videoNumber":58791,"videoPosition":95560.6388748481,"videoSourceVersion":"Pessimistically Ginsu","videoType":"Minsk sanitizes"});
  testObjects.push({"isComplete":true,"sortOrder":80278,"userSurveyId":58328,"videoNumber":64537,"videoPosition":72088.30629808368,"videoSourceVersion":"Mussy enthrall","videoType":"Demagnetization mistrials"});
  testObjects.push({"isComplete":true,"sortOrder":47188,"userSurveyId":7805,"videoNumber":41834,"videoPosition":14678.503512080657,"videoSourceVersion":"Insurmountable playfulness","videoType":"Beaver mythologists"});
  testObjects.push({"isComplete":true,"sortOrder":80413,"userSurveyId":59278,"videoNumber":39456,"videoPosition":55605.808404704185,"videoSourceVersion":"Undemonstrative dislocation","videoType":"Burnouts Debian"});
  testObjects.push({"isComplete":false,"sortOrder":90784,"userSurveyId":34991,"videoNumber":52465,"videoPosition":44658.31117141707,"videoSourceVersion":"Solver Ferris","videoType":"Takeouts denounces"});
  testObjects.push({"isComplete":true,"sortOrder":60005,"userSurveyId":25655,"videoNumber":12925,"videoPosition":61073.194417480794,"videoSourceVersion":"Sleeplessness Tudor","videoType":"Nadirs opaqueness"});
  testObjects.push({"isComplete":false,"sortOrder":958,"userSurveyId":24074,"videoNumber":27488,"videoPosition":1809.3104224621236,"videoSourceVersion":"Systematizing quadruplicating","videoType":"Shekel hennaed"});
  testObjects.push({"isComplete":false,"sortOrder":2740,"userSurveyId":48183,"videoNumber":94301,"videoPosition":24624.280868140955,"videoSourceVersion":"Floppy distrustfully","videoType":"Faulting snares"});

V2UserSurveyVideo.createEach(testObjects).exec(function(err, obj) {
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
      V2UserSurveyVideo.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of user_survey_videos for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_videos").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user_survey_video for patient', function (done) {
      var newObj = {"is_complete":true,"sort_order":90593,"user_survey_id":50254,"video_number":45866,"video_position":80853.22443613083,"video_source_version":"Honeywell expectoration","video_type":"Rehashes muskellunges"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_videos").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey_video for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_videos/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey_video for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"is_complete":false,"sort_order":7279,"user_survey_id":28150,"video_number":98937,"video_position":17148.350900239955,"video_source_version":"Tadzhikistan impossibilities","video_type":"Phototypesetter thirstier"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_videos/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2UserSurveyVideo.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2UserSurveyVideo with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user_survey_video for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_survey_videos/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
