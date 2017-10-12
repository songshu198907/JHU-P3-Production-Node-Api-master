var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2016-05-30","address":"Slyly telecasters","cellPhone":"Impecuniousness miscalculations","city":"Immortalizing demonstratives","clinicianCodeId":1047,"clinicName":"Thermoplastic lugubriousness","consentAcceptedOn":"1989-01-02 18:14:48 +0000","contactCellPhone":"Bowing bitters","contactEmail":"Dobro drolly","contactHomePhone":"Transceivers whopper","contactName":"Misappropriate Boulez","deactivatedOn":"1983-11-24 01:33:01 +0000","educationId":35012,"email":"mitsue.kilback82@vaccinesurvey.com","expectedChildBirth":"2015-02-27","firstName":"Virgie","hasContactUsers":false,"homePhone":"Colfax companions","interventionGroup":"Constellations swash","isDeactive":true,"lastName":"Schulist","parentRelationshipType":"Instantaneously thoroughest","parentUserId":39547,"password":"password","passwordConfirmation":"password","passwordDigest":"Mutations overpowers","patientType":32845,"postalCode":"Syrup Rusty","raceId":38765,"reasonForDeactivation":"Codifies colossuses","resetPassword":true,"role":"patient","state":"Traffickers innovated","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Colfax looseness"},
  'health_care_provider': {"actualChildBirth":"2015-10-27","address":"Abandonment quietly","cellPhone":"Rectifications Davies","city":"Bilious hangovers","clinicianCodeId":76411,"clinicName":"Exaggerating ejections","consentAcceptedOn":"1996-03-03 01:43:23 +0000","contactCellPhone":"Scaliest inaccessible","contactEmail":"Standing hooliganism","contactHomePhone":"Shuttering shear","contactName":"Mangers benefactions","deactivatedOn":"2015-04-24 06:58:27 +0000","educationId":65210,"email":"jude.witting72@vaccinesurvey.com","expectedChildBirth":"2015-05-30","firstName":"Sydney","hasContactUsers":true,"homePhone":"Welders liberalizations","interventionGroup":"Capitulation rationalization","isDeactive":true,"lastName":"Davis","parentRelationshipType":"Consummating frostbite","parentUserId":57036,"password":"password","passwordConfirmation":"password","passwordDigest":"Therese consummating","patientType":60517,"postalCode":"Dossier misleads","raceId":98323,"reasonForDeactivation":"Rosin flimflamming","resetPassword":true,"role":"health_care_provider","state":"Sufficed libeller","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Porpoised fisher"},
  'administrator': {"actualChildBirth":"2014-11-21","address":"Somersaults independently","cellPhone":"Droopy Dodge","city":"Unpinned interrogators","clinicianCodeId":59531,"clinicName":"Chartering proficiency","consentAcceptedOn":"1973-03-27 17:38:42 +0000","contactCellPhone":"Recuperate thoughtfulness","contactEmail":"Shames goulashes","contactHomePhone":"Bullwinkle Mississippians","contactName":"Depoliticize northwestward","deactivatedOn":"1972-02-12 07:18:38 +0000","educationId":58736,"email":"oscar.wilderman7@vaccinesurvey.com","expectedChildBirth":"2016-04-23","firstName":"Dominic","hasContactUsers":true,"homePhone":"Snakier rainwater","interventionGroup":"Acquaintance claustrophobic","isDeactive":true,"lastName":"Beier","parentRelationshipType":"Tantalizing taints","parentUserId":53267,"password":"password","passwordConfirmation":"password","passwordDigest":"Bagginess sentimentalizes","patientType":57257,"postalCode":"Bridegroom silkiest","raceId":18257,"reasonForDeactivation":"Zairian Czechoslovakian","resetPassword":false,"role":"administrator","state":"Correspondence encodes","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Artificially justest"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2VideoAuditLogging', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"createdAt":"1997-06-02 03:56:22 +0000","duration":38353.262987390655,"userId":61261,"videoId":95701,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"1981-12-15 23:52:51 +0000","duration":38098.188631140234,"userId":69546,"videoId":26542,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"1997-08-16 13:22:57 +0000","duration":59594.93766541669,"userId":77503,"videoId":25463,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"1988-08-04 21:29:10 +0000","duration":67441.54156913114,"userId":79564,"videoId":25471,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"2006-12-22 17:10:03 +0000","duration":13429.821229590367,"userId":95676,"videoId":54988,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"1987-04-02 01:57:09 +0000","duration":2789.122566493881,"userId":66196,"videoId":20191,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"1989-08-07 17:33:21 +0000","duration":42075.46944930062,"userId":13318,"videoId":78611,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"2010-07-26 10:07:08 +0000","duration":94818.26132621718,"userId":35349,"videoId":98758,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"1973-06-15 03:40:23 +0000","duration":39919.8824380188,"userId":39593,"videoId":46149,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"2013-04-26 05:34:16 +0000","duration":45895.973274946125,"userId":43579,"videoId":50154,"watchedEntireVideo":false});

V2VideoAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
      V2VideoAuditLogging.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of video_audit_loggings for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create video_audit_logging for patient', function (done) {
      var newObj = {"created_at":"2011-09-04 14:35:26 +0000","duration":7018.2942158557635,"user_id":2749,"video_id":52577,"watched_entire_video":true};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2VideoAuditLogging.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show video_audit_logging for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video_audit_logging for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"2005-01-31 03:23:49 +0000","duration":96142.75426857953,"user_id":61603,"video_id":31278,"watched_entire_video":false};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2VideoAuditLogging.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2VideoAuditLogging with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy video_audit_logging for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of video_audit_loggings for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create video_audit_logging for health_care_provider', function (done) {
      var newObj = {"created_at":"2000-07-30 16:47:26 +0000","duration":23351.90146216957,"user_id":93182,"video_id":46039,"watched_entire_video":true};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2VideoAuditLogging.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show video_audit_logging for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video_audit_logging for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"2004-07-02 06:07:37 +0000","duration":48704.92942251217,"user_id":23722,"video_id":4774,"watched_entire_video":false};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2VideoAuditLogging.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2VideoAuditLogging with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy video_audit_logging for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of video_audit_loggings for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create video_audit_logging for administrator', function (done) {
      var newObj = {"created_at":"2008-05-10 20:12:12 +0000","duration":98804.67426094026,"user_id":43644,"video_id":8146,"watched_entire_video":false};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show video_audit_logging for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video_audit_logging for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"created_at":"2012-09-30 12:15:51 +0000","duration":61401.849073126294,"user_id":3853,"video_id":17327,"watched_entire_video":true};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy video_audit_logging for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/video_audit_loggings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
