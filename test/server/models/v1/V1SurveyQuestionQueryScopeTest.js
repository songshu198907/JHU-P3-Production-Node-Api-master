var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1SurveyQuestion query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"didYouKnowText":"Gerrymandering Lehman","label":"Laughingly experimenters","questionCategoryId":11929,"questionCodeId":68370,"questionGroup":"Concurrently Presbyterians","questionText":"Wonderbra cornflowers","questionTypeId":37255,"requiredAnswer":true,"sortOrder":62270,"surveyId":70743});
  testObjects.push({"didYouKnowText":"Eniwetok gravely","label":"Smuggles Hindustan","questionCategoryId":16348,"questionCodeId":82358,"questionGroup":"Segmentation dermatologist","questionText":"Therapeutically anaesthetics","questionTypeId":59750,"requiredAnswer":true,"sortOrder":33166,"surveyId":9346});
  testObjects.push({"didYouKnowText":"Previewers conventionality","label":"Autobiographies disloyal","questionCategoryId":26157,"questionCodeId":66966,"questionGroup":"Transfixing revering","questionText":"Fruitfulness Aristophanes","questionTypeId":98094,"requiredAnswer":true,"sortOrder":67192,"surveyId":21814});

V1SurveyQuestion.createEach(testObjects).exec(function(err, obj) {
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
		V1SurveyQuestion.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1SurveyQuestion.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1SurveyQuestion.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1SurveyQuestion.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1SurveyQuestion.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_question_by_survey query scope with fields', function(done){
		
    V1SurveyQuestion.create({"didYouKnowText":"Compromise quacked","label":"Explicates semiconductor","questionCategoryId":23244,"questionCodeId":77707,"questionGroup":"Therapeutically Popocatepetl","questionText":"Clairvoyance linguists","questionTypeId":29431,"requiredAnswer":true,"sortOrder":34013,"surveyId":69314}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1SurveyQuestion.getQuestionBySurveyScope({"survey_id":69314}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute delete_survey_question query scope with fields', function(done){
		
    V1SurveyQuestion.create({"didYouKnowText":"Unprofessional declassifying","label":"Turves shortcomings","questionCategoryId":97708,"questionCodeId":92935,"questionGroup":"Disreputable cunningest","questionText":"Journals until","questionTypeId":11946,"requiredAnswer":true,"sortOrder":86961,"surveyId":4345}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1SurveyQuestion.deleteSurveyQuestionScope({"id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
