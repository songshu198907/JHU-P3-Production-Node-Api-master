var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2SurveyQuestion query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"didYouKnowText":"Impairing immortality","label":"Domed notwithstanding","questionCategoryId":99708,"questionCodeId":12606,"questionGroup":"Correctives contemplatives","questionText":"Prentice crossbows","questionTypeId":96408,"requiredAnswer":false,"sortOrder":2192,"surveyId":90945});
  testObjects.push({"didYouKnowText":"Pounce stratospheres","label":"Fluoridating disambiguation","questionCategoryId":59650,"questionCodeId":83790,"questionGroup":"Invertebrates hates","questionText":"Oxfords stepfather","questionTypeId":98776,"requiredAnswer":false,"sortOrder":19641,"surveyId":19543});
  testObjects.push({"didYouKnowText":"Displayable proofreaders","label":"Discrimination embryologists","questionCategoryId":4714,"questionCodeId":59347,"questionGroup":"Bureaucracy demoralization","questionText":"Telegraphing prefectures","questionTypeId":78203,"requiredAnswer":true,"sortOrder":10065,"surveyId":72513});

V2SurveyQuestion.createEach(testObjects).exec(function(err, obj) {
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
		V2SurveyQuestion.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2SurveyQuestion.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2SurveyQuestion.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2SurveyQuestion.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2SurveyQuestion.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_question_by_survey query scope with fields', function(done){
		
    V2SurveyQuestion.create({"didYouKnowText":"Jeopardizing psychopaths","label":"Unsatisfactory improprieties","questionCategoryId":31710,"questionCodeId":164,"questionGroup":"Archest mollification","questionText":"Corpus calfs","questionTypeId":65338,"requiredAnswer":false,"sortOrder":83058,"surveyId":59652}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2SurveyQuestion.getQuestionBySurveyScope({"survey_id":59652}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute delete_survey_question query scope with fields', function(done){
		
    V2SurveyQuestion.create({"didYouKnowText":"Reapportioning paupers","label":"Lampoon Trinidad","questionCategoryId":61079,"questionCodeId":60391,"questionGroup":"Irrecoverable Bullwinkle","questionText":"Abates cowboys","questionTypeId":50528,"requiredAnswer":true,"sortOrder":57438,"surveyId":89670}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2SurveyQuestion.deleteSurveyQuestionScope({"id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute get_question_by_question_code query scope with fields', function(done){
		
    V2SurveyQuestion.create({"didYouKnowText":"Contentiously insufficiently","label":"Personifies unfeelingly","questionCategoryId":7692,"questionCodeId":41268,"questionGroup":"Transversely authenticates","questionText":"Saxons Cantor","questionTypeId":43253,"requiredAnswer":true,"sortOrder":57883,"surveyId":58904}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2SurveyQuestion.getQuestionByQuestionCodeScope({"question_code_id":41268}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
