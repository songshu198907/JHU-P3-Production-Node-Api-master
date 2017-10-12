var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2015-06-10","address":"Dramatics frumps","cellPhone":"Leered interdependence","city":"Bacteriologists closemouthed","clinicianCodeId":18501,"clinicName":"Whined incorporation","consentAcceptedOn":"1990-08-16 16:45:12 +0000","contactCellPhone":"Inflict retrospectively","contactEmail":"Charbray abeyance","contactHomePhone":"Brobdingnagian impossibilities","contactName":"Invulnerability Octavia","deactivatedOn":"1985-05-13 19:50:31 +0000","educationId":87269,"email":"terrance.emmerich30@vaccinesurvey.com","expectedChildBirth":"2015-12-12","firstName":"Santo","hasContactUsers":true,"homePhone":"Desiderata Hindustan","interventionGroup":"Immunization squiggle","isDeactive":false,"lastName":"Bauch","parentRelationshipType":"Conglomerations appall","parentUserId":47905,"password":"password","passwordConfirmation":"password","passwordDigest":"Pedestrianized Eurodollars","patientType":25832,"postalCode":"Unequivocally tablespoonfuls","raceId":42590,"reasonForDeactivation":"Disillusionment troubleshoots","resetPassword":true,"role":"administrator","state":"Honcho communistic","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Extrapolates misanthropists"},
  'patient': {"actualChildBirth":"2014-10-18","address":"Customization sweetbrier","cellPhone":"Felipe Noreen","city":"Guilty inculpate","clinicianCodeId":43228,"clinicName":"Fracture unemployable","consentAcceptedOn":"1974-09-04 17:53:31 +0000","contactCellPhone":"Semiconductors graciousness","contactEmail":"Fritz liquified","contactHomePhone":"Housework Japaneses","contactName":"Reconditions reproachfully","deactivatedOn":"2010-01-04 19:59:48 +0000","educationId":75150,"email":"theodore.pagac98@vaccinesurvey.com","expectedChildBirth":"2015-12-13","firstName":"Pok","hasContactUsers":false,"homePhone":"Underestimated auricle","interventionGroup":"Receptively wastebasket","isDeactive":false,"lastName":"Kling","parentRelationshipType":"Counterclaiming oceanographic","parentUserId":8195,"password":"password","passwordConfirmation":"password","passwordDigest":"Heater possessiveness","patientType":83566,"postalCode":"Tobogganed taunts","raceId":5219,"reasonForDeactivation":"Sexed puberty","resetPassword":true,"role":"patient","state":"Appendixes computerization","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Licentiousness transplantation"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2SurveyQuestion', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"didYouKnowText":"Franglais manifestations","label":"Extortionate caliper","questionCategoryId":24804,"questionCodeId":8953,"questionGroup":"Novokuznetsk migrated","questionText":"Aureole grottoes","questionTypeId":3168,"requiredAnswer":true,"sortOrder":81188,"surveyId":51796});
  testObjects.push({"didYouKnowText":"Overconfident dimple","label":"Thriven polymerization","questionCategoryId":90715,"questionCodeId":14799,"questionGroup":"Particularizing Caxton","questionText":"Dishonestly clashing","questionTypeId":91428,"requiredAnswer":false,"sortOrder":81616,"surveyId":41486});
  testObjects.push({"didYouKnowText":"Contemporary oversensitive","label":"Allotments baser","questionCategoryId":25908,"questionCodeId":30442,"questionGroup":"Misdiagnose haggard","questionText":"Elbowing infantries","questionTypeId":52929,"requiredAnswer":false,"sortOrder":5518,"surveyId":43674});
  testObjects.push({"didYouKnowText":"Incrustation Capricorn","label":"Canton Barkley","questionCategoryId":46070,"questionCodeId":65639,"questionGroup":"Misconstrued microscopically","questionText":"Nonintervention indeterminately","questionTypeId":16945,"requiredAnswer":true,"sortOrder":86235,"surveyId":52276});
  testObjects.push({"didYouKnowText":"Snowballing nationwide","label":"Pluck Thaddeus","questionCategoryId":71563,"questionCodeId":36785,"questionGroup":"Layover effectiveness","questionText":"Galvanic cargo","questionTypeId":84651,"requiredAnswer":true,"sortOrder":24717,"surveyId":19994});
  testObjects.push({"didYouKnowText":"Accra yogurt","label":"Lifesavers Alphonso","questionCategoryId":63957,"questionCodeId":11046,"questionGroup":"Bowlers doughty","questionText":"Endearingly holidayed","questionTypeId":36672,"requiredAnswer":false,"sortOrder":66593,"surveyId":93146});
  testObjects.push({"didYouKnowText":"Congratulates microcomputers","label":"Daguerreotyping mayoralty","questionCategoryId":4312,"questionCodeId":76519,"questionGroup":"Shiftless consciousnesses","questionText":"Sakha tribesman","questionTypeId":38199,"requiredAnswer":true,"sortOrder":82753,"surveyId":30149});
  testObjects.push({"didYouKnowText":"Hypercritically Ptolemaic","label":"Husbanded reimbursements","questionCategoryId":73027,"questionCodeId":49511,"questionGroup":"Millie sitter","questionText":"Wrecker hypercritically","questionTypeId":24260,"requiredAnswer":true,"sortOrder":67860,"surveyId":82596});
  testObjects.push({"didYouKnowText":"Gerrymanders matriculation","label":"Hours urbanize","questionCategoryId":4312,"questionCodeId":79308,"questionGroup":"Gentrification risky","questionText":"Lazied transported","questionTypeId":66344,"requiredAnswer":false,"sortOrder":77186,"surveyId":50760});
  testObjects.push({"didYouKnowText":"Accumulate ardently","label":"Bronze groundbreakings","questionCategoryId":75152,"questionCodeId":65464,"questionGroup":"Enlistee waylay","questionText":"Staunched exonerate","questionTypeId":23787,"requiredAnswer":true,"sortOrder":23618,"surveyId":65659});

V2SurveyQuestion.createEach(testObjects).exec(function(err, obj) {
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
      V2SurveyQuestion.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of survey_questions for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_question for administrator', function (done) {
      var newObj = {"did_you_know_text":"Stuccos percussionists","label":"Popularize proprietresses","question_category_id":63007,"question_code_id":44968,"question_group":"Plutocracy blend","question_text":"Smoother wishbones","question_type_id":69140,"required_answer":true,"sort_order":47121,"survey_id":3250};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2SurveyQuestion.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show survey_question for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_question for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"did_you_know_text":"Understandingly investigation","label":"Acceleration headmistresses","question_category_id":66385,"question_code_id":57695,"question_group":"Byline nonintervention","question_text":"Spicy gastronomical","question_type_id":63121,"required_answer":false,"sort_order":766,"survey_id":2796};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2SurveyQuestion.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2SurveyQuestion with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy survey_question for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V2SurveyQuestion.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
    it('should attempt to get index of survey_questions for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create survey_question for patient', function (done) {
      var newObj = {"did_you_know_text":"Bathrobes singularity","label":"Grouse interpretations","question_category_id":21985,"question_code_id":9336,"question_group":"Knowledge busying","question_text":"Slobbered wanderlusts","question_type_id":17056,"required_answer":false,"sort_order":75827,"survey_id":53655};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show survey_question for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update survey_question for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"did_you_know_text":"Haters Trump","label":"Commemorations pedestrianizes","question_category_id":11652,"question_code_id":66557,"question_group":"Spatially Arlene","question_text":"Potomac childishness","question_type_id":8694,"required_answer":true,"sort_order":85597,"survey_id":87095};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy survey_question for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/survey_questions/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
