var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2VideoAuditLogging query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"createdAt":"2016-07-13 08:38:44 +0000","duration":37562.31681521314,"userId":99040,"videoId":4894,"watchedEntireVideo":true});
  testObjects.push({"createdAt":"1977-07-04 00:24:59 +0000","duration":58820.53192404969,"userId":14918,"videoId":10518,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"1974-07-23 22:54:00 +0000","duration":61042.29213855606,"userId":99665,"videoId":87663,"watchedEntireVideo":true});

V2VideoAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
		V2VideoAuditLogging.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2VideoAuditLogging.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2VideoAuditLogging.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2VideoAuditLogging.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2VideoAuditLogging.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute export_video_log query scope with fields', function(done){
		
    V2VideoAuditLogging.create({"createdAt":"1979-10-14 10:54:20 +0000","duration":40902.46475612663,"userId":78946,"videoId":97213,"watchedEntireVideo":true}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2VideoAuditLogging.exportVideoLogScope({"created_at":null}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute by_video_and_user_id query scope with fields', function(done){
		
    V2VideoAuditLogging.create({"createdAt":"1981-04-03 20:37:59 +0000","duration":30738.547180353515,"userId":36787,"videoId":2237,"watchedEntireVideo":true}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2VideoAuditLogging.byVideoAndUserIdScope({"user_id":36787,"video_id":2237}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
