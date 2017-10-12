var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1Video query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"desc":"Pensive synchronizes","isActive":true,"keywords":"Interrogatories candy","length":92583.98312036498,"questionGroup":"Temps oscillation","sortOrder":62195,"sourceVersion":"Rolando rededicate","targetNumber":32797,"title":"Prostration videocassettes","topicId":94076,"videoUrl":"Rosemary insurmountable"});
  testObjects.push({"desc":"Multitasking preventatives","isActive":false,"keywords":"Amphitheaters miscounts","length":37859.5628039943,"questionGroup":"Confidentiality cordoning","sortOrder":35994,"sourceVersion":"Theorizes tablespoonfuls","targetNumber":43047,"title":"Klaus gearwheel","topicId":82872,"videoUrl":"Relent Cassius"});
  testObjects.push({"desc":"Insignificantly deadpan","isActive":false,"keywords":"Scrutiny Snead","length":42349.84525786621,"questionGroup":"Bangladesh fortuitously","sortOrder":7772,"sourceVersion":"Banes Rhineland","targetNumber":79962,"title":"Cruets Gospels","topicId":28565,"videoUrl":"Disinterestedly momentarily"});

V1Video.createEach(testObjects).exec(function(err, obj) {
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
		V1Video.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1Video.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1Video.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1Video.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1Video.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute search_video_scoped_by_race_edu query scope with fields', function(done){
		
    V1Video.create({"desc":"Retrogressive biochemical","isActive":false,"keywords":"Labor breadwinners","length":86292.24977903387,"questionGroup":"Misapprehension grave","sortOrder":66533,"sourceVersion":"Cantaloupes carver","targetNumber":80847,"title":"During Toledos","topicId":75974,"videoUrl":"Grouches underscores"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1Video.searchVideoScopedByRaceEduScope({"is_active":false}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute search_video_by_keyword query scope with fields', function(done){
		
    V1Video.create({"desc":"Sarawak mantel","isActive":false,"keywords":"Monomania nagging","length":83193.99631857598,"questionGroup":"Boggy drachmai","sortOrder":8528,"sourceVersion":"Quietus solitaries","targetNumber":9801,"title":"Disencumbering insolvents","topicId":5339,"videoUrl":"Brainstorm quotas"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1Video.searchVideoByKeywordScope({"is_active":false}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute sorted_by_name query scope with fields', function(done){
		
    V1Video.create({"desc":"Telephones seducers","isActive":true,"keywords":"Tackier Nunki","length":33849.946339403505,"questionGroup":"Recapitulations commemorating","sortOrder":50081,"sourceVersion":"Novas scarcity","targetNumber":31628,"title":"Singsonging accelerators","topicId":99694,"videoUrl":"Hummingbird housebreak"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1Video.sortedByNameScope({"is_active":true}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute video_gallery query scope with fields', function(done){
		
    V1Video.create({"desc":"Gloamings conduction","isActive":true,"keywords":"Proposition chipmunks","length":81696.6456590159,"questionGroup":"Frustrations teleconferenced","sortOrder":7228,"sourceVersion":"Beans consolidation","targetNumber":29956,"title":"Essays kindergarteners","topicId":53772,"videoUrl":"Accompanists scintillate"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1Video.videoGalleryScope({"is_active":true}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
