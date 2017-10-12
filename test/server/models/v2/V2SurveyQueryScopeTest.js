var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2Survey query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"interventionGroup":"Noninterference Novokuznetsk","isActive":true,"name":"Perry Donnelly","patientType":78880,"surveyType":"Ronny nymph","totalQuestions":24694,"version":63511});
  testObjects.push({"interventionGroup":"Discriminatory valentines","isActive":false,"name":"Jarod Lebsack","patientType":11099,"surveyType":"Stratosphere certificating","totalQuestions":82777,"version":78530});
  testObjects.push({"interventionGroup":"Amplifications hallucinogenics","isActive":false,"name":"Aide Rolfson","patientType":10023,"surveyType":"Kremlinologist revolutionizes","totalQuestions":45568,"version":56253});

V2Survey.createEach(testObjects).exec(function(err, obj) {
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
		V2Survey.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2Survey.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2Survey.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2Survey.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2Survey.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute create_copy query scope with fields', function(done){
		
    V2Survey.create({"interventionGroup":"Chumash superintendency","isActive":true,"name":"Faustina Will","patientType":85502,"surveyType":"Ultrasonically Zechariah","totalQuestions":67534,"version":50833}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2Survey.createCopyScope({"survey_id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute active_surveys_by_type_patient query scope with fields', function(done){
		
    V2Survey.create({"interventionGroup":"Mortgagees foreshortening","isActive":true,"name":"Patty Torp","patientType":57403,"surveyType":"Nihilists invariable","totalQuestions":32419,"version":93194,"is_active":true}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2Survey.activeSurveysByTypePatientScope({"survey_type":"Nihilists invariable","patient_type":57403,"is_active":true,"id":null}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });
	it('should successfully execute get_sorted_surveys query scope', function(done) {
    var value = V2Survey.getSortedSurveysScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute delete_survey query scope with fields', function(done){
		
    V2Survey.create({"interventionGroup":"Sucker jackhammers","isActive":false,"name":"Angla Maggio","patientType":11655,"surveyType":"Romany carryout","totalQuestions":96348,"version":56594}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2Survey.deleteSurveyScope({"id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute generate_csv_results query scope with fields', function(done){
		
    V2Survey.create({"interventionGroup":"Arbitrators nonprescription","isActive":true,"name":"Mohammed Hudson","patientType":46659,"surveyType":"Offers silence","totalQuestions":76526,"version":89331}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2Survey.generateCsvResultsScope({"id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
