var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1Survey query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"interventionGroup":"Mallory bigamy","isActive":true,"name":"Argentina Willms","patientType":44014,"surveyType":"Prospectuses dumbwaiter","totalQuestions":53975,"version":99898});
  testObjects.push({"interventionGroup":"Reconsideration superber","isActive":true,"name":"Courtney Hermann","patientType":15316,"surveyType":"Disbarment communicators","totalQuestions":66216,"version":26012});
  testObjects.push({"interventionGroup":"Resistors aerodynamically","isActive":false,"name":"Bret Kling","patientType":45442,"surveyType":"Conscription dullest","totalQuestions":42281,"version":60882});

V1Survey.createEach(testObjects).exec(function(err, obj) {
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
		V1Survey.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1Survey.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1Survey.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1Survey.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1Survey.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute create_copy query scope with fields', function(done){
		
    V1Survey.create({"interventionGroup":"Standardization recompenses","isActive":true,"name":"Karleen Crist","patientType":24298,"surveyType":"Bella chocolates","totalQuestions":97392,"version":2610}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1Survey.createCopyScope({"survey_id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute active_surveys_by_type_patient query scope with fields', function(done){
		
    V1Survey.create({"interventionGroup":"Metacarpals scubaed","isActive":false,"name":"Stewart DuBuque","patientType":88215,"surveyType":"Refreshments praised","totalQuestions":39744,"version":69804,"is_active":true}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1Survey.activeSurveysByTypePatientScope({"survey_type":"Refreshments praised","patient_type":88215,"is_active":false,"id":null}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });
	it('should successfully execute get_sorted_surveys query scope', function(done) {
    var value = V1Survey.getSortedSurveysScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute delete_survey query scope with fields', function(done){
		
    V1Survey.create({"interventionGroup":"Predispositions refreshments","isActive":false,"name":"Teri Schimmel","patientType":6374,"surveyType":"Click Malaysians","totalQuestions":21756,"version":66442}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1Survey.deleteSurveyScope({"id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute generate_csv_results query scope with fields', function(done){
		
    V1Survey.create({"interventionGroup":"Jonahs persuasiveness","isActive":false,"name":"Noriko Gleichner","patientType":32807,"surveyType":"Dehydrating metamorphic","totalQuestions":39424,"version":59742}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1Survey.generateCsvResultsScope({"id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
