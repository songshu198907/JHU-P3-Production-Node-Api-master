var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1UserAuditLogging query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"ipAddress":"Controverted pellucid","loggedInAt":"1980-07-30 19:02:05 +0000","loggedOutAt":"1978-07-09 02:50:17 +0000","userAgent":"Defiantly unceremoniously","userId":76206});
  testObjects.push({"ipAddress":"Gamekeepers editorializes","loggedInAt":"2010-03-24 07:26:39 +0000","loggedOutAt":"2008-12-04 10:17:25 +0000","userAgent":"Featherweights tranquilizing","userId":18284});
  testObjects.push({"ipAddress":"Earls heartlessness","loggedInAt":"1998-08-17 14:49:31 +0000","loggedOutAt":"1983-02-17 06:38:58 +0000","userAgent":"Sectional scars","userId":46941});

V1UserAuditLogging.createEach(testObjects).exec(function(err, obj) {
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
		V1UserAuditLogging.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1UserAuditLogging.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1UserAuditLogging.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1UserAuditLogging.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1UserAuditLogging.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute user_audit_export query scope with fields', function(done){
		
    V1UserAuditLogging.create({"ipAddress":"Credenza sunburning","loggedInAt":"2008-11-17 12:52:45 +0000","loggedOutAt":"1986-06-05 06:57:40 +0000","userAgent":"Infirmities undersides","userId":96223}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserAuditLogging.userAuditExportScope({"logged_in_at":null}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
