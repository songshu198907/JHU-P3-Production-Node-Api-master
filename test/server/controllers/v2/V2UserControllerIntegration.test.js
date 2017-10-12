var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'Unauthenticated Default': {"actualChildBirth":"2015-06-25","address":"Bedroom attractiveness","cellPhone":"Gorky preregistration","city":"Kayaked plazas","clinicianCodeId":12001,"clinicName":"Essence contraceptive","consentAcceptedOn":"1975-02-12 19:37:05 +0000","contactCellPhone":"Deputations reciprocated","contactEmail":"Experimental grippe","contactHomePhone":"Cedric blindfolded","contactName":"Antidepressant dehumidifiers","deactivatedOn":"1985-12-19 17:33:54 +0000","educationId":27386,"email":"jerry.koss14@vaccinesurvey.com","expectedChildBirth":"2016-08-26","firstName":"Augusta","hasContactUsers":true,"homePhone":"Hooting interaction","interventionGroup":"Sledgehammered craftiness","isDeactive":true,"lastName":"Reynolds","parentRelationshipType":"Analyticalally bloodmobiles","parentUserId":10622,"password":"password","passwordConfirmation":"password","passwordDigest":"Honcho delinquently","patientType":60006,"postalCode":"Sarsaparilla scabbed","raceId":67532,"reasonForDeactivation":"Cardsharp housecleaned","resetPassword":true,"role":"Unauthenticated Default","state":"Reenters nonpayments","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Elixir preconditioned"},
  'administrator': {"actualChildBirth":"2016-10-20","address":"Frizzle Pantaloon","cellPhone":"Presumption eighties","city":"Nutritionally inoculation","clinicianCodeId":51385,"clinicName":"Garrulously Roland","consentAcceptedOn":"1990-01-11 19:36:37 +0000","contactCellPhone":"Passageway superintendents","contactEmail":"Irreconcilable disfavors","contactHomePhone":"Carnelian spotlessness","contactName":"Haleakala foyer","deactivatedOn":"2001-05-16 18:45:22 +0000","educationId":47366,"email":"conrad.friesen38@vaccinesurvey.com","expectedChildBirth":"2016-10-06","firstName":"Trinidad","hasContactUsers":false,"homePhone":"Accreditation administrations","interventionGroup":"Agglutinations Maharashtra","isDeactive":true,"lastName":"Lang","parentRelationshipType":"Blandness playacting","parentUserId":42025,"password":"password","passwordConfirmation":"password","passwordDigest":"Democratization pandas","patientType":86289,"postalCode":"Newspaperwoman snapshots","raceId":500,"reasonForDeactivation":"Slumbered semimonthlies","resetPassword":true,"role":"administrator","state":"Corsairs phones","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Saltshakers taffies"},
  'patient': {"actualChildBirth":"2016-05-17","address":"Granule bards","cellPhone":"Rotates marchers","city":"Concatenations cupsful","clinicianCodeId":65179,"clinicName":"Preoccupation accommodations","consentAcceptedOn":"1985-03-27 03:03:14 +0000","contactCellPhone":"Catnip imperceptibly","contactEmail":"Archeology parthenogenesis","contactHomePhone":"Angiosperms rustically","contactName":"Imperiousness consequential","deactivatedOn":"2002-03-06 22:26:46 +0000","educationId":18297,"email":"scott.hagenes67@vaccinesurvey.com","expectedChildBirth":"2014-12-04","firstName":"Beula","hasContactUsers":false,"homePhone":"Peeks presuppositions","interventionGroup":"Godhood hallucinogenics","isDeactive":false,"lastName":"Wilderman","parentRelationshipType":"Madagascan magnification","parentUserId":34609,"password":"password","passwordConfirmation":"password","passwordDigest":"Anonymity visualization","patientType":91890,"postalCode":"Pushkin enfranchisement","raceId":21974,"reasonForDeactivation":"Weaponless palatial","resetPassword":true,"role":"patient","state":"Northeastern lethargically","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Calligraphers larva"},
  'health_care_provider': {"actualChildBirth":"2014-08-20","address":"Ficklest commercialized","cellPhone":"Redefining troubleshooted","city":"Singsonged Honda","clinicianCodeId":20698,"clinicName":"Cleared Loyang","consentAcceptedOn":"2004-10-26 09:18:32 +0000","contactCellPhone":"Discrepancy dishonorable","contactEmail":"Curiosities energetically","contactHomePhone":"Chimed renaissance","contactName":"Unsupervised unveiled","deactivatedOn":"1978-02-03 18:45:58 +0000","educationId":31165,"email":"nora.kohler87@vaccinesurvey.com","expectedChildBirth":"2015-07-05","firstName":"Jacinto","hasContactUsers":true,"homePhone":"Parroting conformations","interventionGroup":"Paperweight underweight","isDeactive":false,"lastName":"Hamill","parentRelationshipType":"Counterattacked widows","parentUserId":12749,"password":"password","passwordConfirmation":"password","passwordDigest":"Declassified cochleas","patientType":49572,"postalCode":"Plainclothesman allergist","raceId":54726,"reasonForDeactivation":"Extracurricular nonintervention","resetPassword":true,"role":"health_care_provider","state":"Pharmaceutical hysterectomies","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Outvotes scads"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2User', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"actualChildBirth":"2016-12-13","address":"Existentially unclaimed","cellPhone":"Outermost hyaena","city":"Perturbations gibing","clinicianCodeId":17952,"clinicName":"Bistros Cooke","consentAcceptedOn":"1983-08-18 18:15:13 +0000","contactCellPhone":"Resoluteness advocating","contactEmail":"Bedspreads equivocate","contactHomePhone":"Quarterlies hemispherical","contactName":"Inconsistently computationally","deactivatedOn":"2014-09-15 04:33:10 +0000","educationId":40248,"email":"carlee.thompson29@vaccinesurvey.com","expectedChildBirth":"2015-03-20","firstName":"Augustina","hasContactUsers":true,"homePhone":"Decommission moisturizers","interventionGroup":"Nesting cores","isDeactive":true,"lastName":"Marvin","parentRelationshipType":"Scubaing Medea","parentUserId":51944,"password":"password","passwordConfirmation":"password","passwordDigest":"Japes expressed","patientType":76423,"postalCode":"Aphid canting","raceId":92600,"reasonForDeactivation":"Noncontagious nightshirts","resetPassword":true,"role":"Warhol detaches","state":"Fines backside","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Commanded oxbow"});
  testObjects.push({"actualChildBirth":"2014-12-02","address":"Aggie languorously","cellPhone":"Barrett scrawniest","city":"Swiss comptrollers","clinicianCodeId":35418,"clinicName":"Drover intelligibility","consentAcceptedOn":"2013-06-19 00:59:10 +0000","contactCellPhone":"Cankerous inner","contactEmail":"Preterites proficients","contactHomePhone":"Pulpiest emulation","contactName":"You Tube ophthalmology","deactivatedOn":"1974-07-17 04:40:39 +0000","educationId":64558,"email":"toby.yundt26@vaccinesurvey.com","expectedChildBirth":"2014-10-19","firstName":"Jc","hasContactUsers":true,"homePhone":"Demonstratively rinds","interventionGroup":"Inaccessibility efficaciously","isDeactive":true,"lastName":"Wehner","parentRelationshipType":"Undemonstrative mantling","parentUserId":83508,"password":"password","passwordConfirmation":"password","passwordDigest":"Huger disheartening","patientType":7761,"postalCode":"Scout experimentally","raceId":59980,"reasonForDeactivation":"Unpronounceable reverberate","resetPassword":true,"role":"Misanthropists responsibility","state":"Clapboard juggling","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Preservative instrumentality"});
  testObjects.push({"actualChildBirth":"2016-07-12","address":"Subjugation prepositional","cellPhone":"Homerooms materialized","city":"Nutritionally tranquillizers","clinicianCodeId":20,"clinicName":"Spumone overshot","consentAcceptedOn":"2002-07-04 19:25:33 +0000","contactCellPhone":"Sledgehammering demobilizing","contactEmail":"Voracious electrification","contactHomePhone":"Resoluteness aggregations","contactName":"Humorlessness pleasured","deactivatedOn":"1976-07-21 21:54:39 +0000","educationId":17946,"email":"neta.larson93@vaccinesurvey.com","expectedChildBirth":"2015-08-16","firstName":"Judith","hasContactUsers":false,"homePhone":"Deletions humeri","interventionGroup":"Botch dillydallying","isDeactive":false,"lastName":"Prosacco","parentRelationshipType":"Developmental Brownie","parentUserId":23823,"password":"password","passwordConfirmation":"password","passwordDigest":"Implementations reconstructions","patientType":96105,"postalCode":"Voluptuousness mademoiselle","raceId":15177,"reasonForDeactivation":"Olivetti xenophobia","resetPassword":true,"role":"Unobjectionable parfaits","state":"Meteorologists inclinations","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Tenses incarcerates"});
  testObjects.push({"actualChildBirth":"2014-12-08","address":"Becks particularized","cellPhone":"Underestimated putting","city":"Affluent repelled","clinicianCodeId":58166,"clinicName":"Ampoule fiddling","consentAcceptedOn":"1977-10-25 11:06:30 +0000","contactCellPhone":"Intelligible cervical","contactEmail":"Trailblazer newspaperwoman","contactHomePhone":"Signets semiconductors","contactName":"Psychotherapies mandrake","deactivatedOn":"1974-10-06 08:37:40 +0000","educationId":15720,"email":"nickie.gulgowski4@vaccinesurvey.com","expectedChildBirth":"2014-08-14","firstName":"Elvira","hasContactUsers":false,"homePhone":"Cylindrical extreme","interventionGroup":"Interconnecting congaing","isDeactive":false,"lastName":"Beer","parentRelationshipType":"Middleweight Palau","parentUserId":51145,"password":"password","passwordConfirmation":"password","passwordDigest":"Pilaw foulest","patientType":99861,"postalCode":"Nonjudgmental Oakland","raceId":64017,"reasonForDeactivation":"Teleconferenced folds","resetPassword":true,"role":"Newspaper hotel","state":"Peculiar sachems","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Programed reuses"});
  testObjects.push({"actualChildBirth":"2016-10-14","address":"Apprenticed barnstormed","cellPhone":"Schumann muskellunge","city":"Apportioning contingents","clinicianCodeId":85029,"clinicName":"Unidentified abstractedly","consentAcceptedOn":"1997-10-02 04:55:13 +0000","contactCellPhone":"Rouges receptionists","contactEmail":"Overestimating camped","contactHomePhone":"Dissoluteness empaneled","contactName":"Landfills tonsillectomies","deactivatedOn":"1975-11-06 17:03:03 +0000","educationId":74896,"email":"vince.greenfelder9@vaccinesurvey.com","expectedChildBirth":"2016-07-17","firstName":"Valentine","hasContactUsers":true,"homePhone":"Theoretician unrecognizable","interventionGroup":"Preceptor leeward","isDeactive":false,"lastName":"Cassin","parentRelationshipType":"Humongous direst","parentUserId":7451,"password":"password","passwordConfirmation":"password","passwordDigest":"Softie crosscheck","patientType":44902,"postalCode":"Transformations inexpressible","raceId":16750,"reasonForDeactivation":"Reorganizations venal","resetPassword":false,"role":"Strangulate Harry","state":"Caribbeans succession","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Indemnification Glendale"});
  testObjects.push({"actualChildBirth":"2016-10-06","address":"Masterminds disengaging","cellPhone":"Depopulating schmoozed","city":"Hiroshima celebrating","clinicianCodeId":76321,"clinicName":"Resolutions idealistically","consentAcceptedOn":"1978-07-23 17:43:17 +0000","contactCellPhone":"Monotone inconsistently","contactEmail":"Ambassadorships unkindliest","contactHomePhone":"English desegregation","contactName":"Blindfolded mucus","deactivatedOn":"2008-03-07 05:05:24 +0000","educationId":82015,"email":"janeen.moore57@vaccinesurvey.com","expectedChildBirth":"2015-05-03","firstName":"Tynisha","hasContactUsers":false,"homePhone":"Buccaneering snuggles","interventionGroup":"Worcestershire dissented","isDeactive":true,"lastName":"Schaefer","parentRelationshipType":"Counteractions nominatives","parentUserId":49542,"password":"password","passwordConfirmation":"password","passwordDigest":"Chiropractics disentanglement","patientType":51980,"postalCode":"Troikas unrequited","raceId":90839,"reasonForDeactivation":"Foreshortening holiday","resetPassword":false,"role":"Uncommitted aspics","state":"Leprechaun stoutness","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Pleaders smattering"});
  testObjects.push({"actualChildBirth":"2014-10-08","address":"Meagerly libido","cellPhone":"Orkney earthiness","city":"Directorship Brandt","clinicianCodeId":36064,"clinicName":"Confessing jetsam","consentAcceptedOn":"1996-11-14 17:58:59 +0000","contactCellPhone":"Scoured thyme","contactEmail":"Swindled delay","contactHomePhone":"Juliet somberly","contactName":"Caucus rigid","deactivatedOn":"1976-09-12 04:14:42 +0000","educationId":96565,"email":"ermelinda.doyle99@vaccinesurvey.com","expectedChildBirth":"2015-01-22","firstName":"Rafael","hasContactUsers":false,"homePhone":"Authenticating breastplates","interventionGroup":"Industrializing palpitations","isDeactive":false,"lastName":"Mraz","parentRelationshipType":"Deader brokenhearted","parentUserId":19657,"password":"password","passwordConfirmation":"password","passwordDigest":"Philippians retire","patientType":11761,"postalCode":"Velveeta multivitamins","raceId":7535,"reasonForDeactivation":"Ophthalmologist multiplexers","resetPassword":false,"role":"Thoroughfares storehouses","state":"Incorrigibility crooning","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Cruller housebroken"});
  testObjects.push({"actualChildBirth":"2015-03-26","address":"Stagecoach adhesive","cellPhone":"Microbiologists ophthalmic","city":"Nosier houseplant","clinicianCodeId":91069,"clinicName":"Foregrounding spikes","consentAcceptedOn":"2001-09-08 06:06:50 +0000","contactCellPhone":"Rescind diversified","contactEmail":"Displacements abuzz","contactHomePhone":"Recuperates motherlands","contactName":"Sergio accomplishments","deactivatedOn":"2012-10-13 09:12:18 +0000","educationId":15240,"email":"joseph.altenwerth54@vaccinesurvey.com","expectedChildBirth":"2015-08-21","firstName":"Isaias","hasContactUsers":false,"homePhone":"Monarchic classifications","interventionGroup":"Berber individualists","isDeactive":false,"lastName":"Huel","parentRelationshipType":"Investigations fantasying","parentUserId":62464,"password":"password","passwordConfirmation":"password","passwordDigest":"Retirees microchip","patientType":89897,"postalCode":"Existing practicability","raceId":95510,"reasonForDeactivation":"Refraining equip","resetPassword":true,"role":"Zoroastrianism intentional","state":"Fractional Mejia","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Implausibility aggregating"});
  testObjects.push({"actualChildBirth":"2017-02-03","address":"Draining rescheduling","cellPhone":"Crawling enshrines","city":"Barometers jests","clinicianCodeId":92143,"clinicName":"Breezier cornered","consentAcceptedOn":"2008-09-12 04:20:47 +0000","contactCellPhone":"Epitomizing Kosciusko","contactEmail":"Hematologists leader","contactHomePhone":"Atrocities undergraduate","contactName":"Correspondingly Oxonian","deactivatedOn":"2015-06-14 23:16:52 +0000","educationId":77879,"email":"shondra.kuhn2@vaccinesurvey.com","expectedChildBirth":"2014-09-17","firstName":"Vaughn","hasContactUsers":false,"homePhone":"Probationers Kemerovo","interventionGroup":"Reissuing unsheathing","isDeactive":false,"lastName":"Metz","parentRelationshipType":"Allocations Karla","parentUserId":93336,"password":"password","passwordConfirmation":"password","passwordDigest":"Brazil detailed","patientType":26791,"postalCode":"Professionally Sistine","raceId":92780,"reasonForDeactivation":"Roundelays tinseled","resetPassword":true,"role":"Hutchinson uneconomical","state":"Chambermaids inundating","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Memphis hypersensitive"});
  testObjects.push({"actualChildBirth":"2017-01-19","address":"Problematically incentives","cellPhone":"Guesstimate bunker","city":"Baluchistan overmuches","clinicianCodeId":37828,"clinicName":"Psychological commemorations","consentAcceptedOn":"1994-02-21 04:33:08 +0000","contactCellPhone":"Fonts Advil","contactEmail":"Reinforcements catbird","contactHomePhone":"Commercializing operationally","contactName":"Consul microorganism","deactivatedOn":"1978-12-21 10:51:12 +0000","educationId":42524,"email":"paulene.lindgren18@vaccinesurvey.com","expectedChildBirth":"2015-01-07","firstName":"Marcelino","hasContactUsers":true,"homePhone":"Tradesman characteristic","interventionGroup":"Betokening cakes","isDeactive":true,"lastName":"Robel","parentRelationshipType":"Communions homespun","parentUserId":57698,"password":"password","passwordConfirmation":"password","passwordDigest":"Mormons garishly","patientType":42849,"postalCode":"Lambkin unsubstantiated","raceId":19404,"reasonForDeactivation":"Madeiras accumulation","resetPassword":true,"role":"Intellectualism Alston","state":"Theists wanna","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Older underprivileged"});

V2User.createEach(testObjects).exec(function(err, obj) {
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
      V2User.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of users for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user for unauthenticated', function (done) {
      var newObj = {"actual_child_birth":"2015-07-26","address":"Psychopathic Tuskegee","cell_phone":"Staphylococcus handbook","city":"Indirectness squab","clinician_code_id":54297,"clinic_name":"Narcissism Laocoon","consent_accepted_on":"1980-09-07 15:13:59 +0000","contact_cell_phone":"Dredging sledgehammered","contact_email":"Thiamin composting","contact_home_phone":"Hypercritically cowpuncher","contact_name":"Percolates tenseness","deactivated_on":"2010-02-24 16:44:23 +0000","education_id":76597,"email":"bernarda.doyle54@vaccinesurvey.com","expected_child_birth":"2014-10-28","first_name":"Val","has_contact_users":true,"home_phone":"Placements deteriorating","intervention_group":"Humanistic classmates","is_deactive":true,"last_name":"Kohler","parent_relationship_type":"Slakes veterinarian","parent_user_id":49064,"password":"password","password_confirmation":"password","password_digest":"Brontosaurus bantamweights","patient_type":80428,"postal_code":"Homogenization merchandising","race_id":10426,"reason_for_deactivation":"Materialist unlocking","reset_password":true,"role":"Sliding fishtailing","state":"Detrimental baffle","updated_user_profile":false,"vaccination_reminders":true,"x_session_id":"Guillotines reflect"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2User.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show user for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to update user for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"actual_child_birth":"2015-10-17","address":"Katie rowel","cell_phone":"Quadrilateral spaceflight","city":"Unmans transgressing","clinician_code_id":77614,"clinic_name":"Rosecrans laymen","consent_accepted_on":"1988-06-02 23:08:42 +0000","contact_cell_phone":"Mopeds primmest","contact_email":"Elopement instability","contact_home_phone":"Penlites desegregating","contact_name":"Commercialized understaffed","deactivated_on":"1986-11-12 19:25:55 +0000","education_id":57122,"email":"troy.white91@vaccinesurvey.com","expected_child_birth":"2014-09-21","first_name":"Ervin","has_contact_users":false,"home_phone":"Feelingly cystic","intervention_group":"Camemberts spared","is_deactive":true,"last_name":"Bauch","parent_relationship_type":"Aorta tweeds","parent_user_id":73269,"password":"password","password_confirmation":"password","password_digest":"Hilario unquestioningly","patient_type":45477,"postal_code":"Radioactivity unplugging","race_id":92164,"reason_for_deactivation":"Maintainability diversifying","reset_password":false,"role":"Bared Evita","state":"Wearing crudest","updated_user_profile":false,"vaccination_reminders":true,"x_session_id":"Superstructure superconductor"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2User.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2User with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of users for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create user for administrator', function (done) {
      var newObj = {"actual_child_birth":"2016-01-21","address":"Transplant tiredest","cell_phone":"Improvidence breakthroughs","city":"Isolationists commissioners","clinician_code_id":74335,"clinic_name":"Opaquing uncomprehending","consent_accepted_on":"1993-02-21 23:24:45 +0000","contact_cell_phone":"Administrations straggled","contact_email":"Licentiousness cipher","contact_home_phone":"Preventatives Runyon","contact_name":"Materialization understandably","deactivated_on":"1989-12-10 22:28:49 +0000","education_id":17247,"email":"herbert.quitzon33@vaccinesurvey.com","expected_child_birth":"2016-12-06","first_name":"Nell","has_contact_users":true,"home_phone":"Nasals chorister","intervention_group":"Bouncing teargasses","is_deactive":true,"last_name":"Kohler","parent_relationship_type":"Benacerraf Izaak","parent_user_id":85925,"password":"password","password_confirmation":"password","password_digest":"Bountiful Hindustani","patient_type":34459,"postal_code":"Tropic microeconomics","race_id":33232,"reason_for_deactivation":"Asterisks wiggle","reset_password":true,"role":"Nodal tractable","state":"Minimum shrewdest","updated_user_profile":false,"vaccination_reminders":false,"x_session_id":"Tiled Pennington"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2User.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show user for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"actual_child_birth":"2015-04-01","address":"Septuagints rationing","cell_phone":"Misinterpreting specializations","city":"Schwarzenegger handicraft","clinician_code_id":25327,"clinic_name":"Smokey mimes","consent_accepted_on":"1974-11-23 12:20:37 +0000","contact_cell_phone":"Spectators tamers","contact_email":"Grandfathering overambitious","contact_home_phone":"Restauranteur unsophisticated","contact_name":"Supplicates predetermined","deactivated_on":"2003-09-10 22:46:39 +0000","education_id":93128,"email":"helga.hilll63@vaccinesurvey.com","expected_child_birth":"2015-03-24","first_name":"Eunice","has_contact_users":false,"home_phone":"Fortuitously rapped","intervention_group":"Marchioness chilblain","is_deactive":false,"last_name":"Gutkowski","parent_relationship_type":"Genuineness ester","parent_user_id":1457,"password":"password","password_confirmation":"password","password_digest":"Ascertaining spiritualistic","patient_type":22099,"postal_code":"Overemphasizes misadventure","race_id":71458,"reason_for_deactivation":"Colanders contingencies","reset_password":true,"role":"Crystallization quits","state":"Informality gentleness","updated_user_profile":true,"vaccination_reminders":false,"x_session_id":"Responses quadruplicate"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2User.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2User with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of users for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user for patient', function (done) {
      var newObj = {"actual_child_birth":"2015-02-27","address":"Outfitting annotating","cell_phone":"Sharecropper parabolic","city":"Dazzled archbishop","clinician_code_id":33664,"clinic_name":"Dispel miscalculated","consent_accepted_on":"2012-09-17 05:02:08 +0000","contact_cell_phone":"Baronets inhabitants","contact_email":"Shagginess valedictorians","contact_home_phone":"Scornfully worlds","contact_name":"Expressions maintained","deactivated_on":"1991-02-04 13:41:49 +0000","education_id":9977,"email":"vashti.hermiston78@vaccinesurvey.com","expected_child_birth":"2015-09-17","first_name":"Lavon","has_contact_users":true,"home_phone":"Stork traditionalists","intervention_group":"Corroding admitted","is_deactive":true,"last_name":"Dicki","parent_relationship_type":"Vegetating repossessions","parent_user_id":57214,"password":"password","password_confirmation":"password","password_digest":"Viper hygienically","patient_type":73293,"postal_code":"Ridiculous sentimentalize","race_id":31390,"reason_for_deactivation":"Disentanglement representation","reset_password":true,"role":"Restrained strutted","state":"Spokesman mesdemoiselles","updated_user_profile":false,"vaccination_reminders":false,"x_session_id":"Transfiguration responsively"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V2User.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show user for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to update user for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"actual_child_birth":"2015-09-15","address":"Clark irksome","cell_phone":"Probationary larva","city":"Biretta supervises","clinician_code_id":56811,"clinic_name":"Treaty closemouthed","consent_accepted_on":"1972-06-28 08:09:13 +0000","contact_cell_phone":"Scouts Kilimanjaro","contact_email":"Patenting rediscovery","contact_home_phone":"Backfires hockey","contact_name":"Acknowledgments opined","deactivated_on":"2013-01-03 20:53:58 +0000","education_id":10643,"email":"clay.sipes64@vaccinesurvey.com","expected_child_birth":"2015-08-04","first_name":"Alton","has_contact_users":false,"home_phone":"Concessionaire arabesques","intervention_group":"Matters handcrafting","is_deactive":true,"last_name":"Roob","parent_relationship_type":"Humanitarian straightjackets","parent_user_id":5103,"password":"password","password_confirmation":"password","password_digest":"Waters Harvey","patient_type":50760,"postal_code":"Marta abortionist","race_id":74644,"reason_for_deactivation":"Finley claret","reset_password":false,"role":"Unkindly typing","state":"Distortions waist","updated_user_profile":false,"vaccination_reminders":true,"x_session_id":"Unhealthiest decriminalizes"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2User.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2User with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of users for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user for health_care_provider', function (done) {
      var newObj = {"actual_child_birth":"2017-03-16","address":"Disturbances traditionalists","cell_phone":"Roget smokiest","city":"Brainchildren falsifications","clinician_code_id":77702,"clinic_name":"Obstructionist trumpeting","consent_accepted_on":"2017-01-04 04:00:29 +0000","contact_cell_phone":"Mollifies fruitcake","contact_email":"Egalitarianism transitioning","contact_home_phone":"Publicizing erotic","contact_name":"Thirsted batters","deactivated_on":"1978-03-28 06:03:12 +0000","education_id":58776,"email":"clyde.feeney82@vaccinesurvey.com","expected_child_birth":"2016-12-25","first_name":"Emelia","has_contact_users":true,"home_phone":"Yeats investiture","intervention_group":"Bookmaking settees","is_deactive":true,"last_name":"Thompson","parent_relationship_type":"Milestones Tutankhamen","parent_user_id":93511,"password":"password","password_confirmation":"password","password_digest":"Interpretation proportioning","patient_type":4537,"postal_code":"Overreaching uninhabitable","race_id":29276,"reason_for_deactivation":"Greenpeace Nautilus","reset_password":true,"role":"Questioningly levelheadedness","state":"Parental Benson","updated_user_profile":true,"vaccination_reminders":true,"x_session_id":"Unregulated disgust"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"actual_child_birth":"2016-03-24","address":"Ratted brittlest","cell_phone":"Marchioness compartments","city":"Appropriateness expertness","clinician_code_id":42648,"clinic_name":"Piton summerhouses","consent_accepted_on":"1981-05-24 04:21:30 +0000","contact_cell_phone":"Distinctly deodorizer","contact_email":"Deplorably reemphasized","contact_home_phone":"Oscar riced","contact_name":"Humanities confessional","deactivated_on":"2015-10-17 12:10:25 +0000","education_id":6450,"email":"lenny.kuphal97@vaccinesurvey.com","expected_child_birth":"2016-03-01","first_name":"Bulah","has_contact_users":true,"home_phone":"Marooned upswing","intervention_group":"Democratically mules","is_deactive":false,"last_name":"Witting","parent_relationship_type":"Organizational undervaluing","parent_user_id":65929,"password":"password","password_confirmation":"password","password_digest":"Winfrey musicologists","patient_type":63510,"postal_code":"Resisting limiting","race_id":11912,"reason_for_deactivation":"Pimiento clout","reset_password":true,"role":"Indiana outfoxing","state":"Plainclothesmen adjudicators","updated_user_profile":true,"vaccination_reminders":false,"x_session_id":"Dowry directorships"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2User.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2User with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/users/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
