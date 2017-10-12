var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2ClinicianBlockRandomizer query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"id":16517,"clinicianCodeId":61431,"interventionGroup":"Essex sophistication","patientType":"Quintessence undoing"});
  testObjects.push({"id":62447,"clinicianCodeId":67698,"interventionGroup":"Archaeology refrigerated","patientType":"Embroidering fends"});
  testObjects.push({"id":70571,"clinicianCodeId":84887,"interventionGroup":"Juncos bauds","patientType":"Incrustations Intelsat"});

V2ClinicianBlockRandomizer.createEach(testObjects).exec(function(err, obj) {
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
		V2ClinicianBlockRandomizer.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2ClinicianBlockRandomizer.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2ClinicianBlockRandomizer.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2ClinicianBlockRandomizer.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2ClinicianBlockRandomizer.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute sorted_by_clinic_id query scope', function(done) {
    var value = V2ClinicianBlockRandomizer.sortedByClinicIdScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute filter_by_clinic_id query scope with fields', function(done){
		
    V2ClinicianBlockRandomizer.create({"id":24779,"clinicianCodeId":4019,"interventionGroup":"Upbraids ennoble","patientType":"Controversially sluice"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2ClinicianBlockRandomizer.filterByClinicIdScope({"clinician_code_id":4019}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
