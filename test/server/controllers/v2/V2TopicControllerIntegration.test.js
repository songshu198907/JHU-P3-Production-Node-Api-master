var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2014-09-03","address":"Irrespective factorization","cellPhone":"Researching stript","city":"Conservationist inquirers","clinicianCodeId":73572,"clinicName":"Blued quart","consentAcceptedOn":"2003-07-02 20:14:31 +0000","contactCellPhone":"Deceasing grandly","contactEmail":"Photojournalism sentimentalized","contactHomePhone":"Christianities convertibles","contactName":"Photojournalism gastronomical","deactivatedOn":"2004-11-29 00:00:36 +0000","educationId":79194,"email":"holly.yost96@vaccinesurvey.com","expectedChildBirth":"2017-04-02","firstName":"Anibal","hasContactUsers":true,"homePhone":"Unquestioningly disproportions","interventionGroup":"Misunderstand Camel","isDeactive":true,"lastName":"Breitenberg","parentRelationshipType":"Veracious contemptuously","parentUserId":38227,"password":"password","passwordConfirmation":"password","passwordDigest":"Individualistic leases","patientType":88666,"postalCode":"Razed twine","raceId":61158,"reasonForDeactivation":"Proportionality shallowest","resetPassword":true,"role":"administrator","state":"Transportable wisecracking","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Photojournalism misidentifies"},
  'patient': {"actualChildBirth":"2015-09-02","address":"Bethe murmur","cellPhone":"Sluggishly rebinding","city":"Hesitate blissfulness","clinicianCodeId":77082,"clinicName":"Solidly auger","consentAcceptedOn":"1995-10-24 09:50:46 +0000","contactCellPhone":"Gimleting gobbler","contactEmail":"Saved regular","contactHomePhone":"Instrumentation environmentally","contactName":"Countless unquestioned","deactivatedOn":"2006-03-31 07:28:19 +0000","educationId":58878,"email":"randy.quigley75@vaccinesurvey.com","expectedChildBirth":"2016-08-20","firstName":"Leslie","hasContactUsers":true,"homePhone":"Transliterating administration","interventionGroup":"Blotching congesting","isDeactive":true,"lastName":"Runte","parentRelationshipType":"Recompiled culottes","parentUserId":42582,"password":"password","passwordConfirmation":"password","passwordDigest":"Overtone saltshakers","patientType":74871,"postalCode":"Nonpayment Schwarzenegger","raceId":46296,"reasonForDeactivation":"Three oscillation","resetPassword":false,"role":"patient","state":"Misinterprets Lajos","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Entrants bootie"},
  'health_care_provider': {"actualChildBirth":"2017-01-26","address":"Fitzpatrick vaguest","cellPhone":"Frustrations jackpot","city":"Loathsomeness transporters","clinicianCodeId":43305,"clinicName":"Councilwoman enlivened","consentAcceptedOn":"1978-03-29 08:19:57 +0000","contactCellPhone":"Ozarks overpricing","contactEmail":"Quarrelsome entrap","contactHomePhone":"Remaindered expendables","contactName":"Discountenance loyalty","deactivatedOn":"2016-04-29 12:44:52 +0000","educationId":46787,"email":"carina.robel67@vaccinesurvey.com","expectedChildBirth":"2016-07-08","firstName":"Roselle","hasContactUsers":false,"homePhone":"Gotta feeler","interventionGroup":"Sockets intelligibility","isDeactive":false,"lastName":"Marks","parentRelationshipType":"Louvre validity","parentUserId":73453,"password":"password","passwordConfirmation":"password","passwordDigest":"Volga quotations","patientType":71867,"postalCode":"Neckerchiefs authenticated","raceId":3202,"reasonForDeactivation":"Orthopedist absences","resetPassword":false,"role":"health_care_provider","state":"Verandas recitatives","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Leukocytes prides"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2Topic', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"name":"Nila Mayer"});
  testObjects.push({"name":"Orville Haley"});
  testObjects.push({"name":"France Frami"});
  testObjects.push({"name":"Jesse Boyer"});
  testObjects.push({"name":"Deena Flatley"});
  testObjects.push({"name":"Aletha Morar"});
  testObjects.push({"name":"Garth Bosco"});
  testObjects.push({"name":"Erica Ledner"});
  testObjects.push({"name":"Harley Luettgen"});
  testObjects.push({"name":"Emma Kuphal"});

V2Topic.createEach(testObjects).exec(function(err, obj) {
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
      V2Topic.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of topics for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create topic for administrator', function (done) {
      var newObj = {"name":"Roman Hane"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2Topic.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show topic for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update topic for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Carroll Rath"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2Topic.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2Topic with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy topic for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of topics for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create topic for patient', function (done) {
      var newObj = {"name":"Elbert Gottlieb"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show topic for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update topic for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Israel Murphy"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy topic for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of topics for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create topic for health_care_provider', function (done) {
      var newObj = {"name":"Tomi Rolfson"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show topic for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update topic for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Modesto Waelchi"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy topic for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/topics/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
