var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1VideoAuditLogging query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"createdAt":"2013-07-13 21:15:49 +0000","duration":3600.2281889037763,"userId":38706,"videoId":61229,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"2005-05-06 22:40:22 +0000","duration":15676.764279361552,"userId":89829,"videoId":37388,"watchedEntireVideo":false});
  testObjects.push({"createdAt":"2009-05-23 03:49:54 +0000","duration":85579.34033446098,"userId":70109,"videoId":43679,"watchedEntireVideo":true});

V1VideoAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
		V1VideoAuditLogging.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1VideoAuditLogging.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1VideoAuditLogging.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1VideoAuditLogging.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1VideoAuditLogging.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute export_video_log query scope with fields', function(done){
		
    V1VideoAuditLogging.create({"createdAt":"2012-03-09 08:19:18 +0000","duration":62215.45136582142,"userId":12770,"videoId":10972,"watchedEntireVideo":true}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1VideoAuditLogging.exportVideoLogScope({"created_at":null}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute by_video_and_user_id query scope with fields', function(done){
		
    V1VideoAuditLogging.create({"createdAt":"1973-03-19 05:40:49 +0000","duration":17144.82706064246,"userId":17334,"videoId":6485,"watchedEntireVideo":true}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1VideoAuditLogging.byVideoAndUserIdScope({"user_id":17334,"video_id":6485}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
