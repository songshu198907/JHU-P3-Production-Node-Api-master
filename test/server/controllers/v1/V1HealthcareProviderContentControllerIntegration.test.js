var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2014-11-11","address":"Melton crosschecks","cellPhone":"Grovelling indispensables","city":"Persuasively catchier","clinicianCodeId":8442,"clinicName":"Wisecracking hissed","consentAcceptedOn":"1989-03-16 23:14:57 +0000","contactCellPhone":"Incapacitating linefeed","contactEmail":"Backbones propagandizing","contactHomePhone":"Ostentatious extraditions","contactName":"Jabbers diverged","deactivatedOn":"1972-07-02 18:26:21 +0000","educationId":45349,"email":"floy.champlin36@vaccinesurvey.com","expectedChildBirth":"2014-03-13","firstName":"Jamel","hasContactUsers":true,"homePhone":"Reckonings Chippendale","interventionGroup":"Peloponnese redcoat","isDeactive":true,"lastName":"Abbott","parentRelationshipType":"Bugled memorandum","parentUserId":36103,"password":"password","passwordConfirmation":"password","passwordDigest":"Cored Beach","patientType":48132,"postalCode":"Icebox handlebars","raceId":46904,"reasonForDeactivation":"Knapsacks transformation","resetPassword":true,"role":"administrator","state":"Vagabond innate","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Comprehensively availing"},
  'health_care_provider': {"actualChildBirth":"2015-12-22","address":"Wabash relocating","cellPhone":"Eater exhaled","city":"Sociability duelist","clinicianCodeId":50700,"clinicName":"Tirelessness desensitization","consentAcceptedOn":"2007-04-02 13:14:51 +0000","contactCellPhone":"Alphabetizing collaborations","contactEmail":"Veneering Confederacy","contactHomePhone":"Forsythias intensifies","contactName":"Appreciations labored","deactivatedOn":"1972-11-21 19:50:40 +0000","educationId":44089,"email":"alonzo.turcotte23@vaccinesurvey.com","expectedChildBirth":"2014-10-29","firstName":"Teddy","hasContactUsers":false,"homePhone":"Acknowledgments seduction","interventionGroup":"Hindquarters hifalutin","isDeactive":true,"lastName":"Kertzmann","parentRelationshipType":"Concentrations blinkers","parentUserId":11037,"password":"password","passwordConfirmation":"password","passwordDigest":"Felting pound","patientType":15803,"postalCode":"Reupholstering Ivory","raceId":31989,"reasonForDeactivation":"Taichung referees","resetPassword":true,"role":"health_care_provider","state":"Disqualify baldest","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Snaffling excursions"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1HealthcareProviderContent', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"categoryGroup":"Unrealistic principality","desc":"Nonbreakable auditions","externalLink":"Obstructionist domesticating","keywords":"Oversimplified pervert","title":"Misrepresenting Maracaibo","topicId":74626});
  testObjects.push({"categoryGroup":"Collect stalagmite","desc":"Excommunicated emailing","externalLink":"Diadems indents","keywords":"Argon popovers","title":"Hammurabi inaccessibility","topicId":22629});
  testObjects.push({"categoryGroup":"Countersink sleaziest","desc":"Twelve devilment","externalLink":"Vagina bulkier","keywords":"Tannin breakthrough","title":"Shopkeepers unceremonious","topicId":20532});
  testObjects.push({"categoryGroup":"Embolism forelocks","desc":"Myrtle dustiness","externalLink":"Intelligentsia revivification","keywords":"Daguerreotype ambidextrously","title":"Ehrlich powerhouses","topicId":6739});
  testObjects.push({"categoryGroup":"Disbelieved echos","desc":"Biopsy Carboloy","externalLink":"Foundations Halsey","keywords":"Frontispieces loadstone","title":"Upholstering butterier","topicId":81968});
  testObjects.push({"categoryGroup":"Extravaganza dethronement","desc":"Woefully Potts","externalLink":"Frontiersman marriageable","keywords":"Uncontroversial Congress","title":"Brigs vocalizations","topicId":49963});
  testObjects.push({"categoryGroup":"Spokesman monsignors","desc":"Slacks tranquillizing","externalLink":"Dismiss bookmarking","keywords":"Appoint aground","title":"Prolongations invigoration","topicId":71347});
  testObjects.push({"categoryGroup":"Dispelled Worms","desc":"Plaids disparaging","externalLink":"Gladdening RayBan","keywords":"Uplifting reevaluated","title":"Streetwalkers Minnelli","topicId":29509});
  testObjects.push({"categoryGroup":"Bookshop Witwatersrand","desc":"Freeloaded notwithstanding","externalLink":"Flukey blandishments","keywords":"Prognostication inconveniencing","title":"Blithest valiant","topicId":90568});
  testObjects.push({"categoryGroup":"Fieriness septicemia","desc":"Processioning propitiating","externalLink":"Wheaten indeterminate","keywords":"Downfalls indecently","title":"Columbine duplicity","topicId":45215});

V1HealthcareProviderContent.createEach(testObjects).exec(function(err, obj) {
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
      V1HealthcareProviderContent.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of healthcare_provider_contents for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create healthcare_provider_content for administrator', function (done) {
      var newObj = {"category_group":"Toughening measure","desc":"Delight Fannie","external_link":"Fireplaces soliciting","keywords":"Archbishopric undress","title":"Miscalculate inequitable","topic_id":43181};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1HealthcareProviderContent.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show healthcare_provider_content for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update healthcare_provider_content for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"category_group":"Capitalized homestretch","desc":"Counterclaiming croaks","external_link":"Hears lyrically","keywords":"Specializations muumuu","title":"Tasked sprightliness","topic_id":17943};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1HealthcareProviderContent.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1HealthcareProviderContent with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy healthcare_provider_content for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V1HealthcareProviderContent.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
    it('should attempt to get index of healthcare_provider_contents for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create healthcare_provider_content for health_care_provider', function (done) {
      var newObj = {"category_group":"Deifying ascribing","desc":"Flagrant lustrous","external_link":"Homosexuality philanthropists","keywords":"Desensitization metabolizes","title":"Counterbalance disbanding","topic_id":80442};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show healthcare_provider_content for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update healthcare_provider_content for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"category_group":"Entrails liquor","desc":"Spoons concatenation","external_link":"Conquistadors Americanization","keywords":"Approximating posing","title":"Naturalization nurserymen","topic_id":33353};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy healthcare_provider_content for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/healthcare_provider_contents/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
