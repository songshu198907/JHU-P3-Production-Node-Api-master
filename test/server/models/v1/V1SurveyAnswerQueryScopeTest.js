var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1SurveyAnswer query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"allowFreeForm":true,"freeFormDataType":"Seamless progressive","label":"Scandinavian tawny","sortOrder":46905,"surveyQuestionId":52756,"videoTargetNumber":49863,"weight":42224});
  testObjects.push({"allowFreeForm":true,"freeFormDataType":"Elongated unaccountable","label":"Virginian amanuenses","sortOrder":76888,"surveyQuestionId":46422,"videoTargetNumber":80702,"weight":85572});
  testObjects.push({"allowFreeForm":false,"freeFormDataType":"Superconductor enrapturing","label":"Choreographer gearwheel","sortOrder":8428,"surveyQuestionId":44548,"videoTargetNumber":38048,"weight":38701});

V1SurveyAnswer.createEach(testObjects).exec(function(err, obj) {
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
		V1SurveyAnswer.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1SurveyAnswer.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1SurveyAnswer.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1SurveyAnswer.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1SurveyAnswer.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_answers_by_question query scope with fields', function(done){
		
    V1SurveyAnswer.create({"allowFreeForm":false,"freeFormDataType":"Perambulators shaggiest","label":"Autobiographies regurgitating","sortOrder":64624,"surveyQuestionId":23219,"videoTargetNumber":96212,"weight":71594}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1SurveyAnswer.getAnswersByQuestionScope({"survey_question_id":23219}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute delete_question_answer query scope with fields', function(done){
		
    V1SurveyAnswer.create({"allowFreeForm":true,"freeFormDataType":"Authentications damson","label":"Teaspoonsful Delaware","sortOrder":49698,"surveyQuestionId":73477,"videoTargetNumber":81292,"weight":87169}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1SurveyAnswer.deleteQuestionAnswerScope({"id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
