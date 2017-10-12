var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2HealthcareProviderContent query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"categoryGroup":"Bobbin sexpots","desc":"Babbler egresses","externalLink":"Cinematographer overweight","keywords":"Printout basely","title":"Denounces glyph","topicId":94573});
  testObjects.push({"categoryGroup":"Incredulously graced","desc":"Thromboses inaugurations","externalLink":"Playbills tempestuousness","keywords":"Polonium independence","title":"Unlooses photojournalism","topicId":12739});
  testObjects.push({"categoryGroup":"Stomping tiptop","desc":"Ghazvanid Timor","externalLink":"Expurgates constitutional","keywords":"Federate lattices","title":"Naturalization drenched","topicId":26946});

V2HealthcareProviderContent.createEach(testObjects).exec(function(err, obj) {
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
		V2HealthcareProviderContent.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2HealthcareProviderContent.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2HealthcareProviderContent.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2HealthcareProviderContent.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2HealthcareProviderContent.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute search_content query scope', function(done) {
    var value = V2HealthcareProviderContent.searchContentScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute sorted_by_name query scope with fields', function(done){
		
    V2HealthcareProviderContent.create({"categoryGroup":"Frigidly federations","desc":"Burned nostalgically","externalLink":"Outsmarted mortgagers","keywords":"Aimlessness misgoverning","title":"Flaky wastepaper","topicId":26307}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2HealthcareProviderContent.sortedByNameScope({"category_group":"Frigidly federations"}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute filter_by_category_group query scope with fields', function(done){
		
    V2HealthcareProviderContent.create({"categoryGroup":"Amphibious ripen","desc":"Dewitt overalls","externalLink":"Necessitates Brubeck","keywords":"Abrupt astrophysicists","title":"Acupuncturists hastiness","topicId":21607}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2HealthcareProviderContent.filterByCategoryGroupScope({"category_group":"Amphibious ripen"}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
