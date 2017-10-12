var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2014-08-10","address":"Curvacious bloat","cellPhone":"Irresponsibly waterproofs","city":"Tercentenary expansionist","clinicianCodeId":46424,"clinicName":"Bushier electioneered","consentAcceptedOn":"1975-10-14 21:24:08 +0000","contactCellPhone":"Bestridden maledictions","contactEmail":"Firefighters depoliticizing","contactHomePhone":"Confrontational overreaching","contactName":"Dabbling disentangling","deactivatedOn":"2000-03-16 09:52:45 +0000","educationId":28668,"email":"dawne.deckow3@vaccinesurvey.com","expectedChildBirth":"2014-08-03","firstName":"Jimmie","hasContactUsers":true,"homePhone":"Presbyterianism Arline","interventionGroup":"Unlawfully microbiology","isDeactive":false,"lastName":"Roob","parentRelationshipType":"Pinpointed waterpower","parentUserId":69173,"password":"password","passwordConfirmation":"password","passwordDigest":"Polyesters plenipotentiary","patientType":26262,"postalCode":"Isfahan calming","raceId":69485,"reasonForDeactivation":"Contradictory consoled","resetPassword":false,"role":"patient","state":"Civilized reallocation","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Cheetahs intermediaries"},
  'administrator': {"actualChildBirth":"2013-12-19","address":"Thant unnecessarily","cellPhone":"Flannelled wholesaling","city":"Sentimentalized shipping","clinicianCodeId":39372,"clinicName":"Heraldry straightened","consentAcceptedOn":"1981-05-31 20:25:32 +0000","contactCellPhone":"Thermos suggestively","contactEmail":"Representations capsuled","contactHomePhone":"Timbuktu sours","contactName":"Belling italicized","deactivatedOn":"1989-01-27 09:07:13 +0000","educationId":50992,"email":"orlando.collier22@vaccinesurvey.com","expectedChildBirth":"2014-01-06","firstName":"Nestor","hasContactUsers":true,"homePhone":"Preshrinking sprawled","interventionGroup":"Counterclaiming circumscribe","isDeactive":false,"lastName":"Johnson","parentRelationshipType":"Android filterable","parentUserId":27387,"password":"password","passwordConfirmation":"password","passwordDigest":"Fabricate outspokenly","patientType":59414,"postalCode":"Tonsillectomies sneaked","raceId":52307,"reasonForDeactivation":"Temerity wielded","resetPassword":false,"role":"administrator","state":"Wired astonishment","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Canvasbacks glossiest"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1UserSurvey', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"completedAt":"Prohibitionists unconscious","completition":24702,"createdAt":"2007-02-18 07:02:34 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":82158,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":34528,"maternalVideoPosition":5213.596623927857,"pediatricVideoComplete":false,"pediatricVideoNumber":9226,"pediatricVideoPosition":37650.17145812405,"questionCount":53377,"secondReminder":false,"surveyId":57893,"userId":45827,"videoSourceVersion":"Blindsided hieroglyphic"});
  testObjects.push({"completedAt":"Prearrange appertaining","completition":2574,"createdAt":"2007-03-06 20:46:12 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":41726,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":13330,"maternalVideoPosition":8479.395990376275,"pediatricVideoComplete":true,"pediatricVideoNumber":48081,"pediatricVideoPosition":47336.966548722376,"questionCount":38780,"secondReminder":false,"surveyId":81247,"userId":9401,"videoSourceVersion":"Phantasy deconstructions"});
  testObjects.push({"completedAt":"Editorializing falser","completition":87366,"createdAt":"1983-05-21 16:31:44 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":58078,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":91119,"maternalVideoPosition":76531.67545611109,"pediatricVideoComplete":false,"pediatricVideoNumber":35790,"pediatricVideoPosition":21972.195364933443,"questionCount":95374,"secondReminder":true,"surveyId":45653,"userId":7799,"videoSourceVersion":"Placarding playing"});
  testObjects.push({"completedAt":"Rivalled aphoristic","completition":90131,"createdAt":"1971-05-29 03:10:37 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":14587,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":29512,"maternalVideoPosition":17892.574443748712,"pediatricVideoComplete":true,"pediatricVideoNumber":27145,"pediatricVideoPosition":52344.972964986315,"questionCount":5401,"secondReminder":false,"surveyId":58716,"userId":62593,"videoSourceVersion":"Noninterference finds"});
  testObjects.push({"completedAt":"Amounted caseworkers","completition":45698,"createdAt":"2001-04-26 15:04:10 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":11070,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":4609,"maternalVideoPosition":21399.759836871057,"pediatricVideoComplete":false,"pediatricVideoNumber":59950,"pediatricVideoPosition":993.5679030986728,"questionCount":69475,"secondReminder":false,"surveyId":58520,"userId":8202,"videoSourceVersion":"Independence yesterday"});
  testObjects.push({"completedAt":"Regulations gangliest","completition":29867,"createdAt":"2001-02-12 04:17:03 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":52557,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":30846,"maternalVideoPosition":30838.87502140273,"pediatricVideoComplete":false,"pediatricVideoNumber":85916,"pediatricVideoPosition":38964.004719041084,"questionCount":29640,"secondReminder":true,"surveyId":99243,"userId":81314,"videoSourceVersion":"Baggies owner"});
  testObjects.push({"completedAt":"Hollywood laundering","completition":34627,"createdAt":"1982-09-19 12:24:01 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":18490,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":15400,"maternalVideoPosition":87794.99076105218,"pediatricVideoComplete":false,"pediatricVideoNumber":97356,"pediatricVideoPosition":28423.131696231616,"questionCount":80318,"secondReminder":true,"surveyId":74261,"userId":82364,"videoSourceVersion":"Concurrences Mercator"});
  testObjects.push({"completedAt":"Dimpled prioritizes","completition":60792,"createdAt":"1974-12-04 16:30:57 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":24796,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":62359,"maternalVideoPosition":71248.8956025659,"pediatricVideoComplete":false,"pediatricVideoNumber":232,"pediatricVideoPosition":78868.37117543191,"questionCount":91888,"secondReminder":false,"surveyId":77805,"userId":68393,"videoSourceVersion":"Prepped surly"});
  testObjects.push({"completedAt":"Causation philodendrons","completition":96358,"createdAt":"2006-08-30 22:40:20 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":35635,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":73069,"maternalVideoPosition":60484.45446824806,"pediatricVideoComplete":false,"pediatricVideoNumber":88754,"pediatricVideoPosition":12221.66232863276,"questionCount":127,"secondReminder":false,"surveyId":91698,"userId":52155,"videoSourceVersion":"Insular ponderously"});
  testObjects.push({"completedAt":"Extinguishes cells","completition":38918,"createdAt":"2008-09-06 07:40:07 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":94022,"firstReminder":true,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":94212,"maternalVideoPosition":92181.6135392889,"pediatricVideoComplete":true,"pediatricVideoNumber":65301,"pediatricVideoPosition":29867.695544939164,"questionCount":20247,"secondReminder":false,"surveyId":35790,"userId":20567,"videoSourceVersion":"Achieves discontinuities"});

V1UserSurvey.createEach(testObjects).exec(function(err, obj) {
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
      V1UserSurvey.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of user_surveys for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user_survey for patient', function (done) {
      var newObj = {"completed_at":"Benin sinker","completition":7895,"created_at":"1992-01-03 22:52:56 +0000","currentuseranswers":[1,2,3],"first_question":{"one":1,"two":2,"three":3},"first_question_id":46728,"first_reminder":false,"is_complete":true,"matched_videos":[1,2,3],"maternal_video_complete":true,"maternal_video_number":80878,"maternal_video_position":12522.502445135158,"pediatric_video_complete":false,"pediatric_video_number":43290,"pediatric_video_position":60100.71022643486,"question_count":55842,"second_reminder":false,"survey_id":31855,"user_id":61805,"video_source_version":"Preregistering flyswatter"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"completed_at":"Nemesis prodigiously","completition":25327,"created_at":"1994-07-31 18:03:04 +0000","currentuseranswers":[1,2,3],"first_question":{"one":1,"two":2,"three":3},"first_question_id":54547,"first_reminder":false,"is_complete":true,"matched_videos":[1,2,3],"maternal_video_complete":true,"maternal_video_number":81979,"maternal_video_position":48178.78307971379,"pediatric_video_complete":false,"pediatric_video_number":27951,"pediatric_video_position":11709.147060904375,"question_count":10972,"second_reminder":false,"survey_id":27654,"user_id":84153,"video_source_version":"Tankful homogenization"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1UserSurvey.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1UserSurvey with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user_survey for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of user_surveys for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user_survey for administrator', function (done) {
      var newObj = {"completed_at":"Participators companionship","completition":38603,"created_at":"2001-02-09 07:16:45 +0000","currentuseranswers":[1,2,3],"first_question":{"one":1,"two":2,"three":3},"first_question_id":47429,"first_reminder":false,"is_complete":false,"matched_videos":[1,2,3],"maternal_video_complete":false,"maternal_video_number":8352,"maternal_video_position":9955.88788757293,"pediatric_video_complete":false,"pediatric_video_number":44620,"pediatric_video_position":78411.04228163084,"question_count":30118,"second_reminder":false,"survey_id":79136,"user_id":46951,"video_source_version":"Travels godliest"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"completed_at":"Quadruplets trivializing","completition":26551,"created_at":"1978-08-08 14:22:23 +0000","currentuseranswers":[1,2,3],"first_question":{"one":1,"two":2,"three":3},"first_question_id":18393,"first_reminder":true,"is_complete":true,"matched_videos":[1,2,3],"maternal_video_complete":false,"maternal_video_number":82295,"maternal_video_position":3901.9295929338437,"pediatric_video_complete":true,"pediatric_video_number":33225,"pediatric_video_position":1694.5623272893372,"question_count":30680,"second_reminder":false,"survey_id":46859,"user_id":70377,"video_source_version":"Conceded warmest"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy user_survey for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/user_surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
