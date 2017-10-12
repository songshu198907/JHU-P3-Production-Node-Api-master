var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2014-08-09","address":"Affiliations faithfulness","cellPhone":"Unforgiving sparely","city":"Pullouts mildest","clinicianCodeId":15360,"clinicName":"Redistributing moisturizing","consentAcceptedOn":"2015-04-06 02:50:56 +0000","contactCellPhone":"Predetermined tribes","contactEmail":"Gybed hyperventilated","contactHomePhone":"Tarantula symmetrical","contactName":"Rounds bumblebee","deactivatedOn":"2003-03-20 23:01:09 +0000","educationId":63660,"email":"shaun.kertzmann77@vaccinesurvey.com","expectedChildBirth":"2016-06-08","firstName":"Jamaal","hasContactUsers":true,"homePhone":"Quarterbacking phisher","interventionGroup":"Unscrupulous flawed","isDeactive":false,"lastName":"Daniel","parentRelationshipType":"Publicizing identifiers","parentUserId":16544,"password":"password","passwordConfirmation":"password","passwordDigest":"Policewomen jackboots","patientType":23992,"postalCode":"Underachievers Zephyrus","raceId":59328,"reasonForDeactivation":"Interconnection chigger","resetPassword":false,"role":"patient","state":"Bandwagons footnotes","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Probe consummates"},
  'administrator': {"actualChildBirth":"2014-12-03","address":"Horror discontinuities","cellPhone":"Exasperates teetotaller","city":"Conservationist turmoils","clinicianCodeId":46467,"clinicName":"Electioneering underlies","consentAcceptedOn":"2005-05-30 13:52:02 +0000","contactCellPhone":"Freeloader pedestrianizing","contactEmail":"Prefabricating troubleshooters","contactHomePhone":"Satanically squired","contactName":"Dally hacks","deactivatedOn":"2008-12-26 06:16:03 +0000","educationId":38258,"email":"antionette.ullrich8@vaccinesurvey.com","expectedChildBirth":"2015-12-28","firstName":"Everette","hasContactUsers":true,"homePhone":"Cocked vanishings","interventionGroup":"Escalation Hippocratic","isDeactive":true,"lastName":"Kiehn","parentRelationshipType":"Staling Doctor","parentUserId":98995,"password":"password","passwordConfirmation":"password","passwordDigest":"Aforementioned furriers","patientType":26408,"postalCode":"Whitewashing inconvenienced","raceId":91454,"reasonForDeactivation":"Protozoans mythology","resetPassword":true,"role":"administrator","state":"Entertainingly intensest","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Extravagant navigability"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V1Setting', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"awsHealthcareContentBucketName":"Hospitably meritoriously","awsVideoBucketName":"Sadly Vonnegut","contactUserRegistrationEmailText":"Togetherness misdemeanor","contactUserRegistrationSubject":"Decries crewing","forgotPasswordEmailText":"Quips Mongolia","forgotPasswordSubject":"Uncoordinated aloud","fromEmail":"Luminosity overachieved","smsPhoneNumber":"Unimpaired vanquishes","surveyCompletionEmailSubject":"Watercourses weatherized","surveyCompletionEmailText":"Redistribution licentiousness","surveyNotificationEmailText":"Mooing staphylococcus","surveyNotificationFinalSmsText":"Radiotherapists swore","surveyNotificationFirstReminderEmailText":"Elise cautiously","surveyNotificationFirstReminderSubject":"Carcinomata teensiest","surveyNotificationSubject":"Excommunication steppingstones","termsAndConditions":"Amortization small"});
  testObjects.push({"awsHealthcareContentBucketName":"Wealth Rockefeller","awsVideoBucketName":"Edger softly","contactUserRegistrationEmailText":"Hostessed moire","contactUserRegistrationSubject":"Headlong stammerer","forgotPasswordEmailText":"Militarists biographical","forgotPasswordSubject":"Jacked disappointingly","fromEmail":"Classmate phenomenon","smsPhoneNumber":"Interconnects outstript","surveyCompletionEmailSubject":"Cappuccinos judiciaries","surveyCompletionEmailText":"Polyunsaturated bonbons","surveyNotificationEmailText":"Gangrenous subhumans","surveyNotificationFinalSmsText":"Crystallography outmaneuver","surveyNotificationFirstReminderEmailText":"Condescendingly Kingston","surveyNotificationFirstReminderSubject":"Hospitalizes wryly","surveyNotificationSubject":"Outmaneuvers meadow","termsAndConditions":"Vises retool"});
  testObjects.push({"awsHealthcareContentBucketName":"Euphemistically mutate","awsVideoBucketName":"Antechambers encouragements","contactUserRegistrationEmailText":"Mackinaw terrain","contactUserRegistrationSubject":"Blots Rumpelstiltskin","forgotPasswordEmailText":"Thriftiness licentiousness","forgotPasswordSubject":"Digital wrist","fromEmail":"Dings scorn","smsPhoneNumber":"Darth pinning","surveyCompletionEmailSubject":"Garner monarchist","surveyCompletionEmailText":"Sudetenland Tokugawa","surveyNotificationEmailText":"Verna demographically","surveyNotificationFinalSmsText":"Proselyting nudism","surveyNotificationFirstReminderEmailText":"Rodeo pedaling","surveyNotificationFirstReminderSubject":"Commands acquaints","surveyNotificationSubject":"Unquestioningly Justinian","termsAndConditions":"Olympians lowish"});
  testObjects.push({"awsHealthcareContentBucketName":"Inflicts interdependent","awsVideoBucketName":"Freehold outbound","contactUserRegistrationEmailText":"Hectares Philip","contactUserRegistrationSubject":"Lubrication eyrie","forgotPasswordEmailText":"Exorbitance levelers","forgotPasswordSubject":"Umiaks rehearsals","fromEmail":"Disinclination carburetors","smsPhoneNumber":"Sahel rehash","surveyCompletionEmailSubject":"Overages claustrophobia","surveyCompletionEmailText":"Gruel documentaries","surveyNotificationEmailText":"Bifocals sicker","surveyNotificationFinalSmsText":"Conservatively professionalism","surveyNotificationFirstReminderEmailText":"Conservationist transnationals","surveyNotificationFirstReminderSubject":"Supportive valid","surveyNotificationSubject":"Bestow Myrdal","termsAndConditions":"Predispositions funnies"});
  testObjects.push({"awsHealthcareContentBucketName":"Buckeyes architecturally","awsVideoBucketName":"Tarpaulins accessibly","contactUserRegistrationEmailText":"Chemises standardize","contactUserRegistrationSubject":"Algol industriousness","forgotPasswordEmailText":"Opalescent litmus","forgotPasswordSubject":"Pessimist preambling","fromEmail":"Unsnarl outbalancing","smsPhoneNumber":"Violists heirs","surveyCompletionEmailSubject":"Recapitulation Mercator","surveyCompletionEmailText":"Proportionally infrastructures","surveyNotificationEmailText":"Descry chanties","surveyNotificationFinalSmsText":"Prognosticators tenderloins","surveyNotificationFirstReminderEmailText":"Accessories Roquefort","surveyNotificationFirstReminderSubject":"Precipitously expressionless","surveyNotificationSubject":"Dissonance anesthesiology","termsAndConditions":"Intermarrying ghastliest"});
  testObjects.push({"awsHealthcareContentBucketName":"Wreaths grand","awsVideoBucketName":"Oleomargarine cashiers","contactUserRegistrationEmailText":"Rustproofs parliamentarian","contactUserRegistrationSubject":"Investigative Excellencies","forgotPasswordEmailText":"Asgard gloominess","forgotPasswordSubject":"Gamut admiration","fromEmail":"Libyans commiserated","smsPhoneNumber":"Sympathetically varicose","surveyCompletionEmailSubject":"Superior earthwork","surveyCompletionEmailText":"Aggravates superstructures","surveyNotificationEmailText":"Hairstylists chronometers","surveyNotificationFinalSmsText":"Squelches hairnet","surveyNotificationFirstReminderEmailText":"Ragamuffin uncomplimentary","surveyNotificationFirstReminderSubject":"Decontamination Rothko","surveyNotificationSubject":"Astor reconsidered","termsAndConditions":"Impediments controvert"});
  testObjects.push({"awsHealthcareContentBucketName":"Synthetic confab","awsVideoBucketName":"Individualizing architecturally","contactUserRegistrationEmailText":"Swats causation","contactUserRegistrationSubject":"Trifle irretrievable","forgotPasswordEmailText":"Demographically ambitiously","forgotPasswordSubject":"Dries Yoknapatawpha","fromEmail":"Repatriating brasher","smsPhoneNumber":"Parochialism microorganism","surveyCompletionEmailSubject":"Maharani Stephenson","surveyCompletionEmailText":"Reorganizations photojournalist","surveyNotificationEmailText":"Bibliographies continentals","surveyNotificationFinalSmsText":"Pollute resilience","surveyNotificationFirstReminderEmailText":"Mathias sanatoriums","surveyNotificationFirstReminderSubject":"Revolutionist footmen","surveyNotificationSubject":"Sheer clods","termsAndConditions":"Linearly concessionaires"});
  testObjects.push({"awsHealthcareContentBucketName":"Litterbugs psychoanalyzing","awsVideoBucketName":"Broaden Cruise","contactUserRegistrationEmailText":"Stopwatch choreograph","contactUserRegistrationSubject":"Experimentally uncomprehending","forgotPasswordEmailText":"Inexplicably Jones","forgotPasswordSubject":"Encirclement divests","fromEmail":"Decriminalizes wrongheadedly","smsPhoneNumber":"Tools unrivalled","surveyCompletionEmailSubject":"Dramatization Poiret","surveyCompletionEmailText":"Falsification Galveston","surveyNotificationEmailText":"Plummer pernicious","surveyNotificationFinalSmsText":"Respond encodes","surveyNotificationFirstReminderEmailText":"Gentled shoos","surveyNotificationFirstReminderSubject":"Halve semiconductors","surveyNotificationSubject":"Conclusion transfix","termsAndConditions":"Jersey nowise"});
  testObjects.push({"awsHealthcareContentBucketName":"Undiscovered greedier","awsVideoBucketName":"Brant hours","contactUserRegistrationEmailText":"Zelma Dickinson","contactUserRegistrationSubject":"Expressively Antaeus","forgotPasswordEmailText":"Miles reassembled","forgotPasswordSubject":"Toyed models","fromEmail":"Trucks washerwoman","smsPhoneNumber":"Symbolization Darfur","surveyCompletionEmailSubject":"Southeasterly Leila","surveyCompletionEmailText":"Affections slippery","surveyNotificationEmailText":"Straightedges prohibitionists","surveyNotificationFinalSmsText":"Frustrates municipality","surveyNotificationFirstReminderEmailText":"Watchtower stores","surveyNotificationFirstReminderSubject":"Repairs rubbished","surveyNotificationSubject":"Guitar restructures","termsAndConditions":"Spectroscopic uncluttered"});
  testObjects.push({"awsHealthcareContentBucketName":"Nationalization antithetically","awsVideoBucketName":"Facilitates prognosticators","contactUserRegistrationEmailText":"Rankle collaborative","contactUserRegistrationSubject":"Insidiousness mortification","forgotPasswordEmailText":"Transfusions Tillich","forgotPasswordSubject":"Clots improprieties","fromEmail":"Reanimate doorways","smsPhoneNumber":"Indianans recopying","surveyCompletionEmailSubject":"Commemoration Lepidus","surveyCompletionEmailText":"Punted lacked","surveyNotificationEmailText":"Antarctic ameliorates","surveyNotificationFinalSmsText":"Bogey noncommercials","surveyNotificationFirstReminderEmailText":"Humanizing atrophying","surveyNotificationFirstReminderSubject":"Castrating begone","surveyNotificationSubject":"Noncombatants nymphs","termsAndConditions":"Collate wineglass"});

V1Setting.createEach(testObjects).exec(function(err, obj) {
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
      V1Setting.destroy().exec(function(err, result) {
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

  
  
    it('should attempt to get index of settings for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create setting for patient', function (done) {
      var newObj = {"aws_healthcare_content_bucket_name":"Excruciatingly commercialized","aws_video_bucket_name":"Rusts amnesty","contact_user_registration_email_text":"Tyrants suddenness","contact_user_registration_subject":"Ampler convalescences","forgot_password_email_text":"Competitiveness deceased","forgot_password_subject":"Guadalcanal disappointing","from_email":"Wrung proportionately","sms_phone_number":"Administrated sportscasting","survey_completion_email_subject":"Multiplicity brawniest","survey_completion_email_text":"Worst fermentation","survey_notification_email_text":"Chronicler prosperously","survey_notification_final_sms_text":"Virginians unruly","survey_notification_first_reminder_email_text":"Reconfiguration interjections","survey_notification_first_reminder_subject":"Speeders bookend","survey_notification_subject":"Depicted continental","terms_and_conditions":"Battalion numberless"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show setting for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update setting for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"aws_healthcare_content_bucket_name":"Harmoniously watercourses","aws_video_bucket_name":"Rulers elbowroom","contact_user_registration_email_text":"Yakima banshees","contact_user_registration_subject":"Erectness demigods","forgot_password_email_text":"Suffusing alphabetically","forgot_password_subject":"Swede adjectival","from_email":"Bigmouths topics","sms_phone_number":"Resourcefulness scenting","survey_completion_email_subject":"Indiana discombobulates","survey_completion_email_text":"Overestimating prognosticating","survey_notification_email_text":"Middle circumnavigated","survey_notification_final_sms_text":"Brobdingnagian overly","survey_notification_first_reminder_email_text":"Gremlin nonentities","survey_notification_first_reminder_subject":"Rebelliously quoit","survey_notification_subject":"Inflection Evian","terms_and_conditions":"Repercussion shortcut"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy setting for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of settings for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create setting for administrator', function (done) {
      var newObj = {"aws_healthcare_content_bucket_name":"Misapprehension Jocasta","aws_video_bucket_name":"Enjoy shades","contact_user_registration_email_text":"Approvingly Owens","contact_user_registration_subject":"Teacup principalities","forgot_password_email_text":"Flicker condescendingly","forgot_password_subject":"Uncouth harking","from_email":"Hurtling classifications","sms_phone_number":"Philological flapjacks","survey_completion_email_subject":"Panamas impalpable","survey_completion_email_text":"Eighty dropper","survey_notification_email_text":"Notifies fastidiousness","survey_notification_final_sms_text":"Dependability technocracy","survey_notification_first_reminder_email_text":"Pinfeather tyros","survey_notification_first_reminder_subject":"Microscopically rectifications","survey_notification_subject":"Statehouse impious","terms_and_conditions":"Totters Reasoner"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show setting for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update setting for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"aws_healthcare_content_bucket_name":"Filibustering prognosticators","aws_video_bucket_name":"Rhetorician unconsciousness","contact_user_registration_email_text":"Semimonthlies barrettes","contact_user_registration_subject":"Osiers butter","forgot_password_email_text":"Sulphur provisionally","forgot_password_subject":"Keypunching recapitulating","from_email":"Quids ophthalmology","sms_phone_number":"Coolies semantically","survey_completion_email_subject":"Denominational emigrates","survey_completion_email_text":"Align skateboards","survey_notification_email_text":"Reinitialize intellectualism","survey_notification_final_sms_text":"Unlatched sulphured","survey_notification_first_reminder_email_text":"Bangs avocados","survey_notification_first_reminder_subject":"Representative intercollegiate","survey_notification_subject":"Sheer epidermises","terms_and_conditions":"Amoeba Kazakhstan"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V1Setting.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V1Setting with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy setting for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v1/settings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
