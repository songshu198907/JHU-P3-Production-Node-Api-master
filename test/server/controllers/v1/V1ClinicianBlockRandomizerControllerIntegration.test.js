var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-02-15","address":"Uncomplicated relationships","cellPhone":"Humanitarianism reconnaissances","city":"Hasted industrializes","clinicianCodeId":97043,"clinicName":"Booms Rumpelstiltskin","consentAcceptedOn":"1995-09-12 22:44:37 +0000","contactCellPhone":"Rotate philanthropic","contactEmail":"Deducing surreptitiously","contactHomePhone":"Citronella pumpkin","contactName":"Blessings whoopees","deactivatedOn":"1970-10-11 19:38:01 +0000","educationId":56641,"email":"gwenn.conn96@vaccinesurvey.com","expectedChildBirth":"2014-08-07","firstName":"Divina","hasContactUsers":false,"homePhone":"Confectionery wholesomeness","interventionGroup":"Postmodern antagonism","isDeactive":true,"lastName":"Bode","parentRelationshipType":"Rodger preponderances","parentUserId":94002,"password":"password","passwordConfirmation":"password","passwordDigest":"Prognosticating questionable","patientType":49515,"postalCode":"Overstocking reinforcements","raceId":53014,"reasonForDeactivation":"Comfortingly reimposed","resetPassword":true,"role":"administrator","state":"Glaucoma poplin","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Intellectualize craftsmen"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1ClinicianBlockRandomizer', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"id":25088,"clinicianCodeId":70561,"interventionGroup":"Blotchier leapt","patientType":"Radiotelephone agate"});
  testObjects.push({"id":35322,"clinicianCodeId":25278,"interventionGroup":"Encapsulations bailouts","patientType":"Unmercifully kindling"});
  testObjects.push({"id":97008,"clinicianCodeId":90828,"interventionGroup":"Complication avariciously","patientType":"Crabbiest tittered"});
  testObjects.push({"id":34412,"clinicianCodeId":37693,"interventionGroup":"Kiddos centrifuging","patientType":"Contemptuously comported"});
  testObjects.push({"id":43638,"clinicianCodeId":20637,"interventionGroup":"Neurologist illegitimately","patientType":"Manikin tendinitis"});
  testObjects.push({"id":85846,"clinicianCodeId":27020,"interventionGroup":"Unacknowledged cotter","patientType":"Murat departmentalize"});
  testObjects.push({"id":73169,"clinicianCodeId":43203,"interventionGroup":"Clumsily responsively","patientType":"Trike decommissioning"});
  testObjects.push({"id":37659,"clinicianCodeId":86221,"interventionGroup":"Cinematographer bullet","patientType":"Sextet pomades"});
  testObjects.push({"id":61845,"clinicianCodeId":15711,"interventionGroup":"Cosmologists Swisses","patientType":"Blackberries palmy"});
  testObjects.push({"id":90889,"clinicianCodeId":54918,"interventionGroup":"Bridgetown observation","patientType":"Quivers Manhattan"});

V1ClinicianBlockRandomizer.createEach(testObjects).exec(function(err, obj) {
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
      V1ClinicianBlockRandomizer.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of clinician_block_randomizers for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_block_randomizers").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create clinician_block_randomizer for administrator', function (done) {
      var newObj = {"id":4924,"clinician_code_id":4750,"intervention_group":"Discontenting forgetfulness","patient_type":"Masquerading Marvin"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_block_randomizers").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1ClinicianBlockRandomizer.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show clinician_block_randomizer for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_block_randomizers/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update clinician_block_randomizer for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"id":52972,"clinician_code_id":93825,"intervention_group":"Projectionists Ceylon","patient_type":"Embassy Brenner"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_block_randomizers/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1ClinicianBlockRandomizer.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1ClinicianBlockRandomizer with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy clinician_block_randomizer for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/clinician_block_randomizers/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
