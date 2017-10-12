var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2Setting query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"awsHealthcareContentBucketName":"Kindergartens architecturally","awsVideoBucketName":"Queerer smuggler","contactUserRegistrationEmailText":"Multiplicities gesticulated","contactUserRegistrationSubject":"Stocky Hurley","forgotPasswordEmailText":"Malapropism Delacroix","forgotPasswordSubject":"Hoodooed inconceivably","fromEmail":"Intellectuals jazziest","smsPhoneNumber":"Neologisms backstopped","surveyCompletionEmailSubject":"Thunderstorms Pinatubo","surveyCompletionEmailText":"Jangling compulsions","surveyNotificationEmailText":"Predispositions semiautomatics","surveyNotificationFinalSmsText":"Encapsulations diatoms","surveyNotificationFirstReminderEmailText":"Voluptuousness deathtraps","surveyNotificationFirstReminderSubject":"Humanitarianism bivouacking","surveyNotificationSubject":"Establishments yolks","termsAndConditions":"Adaptations comprehensible"});
  testObjects.push({"awsHealthcareContentBucketName":"Laurie bucketed","awsVideoBucketName":"Subcontracting catheters","contactUserRegistrationEmailText":"Labeled agribusinesses","contactUserRegistrationSubject":"Clavichord diminutives","forgotPasswordEmailText":"Aaron gymnastic","forgotPasswordSubject":"Walpurgisnacht disused","fromEmail":"Opprobrious paraplegia","smsPhoneNumber":"Azaleas owlet","surveyCompletionEmailSubject":"Avowal Netflix","surveyCompletionEmailText":"Muskiness outmanoeuvres","surveyNotificationEmailText":"Pictorially hesitate","surveyNotificationFinalSmsText":"Commiserating crematoriums","surveyNotificationFirstReminderEmailText":"Horrendously windsurfing","surveyNotificationFirstReminderSubject":"Confucians understaffed","surveyNotificationSubject":"Sigmund Czechoslovakia","termsAndConditions":"Circumstancing tuned"});
  testObjects.push({"awsHealthcareContentBucketName":"Elate minions","awsVideoBucketName":"Activities appease","contactUserRegistrationEmailText":"Unauthenticated anthropocentric","contactUserRegistrationSubject":"Hairsbreadths Aeneid","forgotPasswordEmailText":"Dreadfully antithetically","forgotPasswordSubject":"Circularizing bludgeon","fromEmail":"Organization Irving","smsPhoneNumber":"Syllable stretchy","surveyCompletionEmailSubject":"Fluoroscopes matchsticks","surveyCompletionEmailText":"Geographically chicken","surveyNotificationEmailText":"Neophyte gauziest","surveyNotificationFinalSmsText":"Singularities unexceptionable","surveyNotificationFirstReminderEmailText":"Reproachful Carmella","surveyNotificationFirstReminderSubject":"Dentistry ungainlier","surveyNotificationSubject":"Rorschach puked","termsAndConditions":"Familiarization achievement"});

V2Setting.createEach(testObjects).exec(function(err, obj) {
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
		V2Setting.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2Setting.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2Setting.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2Setting.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2Setting.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

});
