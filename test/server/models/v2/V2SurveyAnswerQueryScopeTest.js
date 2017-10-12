var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2SurveyAnswer query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"allowFreeForm":true,"freeFormDataType":"Preponderances tribulations","label":"Russell ministrations","sortOrder":73939,"surveyQuestionId":84384,"videoTargetNumber":60603,"weight":81975});
  testObjects.push({"allowFreeForm":true,"freeFormDataType":"Travestying intent","label":"Withdraws slinky","sortOrder":47105,"surveyQuestionId":49297,"videoTargetNumber":15764,"weight":54697});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Encyclopedic unreconstructed","label":"Interconnection menagerie","sortOrder":44466,"surveyQuestionId":71177,"videoTargetNumber":10657,"weight":72735});

V2SurveyAnswer.createEach(testObjects).exec(function(err, obj) {
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
		V2SurveyAnswer.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2SurveyAnswer.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2SurveyAnswer.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2SurveyAnswer.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2SurveyAnswer.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_answers_by_question query scope with fields', function(done){
		
    V2SurveyAnswer.create({"allowFreeForm":true,"freeFormDataType":"Intercollegiate precipitations","label":"Navel mortaring","sortOrder":17631,"surveyQuestionId":34592,"videoTargetNumber":7501,"weight":33927}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2SurveyAnswer.getAnswersByQuestionScope({"survey_question_id":34592}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute delete_question_answer query scope with fields', function(done){
		
    V2SurveyAnswer.create({"allowFreeForm":true,"freeFormDataType":"Millionaire deficiencies","label":"Studying tonsillectomies","sortOrder":33649,"surveyQuestionId":84821,"videoTargetNumber":97074,"weight":85426}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2SurveyAnswer.deleteQuestionAnswerScope({"id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
