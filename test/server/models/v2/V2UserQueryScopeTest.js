var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2User query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"actualChildBirth":"2015-02-24","address":"Wresting thunderclaps","cellPhone":"Confiscations subpoenaed","city":"Newspaperwoman circumstanced","clinicianCodeId":25980,"clinicName":"Washingtonians gasoline","consentAcceptedOn":"2010-01-07 21:58:12 +0000","contactCellPhone":"Warranties afflicting","contactEmail":"Dating balky","contactHomePhone":"Tswana scuttled","contactName":"Android impersonations","deactivatedOn":"2005-02-28 02:45:06 +0000","educationId":76800,"email":"wanita.franecki53@vaccinesurvey.com","expectedChildBirth":"2016-01-10","firstName":"Sharita","hasContactUsers":true,"homePhone":"Nicaraguans disfranchising","interventionGroup":"Consecrations euphemism","isDeactive":false,"lastName":"Hilpert","parentRelationshipType":"Counterattacks Yangtze","parentUserId":68532,"password":"password","passwordConfirmation":"password","passwordDigest":"Soundproofed streptococcal","patientType":2535,"postalCode":"Watchtower gunslinger","raceId":72965,"reasonForDeactivation":"Protectiveness predilections","resetPassword":false,"role":"Consolations housetop","state":"Degrading unleavened","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Lyman hooding"});
  testObjects.push({"actualChildBirth":"2017-02-15","address":"Haiphong highwaymen","cellPhone":"Purposeful ridiculousness","city":"Bandoliers villager","clinicianCodeId":57858,"clinicName":"Vince multiplexer","consentAcceptedOn":"2008-03-22 02:45:24 +0000","contactCellPhone":"Disestablished velocities","contactEmail":"Pastorates disenchantment","contactHomePhone":"Powder methodological","contactName":"Syndicated pommelled","deactivatedOn":"1999-11-24 12:50:48 +0000","educationId":6578,"email":"jacinda.nitzsche20@vaccinesurvey.com","expectedChildBirth":"2015-08-21","firstName":"Marco","hasContactUsers":false,"homePhone":"Teabag gossipping","interventionGroup":"Corkscrewing monotones","isDeactive":false,"lastName":"Waters","parentRelationshipType":"Occupation occlusions","parentUserId":49180,"password":"password","passwordConfirmation":"password","passwordDigest":"Sympathizers procrastinating","patientType":84240,"postalCode":"Gasolene confiscation","raceId":13261,"reasonForDeactivation":"Notwithstanding insurrectionist","resetPassword":true,"role":"Syncopation retrofitting","state":"Kosher umped","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Aquavit wisecracking"});
  testObjects.push({"actualChildBirth":"2015-01-15","address":"Disenfranchise lineament","cellPhone":"Assembling scintillating","city":"Prophetically engross","clinicianCodeId":12714,"clinicName":"Confederation constitutional","consentAcceptedOn":"2006-10-02 14:23:17 +0000","contactCellPhone":"Volunteer watchmaker","contactEmail":"Brown torqued","contactHomePhone":"Chromatic mules","contactName":"Valve paleontologists","deactivatedOn":"1982-02-14 04:51:41 +0000","educationId":88393,"email":"magda.labadie74@vaccinesurvey.com","expectedChildBirth":"2015-12-15","firstName":"Felton","hasContactUsers":false,"homePhone":"Underbidding magisterial","interventionGroup":"Decapitations atmospherically","isDeactive":false,"lastName":"Willms","parentRelationshipType":"Gaskets distended","parentUserId":58450,"password":"password","passwordConfirmation":"password","passwordDigest":"Totalitarianism ErvIn","patientType":99470,"postalCode":"Circulations encrusting","raceId":70286,"reasonForDeactivation":"Extradited magnificence","resetPassword":false,"role":"Accusations improprieties","state":"Overcompensates expedience","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Cosignatories discountenanced"});

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
		V2User.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2User.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2User.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2User.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2User.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute reset_password query scope', function(done) {
    var value = V2User.resetPasswordScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute consent_accepted query scope', function(done) {
    var value = V2User.consentAcceptedScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute deactivate query scope', function(done) {
    var value = V2User.deactivateScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute myprofile query scope with fields', function(done){
		
    V2User.create({"actualChildBirth":"2016-04-29","address":"Gujranwala authoritatively","cellPhone":"Parenthetically aperitif","city":"Viticulture whooshing","clinicianCodeId":51209,"clinicName":"Slims finicky","consentAcceptedOn":"1972-07-15 12:39:18 +0000","contactCellPhone":"Unfettering railroading","contactEmail":"Ubiquitously institutes","contactHomePhone":"Herds farmyards","contactName":"Teammates untested","deactivatedOn":"1993-05-15 02:58:10 +0000","educationId":49377,"email":"ramonita.morissette93@vaccinesurvey.com","expectedChildBirth":"2015-10-15","firstName":"Carlos","hasContactUsers":true,"homePhone":"Masochist green","interventionGroup":"Repackaging psychiatrists","isDeactive":false,"lastName":"Feeney","parentRelationshipType":"Subcontracted pulse","parentUserId":59529,"password":"password","passwordConfirmation":"password","passwordDigest":"Confidentiality eavesdrops","patientType":20517,"postalCode":"Winsomest flashily","raceId":70897,"reasonForDeactivation":"Computerizing doctrinaires","resetPassword":false,"role":"Proponents accompaniment","state":"Ovary saline","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Guarantied gyroscope"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2User.myprofileScope({}, {"id":0}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });
	it('should successfully execute get_my_contacts query scope', function(done) {
    var value = V2User.getMyContactsScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_patients_by_clinics query scope with fields', function(done){
		
    V2User.create({"actualChildBirth":"2016-07-06","address":"Intensification navigational","cellPhone":"Sleepwalking Schopenhauer","city":"Nonhazardous determinations","clinicianCodeId":25302,"clinicName":"Distillery furbishing","consentAcceptedOn":"1986-01-24 06:55:20 +0000","contactCellPhone":"Governorship rapprochement","contactEmail":"Assess underestimating","contactHomePhone":"Imagine rapping","contactName":"Pensiveness fuselages","deactivatedOn":"2016-09-19 04:15:25 +0000","educationId":12614,"email":"marlon.crooks78@vaccinesurvey.com","expectedChildBirth":"2016-09-30","firstName":"Ervin","hasContactUsers":true,"homePhone":"Potomac pederasts","interventionGroup":"Unconsciousness humanitarianism","isDeactive":false,"lastName":"West","parentRelationshipType":"Untwisted educationally","parentUserId":1647,"password":"password","passwordConfirmation":"password","passwordDigest":"Magneto falls","patientType":3720,"postalCode":"Punks industrializing","raceId":2487,"reasonForDeactivation":"Faculties gussets","resetPassword":true,"role":"Superintendence overachievers","state":"Problematical tracing","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Monotonically abstrusely"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2User.getPatientsByClinicsScope({"role":"Superintendence overachievers","clinician_code_id":25302,"is_deactivate":false}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute get_healthcare_by_clinic query scope with fields', function(done){
		
    V2User.create({"actualChildBirth":"2015-10-09","address":"Deserved Snell","cellPhone":"Concord rascal","city":"Diversified humiliated","clinicianCodeId":57301,"clinicName":"Sloan conversational","consentAcceptedOn":"2017-02-10 11:01:38 +0000","contactCellPhone":"Prune incongruously","contactEmail":"Outposts shaykhs","contactHomePhone":"Recommendations applicability","contactName":"Thriftiness lithographer","deactivatedOn":"1977-01-20 14:47:56 +0000","educationId":41456,"email":"anneliese.ratke92@vaccinesurvey.com","expectedChildBirth":"2016-06-02","firstName":"Tomas","hasContactUsers":false,"homePhone":"Attitudinize designations","interventionGroup":"Unsteadiness Provence","isDeactive":false,"lastName":"Koss","parentRelationshipType":"Bombardiers counterbalanced","parentUserId":39649,"password":"password","passwordConfirmation":"password","passwordDigest":"Honeycomb acetaminophen","patientType":99927,"postalCode":"Moroccan wrongdoings","raceId":50336,"reasonForDeactivation":"Pizza thermoplastics","resetPassword":true,"role":"Cadaver calcifies","state":"Overloads methodological","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Journeying disconnectedly"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2User.getHealthcareByClinicScope({"role":"Cadaver calcifies","is_deactivate":false}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });
	it('should successfully execute patient_survey_export query scope', function(done) {
    var value = V2User.patientSurveyExportScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

});
