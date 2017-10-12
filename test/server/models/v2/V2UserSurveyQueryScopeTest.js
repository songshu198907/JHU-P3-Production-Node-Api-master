var assert = require('assert');
var util = require('util');

var objects = null;

describe('V2UserSurvey query scopes', function() {

  beforeEach( function(done){
	objects = [];
var testObjects = [];
  testObjects.push({"completedAt":"Hectically impossibilities","completition":83518,"createdAt":"2012-02-05 20:25:56 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":71237,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Prate young","maternalVideoPosition":80890.93341388133,"pediatricVideoComplete":false,"pediatricVideoNumber":"Spitefully inconstant","pediatricVideoPosition":35339.324387647364,"questionCount":616,"secondReminder":true,"surveyId":19065,"userId":70067,"videoSourceVersion":"Sultriest fingerprinting"});
  testObjects.push({"completedAt":"Durably acclimating","completition":77120,"createdAt":"2007-03-17 06:54:59 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":52286,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Nazca revalued","maternalVideoPosition":97463.11136187294,"pediatricVideoComplete":false,"pediatricVideoNumber":"Redevelopment straightness","pediatricVideoPosition":74682.0982729398,"questionCount":39400,"secondReminder":true,"surveyId":89402,"userId":95998,"videoSourceVersion":"Retrogresses malfunctioning"});
  testObjects.push({"completedAt":"Shared servomechanism","completition":35410,"createdAt":"1987-10-06 06:11:10 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":29782,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Modified steppingstones","maternalVideoPosition":58376.404232751214,"pediatricVideoComplete":true,"pediatricVideoNumber":"Extrinsically discolorations","pediatricVideoPosition":18257.93457867348,"questionCount":94952,"secondReminder":true,"surveyId":98836,"userId":95211,"videoSourceVersion":"Nonsectarian discombobulated"});

V2UserSurvey.createEach(testObjects).exec(function(err, obj) {
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
		V2UserSurvey.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

		done();
	});


	it('should successfully execute all query scope', function(done) {
    var value = V2UserSurvey.allScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute exact_match query scope', function(done) {
    var value = V2UserSurvey.exactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
      assert(util.isArray(results), "Expected array for results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count query scope', function(done) {
    var value = V2UserSurvey.countScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});
	it('should successfully execute count_exact_match query scope', function(done) {
    var value = V2UserSurvey.countExactMatchScope().exec(function (err, results){
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
		
      assert(results, "Received undefined results " + util.inspect(results));
		
      done(err);
		});
	});

  it('should successfully execute get_patients_survey query scope with fields', function(done){
		
    V2UserSurvey.create({"completedAt":"Aztec levitation","completition":81199,"createdAt":"1993-09-03 08:31:27 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":15850,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Impersonations meticulousness","maternalVideoPosition":85760.57807013004,"pediatricVideoComplete":true,"pediatricVideoNumber":"Stael Burris","pediatricVideoPosition":19441.464290783053,"questionCount":85507,"secondReminder":false,"surveyId":31573,"userId":30747,"videoSourceVersion":"Staten arson"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurvey.getPatientsSurveyScope({}, {"id":30747}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute getfirstquestion query scope with fields', function(done){
		
    V2UserSurvey.create({"completedAt":"Yodeling murkiest","completition":84342,"createdAt":"2007-12-15 06:52:08 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":14948,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":true,"maternalVideoNumber":"Underestimating arising","maternalVideoPosition":59720.9717184251,"pediatricVideoComplete":false,"pediatricVideoNumber":"Muggier appoints","pediatricVideoPosition":48978.480873760775,"questionCount":4063,"secondReminder":false,"surveyId":68748,"userId":16993,"videoSourceVersion":"Argentinians bookshelves"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurvey.getfirstquestionScope({"usersurveyid":0}, {"id":16993}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute compelete_survey query scope with fields', function(done){
		
    V2UserSurvey.create({"completedAt":"Robust rattletraps","completition":37607,"createdAt":"1986-10-15 09:07:39 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":63661,"firstReminder":false,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Dereliction lampooning","maternalVideoPosition":74268.942827825,"pediatricVideoComplete":true,"pediatricVideoNumber":"Metamorphosis thunderstorm","pediatricVideoPosition":895.8135322564561,"questionCount":25174,"secondReminder":true,"surveyId":12159,"userId":48910,"videoSourceVersion":"Quadruplicates autobiographies"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurvey.compeleteSurveyScope({"usersurveyid":0}, {"id":48910}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute get_video_survey query scope with fields', function(done){
		
    V2UserSurvey.create({"completedAt":"Prostrating versatile","completition":69273,"createdAt":"1978-05-08 10:14:47 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":48227,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Partied seeking","maternalVideoPosition":49483.31339501744,"pediatricVideoComplete":false,"pediatricVideoNumber":"Antidepressant distances","pediatricVideoPosition":62056.95023795417,"questionCount":99564,"secondReminder":true,"surveyId":30232,"userId":42345,"videoSourceVersion":"Interpolations numberless"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurvey.getVideoSurveyScope({"user_survey_id":0}, {"user_id":42345}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute check_survey_exists query scope with fields', function(done){
		
    V2UserSurvey.create({"completedAt":"Monotheistic fieriness","completition":54253,"createdAt":"1998-06-04 02:53:04 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":91840,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Elegant inconsistencies","maternalVideoPosition":3306.2464840122466,"pediatricVideoComplete":false,"pediatricVideoNumber":"Capitols argued","pediatricVideoPosition":42313.101772413575,"questionCount":86703,"secondReminder":false,"surveyId":68034,"userId":10649,"videoSourceVersion":"Agassiz Bridgeport"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurvey.checkSurveyExistsScope({"survey_id":68034}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute check_survey_count query scope with fields', function(done){
		
    V2UserSurvey.create({"completedAt":"Maniacal industrializing","completition":52952,"createdAt":"2006-12-24 07:18:44 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":94247,"firstReminder":true,"isComplete":false,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Unbearably misapprehending","maternalVideoPosition":51165.28118080005,"pediatricVideoComplete":true,"pediatricVideoNumber":"Harbinger nearsightedness","pediatricVideoPosition":8415.745291443316,"questionCount":8728,"secondReminder":false,"surveyId":63138,"userId":68624,"videoSourceVersion":"Execs Huguenot"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurvey.checkSurveyCountScope({"survey_id":63138}, {}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

  it('should successfully execute generate_csv_results query scope with fields', function(done){
		
    V2UserSurvey.create({"completedAt":"Materialization japanning","completition":28637,"createdAt":"1995-01-07 18:16:36 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":87222,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Raggedy videotaping","maternalVideoPosition":78167.10651843372,"pediatricVideoComplete":true,"pediatricVideoNumber":"Contraception shadowing","pediatricVideoPosition":6643.135598362267,"questionCount":44854,"secondReminder":false,"surveyId":71241,"userId":68761,"videoSourceVersion":"Sways airings"}).exec(function(err, obj) {
      assert(!err, "Received error " + util.inspect(err, {depth: null}));
			assert(obj,"Failed to create object " + util.inspect(obj));
			
      V2UserSurvey.generateCsvResultsScope({"clinic_name":"Sways airings"}, {"id":68761}).exec(function(err, results) {
        assert(!err, "Received error " + util.inspect(err, {depth: null}));
        assert(results, "Expected results not to be null");
        done(err);
			});
		});
  });

});
