var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1Setting query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"awsHealthcareContentBucketName":"Companions dealt","awsVideoBucketName":"Surreptitiously icebreakers","contactUserRegistrationEmailText":"Thunderstruck treks","contactUserRegistrationSubject":"Dyspeptics Murchison","forgotPasswordEmailText":"Pharmacopeias valedictorian","forgotPasswordSubject":"Straitjackets windmilled","fromEmail":"I Phone abashes","smsPhoneNumber":"Individualists cartooned","surveyCompletionEmailSubject":"Gynecological proper","surveyCompletionEmailText":"Motherlands exhibitionists","surveyNotificationEmailText":"Swipes tibia","surveyNotificationFinalSmsText":"Designated complaisant","surveyNotificationFirstReminderEmailText":"Literati orchestrations","surveyNotificationFirstReminderSubject":"Unequivocal inexplicably","surveyNotificationSubject":"Peril unfriendliness","termsAndConditions":"Bacteriologists representatives"});
  testObjects.push({"awsHealthcareContentBucketName":"Calypsos doubtlessly","awsVideoBucketName":"Collaborator bravely","contactUserRegistrationEmailText":"Nasal inchoate","contactUserRegistrationSubject":"Persevered fishtails","forgotPasswordEmailText":"Gonads flawless","forgotPasswordSubject":"Dirac ventriloquism","fromEmail":"Parables beekeepers","smsPhoneNumber":"Swerving recommend","surveyCompletionEmailSubject":"Fiendishly laces","surveyCompletionEmailText":"Fortes befit","surveyNotificationEmailText":"Asymptotically polymers","surveyNotificationFinalSmsText":"Annihilation Darcy","surveyNotificationFirstReminderEmailText":"Nontransferable ecologist","surveyNotificationFirstReminderSubject":"Jules professionalism","surveyNotificationSubject":"Dazzle acquainted","termsAndConditions":"Mattes grandstanded"});
  testObjects.push({"awsHealthcareContentBucketName":"Dictations tranquillized","awsVideoBucketName":"Overemphasizing circumstantial","contactUserRegistrationEmailText":"Romanticist stepdaughters","contactUserRegistrationSubject":"Impregnated housing","forgotPasswordEmailText":"Syphilitics salivary","forgotPasswordSubject":"Excretory orthopedists","fromEmail":"Whisper impregnation","smsPhoneNumber":"Decathlons interpretative","surveyCompletionEmailSubject":"Knacks languishes","surveyCompletionEmailText":"Iodizes beady","surveyNotificationEmailText":"Leathernecks incinerators","surveyNotificationFinalSmsText":"Professorship shackle","surveyNotificationFirstReminderEmailText":"Money brunched","surveyNotificationFirstReminderSubject":"Apostasy precipitations","surveyNotificationSubject":"Strengthens commercializing","termsAndConditions":"Impenetrability brogans"});

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
		V1Setting.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1Setting.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1Setting.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1Setting.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1Setting.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

});
