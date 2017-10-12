var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-10-26","address":"Lingos summonsing","cellPhone":"Transfigured clumsiness","city":"Wimps beacon","clinicianCodeId":40148,"clinicName":"Commences adulteress","consentAcceptedOn":"1986-11-01 17:48:50 +0000","contactCellPhone":"Deadlocked bishopric","contactEmail":"Gentrification anachronism","contactHomePhone":"Wipes conservationist","contactName":"Regicide adulterating","deactivatedOn":"2008-02-29 11:20:57 +0000","educationId":23957,"email":"chad.upton57@vaccinesurvey.com","expectedChildBirth":"2016-01-14","firstName":"Barton","hasContactUsers":true,"homePhone":"Valise hopefulness","interventionGroup":"Formalization Yahtzee","isDeactive":false,"lastName":"Dare","parentRelationshipType":"Hotbeds Pomeranian","parentUserId":61163,"password":"password","passwordConfirmation":"password","passwordDigest":"Encapsulations captious","patientType":39843,"postalCode":"Buckskins noiselessness","raceId":67820,"reasonForDeactivation":"Disposition insubordination","resetPassword":false,"role":"administrator","state":"Interbreeding Bonhoeffer","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Regulars cordons"},
  'patient': {"actualChildBirth":"2016-12-05","address":"Addressee tower","cellPhone":"Djibouti discourteously","city":"Snipers Johnie","clinicianCodeId":31035,"clinicName":"Yarns congratulated","consentAcceptedOn":"1977-03-16 04:49:53 +0000","contactCellPhone":"Pentax upholsterer","contactEmail":"Wigwags doodles","contactHomePhone":"Obviated unimplementable","contactName":"Remorsefully landscaper","deactivatedOn":"1990-01-16 19:57:21 +0000","educationId":19725,"email":"francis.toy89@vaccinesurvey.com","expectedChildBirth":"2016-02-28","firstName":"Carrol","hasContactUsers":true,"homePhone":"Bacteriological Gompers","interventionGroup":"Heartbeat leguminous","isDeactive":false,"lastName":"Hermann","parentRelationshipType":"Sudan meretricious","parentUserId":17681,"password":"password","passwordConfirmation":"password","passwordDigest":"Impalement standardization","patientType":67449,"postalCode":"Revolutionaries underestimating","raceId":68519,"reasonForDeactivation":"Unction fused","resetPassword":false,"role":"patient","state":"Microscopes professorial","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Pasteboard destinations"},
  'health_care_provider': {"actualChildBirth":"2017-01-02","address":"Curls bluing","cellPhone":"Heidelberg acquiescence","city":"Renumbering Banks","clinicianCodeId":97087,"clinicName":"Floodlighting implement","consentAcceptedOn":"1976-07-06 09:08:43 +0000","contactCellPhone":"Descend fluctuations","contactEmail":"Snowboard betokening","contactHomePhone":"Visit supercharger","contactName":"Accidentally maybes","deactivatedOn":"2003-05-17 07:58:20 +0000","educationId":22604,"email":"bong.ortiz35@vaccinesurvey.com","expectedChildBirth":"2015-12-22","firstName":"Danny","hasContactUsers":true,"homePhone":"Hells numerals","interventionGroup":"Slinky inactivity","isDeactive":true,"lastName":"Morar","parentRelationshipType":"Subsidization transceiver","parentUserId":73799,"password":"password","passwordConfirmation":"password","passwordDigest":"Remonstrating hauling","patientType":6973,"postalCode":"Berle newspaperwomen","raceId":84961,"reasonForDeactivation":"Lengthens abusive","resetPassword":false,"role":"health_care_provider","state":"Landscaping inconsolable","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Voluptuousness nonagenarian"},
  'Unauthenticated Default': {"actualChildBirth":"2014-12-25","address":"Penances replenishment","cellPhone":"Juxtaposition blonds","city":"Bordellos circumflex","clinicianCodeId":90845,"clinicName":"Redistricts groundbreakings","consentAcceptedOn":"1996-09-10 00:00:56 +0000","contactCellPhone":"Jerky bronco","contactEmail":"Mischievousness infelicity","contactHomePhone":"Peppy redeployment","contactName":"Soliloquizing counterclaiming","deactivatedOn":"1977-05-21 08:20:30 +0000","educationId":36630,"email":"evelin.maggio3@vaccinesurvey.com","expectedChildBirth":"2015-02-11","firstName":"Fermin","hasContactUsers":false,"homePhone":"Triglycerides deprivations","interventionGroup":"Disrobing realistically","isDeactive":true,"lastName":"Effertz","parentRelationshipType":"Impressionable hemispherical","parentUserId":28146,"password":"password","passwordConfirmation":"password","passwordDigest":"Cheekily barroom","patientType":2832,"postalCode":"Interpretative quaintness","raceId":66036,"reasonForDeactivation":"Hillier interrelations","resetPassword":false,"role":"Unauthenticated Default","state":"Idealization renegotiated","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Ransacks disrespectful"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2Education', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"name":"Darnell Lind"});
  testObjects.push({"name":"Jeffrey Robel"});
  testObjects.push({"name":"Isobel Frami"});
  testObjects.push({"name":"Oliva Luettgen"});
  testObjects.push({"name":"Carmen Schamberger"});
  testObjects.push({"name":"Seymour Watsica"});
  testObjects.push({"name":"Tomika Graham"});
  testObjects.push({"name":"Marg Rippin"});
  testObjects.push({"name":"Rosaline Anderson"});
  testObjects.push({"name":"Keenan Smith"});

V2Education.createEach(testObjects).exec(function(err, obj) {
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
      V2Education.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of educations for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create education for administrator', function (done) {
      var newObj = {"name":"Shane Ebert"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2Education.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show education for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update education for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Jamar Moen"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2Education.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2Education with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy education for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of educations for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create education for patient', function (done) {
      var newObj = {"name":"Terrance Veum"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show education for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update education for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Ingeborg Crona"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy education for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of educations for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create education for health_care_provider', function (done) {
      var newObj = {"name":"Scottie Douglas"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show education for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update education for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Wiley Kohler"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy education for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of educations for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create education for unauthenticated', function (done) {
      var newObj = {"name":"Jack Jerde"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show education for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update education for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"name":"Neville Morar"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy education for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/educations/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
