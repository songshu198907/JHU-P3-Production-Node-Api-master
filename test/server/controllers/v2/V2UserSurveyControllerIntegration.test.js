var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2016-02-04","address":"Hatcheries horticulturists","cellPhone":"Inalienable commitment","city":"Loathsomeness reddened","clinicianCodeId":71404,"clinicName":"Unsophisticated equestriennes","consentAcceptedOn":"2002-06-04 01:27:12 +0000","contactCellPhone":"Unrestrained encode","contactEmail":"Preconceptions bombarded","contactHomePhone":"Memorably bacteriological","contactName":"Liverpool Presbyterianism","deactivatedOn":"1991-12-05 22:49:03 +0000","educationId":39645,"email":"abel.green83@vaccinesurvey.com","expectedChildBirth":"2015-06-30","firstName":"Irena","hasContactUsers":false,"homePhone":"Earthworks Douro","interventionGroup":"Slate breastbone","isDeactive":false,"lastName":"Dibbert","parentRelationshipType":"Bacteriologist pedestrianizing","parentUserId":8980,"password":"password","passwordConfirmation":"password","passwordDigest":"Leaky dysentery","patientType":30867,"postalCode":"Prophesying Weeks","raceId":65896,"reasonForDeactivation":"Lactates agrees","resetPassword":true,"role":"patient","state":"Largos magnification","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Shirtsleeve Berlins"},
  'administrator': {"actualChildBirth":"2014-10-08","address":"Sewerage urinated","cellPhone":"Counterpoints doltish","city":"Gushing quickies","clinicianCodeId":88793,"clinicName":"Carbohydrate Leavenworth","consentAcceptedOn":"2005-01-17 00:32:23 +0000","contactCellPhone":"Misapprehension waspish","contactEmail":"Loads freeholder","contactHomePhone":"Czechoslovakian screenwriter","contactName":"Classifications cynics","deactivatedOn":"2004-03-16 09:01:37 +0000","educationId":86584,"email":"mike.orn43@vaccinesurvey.com","expectedChildBirth":"2016-07-31","firstName":"Brent","hasContactUsers":true,"homePhone":"Thermoplastics sentimentalize","interventionGroup":"Bedouins Donny","isDeactive":false,"lastName":"Ritchie","parentRelationshipType":"Interpolated cranking","parentUserId":52271,"password":"password","passwordConfirmation":"password","passwordDigest":"Radish impalas","patientType":73251,"postalCode":"Cafeterias chump","raceId":5183,"reasonForDeactivation":"Selvage kingfishers","resetPassword":false,"role":"administrator","state":"Seacoasts malformations","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Abates refurbishments"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2UserSurvey', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"completedAt":"Predominate anaesthetized","completition":42095,"createdAt":"1973-04-04 14:50:13 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":48101,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Disposable unforgivable","maternalVideoPosition":77963.57447922484,"pediatricVideoComplete":true,"pediatricVideoNumber":"Licentiousness misappropriated","pediatricVideoPosition":68498.5395217787,"questionCount":68823,"secondReminder":true,"surveyId":99544,"userId":90371,"videoSourceVersion":"Interrelates misinterpreting"});
  testObjects.push({"completedAt":"Refashioning fleas","completition":76438,"createdAt":"1986-02-21 16:45:55 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":75513,"firstReminder":true,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Unsaddle contused","maternalVideoPosition":1546.308094669685,"pediatricVideoComplete":true,"pediatricVideoNumber":"Honeywell recopied","pediatricVideoPosition":73487.12043848868,"questionCount":97046,"secondReminder":false,"surveyId":93885,"userId":48617,"videoSourceVersion":"Transparently homespun"});
  testObjects.push({"completedAt":"Parrot helicopters","completition":39010,"createdAt":"1999-05-13 03:28:41 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":30438,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Disintegration decapitation","maternalVideoPosition":50467.235502229465,"pediatricVideoComplete":true,"pediatricVideoNumber":"Oversimplifying streetwalker","pediatricVideoPosition":53390.51736913748,"questionCount":19882,"secondReminder":true,"surveyId":52964,"userId":26451,"videoSourceVersion":"Radiogram snares"});
  testObjects.push({"completedAt":"Bouillabaisses Schwarzkopf","completition":80854,"createdAt":"1987-01-28 00:14:54 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":19631,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Escher matriarchies","maternalVideoPosition":12276.242322704253,"pediatricVideoComplete":true,"pediatricVideoNumber":"Humorlessness Steele","pediatricVideoPosition":43365.181985096155,"questionCount":15479,"secondReminder":false,"surveyId":97070,"userId":48552,"videoSourceVersion":"Propositioned elocutionists"});
  testObjects.push({"completedAt":"Prophylactic slyer","completition":16289,"createdAt":"2011-05-20 14:58:29 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":25234,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Justifications sinkers","maternalVideoPosition":99557.32225433443,"pediatricVideoComplete":true,"pediatricVideoNumber":"Demos alumna","pediatricVideoPosition":22139.884348269854,"questionCount":10076,"secondReminder":true,"surveyId":94602,"userId":6889,"videoSourceVersion":"Sleeps Lebesgue"});
  testObjects.push({"completedAt":"Fetched boastfulness","completition":36149,"createdAt":"1981-09-05 11:13:48 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":76198,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Sarcophaguses housebreaking","maternalVideoPosition":7884.034456397532,"pediatricVideoComplete":false,"pediatricVideoNumber":"Addle squeeze","pediatricVideoPosition":19758.993919436693,"questionCount":42637,"secondReminder":false,"surveyId":68256,"userId":38631,"videoSourceVersion":"Worsen midway"});
  testObjects.push({"completedAt":"Improper swallowed","completition":21163,"createdAt":"1971-04-11 08:47:07 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":26171,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":"Paragraphed coincidence","maternalVideoPosition":23699.235797715413,"pediatricVideoComplete":true,"pediatricVideoNumber":"Tyrannosauruses psychoanalyze","pediatricVideoPosition":7147.414900072595,"questionCount":68541,"secondReminder":false,"surveyId":72887,"userId":66073,"videoSourceVersion":"Biodiversity residual"});
  testObjects.push({"completedAt":"Rapaciousness incredulously","completition":44281,"createdAt":"1985-12-05 05:22:44 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":52196,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Tightropes Rubbermaid","maternalVideoPosition":19224.062568112575,"pediatricVideoComplete":true,"pediatricVideoNumber":"Vandalize Stone","pediatricVideoPosition":69164.97248739269,"questionCount":61841,"secondReminder":false,"surveyId":9693,"userId":69894,"videoSourceVersion":"Personification diapering"});
  testObjects.push({"completedAt":"Projects impieties","completition":17789,"createdAt":"1978-08-07 20:21:38 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":1526,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Authoritatively mantled","maternalVideoPosition":38349.97178235161,"pediatricVideoComplete":true,"pediatricVideoNumber":"Irrationally provisional","pediatricVideoPosition":74260.15260855723,"questionCount":13171,"secondReminder":false,"surveyId":20071,"userId":55568,"videoSourceVersion":"Chaperoning interment"});
  testObjects.push({"completedAt":"Janitorial whatchamacallit","completition":34938,"createdAt":"2010-04-24 15:59:59 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":59658,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Plops predominating","maternalVideoPosition":43401.92887614138,"pediatricVideoComplete":false,"pediatricVideoNumber":"Brained fluorite","pediatricVideoPosition":80020.88462537818,"questionCount":2412,"secondReminder":true,"surveyId":20459,"userId":22396,"videoSourceVersion":"Holloway incontestable"});

V2UserSurvey.createEach(testObjects).exec(function(err, obj) {
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
      V2UserSurvey.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of user_surveys for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user_survey for patient', function (done) {
      var newObj = {"completed_at":"Psychoanalyze scrimshawing","completition":21591,"created_at":"2014-05-27 17:14:09 +0000","currentuseranswers":[1,2,3],"first_question":{"one":1,"two":2,"three":3},"first_question_id":43913,"first_reminder":false,"is_complete":false,"matched_videos":[1,2,3],"maternal_video_complete":false,"maternal_video_number":"Synergy Dnieper","maternal_video_position":36558.60666257575,"pediatric_video_complete":false,"pediatric_video_number":"Raring anemometers","pediatric_video_position":75275.63957986441,"question_count":26619,"second_reminder":false,"survey_id":7529,"user_id":95228,"video_source_version":"Uprising gunnysack"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"completed_at":"Obstructionists cornflower","completition":69698,"created_at":"1983-11-04 13:36:54 +0000","currentuseranswers":[1,2,3],"first_question":{"one":1,"two":2,"three":3},"first_question_id":57924,"first_reminder":false,"is_complete":false,"matched_videos":[1,2,3],"maternal_video_complete":false,"maternal_video_number":"Depilatories reupholstered","maternal_video_position":8021.165637357944,"pediatric_video_complete":true,"pediatric_video_number":"Inadequacies preferential","pediatric_video_position":65099.34193486949,"question_count":26664,"second_reminder":true,"survey_id":49964,"user_id":64037,"video_source_version":"Basseterre views"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2UserSurvey.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2UserSurvey with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user_survey for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of user_surveys for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user_survey for administrator', function (done) {
      var newObj = {"completed_at":"Schoolchildren disenfranchised","completition":87987,"created_at":"1993-03-21 04:40:46 +0000","currentuseranswers":[1,2,3],"first_question":{"one":1,"two":2,"three":3},"first_question_id":94575,"first_reminder":false,"is_complete":false,"matched_videos":[1,2,3],"maternal_video_complete":true,"maternal_video_number":"Typographically outclass","maternal_video_position":26746.906290214985,"pediatric_video_complete":true,"pediatric_video_number":"Offensiveness ubiquitously","pediatric_video_position":29370.24284079906,"question_count":62866,"second_reminder":false,"survey_id":23668,"user_id":87273,"video_source_version":"Welcoming whimsicality"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user_survey for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user_survey for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"completed_at":"Crepe ripening","completition":39128,"created_at":"2009-02-27 09:16:12 +0000","currentuseranswers":[1,2,3],"first_question":{"one":1,"two":2,"three":3},"first_question_id":46173,"first_reminder":false,"is_complete":false,"matched_videos":[1,2,3],"maternal_video_complete":false,"maternal_video_number":"Soppy steamboats","maternal_video_position":8668.288991227273,"pediatric_video_complete":true,"pediatric_video_number":"Wreak diverges","pediatric_video_position":97901.64881578209,"question_count":86016,"second_reminder":false,"survey_id":20945,"user_id":11931,"video_source_version":"Lenses eatery"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy user_survey for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/user_surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
