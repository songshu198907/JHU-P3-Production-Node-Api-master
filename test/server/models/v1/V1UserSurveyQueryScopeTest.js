var assert = require('assert');
var util = require('util');

var objects = null;

describe('V1UserSurvey query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"completedAt":"Multicolored Roslyn","completition":15704,"createdAt":"1974-12-09 10:59:42 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":57287,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":30371,"maternalVideoPosition":36800.800179163074,"pediatricVideoComplete":false,"pediatricVideoNumber":32073,"pediatricVideoPosition":99452.6030216892,"questionCount":36083,"secondReminder":true,"surveyId":91949,"userId":97586,"videoSourceVersion":"Presented interconnecting"});
  testObjects.push({"completedAt":"Endearingly maintainable","completition":75238,"createdAt":"1999-10-08 03:16:51 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":64893,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":30524,"maternalVideoPosition":81456.26838605903,"pediatricVideoComplete":true,"pediatricVideoNumber":17450,"pediatricVideoPosition":7180.467563339901,"questionCount":76307,"secondReminder":false,"surveyId":36580,"userId":82707,"videoSourceVersion":"Elohim infinitesimals"});
  testObjects.push({"completedAt":"Crystallizes operands","completition":32468,"createdAt":"2011-07-20 13:08:32 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":85839,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":67645,"maternalVideoPosition":66851.96121057383,"pediatricVideoComplete":false,"pediatricVideoNumber":33926,"pediatricVideoPosition":17500.693394726553,"questionCount":17012,"secondReminder":false,"surveyId":57266,"userId":8746,"videoSourceVersion":"Competencies iambic"});

V1UserSurvey.createEach(testObjects).exec(function(err, obj) {
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
		V1UserSurvey.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V1UserSurvey.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V1UserSurvey.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V1UserSurvey.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V1UserSurvey.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_patients_survey query scope with fields', function(done){
		
    V1UserSurvey.create({"completedAt":"Capitoline grandchildren","completition":55716,"createdAt":"2016-04-04 12:22:32 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":11012,"firstReminder":true,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":94284,"maternalVideoPosition":63747.457085252376,"pediatricVideoComplete":true,"pediatricVideoNumber":53546,"pediatricVideoPosition":31768.2231859614,"questionCount":72673,"secondReminder":false,"surveyId":67815,"userId":20320,"videoSourceVersion":"Prevarication interdependence"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserSurvey.getPatientsSurveyScope({}, {"id":20320}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute getfirstquestion query scope with fields', function(done){
		
    V1UserSurvey.create({"completedAt":"Imperceptibly discoloring","completition":39262,"createdAt":"2016-06-09 05:42:48 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":88680,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":30107,"maternalVideoPosition":59675.71865369366,"pediatricVideoComplete":false,"pediatricVideoNumber":43653,"pediatricVideoPosition":42089.07731661403,"questionCount":65955,"secondReminder":true,"surveyId":51375,"userId":27480,"videoSourceVersion":"Comprehensively mountaineered"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserSurvey.getfirstquestionScope({"usersurveyid":0}, {"id":27480}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute compelete_survey query scope with fields', function(done){
		
    V1UserSurvey.create({"completedAt":"Comeuppance shorn","completition":6103,"createdAt":"1999-11-13 21:01:27 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":51620,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":79775,"maternalVideoPosition":91088.13226480463,"pediatricVideoComplete":false,"pediatricVideoNumber":1220,"pediatricVideoPosition":42857.96149845594,"questionCount":67813,"secondReminder":false,"surveyId":76362,"userId":32776,"videoSourceVersion":"Desideratum advice"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserSurvey.compeleteSurveyScope({"usersurveyid":0}, {"id":32776}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute get_video_survey query scope with fields', function(done){
		
    V1UserSurvey.create({"completedAt":"Deconstructions Oriya","completition":77009,"createdAt":"2014-01-24 14:37:27 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":83636,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":99286,"maternalVideoPosition":3018.6852582717397,"pediatricVideoComplete":true,"pediatricVideoNumber":81722,"pediatricVideoPosition":4828.954065919424,"questionCount":96964,"secondReminder":true,"surveyId":67214,"userId":64415,"videoSourceVersion":"Oxygenated warped"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserSurvey.getVideoSurveyScope({"user_survey_id":0}, {"user_id":64415}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute check_survey_exists query scope with fields', function(done){
		
    V1UserSurvey.create({"completedAt":"Highlighting manliness","completition":22206,"createdAt":"1976-07-23 05:48:23 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":50943,"firstReminder":true,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":86252,"maternalVideoPosition":4787.75390179459,"pediatricVideoComplete":false,"pediatricVideoNumber":31646,"pediatricVideoPosition":207.77560594950663,"questionCount":84377,"secondReminder":true,"surveyId":91246,"userId":89461,"videoSourceVersion":"Musing apostate"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserSurvey.checkSurveyExistsScope({"survey_id":91246}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute check_survey_count query scope with fields', function(done){
		
    V1UserSurvey.create({"completedAt":"Outer Busch","completition":62178,"createdAt":"1977-11-21 23:24:23 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":70753,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":18326,"maternalVideoPosition":5095.924937008782,"pediatricVideoComplete":false,"pediatricVideoNumber":96838,"pediatricVideoPosition":97844.98480958279,"questionCount":70720,"secondReminder":false,"surveyId":48567,"userId":26220,"videoSourceVersion":"Glittery Jacqueline"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserSurvey.checkSurveyCountScope({"survey_id":48567}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute generate_csv_results query scope with fields', function(done){
		
    V1UserSurvey.create({"completedAt":"Sensitiveness acknowledgement","completition":25728,"createdAt":"1978-06-11 00:21:57 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":54551,"firstReminder":true,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":2183,"maternalVideoPosition":14965.774295381943,"pediatricVideoComplete":false,"pediatricVideoNumber":10824,"pediatricVideoPosition":79308.14051740462,"questionCount":82173,"secondReminder":false,"surveyId":63658,"userId":77461,"videoSourceVersion":"Shebang popularity"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V1UserSurvey.generateCsvResultsScope({"clinic_name":"Shebang popularity"}, {"id":77461}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
