var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2UserSurveyVideo query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"isComplete":true,"sortOrder":87466,"userSurveyId":99595,"videoNumber":78131,"videoPosition":36182.391868179795,"videoSourceVersion":"Lionhearted transportation","videoType":"Hospitality disadvantaging"});
  testObjects.push({"isComplete":false,"sortOrder":97650,"userSurveyId":13506,"videoNumber":86548,"videoPosition":24144.272491595606,"videoSourceVersion":"Gridlocks bacteriology","videoType":"Philosophizing reapportioned"});
  testObjects.push({"isComplete":true,"sortOrder":17570,"userSurveyId":63225,"videoNumber":13446,"videoPosition":15461.538936919593,"videoSourceVersion":"Training wirelesses","videoType":"Sweepings atmospherically"});

V2UserSurveyVideo.createEach(testObjects).exec(function(err, obj) {
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
		V2UserSurveyVideo.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2UserSurveyVideo.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2UserSurveyVideo.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2UserSurveyVideo.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2UserSurveyVideo.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_videos_for_user_survey_id query scope with fields', function(done){
		
    V2UserSurveyVideo.create({"isComplete":false,"sortOrder":41512,"userSurveyId":16165,"videoNumber":5233,"videoPosition":72335.54183842918,"videoSourceVersion":"Understating Mendelssohn","videoType":"Heterosexuality Becquerel"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurveyVideo.getVideosForUserSurveyIdScope({"user_survey_id":16165}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute get_video_by_id query scope with fields', function(done){
		
    V2UserSurveyVideo.create({"isComplete":true,"sortOrder":13553,"userSurveyId":33591,"videoNumber":94943,"videoPosition":66354.0697162104,"videoSourceVersion":"Unjustifiable prognosticated","videoType":"Thermoplastics problematically"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurveyVideo.getVideoByIdScope({"video_id":0}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
