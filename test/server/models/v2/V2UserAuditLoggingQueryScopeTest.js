var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2UserAuditLogging query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"ipAddress":"Counterclaimed bound","loggedInAt":"1991-06-13 16:57:26 +0000","loggedOutAt":"2005-01-24 23:07:15 +0000","userAgent":"Might sidelined","userId":27975});
  testObjects.push({"ipAddress":"Introduce indoctrination","loggedInAt":"1980-11-25 13:51:19 +0000","loggedOutAt":"1997-08-09 14:28:37 +0000","userAgent":"Transfiguration philosophers","userId":95995});
  testObjects.push({"ipAddress":"Mortification Daimler","loggedInAt":"2000-08-08 08:15:47 +0000","loggedOutAt":"1980-08-26 06:00:25 +0000","userAgent":"Quakes evangelizes","userId":74313});

V2UserAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
		V2UserAuditLogging.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2UserAuditLogging.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2UserAuditLogging.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2UserAuditLogging.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2UserAuditLogging.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute user_audit_export query scope with fields', function(done){
		
    V2UserAuditLogging.create({"ipAddress":"Medina incentives","loggedInAt":"1993-06-06 11:00:16 +0000","loggedOutAt":"1972-05-09 09:31:41 +0000","userAgent":"Radiotelephones faceted","userId":94088}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserAuditLogging.userAuditExportScope({"logged_in_at":null}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
