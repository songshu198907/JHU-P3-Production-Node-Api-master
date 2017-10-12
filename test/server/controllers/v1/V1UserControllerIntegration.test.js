var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'Unauthenticated Default': {"actualChildBirth":"2016-05-13","address":"Astrophysicists atherosclerosis","cellPhone":"Doggoning hooligans","city":"Threescore merchandising","clinicianCodeId":31648,"clinicName":"Parthenogenesis Mounties","consentAcceptedOn":"1988-11-10 17:17:24 +0000","contactCellPhone":"Contaminants circumnavigates","contactEmail":"Disses Billy","contactHomePhone":"Leaps frontispieces","contactName":"Gleamings Mohammedans","deactivatedOn":"2009-05-24 21:05:53 +0000","educationId":84617,"email":"darcie.hand72@vaccinesurvey.com","expectedChildBirth":"2014-12-27","firstName":"Bart","hasContactUsers":false,"homePhone":"Nuances impracticality","interventionGroup":"Outputted spoiled","isDeactive":false,"lastName":"Kuhn","parentRelationshipType":"Clothing Peale","parentUserId":98748,"password":"password","passwordConfirmation":"password","passwordDigest":"Fokker Ulyanovsk","patientType":46183,"postalCode":"Radiuses Brobdingnagian","raceId":10832,"reasonForDeactivation":"Prevarications redeemed","resetPassword":false,"role":"Unauthenticated Default","state":"Clearinghouses abortionist","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Disillusionment interrogatories"},
  'administrator': {"actualChildBirth":"2016-07-16","address":"Dilute suborning","cellPhone":"Aquamarines typescript","city":"Pragmatically killdeer","clinicianCodeId":76364,"clinicName":"Gazetteers gatecrasher","consentAcceptedOn":"1973-04-30 12:09:18 +0000","contactCellPhone":"Rupert auditioned","contactEmail":"Sanger distinguishable","contactHomePhone":"Paginate uncompromising","contactName":"Centralization revolutionizes","deactivatedOn":"1999-11-01 23:14:55 +0000","educationId":34096,"email":"chan.lueilwitz16@vaccinesurvey.com","expectedChildBirth":"2016-01-27","firstName":"Theo","hasContactUsers":true,"homePhone":"Feminism plague","interventionGroup":"Inflorescence whatchamacallit","isDeactive":false,"lastName":"Terry","parentRelationshipType":"Recriminations Susie","parentUserId":1058,"password":"password","passwordConfirmation":"password","passwordDigest":"Cygnet serials","patientType":84824,"postalCode":"Badgered Tibet","raceId":41515,"reasonForDeactivation":"Auditions coagulate","resetPassword":true,"role":"administrator","state":"Atria obligate","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Babylonian parturition"},
  'patient': {"actualChildBirth":"2016-06-11","address":"Rumania landladies","cellPhone":"Muslin wavelengths","city":"Bemoaning simplification","clinicianCodeId":87134,"clinicName":"Inconsiderately debilitation","consentAcceptedOn":"1980-03-01 05:00:20 +0000","contactCellPhone":"Denunciations disappearances","contactEmail":"Multiplexers adzes","contactHomePhone":"Rashly gelatin","contactName":"Testicle Jutland","deactivatedOn":"2002-08-19 00:37:05 +0000","educationId":92179,"email":"eun.white31@vaccinesurvey.com","expectedChildBirth":"2014-03-21","firstName":"Loren","hasContactUsers":false,"homePhone":"Paternalistic sketchier","interventionGroup":"Annihilating powering","isDeactive":true,"lastName":"Mohr","parentRelationshipType":"Remorselessly recognizably","parentUserId":59241,"password":"password","passwordConfirmation":"password","passwordDigest":"Suffolk dissatisfied","patientType":66148,"postalCode":"Overhand Ernie","raceId":4946,"reasonForDeactivation":"Marabous periphrases","resetPassword":true,"role":"patient","state":"Overcompensates Protestantism","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Adjacent Hondurans"},
  'health_care_provider': {"actualChildBirth":"2014-09-30","address":"Monotheism meaningfully","cellPhone":"Burps leaning","city":"Nonconformist criticisms","clinicianCodeId":70103,"clinicName":"Counteractions suiting","consentAcceptedOn":"1970-05-15 23:11:02 +0000","contactCellPhone":"Copycatting gregarious","contactEmail":"Fortunately constabularies","contactHomePhone":"Firestone interiors","contactName":"Characterized prohibitionists","deactivatedOn":"2012-08-14 10:07:21 +0000","educationId":47651,"email":"sol.maggio36@vaccinesurvey.com","expectedChildBirth":"2013-11-02","firstName":"Danial","hasContactUsers":false,"homePhone":"Lyons extrapolations","interventionGroup":"Trousseaux engendering","isDeactive":false,"lastName":"Lindgren","parentRelationshipType":"Unflappable waxen","parentUserId":1812,"password":"password","passwordConfirmation":"password","passwordDigest":"Gulls hibernating","patientType":23219,"postalCode":"Underprivileged horticulturist","raceId":76452,"reasonForDeactivation":"Malfunctioning parched","resetPassword":true,"role":"health_care_provider","state":"Extricate snore","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Crossbreeding fores"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1User', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"actualChildBirth":"2016-03-01","address":"Hierarchically perpetuates","cellPhone":"Across Faisalabad","city":"Orientation networking","clinicianCodeId":87306,"clinicName":"Disseminate finniest","consentAcceptedOn":"1989-02-21 22:18:55 +0000","contactCellPhone":"Deliberating cassock","contactEmail":"Overqualified pizzas","contactHomePhone":"Fussbudget scuba","contactName":"Adulating miaow","deactivatedOn":"2010-01-14 21:47:19 +0000","educationId":32348,"email":"julieta.altenwerth73@vaccinesurvey.com","expectedChildBirth":"2014-12-06","firstName":"Douglas","hasContactUsers":false,"homePhone":"Reapers approximating","interventionGroup":"Warship irrigated","isDeactive":false,"lastName":"Bartell","parentRelationshipType":"Understatements Maori","parentUserId":55162,"password":"password","passwordConfirmation":"password","passwordDigest":"Touch livened","patientType":23938,"postalCode":"Epiglottis flyswatters","raceId":77860,"reasonForDeactivation":"Punctuate deliciousness","resetPassword":false,"role":"Silhouetted glimmering","state":"Hathaway miniaturization","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Kathrine Fauntleroy"});
  testObjects.push({"actualChildBirth":"2014-12-25","address":"Fairness unflattering","cellPhone":"Southeasterly spumes","city":"Impracticality doughtier","clinicianCodeId":34201,"clinicName":"Slanderers decaffeinated","consentAcceptedOn":"2012-03-04 16:43:31 +0000","contactCellPhone":"Tanya probationary","contactEmail":"Translucence snide","contactHomePhone":"Deodorizing diversification","contactName":"Phosphorescence having","deactivatedOn":"2002-10-13 04:03:08 +0000","educationId":33660,"email":"alfonzo.pacocha70@vaccinesurvey.com","expectedChildBirth":"2015-04-01","firstName":"Donald","hasContactUsers":false,"homePhone":"Scums chucked","interventionGroup":"Resuscitators choir","isDeactive":true,"lastName":"Schamberger","parentRelationshipType":"Whitish electromagnetic","parentUserId":2068,"password":"password","passwordConfirmation":"password","passwordDigest":"Leeds heron","patientType":38766,"postalCode":"Reconstitute registered","raceId":22424,"reasonForDeactivation":"Incorrectness secludes","resetPassword":false,"role":"Decentralizing bronchi","state":"Wainscotting northwesterly","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Streetlights nontransferable"});
  testObjects.push({"actualChildBirth":"2014-11-28","address":"Transmissible Allegra","cellPhone":"Ampersands Tracey","city":"Palings Scottie","clinicianCodeId":50438,"clinicName":"Bibliographical grate","consentAcceptedOn":"1990-11-22 20:21:27 +0000","contactCellPhone":"Oracles sophistication","contactEmail":"Terminological goatherd","contactHomePhone":"Thundershowers birdcage","contactName":"Articulates barrelled","deactivatedOn":"1975-11-16 15:51:05 +0000","educationId":3536,"email":"jimmy.koss39@vaccinesurvey.com","expectedChildBirth":"2016-01-01","firstName":"Renata","hasContactUsers":false,"homePhone":"Misjudge upbraid","interventionGroup":"Dimness doweled","isDeactive":false,"lastName":"Tremblay","parentRelationshipType":"Venomously dispassionately","parentUserId":93047,"password":"password","passwordConfirmation":"password","passwordDigest":"Enlists constellation","patientType":71908,"postalCode":"Internationally extraordinarily","raceId":14109,"reasonForDeactivation":"Interconnecting noodling","resetPassword":false,"role":"Councilors straitjacketing","state":"Cohere anesthesiology","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Vixens stubbornest"});
  testObjects.push({"actualChildBirth":"2015-08-18","address":"Vindicators playact","cellPhone":"Clannish hilariously","city":"Noncombatants disemboweling","clinicianCodeId":35433,"clinicName":"Locksmiths metamorphosis","consentAcceptedOn":"1984-01-31 16:20:07 +0000","contactCellPhone":"Typographical defamation","contactEmail":"Stripping Iquitos","contactHomePhone":"Tempe headboard","contactName":"Paleontologist manipulation","deactivatedOn":"1988-05-26 17:50:32 +0000","educationId":61333,"email":"roland.dubuque64@vaccinesurvey.com","expectedChildBirth":"2013-10-31","firstName":"Gregg","hasContactUsers":true,"homePhone":"Yells mauls","interventionGroup":"Kilowatts instrumented","isDeactive":false,"lastName":"Carroll","parentRelationshipType":"Castor Chautauqua","parentUserId":61525,"password":"password","passwordConfirmation":"password","passwordDigest":"Charlottetown punks","patientType":80170,"postalCode":"Unraveling chartreuse","raceId":49298,"reasonForDeactivation":"Yolanda vulgarization","resetPassword":true,"role":"Forestalls cluck","state":"Raciest ridiculing","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Faith umpire"});
  testObjects.push({"actualChildBirth":"2015-03-06","address":"Outstretching progressives","cellPhone":"Seems rajas","city":"Prudential nontransferable","clinicianCodeId":41245,"clinicName":"Swashed disconnects","consentAcceptedOn":"2002-04-02 18:46:24 +0000","contactCellPhone":"Marseillaise bacteriologist","contactEmail":"Countrywomen accessories","contactHomePhone":"Fetishes pastors","contactName":"Capitulating viability","deactivatedOn":"1974-06-23 12:38:07 +0000","educationId":49062,"email":"melita.reichert88@vaccinesurvey.com","expectedChildBirth":"2015-08-03","firstName":"Young","hasContactUsers":true,"homePhone":"Saxophone Reginald","interventionGroup":"Inadmissible straightforward","isDeactive":true,"lastName":"Thompson","parentRelationshipType":"Postpones adaptations","parentUserId":84972,"password":"password","passwordConfirmation":"password","passwordDigest":"Babysat single","patientType":35511,"postalCode":"Improprieties redrafting","raceId":54079,"reasonForDeactivation":"Hospitality traditionally","resetPassword":true,"role":"Habitable bower","state":"Sophistry sorrowfully","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Easiness hardback"});
  testObjects.push({"actualChildBirth":"2015-03-08","address":"Except hyphenations","cellPhone":"Cryptographers spidery","city":"Tylenol rehabilitating","clinicianCodeId":99528,"clinicName":"Recreating overpopulated","consentAcceptedOn":"1985-08-10 01:35:06 +0000","contactCellPhone":"Circumnavigate enticements","contactEmail":"Intensification Hellenism","contactHomePhone":"Conventionally reputes","contactName":"Bramble commercializing","deactivatedOn":"2014-12-16 09:27:44 +0000","educationId":97897,"email":"jeramy.kirlin77@vaccinesurvey.com","expectedChildBirth":"2016-02-29","firstName":"Ward","hasContactUsers":false,"homePhone":"Concurrently Sybil","interventionGroup":"Prospected floodlighting","isDeactive":true,"lastName":"McCullough","parentRelationshipType":"Vocation Dennis","parentUserId":43021,"password":"password","passwordConfirmation":"password","passwordDigest":"Microscopically scuds","patientType":76731,"postalCode":"Quadrilateral Durham","raceId":87299,"reasonForDeactivation":"Fount Bataan","resetPassword":true,"role":"Refused brutal","state":"Stupidity circumscription","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Analyticalally reanimates"});
  testObjects.push({"actualChildBirth":"2015-02-23","address":"Obtusely Neanderthal","cellPhone":"Synchronized grasshoppers","city":"Overachieve instrumentality","clinicianCodeId":16195,"clinicName":"Unauthenticated preconditioning","consentAcceptedOn":"1996-07-27 07:22:48 +0000","contactCellPhone":"Foresters moose","contactEmail":"Paperhangers Prius","contactHomePhone":"Macedonia Maeterlinck","contactName":"Mauling wickets","deactivatedOn":"1987-03-20 13:15:35 +0000","educationId":28533,"email":"emory.farrell53@vaccinesurvey.com","expectedChildBirth":"2015-05-09","firstName":"Raleigh","hasContactUsers":false,"homePhone":"Tautological catchiest","interventionGroup":"Sirup successors","isDeactive":true,"lastName":"Hoppe","parentRelationshipType":"Ponchos seeds","parentUserId":27736,"password":"password","passwordConfirmation":"password","passwordDigest":"Mellifluously bacterias","patientType":24613,"postalCode":"Overwrites cinched","raceId":55097,"reasonForDeactivation":"Distastefully thatch","resetPassword":true,"role":"Pianoforte decent","state":"Breviaries smartened","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Peggy garishly"});
  testObjects.push({"actualChildBirth":"2014-05-03","address":"Trailer informants","cellPhone":"Accuse immutable","city":"Spacier exciting","clinicianCodeId":81079,"clinicName":"Banach sleepwalks","consentAcceptedOn":"1995-10-18 21:17:56 +0000","contactCellPhone":"Polygamists munchies","contactEmail":"Ungovernable Indonesian","contactHomePhone":"Pitchforking Ecclesiastes","contactName":"Aerodynamic Stephan","deactivatedOn":"2008-04-16 16:30:39 +0000","educationId":91875,"email":"donald.wisoky92@vaccinesurvey.com","expectedChildBirth":"2013-12-23","firstName":"Irving","hasContactUsers":true,"homePhone":"Interscholastic menstruating","interventionGroup":"Necessaries chaperoning","isDeactive":false,"lastName":"Connelly","parentRelationshipType":"Verification Galois","parentUserId":29724,"password":"password","passwordConfirmation":"password","passwordDigest":"Unwieldier windbreaker","patientType":44384,"postalCode":"Experimentation ministrations","raceId":1422,"reasonForDeactivation":"Impolitenesses unrealistically","resetPassword":true,"role":"Weierstrass referral","state":"Inconspicuously camper","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Sections intercessor"});
  testObjects.push({"actualChildBirth":"2015-01-24","address":"Undistinguished immortal","cellPhone":"Scrupulous folks","city":"Gardenias granddaughters","clinicianCodeId":76447,"clinicName":"Methodisms leaseholder","consentAcceptedOn":"1986-01-04 10:46:29 +0000","contactCellPhone":"Unman alert","contactEmail":"Mustier overpopulation","contactHomePhone":"Dilettantism coerces","contactName":"Expensively breathtakingly","deactivatedOn":"1981-06-21 18:25:26 +0000","educationId":71027,"email":"latrice.heidenreich71@vaccinesurvey.com","expectedChildBirth":"2016-01-21","firstName":"Barbar","hasContactUsers":false,"homePhone":"Gratifications knowledgeably","interventionGroup":"Impinge parenthetically","isDeactive":false,"lastName":"Schneider","parentRelationshipType":"Uncollected Excellencies","parentUserId":9108,"password":"password","passwordConfirmation":"password","passwordDigest":"Woodcarvings tunnies","patientType":82333,"postalCode":"Statesmanship misapplication","raceId":23426,"reasonForDeactivation":"Particularizing dishonored","resetPassword":false,"role":"Disappointingly wadis","state":"Chappaquiddick individualized","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Individualistic cyberspace"});
  testObjects.push({"actualChildBirth":"2016-01-23","address":"Ineligibles sorehead","cellPhone":"Flashguns drafts","city":"Bettering motherfucker","clinicianCodeId":17374,"clinicName":"Monotones Palau","consentAcceptedOn":"2016-05-12 15:04:27 +0000","contactCellPhone":"Pseudonym distilleries","contactEmail":"Overemphasize whippoorwill","contactHomePhone":"Perpendiculars embargoes","contactName":"Galleon capably","deactivatedOn":"1972-08-30 18:34:41 +0000","educationId":54042,"email":"ronald.lakin16@vaccinesurvey.com","expectedChildBirth":"2016-04-04","firstName":"Bernardine","hasContactUsers":true,"homePhone":"Overcompensates electromagnetic","interventionGroup":"Deputize Kyoto","isDeactive":true,"lastName":"Kihn","parentRelationshipType":"Discombobulates perfectest","parentUserId":66524,"password":"password","passwordConfirmation":"password","passwordDigest":"Idiotically discouragements","patientType":38158,"postalCode":"Semiautomatics sirloin","raceId":12929,"reasonForDeactivation":"Chung assented","resetPassword":false,"role":"Unreadier abolitionists","state":"Churlish noddy","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Pollywogs shinbones"});

V1User.createEach(testObjects).exec(function(err, obj) {
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
      V1User.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of users for unauthenticated', function (done) {
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user for unauthenticated', function (done) {
      var newObj = {"actual_child_birth":"2015-02-09","address":"Generalissimos stills","cell_phone":"Perceptiveness skirmished","city":"Microbiologists disrespected","clinician_code_id":56333,"clinic_name":"Circumlocutions Gothic","consent_accepted_on":"1985-05-10 22:50:39 +0000","contact_cell_phone":"Franc suspicion","contact_email":"Civilizes pirated","contact_home_phone":"Generators vindictiveness","contact_name":"Eighths Pennsylvanians","deactivated_on":"2009-02-25 21:29:43 +0000","education_id":75086,"email":"art.schowalter78@vaccinesurvey.com","expected_child_birth":"2016-02-07","first_name":"Blake","has_contact_users":false,"home_phone":"Seyfert groggiest","intervention_group":"Hobbs blink","is_deactive":true,"last_name":"Kreiger","parent_relationship_type":"Permeability unshakeable","parent_user_id":50152,"password":"password","password_confirmation":"password","password_digest":"Attitudinizing psychoanalyzed","patient_type":53948,"postal_code":"Peroration niceness","race_id":24698,"reason_for_deactivation":"Telegraphers procrastinators","reset_password":true,"role":"Llama castration","state":"Processioned icebreaker","updated_user_profile":false,"vaccination_reminders":false,"x_session_id":"Christopher farsightedness"};
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1User.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show user for unauthenticated', function(done) {
      var id = objects[0].id;
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to update user for unauthenticated', function (done) {
      var id = objects[0].id;
      var newObj = {"actual_child_birth":"2016-06-21","address":"Assassination Tuareg","cell_phone":"Telecommuters hearts","city":"Apprehensively afterglows","clinician_code_id":60329,"clinic_name":"Aristocratic threateningly","consent_accepted_on":"1979-12-18 13:58:50 +0000","contact_cell_phone":"Distracting Huerta","contact_email":"North Hymen","contact_home_phone":"Igneous reverberations","contact_name":"Nansen uncomplimentary","deactivated_on":"2011-10-28 21:48:28 +0000","education_id":80603,"email":"ron.pagac59@vaccinesurvey.com","expected_child_birth":"2015-04-08","first_name":"Yan","has_contact_users":false,"home_phone":"Satinwood shamming","intervention_group":"Uncertainties Sibyl","is_deactive":true,"last_name":"Nicolas","parent_relationship_type":"Retard bartenders","parent_user_id":90835,"password":"password","password_confirmation":"password","password_digest":"Homburg chitchatting","patient_type":91071,"postal_code":"Ferocious cannery","race_id":7465,"reason_for_deactivation":"Obsessing guessing","reset_password":false,"role":"Winces amphitheaters","state":"Buried retrospection","updated_user_profile":false,"vaccination_reminders":true,"x_session_id":"Acknowledgment curtailment"};
      newObj.id = id;
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1User.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1User with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user for unauthenticated', function (done) {
      var id = objects[0].id;
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of users for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create user for administrator', function (done) {
      var newObj = {"actual_child_birth":"2014-01-24","address":"Bolsters recommendations","cell_phone":"Pistol antagonistic","city":"Elucidating screwballs","clinician_code_id":53413,"clinic_name":"Whoopee individualized","consent_accepted_on":"1987-06-02 15:58:01 +0000","contact_cell_phone":"Stevie buccaneered","contact_email":"Observances dachshunds","contact_home_phone":"Hierarchy thundershowers","contact_name":"Streakier variations","deactivated_on":"1981-02-21 14:08:35 +0000","education_id":85564,"email":"oswaldo.maggio2@vaccinesurvey.com","expected_child_birth":"2015-07-01","first_name":"Walter","has_contact_users":false,"home_phone":"Refused attributable","intervention_group":"Flinch eyepiece","is_deactive":false,"last_name":"Gusikowski","parent_relationship_type":"Schoolmates obtrusiveness","parent_user_id":36781,"password":"password","password_confirmation":"password","password_digest":"Afternoons teleconference","patient_type":78234,"postal_code":"Bamboozling brokerages","race_id":92529,"reason_for_deactivation":"Antidepressants authoritarians","reset_password":false,"role":"Cornerstone concentrically","state":"Copse Breckenridge","updated_user_profile":true,"vaccination_reminders":true,"x_session_id":"Copycatted traditionalist"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1User.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show user for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"actual_child_birth":"2014-04-10","address":"Bypasses sentimentality","cell_phone":"Contemptuously cemented","city":"Sickeningly exorcising","clinician_code_id":88338,"clinic_name":"Decaffeinating rationalization","consent_accepted_on":"1987-11-07 20:07:32 +0000","contact_cell_phone":"Photojournalist conglomerated","contact_email":"Unsoundest choosey","contact_home_phone":"Horticulturists retaliating","contact_name":"Pokier commandment","deactivated_on":"2006-01-20 04:01:11 +0000","education_id":55637,"email":"tobias.schaefer83@vaccinesurvey.com","expected_child_birth":"2014-08-29","first_name":"Dusty","has_contact_users":false,"home_phone":"Teleconferences insensitivity","intervention_group":"Bridges Kepler","is_deactive":false,"last_name":"Heaney","parent_relationship_type":"Liturgy Vernon","parent_user_id":87687,"password":"password","password_confirmation":"password","password_digest":"Embarrassingly Galveston","patient_type":29887,"postal_code":"Instantaneously loutish","race_id":12290,"reason_for_deactivation":"Indignation intellectualism","reset_password":false,"role":"Pompousness appropriations","state":"Shutout chiropractors","updated_user_profile":false,"vaccination_reminders":false,"x_session_id":"Ovary technicalities"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1User.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1User with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of users for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user for patient', function (done) {
      var newObj = {"actual_child_birth":"2015-06-18","address":"Intimidating janitors","cell_phone":"Obstructionists regionalisms","city":"Colonists ratification","clinician_code_id":11611,"clinic_name":"Straitjacketing employing","consent_accepted_on":"1990-06-04 21:30:47 +0000","contact_cell_phone":"Validated iambs","contact_email":"Julies unexceptionable","contact_home_phone":"Lotto Jonah","contact_name":"Disregarded Christoper","deactivated_on":"1994-05-20 02:13:12 +0000","education_id":6448,"email":"jamel.nolan61@vaccinesurvey.com","expected_child_birth":"2014-06-07","first_name":"Alishia","has_contact_users":false,"home_phone":"Waterproofing expressively","intervention_group":"Serbs teetotallers","is_deactive":false,"last_name":"Littel","parent_relationship_type":"Nicknames substitutions","parent_user_id":10772,"password":"password","password_confirmation":"password","password_digest":"Cassius climbs","patient_type":65213,"postal_code":"Segued thorniest","race_id":6201,"reason_for_deactivation":"Overcompensate interdependent","reset_password":true,"role":"Ignominiously dishonor","state":"Plummets interchangeably","updated_user_profile":false,"vaccination_reminders":true,"x_session_id":"Pessimistically existentialists"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 201);
        
          V1User.count().exec(function (err, count) {
            assert(!err, "Received error " + util.inspect(err, {depth: null}));
            assert.equal(count, 11);
            done(err);
          });
        
  
      });
    });

    it('should attempt to show user for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to update user for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"actual_child_birth":"2014-02-19","address":"Authenticating ascends","cell_phone":"Doings Cognac","city":"Insisting deposing","clinician_code_id":13805,"clinic_name":"Genealogist sully","consent_accepted_on":"2004-01-15 00:00:20 +0000","contact_cell_phone":"Fumigators monarchical","contact_email":"Inquire gentlest","contact_home_phone":"Travelogues diatribes","contact_name":"Antiperspirants apportionment","deactivated_on":"1977-03-26 11:05:04 +0000","education_id":53269,"email":"dave.bartell9@vaccinesurvey.com","expected_child_birth":"2013-11-18","first_name":"Velia","has_contact_users":false,"home_phone":"Imprecise travelled","intervention_group":"Motormen pointillism","is_deactive":false,"last_name":"Brekke","parent_relationship_type":"Curtness Uruguayans","parent_user_id":25852,"password":"password","password_confirmation":"password","password_digest":"Namely knighted","patient_type":66222,"postal_code":"Uninterpreted politicized","race_id":88093,"reason_for_deactivation":"Psychotherapies insurrectionist","reset_password":false,"role":"Hypertension precariously","state":"Equanimity revolutionizing","updated_user_profile":true,"vaccination_reminders":false,"x_session_id":"Ministerial shortenings"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1User.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1User with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of users for health_care_provider', function (done) {
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to create user for health_care_provider', function (done) {
      var newObj = {"actual_child_birth":"2015-10-26","address":"Indefatigable Jaclyn","cell_phone":"Sledgehammered monocotyledon","city":"Sentimentalizes butts","clinician_code_id":6223,"clinic_name":"Escarpments supervised","consent_accepted_on":"1999-01-11 03:30:14 +0000","contact_cell_phone":"Contemplative spited","contact_email":"Decontaminates burlesques","contact_home_phone":"Elisabeth factorization","contact_name":"Haircuts exiles","deactivated_on":"2013-02-06 11:10:06 +0000","education_id":32138,"email":"laurel.kulas22@vaccinesurvey.com","expected_child_birth":"2016-01-26","first_name":"Elinor","has_contact_users":false,"home_phone":"Overhauled discolorations","intervention_group":"Terran inapplicable","is_deactive":false,"last_name":"Botsford","parent_relationship_type":"Incapacitated janitorial","parent_user_id":85185,"password":"password","password_confirmation":"password","password_digest":"Unwillingness multinationals","patient_type":61459,"postal_code":"Sugarless entail","race_id":74387,"reason_for_deactivation":"Jousted mademoiselles","reset_password":true,"role":"Slaughterhouses conscientious","state":"Guinea coldest","updated_user_profile":true,"vaccination_reminders":true,"x_session_id":"Rewire womenfolks"};
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show user for health_care_provider', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update user for health_care_provider', function (done) {
      var id = objects[0].id;
      var newObj = {"actual_child_birth":"2014-08-21","address":"Revolutionaries bulletproofed","cell_phone":"Betrayal inducement","city":"Assassinations cracker","clinician_code_id":46295,"clinic_name":"Thing twaddles","consent_accepted_on":"1997-10-16 06:55:43 +0000","contact_cell_phone":"Loquacity disenfranchises","contact_email":"Recommendation rumple","contact_home_phone":"Whorehouses hemophiliacs","contact_name":"Interpreting impulsiveness","deactivated_on":"1970-01-31 02:03:12 +0000","education_id":67465,"email":"rod.hamill47@vaccinesurvey.com","expected_child_birth":"2015-04-02","first_name":"Fonda","has_contact_users":true,"home_phone":"Lexicography respectable","intervention_group":"Insurrections resourcefulness","is_deactive":false,"last_name":"Jacobson","parent_relationship_type":"Professional Alleghenies","parent_user_id":42885,"password":"password","password_confirmation":"password","password_digest":"Togas individualizing","patient_type":73198,"postal_code":"Confucianism bolstering","race_id":13183,"reason_for_deactivation":"Dragonfly Democratic","reset_password":true,"role":"Woodlands torments","state":"Portend Gauls","updated_user_profile":true,"vaccination_reminders":false,"x_session_id":"Subteens Marcia"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1User.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1User with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy user for health_care_provider', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['health_care_provider']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/users/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
