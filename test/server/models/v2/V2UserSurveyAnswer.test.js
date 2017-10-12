  var assert = require('assert');
var adapter = require('sails-memory');
var _ = require('lodash');


describe('V2UserSurveyAnswer Model', function() {

  afterEach(function() {
    V2UserSurveyAnswer.destroy();
  });

  beforeEach(function() {
    // Drop existing collections
    
      adapter.drop('memory', 'clinic_block_randomizer', [], function() {})
    
      adapter.drop('memory', 'clinician_codes', [], function() {})
    
      adapter.drop('memory', 'educations', [], function() {})
    
      adapter.drop('memory', 'healthcare_provider_contents', [], function() {})
    
      adapter.drop('memory', 'job_audit_logging', [], function() {})
    
      adapter.drop('memory', 'question_categories', [], function() {})
    
      adapter.drop('memory', 'question_codes', [], function() {})
    
      adapter.drop('memory', 'question_types', [], function() {})
    
      adapter.drop('memory', 'races', [], function() {})
    
      adapter.drop('memory', 'search_audit_logging', [], function() {})
    
      adapter.drop('memory', 'SendGrid', [], function() {})
    
      adapter.drop('memory', 'settings', [], function() {})
    
      adapter.drop('memory', 'surveys', [], function() {})
    
      adapter.drop('memory', 'survey_answers', [], function() {})
    
      adapter.drop('memory', 'survey_questions', [], function() {})
    
      adapter.drop('memory', 'survey_question_skip_logic', [], function() {})
    
      adapter.drop('memory', 'topics', [], function() {})
    
      adapter.drop('memory', 'Twilio', [], function() {})
    
      adapter.drop('memory', 'users', [], function() {})
    
      adapter.drop('memory', 'user_audit_logging', [], function() {})
    
      adapter.drop('memory', 'user_surveys', [], function() {})
    
      adapter.drop('memory', 'user_survey_answers', [], function() {})
    
      adapter.drop('memory', 'user_survey_videos', [], function() {})
    
      adapter.drop('memory', 'vaccination_reminders', [], function() {})
    
      adapter.drop('memory', 'videos', [], function() {})
    
      adapter.drop('memory', 'video_audit_logging', [], function() {})
    
    // Recreate collections
    
      adapter.define('memory', 'clinic_block_randomizer', V2ClinicianBlockRandomizer.attributes, function() {})
    
      adapter.define('memory', 'clinician_codes', V2ClinicianCode.attributes, function() {})
    
      adapter.define('memory', 'educations', V2Education.attributes, function() {})
    
      adapter.define('memory', 'healthcare_provider_contents', V2HealthcareProviderContent.attributes, function() {})
    
      adapter.define('memory', 'job_audit_logging', V2JobAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'question_categories', V2QuestionCategory.attributes, function() {})
    
      adapter.define('memory', 'question_codes', V2QuestionCode.attributes, function() {})
    
      adapter.define('memory', 'question_types', V2QuestionType.attributes, function() {})
    
      adapter.define('memory', 'races', V2Race.attributes, function() {})
    
      adapter.define('memory', 'search_audit_logging', V2SearchAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'SendGrid', V2SendGrid.attributes, function() {})
    
      adapter.define('memory', 'settings', V2Setting.attributes, function() {})
    
      adapter.define('memory', 'surveys', V2Survey.attributes, function() {})
    
      adapter.define('memory', 'survey_answers', V2SurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'survey_questions', V2SurveyQuestion.attributes, function() {})
    
      adapter.define('memory', 'survey_question_skip_logic', V2SurveyQuestionSkipLogic.attributes, function() {})
    
      adapter.define('memory', 'topics', V2Topic.attributes, function() {})
    
      adapter.define('memory', 'Twilio', V2Twilio.attributes, function() {})
    
      adapter.define('memory', 'users', V2User.attributes, function() {})
    
      adapter.define('memory', 'user_audit_logging', V2UserAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'user_surveys', V2UserSurvey.attributes, function() {})
    
      adapter.define('memory', 'user_survey_answers', V2UserSurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'user_survey_videos', V2UserSurveyVideo.attributes, function() {})
    
      adapter.define('memory', 'vaccination_reminders', V2VaccinationReminder.attributes, function() {})
    
      adapter.define('memory', 'videos', V2Video.attributes, function() {})
    
      adapter.define('memory', 'video_audit_logging', V2VideoAuditLogging.attributes, function() {})
    
  });

  it('should successfully create an instance of V2UserSurveyAnswer', function(done) {
    var beforeCount;

    V2UserSurveyAnswer.count()
      .then(function(count) {
        beforeCount = count;
        return V2UserSurveyAnswer.create({"appliedSkipLogicId":97306,"freeFormResponse":"Chitchatted tacky","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":39020,"questionGroup":"Prism shortish","questionOrder":82670,"skipped":false,"surveyAnswerId":16401,"surveyQuestionId":90111,"userSurveyId":41864});
      })
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        return V2UserSurveyAnswer.count();
      })
      .then(function(count) {
        assert(count > beforeCount, 'Expected create to increase object count.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully read an instance of V2UserSurveyAnswer', function(done) {

    var attributes = {"appliedSkipLogicId":49943,"freeFormResponse":"Craftsmanship totems","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":59202,"questionGroup":"Created ashen","questionOrder":92192,"skipped":true,"surveyAnswerId":61030,"surveyQuestionId":17353,"userSurveyId":86505};
    var id;

    if (attributes && Object.keys(attributes).length !== 0) {
      V2UserSurveyAnswer.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V2UserSurveyAnswer.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          id = obj.id;
          return V2UserSurveyAnswer.findOne({'id':obj.id});
        })
        .then(function(obj) {
          assert(obj, 'Expected to find a model with id ' + id + '.');
          done();
        })
        .catch(function (exception) {
          done(exception);
        });
      } else {
        done();
      }
  });

  it('should successfully update an instance of V2UserSurveyAnswer', function(done) {
    var attributes = {"appliedSkipLogicId":6156,"freeFormResponse":"Asthmatic demonstrating","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":69335,"questionGroup":"Launder iterated","questionOrder":86830,"skipped":true,"surveyAnswerId":90644,"surveyQuestionId":38239,"userSurveyId":65799};
    var updatedObject;

    V2UserSurveyAnswer.create(attributes)
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        var attributes = {"appliedSkipLogicId":63206,"freeFormResponse":"Desalinating demagnetizing","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":73994,"questionGroup":"Califs enfranchising","questionOrder":70404,"skipped":true,"surveyAnswerId":83287,"surveyQuestionId":43383,"userSurveyId":71095};
        return V2UserSurveyAnswer.update(obj.id, attributes);
      })
      .then(function(collection) {
        updatedObject = collection[0];
        assert(updatedObject, 'Failed to update object.');
        return V2UserSurveyAnswer.findOne({'id':updatedObject.id});
      })
      .then(function(obj) {
        assert(obj.id === updatedObject.id, 'Expected to find the instance just created.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully destroy an instance of V2UserSurveyAnswer', function(done) {

    var attributes = {"appliedSkipLogicId":81800,"freeFormResponse":"Weepy Ramses","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":79241,"questionGroup":"Shirtsleeves relocated","questionOrder":14387,"skipped":true,"surveyAnswerId":72023,"surveyQuestionId":5387,"userSurveyId":93545};

    if (attributes && Object.keys(attributes).length !== 0) {
      V2UserSurveyAnswer.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V2UserSurveyAnswer.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          return V2UserSurveyAnswer.destroy(obj.id);
        })
        .then(function(collection) {
          assert(collection.length === 1, 'Expected to destroy the instance just created.');
          done();
        })
        .catch(function (exception) {
          done(exception);
        });
      } else{
          done();
      }
  });
  
    

  it('should have the correct transientAttributes', function() {
    assert(V2UserSurveyAnswer.transientAttributes.indexOf('nextquestion') !== -1);
  });

  it('should have a getter', function() {
    assert(V2UserSurveyAnswer.attributes['getNextquestion']);
  });

  

  it('should have the correct transientAttributes', function() {
    assert(V2UserSurveyAnswer.transientAttributes.indexOf('previousquestion') !== -1);
  });

  it('should have a getter', function() {
    assert(V2UserSurveyAnswer.attributes['getPreviousquestion']);
  });

  

  it('should have the correct transientAttributes', function() {
    assert(V2UserSurveyAnswer.transientAttributes.indexOf('questionGroup') !== -1);
  });

  it('should have a getter', function() {
    assert(V2UserSurveyAnswer.attributes['getQuestionGroup']);
  });

  


  
  describe('custom callbacks', function() {
    it('should have a callbacks object', function() {
      assert(V2UserSurveyAnswer.callbacks, 'V2UserSurveyAnswer is missing the callbacks object');
    });

    
      

      it('should contain "beforeCreate" callback', function() {
        assert(V2UserSurveyAnswer.callbacks['beforeCreate'], 'beforeCreate is missing.');
      });

      it('"beforeCreate" callback should be a function', function() {
      assert(_.isFunction(V2UserSurveyAnswer.callbacks['beforeCreate']), 'beforeCreate should be a function.');
    });
    
      

      it('should contain "afterCreate" callback', function() {
        assert(V2UserSurveyAnswer.callbacks['afterCreate'], 'afterCreate is missing.');
      });

      it('"afterCreate" callback should be a function', function() {
      assert(_.isFunction(V2UserSurveyAnswer.callbacks['afterCreate']), 'afterCreate should be a function.');
    });
    
      

      it('should contain "beforeFind" callback', function() {
        assert(V2UserSurveyAnswer.callbacks['beforeFind'], 'beforeFind is missing.');
      });

      it('"beforeFind" callback should be a function', function() {
      assert(_.isFunction(V2UserSurveyAnswer.callbacks['beforeFind']), 'beforeFind should be a function.');
    });
    
      

      it('should contain "afterFind" callback', function() {
        assert(V2UserSurveyAnswer.callbacks['afterFind'], 'afterFind is missing.');
      });

      it('"afterFind" callback should be a function', function() {
      assert(_.isFunction(V2UserSurveyAnswer.callbacks['afterFind']), 'afterFind should be a function.');
    });
    
      

      it('should contain "beforeUpdate" callback', function() {
        assert(V2UserSurveyAnswer.callbacks['beforeUpdate'], 'beforeUpdate is missing.');
      });

      it('"beforeUpdate" callback should be a function', function() {
      assert(_.isFunction(V2UserSurveyAnswer.callbacks['beforeUpdate']), 'beforeUpdate should be a function.');
    });
    
      

      it('should contain "afterUpdate" callback', function() {
        assert(V2UserSurveyAnswer.callbacks['afterUpdate'], 'afterUpdate is missing.');
      });

      it('"afterUpdate" callback should be a function', function() {
      assert(_.isFunction(V2UserSurveyAnswer.callbacks['afterUpdate']), 'afterUpdate should be a function.');
    });
    
      

      it('should contain "beforeDestroy" callback', function() {
        assert(V2UserSurveyAnswer.callbacks['beforeDestroy'], 'beforeDestroy is missing.');
      });

      it('"beforeDestroy" callback should be a function', function() {
      assert(_.isFunction(V2UserSurveyAnswer.callbacks['beforeDestroy']), 'beforeDestroy should be a function.');
    });
    
      

      it('should contain "afterDestroy" callback', function() {
        assert(V2UserSurveyAnswer.callbacks['afterDestroy'], 'afterDestroy is missing.');
      });

      it('"afterDestroy" callback should be a function', function() {
      assert(_.isFunction(V2UserSurveyAnswer.callbacks['afterDestroy']), 'afterDestroy should be a function.');
    });
    
      
      
      
      
      
      
      
      
      
      
  });
});

