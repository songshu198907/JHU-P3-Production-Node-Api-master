var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1SurveyQuestionSkipLogic query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"skipQuestionCodes":"Transship moody","surveyAnswerId":"Dentifrice space"});
  testObjects.push({"skipQuestionCodes":"Burgeons fishhooks","surveyAnswerId":"Operatives unsay"});
  testObjects.push({"skipQuestionCodes":"Millions fired","surveyAnswerId":"Implausibility practicably"});

V1SurveyQuestionSkipLogic.createEach(testObjects).exec(function(err, obj) {
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
		V1SurveyQuestionSkipLogic.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1SurveyQuestionSkipLogic.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1SurveyQuestionSkipLogic.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1SurveyQuestionSkipLogic.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1SurveyQuestionSkipLogic.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_skip_logic_by_answers query scope with fields', function(done){
		
    V1SurveyQuestionSkipLogic.create({"skipQuestionCodes":"Pitted condemned","surveyAnswerId":"Palindromic nutted"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1SurveyQuestionSkipLogic.getSkipLogicByAnswersScope({"survey_answer_id":"Palindromic nutted"}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
