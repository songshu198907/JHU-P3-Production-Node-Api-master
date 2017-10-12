var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1UserSurveyAnswer query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"appliedSkipLogicId":85821,"freeFormResponse":"Repatriating assiduous","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":69345,"questionGroup":"Underwear mentalities","questionOrder":33460,"skipped":true,"surveyAnswerId":37961,"surveyQuestionId":3692,"userSurveyId":9681});
  testObjects.push({"appliedSkipLogicId":31629,"freeFormResponse":"Reconnoitered Shavian","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":90703,"questionGroup":"Swill infectiousness","questionOrder":5131,"skipped":true,"surveyAnswerId":8065,"surveyQuestionId":3321,"userSurveyId":42326});
  testObjects.push({"appliedSkipLogicId":97793,"freeFormResponse":"Regeneration noninterference","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":19282,"questionGroup":"Driftwood hyperventilated","questionOrder":29209,"skipped":true,"surveyAnswerId":94215,"surveyQuestionId":84240,"userSurveyId":60426});

V1UserSurveyAnswer.createEach(testObjects).exec(function(err, obj) {
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
		V1UserSurveyAnswer.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1UserSurveyAnswer.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1UserSurveyAnswer.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1UserSurveyAnswer.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1UserSurveyAnswer.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute previousquestion query scope with fields', function(done){
		
    V1UserSurveyAnswer.create({"appliedSkipLogicId":93910,"freeFormResponse":"Capabilities renegotiated","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":44628,"questionGroup":"Magnificent multimedia","questionOrder":44211,"skipped":true,"surveyAnswerId":24961,"surveyQuestionId":51538,"userSurveyId":2483}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserSurveyAnswer.previousquestionScope({"currentquestionid":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
