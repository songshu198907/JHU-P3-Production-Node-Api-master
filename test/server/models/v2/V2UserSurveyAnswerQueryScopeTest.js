var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2UserSurveyAnswer query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"appliedSkipLogicId":20285,"freeFormResponse":"Monorails deafest","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":94237,"questionGroup":"Lovesick spigots","questionOrder":35696,"skipped":true,"surveyAnswerId":12911,"surveyQuestionId":40905,"userSurveyId":21647});
  testObjects.push({"appliedSkipLogicId":57460,"freeFormResponse":"Petrels uncomprehending","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":367,"questionGroup":"Bicentennials oceanographer","questionOrder":11358,"skipped":false,"surveyAnswerId":25647,"surveyQuestionId":81975,"userSurveyId":8935});
  testObjects.push({"appliedSkipLogicId":35738,"freeFormResponse":"Clogged liens","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":77623,"questionGroup":"Mortarboard linefeed","questionOrder":30542,"skipped":false,"surveyAnswerId":92012,"surveyQuestionId":4997,"userSurveyId":42778});

V2UserSurveyAnswer.createEach(testObjects).exec(function(err, obj) {
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
		V2UserSurveyAnswer.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2UserSurveyAnswer.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2UserSurveyAnswer.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2UserSurveyAnswer.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2UserSurveyAnswer.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute previousquestion query scope with fields', function(done){
		
    V2UserSurveyAnswer.create({"appliedSkipLogicId":80762,"freeFormResponse":"Flout raggedier","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":54995,"questionGroup":"Proportionality deadest","questionOrder":49442,"skipped":false,"surveyAnswerId":35636,"surveyQuestionId":45909,"userSurveyId":4780}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurveyAnswer.previousquestionScope({"currentquestionid":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
