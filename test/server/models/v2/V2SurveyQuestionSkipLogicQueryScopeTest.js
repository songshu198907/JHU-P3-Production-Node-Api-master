var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2SurveyQuestionSkipLogic query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"skipQuestionCodes":"Caddies envision","surveyAnswerId":"Sunscreen unrealistically"});
  testObjects.push({"skipQuestionCodes":"Contravention salesclerks","surveyAnswerId":"Apportioned shadowboxed"});
  testObjects.push({"skipQuestionCodes":"Hyperventilates turkey","surveyAnswerId":"Nailbrushes unbelievably"});

V2SurveyQuestionSkipLogic.createEach(testObjects).exec(function(err, obj) {
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
		V2SurveyQuestionSkipLogic.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2SurveyQuestionSkipLogic.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2SurveyQuestionSkipLogic.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2SurveyQuestionSkipLogic.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2SurveyQuestionSkipLogic.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_skip_logic_by_answers query scope with fields', function(done){
		
    V2SurveyQuestionSkipLogic.create({"skipQuestionCodes":"Perceived responsiveness","surveyAnswerId":"Nontransferable streetlights"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2SurveyQuestionSkipLogic.getSkipLogicByAnswersScope({"survey_answer_id":"Nontransferable streetlights"}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
