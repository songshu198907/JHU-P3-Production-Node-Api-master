var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2016-05-19","address":"Personalizing deodorized","cellPhone":"Debugger nuttier","city":"Bookkeeping accessioning","clinicianCodeId":41095,"clinicName":"Lowers flagstaff","consentAcceptedOn":"2012-12-27 13:11:17 +0000","contactCellPhone":"Cellos hieroglyphic","contactEmail":"Suppers overtly","contactHomePhone":"Sugarcoat Shakespearean","contactName":"Craftsmanship Justin","deactivatedOn":"2015-02-01 13:23:39 +0000","educationId":17322,"email":"troy.o'hara24@vaccinesurvey.com","expectedChildBirth":"2015-06-06","firstName":"Geraldo","hasContactUsers":false,"homePhone":"Overspecializes funner","interventionGroup":"Roaches farsightedness","isDeactive":true,"lastName":"Bruen","parentRelationshipType":"Crapes reiteration","parentUserId":91663,"password":"password","passwordConfirmation":"password","passwordDigest":"Wavelet recognizing","patientType":49204,"postalCode":"Fortnightly Cabernet","raceId":67128,"reasonForDeactivation":"Ported Canaveral","resetPassword":false,"role":"administrator","state":"Feeling presupposition","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Placates dogmatically"},
  'patient': {"actualChildBirth":"2014-08-13","address":"Lasts Alcestis","cellPhone":"Provo shipbuilder","city":"Influentially eliminating","clinicianCodeId":57489,"clinicName":"Sycophants overstays","consentAcceptedOn":"2001-11-25 02:05:54 +0000","contactCellPhone":"Belligerents kippers","contactEmail":"Tyrannosauruses ecclesiastical","contactHomePhone":"Garrulousness choices","contactName":"Disrespectfully sensitiveness","deactivatedOn":"2011-04-25 20:11:32 +0000","educationId":53320,"email":"efren.kertzmann8@vaccinesurvey.com","expectedChildBirth":"2015-01-20","firstName":"Analisa","hasContactUsers":true,"homePhone":"Unavoidably demitasse","interventionGroup":"Beneficiary rarely","isDeactive":true,"lastName":"Emard","parentRelationshipType":"Toilet Styron","parentUserId":87250,"password":"password","passwordConfirmation":"password","passwordDigest":"Insurrectionist Hindustan","patientType":95303,"postalCode":"Meantime untimely","raceId":5465,"reasonForDeactivation":"Choreographers Atlantic","resetPassword":true,"role":"patient","state":"Convoking refinishing","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Morass Landry"},
  'health_care_provider': {"actualChildBirth":"2017-02-13","address":"Terrorizing disestablishes","cellPhone":"Grandfathering commons","city":"Vermillion classmate","clinicianCodeId":15670,"clinicName":"Euphemistically Brownsville","consentAcceptedOn":"1987-06-10 19:57:47 +0000","contactCellPhone":"Consulting flawless","contactEmail":"Cataloguer peeving","contactHomePhone":"Contestants matrimony","contactName":"Existentialists shoptalk","deactivatedOn":"2011-06-28 05:37:00 +0000","educationId":29318,"email":"jeff.cormier28@vaccinesurvey.com","expectedChildBirth":"2015-08-03","firstName":"Marlen","hasContactUsers":false,"homePhone":"Yodelers phosphorescent","interventionGroup":"Subordinating ongoing","isDeactive":false,"lastName":"Lebsack","parentRelationshipType":"Popovers jerseys","parentUserId":56037,"password":"password","passwordConfirmation":"password","passwordDigest":"Prong postgraduate","patientType":2935,"postalCode":"Blenched juggernauts","raceId":41226,"reasonForDeactivation":"Naked clamminess","resetPassword":true,"role":"health_care_provider","state":"Solved knockers","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Nonpolitical sportscasters"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2Survey', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"interventionGroup":"Musical dissertations","isActive":true,"name":"Fred Schoen","patientType":99531,"surveyType":"Intuited Zubeneschamali","totalQuestions":71220,"version":35017});
  testObjects.push({"interventionGroup":"Jeering knowledgeably","isActive":false,"name":"Jimmy Padberg","patientType":64310,"surveyType":"Hamlet mountings","totalQuestions":73254,"version":4737});
  testObjects.push({"interventionGroup":"Discouragements confidentiality","isActive":true,"name":"Joesph Tremblay","patientType":55891,"surveyType":"Shoehorning musses","totalQuestions":54259,"version":34352});
  testObjects.push({"interventionGroup":"Encumbered attitudinizing","isActive":false,"name":"Rocco Mueller","patientType":7229,"surveyType":"Photojournalism moisten","totalQuestions":27751,"version":99732});
  testObjects.push({"interventionGroup":"Abase Salvadoran","isActive":false,"name":"Brooks Harris","patientType":81633,"surveyType":"Sages penlights","totalQuestions":90768,"version":23081});
  testObjects.push({"interventionGroup":"Francoise subconsciously","isActive":true,"name":"Lisha Hirthe","patientType":57030,"surveyType":"Banned telecommuter","totalQuestions":79389,"version":33228});
  testObjects.push({"interventionGroup":"Characteristics fixation","isActive":true,"name":"Ronald Shields","patientType":17983,"surveyType":"Combustibles pantheism","totalQuestions":72342,"version":56611});
  testObjects.push({"interventionGroup":"Antihistamines charge","isActive":false,"name":"Arla Bogan","patientType":40641,"surveyType":"Conflagration cartwheels","totalQuestions":43847,"version":17967});
  testObjects.push({"interventionGroup":"Entrapped embody","isActive":true,"name":"Tomas Hartmann","patientType":40660,"surveyType":"Rained nervous","totalQuestions":34726,"version":26563});
  testObjects.push({"interventionGroup":"Taegu septums","isActive":false,"name":"Phil Keebler","patientType":60772,"surveyType":"Presumptuously Vichy","totalQuestions":28925,"version":85856});

V2Survey.createEach(testObjects).exec(function(err, obj) {
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
      V2Survey.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of surveys for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey for administrator', function (done) {
      var newObj = {"intervention_group":"Debussy serves","is_active":false,"name":"Merrill Skiles","patient_type":81550,"survey_type":"Prearranged recalcitrance","total_questions":37537,"version":30961};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2Survey.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show survey for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"intervention_group":"Comma ascot","is_active":false,"name":"Alex Lindgren","patient_type":56664,"survey_type":"Industries agreements","total_questions":72683,"version":76702};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2Survey.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2Survey with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy survey for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of surveys for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create survey for patient', function (done) {
      var newObj = {"intervention_group":"Mathematicians Guinness","is_active":false,"name":"Alden Hoppe","patient_type":32126,"survey_type":"Maniacs wildcats","total_questions":21797,"version":6378};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"intervention_group":"Inevitability oceanographic","is_active":true,"name":"Simone Wunsch","patient_type":3467,"survey_type":"Interrogating eccentricities","total_questions":11553,"version":733};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of surveys for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create survey for health_care_provider', function (done) {
      var newObj = {"intervention_group":"Misappropriate inconsistencies","is_active":false,"name":"Jacklyn Wilkinson","patient_type":21742,"survey_type":"Satiating wealthiness","total_questions":92783,"version":71203};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"intervention_group":"Wollstonecraft bacteriologist","is_active":false,"name":"Kathlyn Torp","patient_type":66148,"survey_type":"Declassifying argument","total_questions":50324,"version":41357};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/surveys/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
