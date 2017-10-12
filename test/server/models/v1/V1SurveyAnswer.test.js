  var assert = require('assert');
var adapter = require('sails-memory');
var _ = require('lodash');


describe('V1SurveyAnswer Model', function() {

  afterEach(function() {
    V1SurveyAnswer.destroy();
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
    
      adapter.drop('memory', 'vaccination_reminders', [], function() {})
    
      adapter.drop('memory', 'videos', [], function() {})
    
      adapter.drop('memory', 'video_audit_logging', [], function() {})
    
    // Recreate collections
    
      adapter.define('memory', 'clinic_block_randomizer', V1ClinicianBlockRandomizer.attributes, function() {})
    
      adapter.define('memory', 'clinician_codes', V1ClinicianCode.attributes, function() {})
    
      adapter.define('memory', 'educations', V1Education.attributes, function() {})
    
      adapter.define('memory', 'healthcare_provider_contents', V1HealthcareProviderContent.attributes, function() {})
    
      adapter.define('memory', 'job_audit_logging', V1JobAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'question_categories', V1QuestionCategory.attributes, function() {})
    
      adapter.define('memory', 'question_codes', V1QuestionCode.attributes, function() {})
    
      adapter.define('memory', 'question_types', V1QuestionType.attributes, function() {})
    
      adapter.define('memory', 'races', V1Race.attributes, function() {})
    
      adapter.define('memory', 'search_audit_logging', V1SearchAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'SendGrid', V1SendGrid.attributes, function() {})
    
      adapter.define('memory', 'settings', V1Setting.attributes, function() {})
    
      adapter.define('memory', 'surveys', V1Survey.attributes, function() {})
    
      adapter.define('memory', 'survey_answers', V1SurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'survey_questions', V1SurveyQuestion.attributes, function() {})
    
      adapter.define('memory', 'survey_question_skip_logic', V1SurveyQuestionSkipLogic.attributes, function() {})
    
      adapter.define('memory', 'topics', V1Topic.attributes, function() {})
    
      adapter.define('memory', 'Twilio', V1Twilio.attributes, function() {})
    
      adapter.define('memory', 'users', V1User.attributes, function() {})
    
      adapter.define('memory', 'user_audit_logging', V1UserAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'user_surveys', V1UserSurvey.attributes, function() {})
    
      adapter.define('memory', 'user_survey_answers', V1UserSurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'vaccination_reminders', V1VaccinationReminder.attributes, function() {})
    
      adapter.define('memory', 'videos', V1Video.attributes, function() {})
    
      adapter.define('memory', 'video_audit_logging', V1VideoAuditLogging.attributes, function() {})
    
  });

  it('should successfully create an instance of V1SurveyAnswer', function(done) {
    var beforeCount;

    V1SurveyAnswer.count()
      .then(function(count) {
        beforeCount = count;
        return V1SurveyAnswer.create({"allowFreeForm":false,"freeFormDataType":"Endlessness fails","label":"Orthodontist kilobytes","sortOrder":69074,"surveyQuestionId":2769,"videoTargetNumber":6870,"weight":55475});
      })
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        return V1SurveyAnswer.count();
      })
      .then(function(count) {
        assert(count > beforeCount, 'Expected create to increase object count.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully read an instance of V1SurveyAnswer', function(done) {

    var attributes = {"allowFreeForm":false,"freeFormDataType":"Webmistresses defrosts","label":"Purging Bancroft","sortOrder":12865,"surveyQuestionId":34750,"videoTargetNumber":70765,"weight":86818};
    var id;

    if (attributes && Object.keys(attributes).length !== 0) {
      V1SurveyAnswer.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V1SurveyAnswer.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          id = obj.id;
          return V1SurveyAnswer.findOne({'id':obj.id});
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

  it('should successfully update an instance of V1SurveyAnswer', function(done) {
    var attributes = {"allowFreeForm":true,"freeFormDataType":"Unacceptability enabled","label":"Contemptuously Cubans","sortOrder":97608,"surveyQuestionId":67843,"videoTargetNumber":93123,"weight":18422};
    var updatedObject;

    V1SurveyAnswer.create(attributes)
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        var attributes = {"allowFreeForm":true,"freeFormDataType":"Weeks obstructiveness","label":"Interrogatories impressionists","sortOrder":55955,"surveyQuestionId":36153,"videoTargetNumber":74849,"weight":10296};
        return V1SurveyAnswer.update(obj.id, attributes);
      })
      .then(function(collection) {
        updatedObject = collection[0];
        assert(updatedObject, 'Failed to update object.');
        return V1SurveyAnswer.findOne({'id':updatedObject.id});
      })
      .then(function(obj) {
        assert(obj.id === updatedObject.id, 'Expected to find the instance just created.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully destroy an instance of V1SurveyAnswer', function(done) {

    var attributes = {"allowFreeForm":false,"freeFormDataType":"Ambidextrous relinquishes","label":"Metro hourglass","sortOrder":81807,"surveyQuestionId":61756,"videoTargetNumber":65103,"weight":60070};

    if (attributes && Object.keys(attributes).length !== 0) {
      V1SurveyAnswer.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V1SurveyAnswer.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          return V1SurveyAnswer.destroy(obj.id);
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
  
  

  
  describe('custom callbacks', function() {
    it('should have a callbacks object', function() {
      assert(V1SurveyAnswer.callbacks, 'V1SurveyAnswer is missing the callbacks object');
    });

    
      

      it('should contain "beforeCreate" callback', function() {
        assert(V1SurveyAnswer.callbacks['beforeCreate'], 'beforeCreate is missing.');
      });

      it('"beforeCreate" callback should be a function', function() {
      assert(_.isFunction(V1SurveyAnswer.callbacks['beforeCreate']), 'beforeCreate should be a function.');
    });
    
      

      it('should contain "afterCreate" callback', function() {
        assert(V1SurveyAnswer.callbacks['afterCreate'], 'afterCreate is missing.');
      });

      it('"afterCreate" callback should be a function', function() {
      assert(_.isFunction(V1SurveyAnswer.callbacks['afterCreate']), 'afterCreate should be a function.');
    });
    
      

      it('should contain "beforeFind" callback', function() {
        assert(V1SurveyAnswer.callbacks['beforeFind'], 'beforeFind is missing.');
      });

      it('"beforeFind" callback should be a function', function() {
      assert(_.isFunction(V1SurveyAnswer.callbacks['beforeFind']), 'beforeFind should be a function.');
    });
    
      

      it('should contain "afterFind" callback', function() {
        assert(V1SurveyAnswer.callbacks['afterFind'], 'afterFind is missing.');
      });

      it('"afterFind" callback should be a function', function() {
      assert(_.isFunction(V1SurveyAnswer.callbacks['afterFind']), 'afterFind should be a function.');
    });
    
      

      it('should contain "beforeUpdate" callback', function() {
        assert(V1SurveyAnswer.callbacks['beforeUpdate'], 'beforeUpdate is missing.');
      });

      it('"beforeUpdate" callback should be a function', function() {
      assert(_.isFunction(V1SurveyAnswer.callbacks['beforeUpdate']), 'beforeUpdate should be a function.');
    });
    
      

      it('should contain "afterUpdate" callback', function() {
        assert(V1SurveyAnswer.callbacks['afterUpdate'], 'afterUpdate is missing.');
      });

      it('"afterUpdate" callback should be a function', function() {
      assert(_.isFunction(V1SurveyAnswer.callbacks['afterUpdate']), 'afterUpdate should be a function.');
    });
    
      

      it('should contain "beforeDestroy" callback', function() {
        assert(V1SurveyAnswer.callbacks['beforeDestroy'], 'beforeDestroy is missing.');
      });

      it('"beforeDestroy" callback should be a function', function() {
      assert(_.isFunction(V1SurveyAnswer.callbacks['beforeDestroy']), 'beforeDestroy should be a function.');
    });
    
      

      it('should contain "afterDestroy" callback', function() {
        assert(V1SurveyAnswer.callbacks['afterDestroy'], 'afterDestroy is missing.');
      });

      it('"afterDestroy" callback should be a function', function() {
      assert(_.isFunction(V1SurveyAnswer.callbacks['afterDestroy']), 'afterDestroy should be a function.');
    });
    
      
      
      
      
      
      
      
      
      
      
      
      
  });
});

