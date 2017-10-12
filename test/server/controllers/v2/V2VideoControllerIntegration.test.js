var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2016-07-01","address":"Finniest equally","cellPhone":"Shoestrings barbarous","city":"Bicycling incontestable","clinicianCodeId":16485,"clinicName":"Admit appurtenance","consentAcceptedOn":"2014-06-09 01:44:36 +0000","contactCellPhone":"Huddling bottoming","contactEmail":"Pericardiums underscored","contactHomePhone":"Shopper soliloquizing","contactName":"Trills Hensley","deactivatedOn":"1976-07-08 06:40:41 +0000","educationId":44737,"email":"venus.mcclure62@vaccinesurvey.com","expectedChildBirth":"2015-06-30","firstName":"Rubye","hasContactUsers":true,"homePhone":"Renal popguns","interventionGroup":"Understatements overbalanced","isDeactive":false,"lastName":"West","parentRelationshipType":"Haystack Monte","parentUserId":89435,"password":"password","passwordConfirmation":"password","passwordDigest":"Filmstrips corners","patientType":62163,"postalCode":"Pantsuit cobblestones","raceId":14801,"reasonForDeactivation":"Pluck snobbishness","resetPassword":false,"role":"administrator","state":"Unappreciative verge","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Blighting viceroy"},
  'patient': {"actualChildBirth":"2015-12-15","address":"Cools helmsmen","cellPhone":"Seated armistice","city":"Contempt inked","clinicianCodeId":64997,"clinicName":"Totalitarianism spillage","consentAcceptedOn":"1984-05-10 17:24:47 +0000","contactCellPhone":"Redirecting consular","contactEmail":"Twaddle thirty","contactHomePhone":"Makeup foyers","contactName":"Durex refractory","deactivatedOn":"1979-10-17 01:36:53 +0000","educationId":4062,"email":"maren.von24@vaccinesurvey.com","expectedChildBirth":"2016-12-02","firstName":"Pedro","hasContactUsers":false,"homePhone":"Keyboards centiliters","interventionGroup":"Deirdre jackal","isDeactive":false,"lastName":"Mueller","parentRelationshipType":"Undemonstrative vocatives","parentUserId":86758,"password":"password","passwordConfirmation":"password","passwordDigest":"Dotty microscopy","patientType":15877,"postalCode":"Midpoints variously","raceId":32286,"reasonForDeactivation":"Eastwood adepts","resetPassword":false,"role":"patient","state":"Digit thicket","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Preconceptions obeisance"},
  'health_care_provider': {"actualChildBirth":"2014-07-19","address":"Determine dispirit","cellPhone":"Rationalization vaunt","city":"Transience noodled","clinicianCodeId":26244,"clinicName":"Ionizer sullied","consentAcceptedOn":"1981-01-01 07:07:58 +0000","contactCellPhone":"Scads sugar","contactEmail":"Authenticates hymen","contactHomePhone":"Backfields magnetism","contactName":"Geneticists Leola","deactivatedOn":"1972-03-11 17:46:09 +0000","educationId":68967,"email":"shanice.tremblay71@vaccinesurvey.com","expectedChildBirth":"2015-05-16","firstName":"Isaias","hasContactUsers":true,"homePhone":"Demoralization metamorphosed","interventionGroup":"Piling rosette","isDeactive":true,"lastName":"Flatley","parentRelationshipType":"Repatriated molten","parentUserId":89155,"password":"password","passwordConfirmation":"password","passwordDigest":"Suggester restudies","patientType":29160,"postalCode":"Lorries terminating","raceId":35443,"reasonForDeactivation":"Accomplishments equals","resetPassword":true,"role":"health_care_provider","state":"Authoritarian dispossessed","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Crooks bestowing"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2Video', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"desc":"Collier quays","isActive":false,"keywords":"Uncomprehending profitability","length":63565.24573453571,"questionGroup":"Albatrosses childlessness","sortOrder":47245,"sourceVersion":"Sylphs xenophobia","targetNumber":67814,"title":"Gruellings cadging","topicId":32226,"videoUrl":"Advisable romps"});
  testObjects.push({"desc":"Brynner unbuckling","isActive":false,"keywords":"Bluebottles infectiousness","length":2575.3280937377826,"questionGroup":"Reunite congratulations","sortOrder":99293,"sourceVersion":"Shamefully wiener","targetNumber":56671,"title":"Barbequing supplicants","topicId":61041,"videoUrl":"Neighborliness likenesses"});
  testObjects.push({"desc":"Interrelating dehumidified","isActive":false,"keywords":"Frizzles disciplinarians","length":77470.43208007966,"questionGroup":"Memoir dreadnought","sortOrder":62519,"sourceVersion":"Inspiration mistakenly","targetNumber":32301,"title":"Discontinuous nonalcoholic","topicId":5775,"videoUrl":"Protecting misrepresenting"});
  testObjects.push({"desc":"Kilohertzes atherosclerosis","isActive":true,"keywords":"Ventured Jekyll","length":41122.51810061804,"questionGroup":"Preshrunken discombobulates","sortOrder":54611,"sourceVersion":"Claims centerfold","targetNumber":6127,"title":"Nimbus Styrofoam","topicId":48563,"videoUrl":"Misinterpreting calico"});
  testObjects.push({"desc":"Uncommon raspier","isActive":false,"keywords":"Superficially divulge","length":28729.168461474983,"questionGroup":"Besides delusion","sortOrder":75105,"sourceVersion":"Potholes unanimously","targetNumber":56788,"title":"Vindictively charwomen","topicId":33242,"videoUrl":"Circumspection congratulations"});
  testObjects.push({"desc":"Injunction sergeant","isActive":true,"keywords":"Horse upperclassmen","length":47425.49565798908,"questionGroup":"Confiding positioned","sortOrder":42255,"sourceVersion":"Radiotherapists uncertainties","targetNumber":27579,"title":"Quartermasters nontransferable","topicId":29214,"videoUrl":"Waterside steamrolling"});
  testObjects.push({"desc":"Sulked presuppositions","isActive":true,"keywords":"Rinds gores","length":53772.42397167638,"questionGroup":"Inquisitiveness newspaperwomen","sortOrder":32641,"sourceVersion":"Discouragements billion","targetNumber":65717,"title":"Embarrass blackberrying","topicId":42432,"videoUrl":"Tropisms sicknesses"});
  testObjects.push({"desc":"Mongers rustproofed","isActive":false,"keywords":"Freighted computationally","length":86996.98448094775,"questionGroup":"Toughly thickening","sortOrder":90659,"sourceVersion":"Faxed christenings","targetNumber":32241,"title":"Eccentric synches","topicId":3179,"videoUrl":"Twofold readership"});
  testObjects.push({"desc":"Honeybee lacquered","isActive":true,"keywords":"Unfortunately lumpish","length":71403.84327108315,"questionGroup":"Quarterfinals baccalaureates","sortOrder":20199,"sourceVersion":"Imperiousness armed","targetNumber":73688,"title":"Thanksgivings Sussex","topicId":11923,"videoUrl":"Evangelicals reemerging"});
  testObjects.push({"desc":"Thank character","isActive":false,"keywords":"Levelheadedness coasting","length":46374.31079437736,"questionGroup":"Levelheadedness predetermining","sortOrder":2600,"sourceVersion":"Corespondents counterclaimed","targetNumber":16071,"title":"Coeducational traders","topicId":9861,"videoUrl":"Heartthrobs winches"});

V2Video.createEach(testObjects).exec(function(err, obj) {
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
      V2Video.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of videos for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create video for administrator', function (done) {
      var newObj = {"desc":"Unpleasantness streptococci","is_active":true,"keywords":"Unaccented handkerchieves","length":63785.50464443093,"question_group":"Nouns lookout","sort_order":97729,"source_version":"Hoped propitiatory","target_number":75096,"title":"Overspecializes fifth","topic_id":29914,"video_url":"Aerodynamic industrialized"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2Video.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show video for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"desc":"Submersion saffron","is_active":true,"keywords":"Tidewater bumbled","length":18564.75282478613,"question_group":"Triceratops lustiness","sort_order":48438,"source_version":"Contributions excoriations","target_number":31206,"title":"Easterlies incongruously","topic_id":78332,"video_url":"Stains arithmetically"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2Video.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2Video with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy video for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V2Video.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
    it('should attempt to get index of videos for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create video for patient', function (done) {
      var newObj = {"desc":"Genre transpiring","is_active":true,"keywords":"Acquiescence halfheartedness","length":79911.33176661184,"question_group":"Triptych decline","sort_order":64278,"source_version":"Constabularies helicopters","target_number":89796,"title":"Wendy tinniest","topic_id":85092,"video_url":"Sahel mellower"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show video for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"desc":"Unenforceable declamation","is_active":true,"keywords":"Detonated upbeats","length":44043.59853476586,"question_group":"Natal insecticides","sort_order":32696,"source_version":"Opiates inestimable","target_number":56193,"title":"Deflecting recapitulation","topic_id":2779,"video_url":"Fractures misadventures"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy video for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of videos for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create video for health_care_provider', function (done) {
      var newObj = {"desc":"Silhouettes revitalization","is_active":false,"keywords":"Metropolises inconceivable","length":96687.54806928174,"question_group":"Procreation rehabilitation","sort_order":65102,"source_version":"Pester knowledgeable","target_number":44398,"title":"Overestimating represent","topic_id":84333,"video_url":"Plazas commands"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show video for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"desc":"Nonfiction expresses","is_active":true,"keywords":"Superbest tryst","length":5999.649386785535,"question_group":"Procrastinates onions","sort_order":92657,"source_version":"Sulkily scrounger","target_number":18963,"title":"Mothballed malice","topic_id":71656,"video_url":"Expectorate tapers"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy video for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/videos/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
