var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1ClinicianBlockRandomizer query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"id":12247,"clinicianCodeId":19039,"interventionGroup":"Allan utterances","patientType":"Chairlifts superhighways"});
  testObjects.push({"id":47263,"clinicianCodeId":46597,"interventionGroup":"Feather decontaminating","patientType":"Spectacularly encephalitis"});
  testObjects.push({"id":95966,"clinicianCodeId":70199,"interventionGroup":"Teleconferences unromantic","patientType":"Stonewall arithmetically"});

V1ClinicianBlockRandomizer.createEach(testObjects).exec(function(err, obj) {
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
		V1ClinicianBlockRandomizer.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1ClinicianBlockRandomizer.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1ClinicianBlockRandomizer.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1ClinicianBlockRandomizer.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1ClinicianBlockRandomizer.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute sorted_by_clinic_id query scope', function(done) {
    var value = V1ClinicianBlockRandomizer.sortedByClinicIdScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute filter_by_clinic_id query scope with fields', function(done){
		
    V1ClinicianBlockRandomizer.create({"id":715,"clinicianCodeId":64144,"interventionGroup":"Futzing intense","patientType":"Catchings pause"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1ClinicianBlockRandomizer.filterByClinicIdScope({"clinician_code_id":64144}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
