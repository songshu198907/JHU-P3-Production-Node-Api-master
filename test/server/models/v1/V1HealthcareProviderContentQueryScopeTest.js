var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1HealthcareProviderContent query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"categoryGroup":"Unobjectionable Amerindians","desc":"Brownout property","externalLink":"Leigh inconspicuous","keywords":"Perambulating germanium","title":"Motocross ramps","topicId":42423});
  testObjects.push({"categoryGroup":"Arches correspondingly","desc":"Plowshares postpartum","externalLink":"Gulled smith","keywords":"Incitement goosed","title":"Aftershaves venturous","topicId":1320});
  testObjects.push({"categoryGroup":"Singleton Encarta","desc":"Correspondences Quito","externalLink":"Samaritans lithographing","keywords":"Benevolently prompting","title":"Totalitarians atherosclerosis","topicId":64977});

V1HealthcareProviderContent.createEach(testObjects).exec(function(err, obj) {
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
		V1HealthcareProviderContent.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1HealthcareProviderContent.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1HealthcareProviderContent.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1HealthcareProviderContent.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1HealthcareProviderContent.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute search_content query scope', function(done) {
    var value = V1HealthcareProviderContent.searchContentScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute sorted_by_name query scope with fields', function(done){
		
    V1HealthcareProviderContent.create({"categoryGroup":"Appleton Goldwater","desc":"Numerate Palembang","externalLink":"Premenstrual prevaricators","keywords":"Thoughtlessness crucifixions","title":"Spontaneously Sanforized","topicId":36603}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1HealthcareProviderContent.sortedByNameScope({"category_group":"Appleton Goldwater"}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute filter_by_category_group query scope with fields', function(done){
		
    V1HealthcareProviderContent.create({"categoryGroup":"Sexiest crystallography","desc":"Closefisted malnutrition","externalLink":"Linen roadblocks","keywords":"Signification fearlessness","title":"Scatterbrained pouting","topicId":2865}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1HealthcareProviderContent.filterByCategoryGroupScope({"category_group":"Sexiest crystallography"}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
