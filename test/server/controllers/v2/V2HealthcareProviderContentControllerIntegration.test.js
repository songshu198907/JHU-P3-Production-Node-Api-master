var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-01-03","address":"Conceptualized snooty","cellPhone":"Evacuations inaugurations","city":"Consolation maintainability","clinicianCodeId":26217,"clinicName":"Straitjacketing overpopulating","consentAcceptedOn":"1994-07-15 12:47:12 +0000","contactCellPhone":"Stiller deckhand","contactEmail":"Foamiest pauperize","contactHomePhone":"Corollaries minority","contactName":"Throwaways antecedents","deactivatedOn":"1989-01-22 01:27:07 +0000","educationId":10003,"email":"lianne.heidenreich39@vaccinesurvey.com","expectedChildBirth":"2015-11-23","firstName":"Kenisha","hasContactUsers":false,"homePhone":"Recapitulations nixed","interventionGroup":"Boardinghouses stereophonic","isDeactive":false,"lastName":"Fahey","parentRelationshipType":"Wells asymmetrical","parentUserId":54606,"password":"password","passwordConfirmation":"password","passwordDigest":"Adventured obsessives","patientType":90671,"postalCode":"Transformations mousing","raceId":69821,"reasonForDeactivation":"Dissociating acupuncturist","resetPassword":false,"role":"administrator","state":"Prodigies nonalcoholic","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Pages accredit"},
  'health_care_provider': {"actualChildBirth":"2015-02-03","address":"Remembrances Lepus","cellPhone":"Transient overachiever","city":"Dryly adornment","clinicianCodeId":67603,"clinicName":"Brashness perspicacious","consentAcceptedOn":"2009-09-08 16:01:59 +0000","contactCellPhone":"Masticates dandruff","contactEmail":"Undetermined foregrounding","contactHomePhone":"Hussies overdosing","contactName":"Qualification cordoned","deactivatedOn":"1972-12-30 21:40:33 +0000","educationId":29443,"email":"leif.rowe1@vaccinesurvey.com","expectedChildBirth":"2016-02-07","firstName":"Georgia","hasContactUsers":true,"homePhone":"Ready satisfactory","interventionGroup":"Outstripping reveling","isDeactive":false,"lastName":"Mertz","parentRelationshipType":"Symbolization tipis","parentUserId":28185,"password":"password","passwordConfirmation":"password","passwordDigest":"Janitorial bombshells","patientType":6517,"postalCode":"Onassis decentralizing","raceId":20831,"reasonForDeactivation":"Centenarian wager","resetPassword":false,"role":"health_care_provider","state":"Snowboarding exemplification","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Concentrically grate"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2HealthcareProviderContent', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"categoryGroup":"Doodad inversions","desc":"Wikis offensiveness","externalLink":"Unfaithfully ferrying","keywords":"Brice audiovisual","title":"Equivalents oversexed","topicId":85681});
  testObjects.push({"categoryGroup":"Hustler hobbyhorses","desc":"Disintegrated rampages","externalLink":"Yacht insole","keywords":"Disapproving anaesthetizing","title":"Analyticalally poetesses","topicId":41069});
  testObjects.push({"categoryGroup":"Imprecision witches","desc":"Bradly prioritizing","externalLink":"Meticulousness reformulated","keywords":"Starched gerrymanders","title":"Roving snobs","topicId":75172});
  testObjects.push({"categoryGroup":"Bonnet weatherproofing","desc":"Confrontational stalks","externalLink":"Weaken prospered","keywords":"Rescheduling servomechanisms","title":"Rumor norms","topicId":24126});
  testObjects.push({"categoryGroup":"Situations clinking","desc":"Disillusionment outmanoeuvring","externalLink":"Stratospheres joyrode","keywords":"Medicate crooning","title":"Beacons Beatrix","topicId":39299});
  testObjects.push({"categoryGroup":"Contraventions dictatorial","desc":"Menial Ionic","externalLink":"Peron statesman","keywords":"Originally Francois","title":"Cassocks inasmuch","topicId":34432});
  testObjects.push({"categoryGroup":"Differentiate intellectualism","desc":"Pandemonium mothering","externalLink":"Inseminates preconceive","keywords":"Squashier projectionists","title":"Noncommittally vigilantism","topicId":22793});
  testObjects.push({"categoryGroup":"Superfluity Harley","desc":"Episcopalian indifferently","externalLink":"Pediatricians inadequacies","keywords":"Anaesthetizing sticks","title":"Samoan unsociable","topicId":43323});
  testObjects.push({"categoryGroup":"Screenwriters catalyst","desc":"Enervation troubleshooter","externalLink":"Esteem facilitated","keywords":"Impossibilities melodic","title":"Tartars convergences","topicId":88803});
  testObjects.push({"categoryGroup":"Outstaying Illinois","desc":"Realized concessionaires","externalLink":"Tonsillectomies Appalachian","keywords":"Panderer wasteful","title":"Sharpshooter ostracizes","topicId":21742});

V2HealthcareProviderContent.createEach(testObjects).exec(function(err, obj) {
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
      V2HealthcareProviderContent.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of healthcare_provider_contents for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create healthcare_provider_content for administrator', function (done) {
      var newObj = {"category_group":"Lugubriousness enquiring","desc":"Discriminates sympathizer","external_link":"Corroboration Joycean","keywords":"Brandi undeserving","title":"Collect Netzahualcoyotl","topic_id":52461};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2HealthcareProviderContent.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show healthcare_provider_content for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update healthcare_provider_content for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"category_group":"Directives peyote","desc":"Bleakly instrumentalist","external_link":"Mancini presupposition","keywords":"Segregationist paddle","title":"Interconnected predict","topic_id":80889};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2HealthcareProviderContent.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2HealthcareProviderContent with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy healthcare_provider_content for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V2HealthcareProviderContent.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
    it('should attempt to get index of healthcare_provider_contents for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create healthcare_provider_content for health_care_provider', function (done) {
      var newObj = {"category_group":"Heartlessness savvied","desc":"Militarization diversification","external_link":"Disheveled aerialists","keywords":"Asymmetrical discouragingly","title":"Metamorphosed misrepresenting","topic_id":89442};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show healthcare_provider_content for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update healthcare_provider_content for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"category_group":"Dirtiness ostracism","desc":"Recollected muddle","external_link":"Herbivorous parallelisms","keywords":"Bathrobe equestrians","title":"Troops brinksmanship","topic_id":5010};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy healthcare_provider_content for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/healthcare_provider_contents/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
