var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'administrator': {"actualChildBirth":"2014-11-20","address":"Exulted puppets","cellPhone":"Insignificance errands","city":"Consciousness berate","clinicianCodeId":25006,"clinicName":"Nonconformists insignificance","consentAcceptedOn":"2016-07-08 23:48:57 +0000","contactCellPhone":"Cents earthshaking","contactEmail":"Mortification Hittite","contactHomePhone":"Technologically impelling","contactName":"Alibis squareness","deactivatedOn":"1984-05-17 14:07:20 +0000","educationId":29187,"email":"nestor.gaylord95@vaccinesurvey.com","expectedChildBirth":"2015-08-06","firstName":"Teddy","hasContactUsers":false,"homePhone":"Cedar coarsening","interventionGroup":"Xenophon scion","isDeactive":false,"lastName":"Yost","parentRelationshipType":"Benita Presbyterianism","parentUserId":18911,"password":"password","passwordConfirmation":"password","passwordDigest":"Petition commissariats","patientType":81859,"postalCode":"Besot affectionately","raceId":53323,"reasonForDeactivation":"Rhineland sepals","resetPassword":true,"role":"administrator","state":"Privates antiperspirants","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Illustrators unguents"},
  'patient': {"actualChildBirth":"2015-05-02","address":"Bound mucous","cellPhone":"Circumscribing unconvincingly","city":"First germinate","clinicianCodeId":66124,"clinicName":"Greece unworthiness","consentAcceptedOn":"1972-01-07 06:54:59 +0000","contactCellPhone":"Parsons crayon","contactEmail":"Unrealistically stigmatizing","contactHomePhone":"Obstructionist embarrassingly","contactName":"Carbonate corespondents","deactivatedOn":"1995-07-02 20:24:31 +0000","educationId":59342,"email":"daniell.yundt25@vaccinesurvey.com","expectedChildBirth":"2016-04-14","firstName":"Miki","hasContactUsers":true,"homePhone":"Ferociously infrequent","interventionGroup":"Knuckleheads beauticians","isDeactive":true,"lastName":"Kuhlman","parentRelationshipType":"Shostakovitch microbiologists","parentUserId":53247,"password":"password","passwordConfirmation":"password","passwordDigest":"Freewheel Ferrari","patientType":95236,"postalCode":"Harlequin fishwives","raceId":29978,"reasonForDeactivation":"Aesthetically spinsterhood","resetPassword":true,"role":"patient","state":"Sweetbread jinricksha","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Trilaterals Tubman"},
  'health_care_provider': {"actualChildBirth":"2013-12-24","address":"Nontransferable onion","cellPhone":"Canonize airplanes","city":"Postmistresses respire","clinicianCodeId":99590,"clinicName":"Onomatopoeia dispassionately","consentAcceptedOn":"2002-09-27 23:27:06 +0000","contactCellPhone":"Grecian commentator","contactEmail":"Deadbolt bummers","contactHomePhone":"Misinterpreting inflatable","contactName":"Accrues heterosexuality","deactivatedOn":"2000-02-28 07:49:55 +0000","educationId":73929,"email":"sharen.schaden61@vaccinesurvey.com","expectedChildBirth":"2014-04-27","firstName":"Brunilda","hasContactUsers":true,"homePhone":"Frustrations smelt","interventionGroup":"Palestine timetabled","isDeactive":true,"lastName":"Rau","parentRelationshipType":"Convolution solicitations","parentUserId":27454,"password":"password","passwordConfirmation":"password","passwordDigest":"Succinctness misdemeanor","patientType":91866,"postalCode":"Transmigrating restructured","raceId":45166,"reasonForDeactivation":"Bouquets miles","resetPassword":true,"role":"health_care_provider","state":"Whatever rawness","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Glibly paternalistic"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1Video', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"desc":"Mythologists cushy","isActive":true,"keywords":"Archetype unpaid","length":22902.956202370806,"questionGroup":"Workloads anaesthetizing","sortOrder":71433,"sourceVersion":"Boardinghouses litigiousness","targetNumber":30522,"title":"Weissmuller designation","topicId":74536,"videoUrl":"Quagmires looking"});
  testObjects.push({"desc":"Embarrassed guerrillas","isActive":false,"keywords":"Scoot patrolman","length":22210.86852223105,"questionGroup":"Conic unintentionally","sortOrder":64469,"sourceVersion":"Autobiography pragmatically","targetNumber":63322,"title":"Stemming wades","topicId":16919,"videoUrl":"Preconception piccalilli"});
  testObjects.push({"desc":"Facebook indicatives","isActive":false,"keywords":"Shucking stilettoes","length":95770.3511385277,"questionGroup":"Teleconferenced impressionistic","sortOrder":4800,"sourceVersion":"Malone crunchier","targetNumber":37993,"title":"Encirclement psychiatrists","topicId":51649,"videoUrl":"Withstanding reappearance"});
  testObjects.push({"desc":"Posit anvil","isActive":false,"keywords":"Preaching Kasai","length":11500.422277057025,"questionGroup":"Conglomerates Anacin","sortOrder":70872,"sourceVersion":"Recapitulations omnipotent","targetNumber":78366,"title":"Intuited centrifuging","topicId":11124,"videoUrl":"Authentically unexceptionable"});
  testObjects.push({"desc":"Roebucks inconsiderately","isActive":true,"keywords":"Inefficiencies dashboard","length":86992.3771788352,"questionGroup":"Hospitalization boors","sortOrder":84160,"sourceVersion":"Transliterating popularization","targetNumber":98307,"title":"Suppressed subscript","topicId":36977,"videoUrl":"Cannonade lasciviousness"});
  testObjects.push({"desc":"Catty correspondents","isActive":true,"keywords":"Penlites cower","length":91827.9301776251,"questionGroup":"Keyed equivocation","sortOrder":21595,"sourceVersion":"Traditionalists Amadeus","targetNumber":22045,"title":"Archways khans","topicId":96819,"videoUrl":"Salespersons particularities"});
  testObjects.push({"desc":"Indefinitely Netzahualcoyotl","isActive":true,"keywords":"Rinse phasing","length":68844.63608268948,"questionGroup":"Resoundingly lapsing","sortOrder":39782,"sourceVersion":"Spectacularly insignificantly","targetNumber":27619,"title":"Auspiciousness socialites","topicId":27339,"videoUrl":"Resourcefulness compactness"});
  testObjects.push({"desc":"Dreadnoughts homogeneously","isActive":false,"keywords":"Murderesses regionalism","length":23495.175700706222,"questionGroup":"Mischievous kisser","sortOrder":74169,"sourceVersion":"Specialize vilest","targetNumber":28577,"title":"Mishandling decriminalizing","topicId":72398,"videoUrl":"Cheerfully normalization"});
  testObjects.push({"desc":"Riggs nutted","isActive":false,"keywords":"Impugning amends","length":28733.309132233662,"questionGroup":"Yugoslavian disseminates","sortOrder":11503,"sourceVersion":"Embroideries despatch","targetNumber":34692,"title":"Anticipatory harry","topicId":15273,"videoUrl":"Reimbursement sapience"});
  testObjects.push({"desc":"Populations broaden","isActive":true,"keywords":"Ventilated unassailable","length":49399.30901655021,"questionGroup":"Laughingstocks superabundances","sortOrder":75524,"sourceVersion":"Notifying depopulated","targetNumber":26158,"title":"Energetically stepchildren","topicId":47603,"videoUrl":"Carmelo epithet"});

V1Video.createEach(testObjects).exec(function(err, obj) {
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
      V1Video.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of videos for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create video for administrator', function (done) {
      var newObj = {"desc":"Fanatics Judas","is_active":true,"keywords":"Logan pussycat","length":86442.4518608567,"question_group":"Interdependence recoverable","sort_order":48646,"source_version":"Sinclair slaughterhouses","target_number":38689,"title":"Hippy hurrays","topic_id":44600,"video_url":"Tramp accountability"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1Video.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show video for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"desc":"Grandfathering constitutionals","is_active":true,"keywords":"Solves troubleshot","length":73013.3018527304,"question_group":"Hawking presenting","sort_order":8876,"source_version":"Ineffectually sheet","target_number":31853,"title":"Hamhung besieged","topic_id":57387,"video_url":"Polygonal thunderclouds"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1Video.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1Video with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy video for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 204);
        
          V1Video.count().exec(function(err, count) {
            assert(! err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 9);
            done(err);
          });
        
  
      });
    });

  
  
    it('should attempt to get index of videos for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create video for patient', function (done) {
      var newObj = {"desc":"Acclimatization competitions","is_active":true,"keywords":"Porterhouses metals","length":52272.03534071205,"question_group":"Garry dabbing","sort_order":50179,"source_version":"Supervisory countermand","target_number":11507,"title":"Blarneying professionalism","topic_id":13174,"video_url":"Chanticleers garrulousness"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show video for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"desc":"Affirmatives spookier","is_active":true,"keywords":"Assuage Neolithic","length":7791.303598905817,"question_group":"Phish underestimating","sort_order":69733,"source_version":"Overprotective Fuzzbuster","target_number":49332,"title":"Incest disintegration","topic_id":58583,"video_url":"Unhitch annexed"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy video for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of videos for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create video for health_care_provider', function (done) {
      var newObj = {"desc":"Recuperation guilder","is_active":true,"keywords":"Personifies deforestation","length":14567.364344734779,"question_group":"Handshake despairs","sort_order":36646,"source_version":"Enlarger baloney","target_number":11971,"title":"Govern passed","topic_id":6745,"video_url":"Humanitarianism interment"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show video for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update video for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"desc":"Honestly Prince","is_active":false,"keywords":"Humanitarians quarterbacks","length":19645.6777413504,"question_group":"Toboggan bacteriologist","sort_order":22778,"source_version":"Jigging untouchable","target_number":4805,"title":"Harnessing tremendously","topic_id":89731,"video_url":"Impoverishment Bostons"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy video for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/videos/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
