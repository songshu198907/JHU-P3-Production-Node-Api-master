var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1User query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"actualChildBirth":"2013-11-29","address":"Malformation shuck","cellPhone":"Cataloguers artificiality","city":"Millrace laddies","clinicianCodeId":41009,"clinicName":"Ballerinas comic","consentAcceptedOn":"1991-01-03 05:46:12 +0000","contactCellPhone":"Understatement straightjacket","contactEmail":"Destinations circumstancing","contactHomePhone":"Wreckers satirically","contactName":"Wretcheder upholsters","deactivatedOn":"1995-12-25 14:44:39 +0000","educationId":1601,"email":"caryl.bradtke63@vaccinesurvey.com","expectedChildBirth":"2015-05-30","firstName":"Dion","hasContactUsers":true,"homePhone":"Photosynthesis pertinacious","interventionGroup":"Immediately escapes","isDeactive":false,"lastName":"Adams","parentRelationshipType":"Discipline shortstops","parentUserId":1196,"password":"password","passwordConfirmation":"password","passwordDigest":"Intellectually complaisance","patientType":14769,"postalCode":"Janell colloquialisms","raceId":67828,"reasonForDeactivation":"Astrophysicists retirements","resetPassword":true,"role":"Brisket bestiaries","state":"Monstrance sportscasting","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Braves groan"});
  testObjects.push({"actualChildBirth":"2015-11-07","address":"Amenity disconcerting","cellPhone":"Overruled nonproductive","city":"Meteorite cleanings","clinicianCodeId":59654,"clinicName":"Entrepreneurial toque","consentAcceptedOn":"2010-10-26 06:06:00 +0000","contactCellPhone":"Misstatements occupants","contactEmail":"Simplifications actuary","contactHomePhone":"Password callings","contactName":"Mocha wilds","deactivatedOn":"2011-03-28 18:01:28 +0000","educationId":62431,"email":"kym.krajcik93@vaccinesurvey.com","expectedChildBirth":"2015-06-01","firstName":"Candie","hasContactUsers":true,"homePhone":"Mediterraneans Frost","interventionGroup":"Simulation toxins","isDeactive":true,"lastName":"Ziemann","parentRelationshipType":"Compounded inconvenienced","parentUserId":46533,"password":"password","passwordConfirmation":"password","passwordDigest":"Countersink barrenest","patientType":88825,"postalCode":"Consecutively venality","raceId":61618,"reasonForDeactivation":"Gratitude undesirable","resetPassword":false,"role":"Baptistry musses","state":"Ratcheting unclothed","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Heterosexual ideogram"});
  testObjects.push({"actualChildBirth":"2014-10-21","address":"Crunchy worthily","cellPhone":"Penlight heeled","city":"Peculiar commission","clinicianCodeId":41178,"clinicName":"Independently thunderbolts","consentAcceptedOn":"2007-05-07 07:23:36 +0000","contactCellPhone":"Subjoined coverings","contactEmail":"Disingenuous transplant","contactHomePhone":"Deceleration wingspread","contactName":"Philadelphia tomorrows","deactivatedOn":"1983-06-02 15:48:27 +0000","educationId":86524,"email":"breann.cormier19@vaccinesurvey.com","expectedChildBirth":"2014-09-20","firstName":"Elias","hasContactUsers":true,"homePhone":"Acclimatization improbabilities","interventionGroup":"Illustration weatherproofed","isDeactive":false,"lastName":"Jerde","parentRelationshipType":"Finnbogadottir pockmark","parentUserId":20929,"password":"password","passwordConfirmation":"password","passwordDigest":"Normative sparsity","patientType":25014,"postalCode":"Shack weatherproofed","raceId":65476,"reasonForDeactivation":"Harlequin electrolysis","resetPassword":true,"role":"Archaeologists partitioning","state":"Dehumidifiers chickadees","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Spitefullest natty"});

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
		V1User.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1User.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1User.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1User.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1User.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute reset_password query scope', function(done) {
    var value = V1User.resetPasswordScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute consent_accepted query scope', function(done) {
    var value = V1User.consentAcceptedScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute deactivate query scope', function(done) {
    var value = V1User.deactivateScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute myprofile query scope with fields', function(done){
		
    V1User.create({"actualChildBirth":"2015-12-11","address":"Transgresses awesomely","cellPhone":"Rotogravures memories","city":"Stated secretariats","clinicianCodeId":13836,"clinicName":"Sinclair habitability","consentAcceptedOn":"1978-12-06 06:08:51 +0000","contactCellPhone":"Chirruping pickax","contactEmail":"Sigurd sugarcoats","contactHomePhone":"Fleet Mosul","contactName":"Correctable disconcerting","deactivatedOn":"1972-09-28 02:29:00 +0000","educationId":73075,"email":"robt.hane79@vaccinesurvey.com","expectedChildBirth":"2014-01-09","firstName":"Thad","hasContactUsers":false,"homePhone":"Novice blacktopped","interventionGroup":"Overbalanced Chihuahua","isDeactive":true,"lastName":"Kirlin","parentRelationshipType":"Depoliticizes conceptualizes","parentUserId":80192,"password":"password","passwordConfirmation":"password","passwordDigest":"Inexplicably unavailing","patientType":4356,"postalCode":"Moonbeams secondarily","raceId":28579,"reasonForDeactivation":"Processioned Wollstonecraft","resetPassword":true,"role":"Decriminalizing barbequed","state":"Propagandizing Lorelei","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Valenti extraordinarily"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1User.myprofileScope({}, {"id":0}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });
	it('should successfully execute get_my_contacts query scope', function(done) {
    var value = V1User.getMyContactsScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_patients_by_clinics query scope with fields', function(done){
		
    V1User.create({"actualChildBirth":"2015-08-03","address":"Inlets confinements","cellPhone":"Freemasonries reclines","city":"Pedantically thermionic","clinicianCodeId":6131,"clinicName":"Condescendingly stalling","consentAcceptedOn":"2007-06-20 15:22:08 +0000","contactCellPhone":"Premeditation freakiest","contactEmail":"Beryl advertises","contactHomePhone":"Recombining boring","contactName":"Superintendency jumpier","deactivatedOn":"1999-02-16 13:20:25 +0000","educationId":20107,"email":"lesia.welch58@vaccinesurvey.com","expectedChildBirth":"2014-12-25","firstName":"Marcus","hasContactUsers":false,"homePhone":"Demonstrating plugged","interventionGroup":"Agglutinated Therese","isDeactive":false,"lastName":"Rice","parentRelationshipType":"Montenegro coops","parentUserId":66906,"password":"password","passwordConfirmation":"password","passwordDigest":"Heartbroken apathetically","patientType":98402,"postalCode":"Capaciousness discontenting","raceId":13744,"reasonForDeactivation":"Depresses diversification","resetPassword":true,"role":"Arborvitaes Leger","state":"Accordion instrumentalist","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Flamboyantly etchings"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1User.getPatientsByClinicsScope({"role":"Arborvitaes Leger","clinician_code_id":6131,"is_deactivate":false}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute get_healthcare_by_clinic query scope with fields', function(done){
		
    V1User.create({"actualChildBirth":"2016-03-27","address":"Cheeky expiating","cellPhone":"Superscripts Neanderthals","city":"Fleecy Rostropovich","clinicianCodeId":2806,"clinicName":"Palpably cryptographer","consentAcceptedOn":"2005-10-26 00:46:01 +0000","contactCellPhone":"Indignation Cabot","contactEmail":"Wounds descriptors","contactHomePhone":"Spumone volumes","contactName":"Abused wedge","deactivatedOn":"1976-10-29 10:06:26 +0000","educationId":1503,"email":"lynelle.schneider28@vaccinesurvey.com","expectedChildBirth":"2015-09-12","firstName":"Shana","hasContactUsers":false,"homePhone":"Disambiguation espionage","interventionGroup":"Viscus booze","isDeactive":true,"lastName":"Graham","parentRelationshipType":"Parsed Malthus","parentUserId":95366,"password":"password","passwordConfirmation":"password","passwordDigest":"Instrumentality prizefighting","patientType":70693,"postalCode":"Bamboozles ketch","raceId":42847,"reasonForDeactivation":"Escapism Hickok","resetPassword":true,"role":"Regulators uncomfortable","state":"Bashfulness British","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Abrupt quirks"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1User.getHealthcareByClinicScope({"role":"Regulators uncomfortable","is_deactivate":true}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });
	it('should successfully execute patient_survey_export query scope', function(done) {
    var value = V1User.patientSurveyExportScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

});
