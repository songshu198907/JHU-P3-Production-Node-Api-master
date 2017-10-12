  var assert = require('assert');
var adapter = require('sails-memory');
var _ = require('lodash');


describe('V2Video Model', function() {

  afterEach(function() {
    V2Video.destroy();
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

  it('should successfully create an instance of V2Video', function(done) {
    var beforeCount;

    V2Video.count()
      .then(function(count) {
        beforeCount = count;
        return V2Video.create({"desc":"Olfactories impressions","isActive":true,"keywords":"Lusitania period","length":64253.75089922656,"questionGroup":"Terminology Venezuelans","sortOrder":30601,"sourceVersion":"Whirs reorganization","targetNumber":11410,"title":"Filterable fawns","topicId":99983,"videoUrl":"Pussycat whisking"});
      })
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        return V2Video.count();
      })
      .then(function(count) {
        assert(count > beforeCount, 'Expected create to increase object count.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully read an instance of V2Video', function(done) {

    var attributes = {"desc":"Spawns vociferation","isActive":true,"keywords":"Gratefully internationally","length":38855.50100452008,"questionGroup":"Imperilling quantifier","sortOrder":91592,"sourceVersion":"Redundancies Deanne","targetNumber":44848,"title":"Pharmaceuticals psychoanalyze","topicId":94950,"videoUrl":"Secreted missals"};
    var id;

    if (attributes && Object.keys(attributes).length !== 0) {
      V2Video.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V2Video.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          id = obj.id;
          return V2Video.findOne({'id':obj.id});
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

  it('should successfully update an instance of V2Video', function(done) {
    var attributes = {"desc":"Nefariousness slogging","isActive":false,"keywords":"Expropriations lintel","length":60607.58600021991,"questionGroup":"Disgruntled professionalism","sortOrder":78084,"sourceVersion":"Considerable asymmetrically","targetNumber":28663,"title":"Abrasions incorruptible","topicId":81400,"videoUrl":"Campanili coronaries"};
    var updatedObject;

    V2Video.create(attributes)
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        var attributes = {"desc":"Milquetoasts proletariat","isActive":true,"keywords":"Parliamentarian inaccessibility","length":74700.93866560672,"questionGroup":"Amanuensis bismuth","sortOrder":93238,"sourceVersion":"Parenthetically Cornelius","targetNumber":21408,"title":"Bursting demotion","topicId":11800,"videoUrl":"Cocoanut preterits"};
        return V2Video.update(obj.id, attributes);
      })
      .then(function(collection) {
        updatedObject = collection[0];
        assert(updatedObject, 'Failed to update object.');
        return V2Video.findOne({'id':updatedObject.id});
      })
      .then(function(obj) {
        assert(obj.id === updatedObject.id, 'Expected to find the instance just created.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully destroy an instance of V2Video', function(done) {

    var attributes = {"desc":"Modernize easier","isActive":true,"keywords":"Rotisserie Clinton","length":60002.52887067009,"questionGroup":"Eager gracelessness","sortOrder":51952,"sourceVersion":"Yonder Misty","targetNumber":80338,"title":"Gracelessness nephew","topicId":71377,"videoUrl":"Routinize pasts"};

    if (attributes && Object.keys(attributes).length !== 0) {
      V2Video.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V2Video.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          return V2Video.destroy(obj.id);
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
      assert(V2Video.callbacks, 'V2Video is missing the callbacks object');
    });

    
      

      it('should contain "beforeCreate" callback', function() {
        assert(V2Video.callbacks['beforeCreate'], 'beforeCreate is missing.');
      });

      it('"beforeCreate" callback should be a function', function() {
      assert(_.isFunction(V2Video.callbacks['beforeCreate']), 'beforeCreate should be a function.');
    });
    
      

      it('should contain "afterCreate" callback', function() {
        assert(V2Video.callbacks['afterCreate'], 'afterCreate is missing.');
      });

      it('"afterCreate" callback should be a function', function() {
      assert(_.isFunction(V2Video.callbacks['afterCreate']), 'afterCreate should be a function.');
    });
    
      

      it('should contain "beforeFind" callback', function() {
        assert(V2Video.callbacks['beforeFind'], 'beforeFind is missing.');
      });

      it('"beforeFind" callback should be a function', function() {
      assert(_.isFunction(V2Video.callbacks['beforeFind']), 'beforeFind should be a function.');
    });
    
      

      it('should contain "afterFind" callback', function() {
        assert(V2Video.callbacks['afterFind'], 'afterFind is missing.');
      });

      it('"afterFind" callback should be a function', function() {
      assert(_.isFunction(V2Video.callbacks['afterFind']), 'afterFind should be a function.');
    });
    
      

      it('should contain "beforeUpdate" callback', function() {
        assert(V2Video.callbacks['beforeUpdate'], 'beforeUpdate is missing.');
      });

      it('"beforeUpdate" callback should be a function', function() {
      assert(_.isFunction(V2Video.callbacks['beforeUpdate']), 'beforeUpdate should be a function.');
    });
    
      

      it('should contain "afterUpdate" callback', function() {
        assert(V2Video.callbacks['afterUpdate'], 'afterUpdate is missing.');
      });

      it('"afterUpdate" callback should be a function', function() {
      assert(_.isFunction(V2Video.callbacks['afterUpdate']), 'afterUpdate should be a function.');
    });
    
      

      it('should contain "beforeDestroy" callback', function() {
        assert(V2Video.callbacks['beforeDestroy'], 'beforeDestroy is missing.');
      });

      it('"beforeDestroy" callback should be a function', function() {
      assert(_.isFunction(V2Video.callbacks['beforeDestroy']), 'beforeDestroy should be a function.');
    });
    
      

      it('should contain "afterDestroy" callback', function() {
        assert(V2Video.callbacks['afterDestroy'], 'afterDestroy is missing.');
      });

      it('"afterDestroy" callback should be a function', function() {
      assert(_.isFunction(V2Video.callbacks['afterDestroy']), 'afterDestroy should be a function.');
    });
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  });
});

