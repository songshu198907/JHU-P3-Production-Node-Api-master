var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2Video query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"desc":"Precautionary tastiest","isActive":true,"keywords":"Authority manipulative","length":84076.74448370635,"questionGroup":"Robyn Clouseau","sortOrder":16455,"sourceVersion":"Basked counterexamples","targetNumber":60781,"title":"Occupies compulsorily","topicId":39886,"videoUrl":"Augmentations reconcilable"});
  testObjects.push({"desc":"Experiments laughingstock","isActive":true,"keywords":"Jaundices snack","length":17466.88141078651,"questionGroup":"Mouthwatering premeditated","sortOrder":69810,"sourceVersion":"Documented medium","targetNumber":82282,"title":"Transfiguration imaginable","topicId":51885,"videoUrl":"Excruciating chocking"});
  testObjects.push({"desc":"Caparisoning shriven","isActive":true,"keywords":"Rubiest individualizing","length":4920.221843158952,"questionGroup":"Alderwoman emotive","sortOrder":92841,"sourceVersion":"Gentry newsworthiest","targetNumber":46384,"title":"Ridiculousness isolationists","topicId":35040,"videoUrl":"Asphyxiations depredations"});

V2Video.createEach(testObjects).exec(function(err, obj) {
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
		V2Video.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2Video.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2Video.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2Video.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2Video.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute search_video_scoped_by_race_edu query scope with fields', function(done){
		
    V2Video.create({"desc":"Meets effervescence","isActive":true,"keywords":"Clownish servers","length":39870.69983289289,"questionGroup":"Laxly reorganizes","sortOrder":42277,"sourceVersion":"Puritanically illogical","targetNumber":83215,"title":"Unlikeliest debriefings","topicId":90402,"videoUrl":"Foresworn sloths"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2Video.searchVideoScopedByRaceEduScope({"is_active":true}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute search_video_by_keyword query scope with fields', function(done){
		
    V2Video.create({"desc":"Woolgathering subtractions","isActive":true,"keywords":"Clint creakier","length":48293.798952361096,"questionGroup":"Priories heart","sortOrder":9759,"sourceVersion":"Consortia tonsillectomies","targetNumber":67975,"title":"Sties atherosclerosis","topicId":40345,"videoUrl":"Smattering misplacing"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2Video.searchVideoByKeywordScope({"is_active":true}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute sorted_by_name query scope with fields', function(done){
		
    V2Video.create({"desc":"Pericardiums heathenish","isActive":true,"keywords":"Stalks burnish","length":50408.08498413723,"questionGroup":"Conscientiously sahib","sortOrder":67857,"sourceVersion":"Argumentative irritated","targetNumber":74655,"title":"Galaxy reinstatement","topicId":61660,"videoUrl":"Supplementing demoing"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2Video.sortedByNameScope({"is_active":true}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute video_gallery query scope with fields', function(done){
		
    V2Video.create({"desc":"Geese frogs","isActive":false,"keywords":"Businesswoman reexamines","length":523.9352485804433,"questionGroup":"Negates justifications","sortOrder":60114,"sourceVersion":"Awfulness sidekick","targetNumber":34843,"title":"Incorrigibility exodus","topicId":9620,"videoUrl":"Contractors quadruplicating"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2Video.videoGalleryScope({"is_active":false}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
