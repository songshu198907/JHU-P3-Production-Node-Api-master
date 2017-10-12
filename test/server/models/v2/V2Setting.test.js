  var assert = require('assert');
var adapter = require('sails-memory');
var _ = require('lodash');


describe('V2Setting Model', function() {

  afterEach(function() {
    V2Setting.destroy();
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

  it('should successfully create an instance of V2Setting', function(done) {
    var beforeCount;

    V2Setting.count()
      .then(function(count) {
        beforeCount = count;
        return V2Setting.create({"awsHealthcareContentBucketName":"Screws correspondence","awsVideoBucketName":"Implementation legitimately","contactUserRegistrationEmailText":"Flatt horticulturist","contactUserRegistrationSubject":"Motes probabilistic","forgotPasswordEmailText":"Formally foreshadowing","forgotPasswordSubject":"Grade Thoth","fromEmail":"Flouncing seasoned","smsPhoneNumber":"Parliamentary bacchanalians","surveyCompletionEmailSubject":"Mapplethorpe indefatigably","surveyCompletionEmailText":"Tercentenaries roast","surveyNotificationEmailText":"Pharmacopoeias homosexuality","surveyNotificationFinalSmsText":"Nonevents washable","surveyNotificationFirstReminderEmailText":"Haring undetectable","surveyNotificationFirstReminderSubject":"Overspends convoluted","surveyNotificationSubject":"Afghan vulcanization","termsAndConditions":"Screwball moisturizing"});
      })
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        return V2Setting.count();
      })
      .then(function(count) {
        assert(count > beforeCount, 'Expected create to increase object count.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully read an instance of V2Setting', function(done) {

    var attributes = {"awsHealthcareContentBucketName":"Tempting matriculating","awsVideoBucketName":"Caruso parenthetical","contactUserRegistrationEmailText":"Insurgence unsnarled","contactUserRegistrationSubject":"Pyramids demolitions","forgotPasswordEmailText":"Transpires overpopulation","forgotPasswordSubject":"Annoy chariot","fromEmail":"Weathered scratching","smsPhoneNumber":"Decelerates puritanically","surveyCompletionEmailSubject":"Cosmopolitan gymnasia","surveyCompletionEmailText":"Outperformed instrumentation","surveyNotificationEmailText":"Ventriloquism mottoes","surveyNotificationFinalSmsText":"Democratized Popocatepetl","surveyNotificationFirstReminderEmailText":"Husks begotten","surveyNotificationFirstReminderSubject":"Photosensitive combustible","surveyNotificationSubject":"Sieves priestliest","termsAndConditions":"Envoy exportation"};
    var id;

    if (attributes && Object.keys(attributes).length !== 0) {
      V2Setting.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V2Setting.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          id = obj.id;
          return V2Setting.findOne({'id':obj.id});
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

  it('should successfully update an instance of V2Setting', function(done) {
    var attributes = {"awsHealthcareContentBucketName":"Carefullest Makarios","awsVideoBucketName":"Pulsars flibbertigibbet","contactUserRegistrationEmailText":"Uncut refitted","contactUserRegistrationSubject":"Humorlessness blackberries","forgotPasswordEmailText":"Concatenation glean","forgotPasswordSubject":"Artful crimp","fromEmail":"Cantor imaginatively","smsPhoneNumber":"Spadefuls solicitations","surveyCompletionEmailSubject":"Ticketing testimonials","surveyCompletionEmailText":"Soviet uncontroversial","surveyNotificationEmailText":"Silicates whatchamacallit","surveyNotificationFinalSmsText":"Grandiloquence comprehensively","surveyNotificationFirstReminderEmailText":"Expendables decelerating","surveyNotificationFirstReminderSubject":"Controverted Japan","surveyNotificationSubject":"Accompaniments obliviously","termsAndConditions":"Youngstown chiropractics"};
    var updatedObject;

    V2Setting.create(attributes)
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        var attributes = {"awsHealthcareContentBucketName":"Detain Gibson","awsVideoBucketName":"Countesses perfectionism","contactUserRegistrationEmailText":"Backslappers constitutions","contactUserRegistrationSubject":"Destruct whits","forgotPasswordEmailText":"Tearjerkers foreboding","forgotPasswordSubject":"Everyplace entertainingly","fromEmail":"Shogun physiology","smsPhoneNumber":"Heisenberg dramatization","surveyCompletionEmailSubject":"Powhatan casseroles","surveyCompletionEmailText":"Twelve Bunsen","surveyNotificationEmailText":"Points misapprehending","surveyNotificationFinalSmsText":"Iaccoca benched","surveyNotificationFirstReminderEmailText":"Photocopied conquistadores","surveyNotificationFirstReminderSubject":"Herdsmen laddies","surveyNotificationSubject":"Stomachache fractured","termsAndConditions":"Acceptances thunderbolt"};
        return V2Setting.update(obj.id, attributes);
      })
      .then(function(collection) {
        updatedObject = collection[0];
        assert(updatedObject, 'Failed to update object.');
        return V2Setting.findOne({'id':updatedObject.id});
      })
      .then(function(obj) {
        assert(obj.id === updatedObject.id, 'Expected to find the instance just created.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully destroy an instance of V2Setting', function(done) {

    var attributes = {"awsHealthcareContentBucketName":"Overextended revalues","awsVideoBucketName":"Miniaturization generalissimo","contactUserRegistrationEmailText":"Neckerchieves peccary","contactUserRegistrationSubject":"Intellectualize sanctification","forgotPasswordEmailText":"Highchair aggrandizement","forgotPasswordSubject":"Grandfathering centenarians","fromEmail":"Wintertime substantiating","smsPhoneNumber":"Consumerism collectivizes","surveyCompletionEmailSubject":"Scoops hardheadedness","surveyCompletionEmailText":"Transliterated flamboyance","surveyNotificationEmailText":"Balmy preventives","surveyNotificationFinalSmsText":"Paralytics assays","surveyNotificationFirstReminderEmailText":"Ceases patrolwoman","surveyNotificationFirstReminderSubject":"Personalized liver","surveyNotificationSubject":"Sedge Buddhist","termsAndConditions":"Gambolling demilitarizing"};

    if (attributes && Object.keys(attributes).length !== 0) {
      V2Setting.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V2Setting.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          return V2Setting.destroy(obj.id);
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
      assert(V2Setting.callbacks, 'V2Setting is missing the callbacks object');
    });

    
      

      it('should contain "beforeCreate" callback', function() {
        assert(V2Setting.callbacks['beforeCreate'], 'beforeCreate is missing.');
      });

      it('"beforeCreate" callback should be a function', function() {
      assert(_.isFunction(V2Setting.callbacks['beforeCreate']), 'beforeCreate should be a function.');
    });
    
      

      it('should contain "afterCreate" callback', function() {
        assert(V2Setting.callbacks['afterCreate'], 'afterCreate is missing.');
      });

      it('"afterCreate" callback should be a function', function() {
      assert(_.isFunction(V2Setting.callbacks['afterCreate']), 'afterCreate should be a function.');
    });
    
      

      it('should contain "beforeFind" callback', function() {
        assert(V2Setting.callbacks['beforeFind'], 'beforeFind is missing.');
      });

      it('"beforeFind" callback should be a function', function() {
      assert(_.isFunction(V2Setting.callbacks['beforeFind']), 'beforeFind should be a function.');
    });
    
      

      it('should contain "afterFind" callback', function() {
        assert(V2Setting.callbacks['afterFind'], 'afterFind is missing.');
      });

      it('"afterFind" callback should be a function', function() {
      assert(_.isFunction(V2Setting.callbacks['afterFind']), 'afterFind should be a function.');
    });
    
      

      it('should contain "beforeUpdate" callback', function() {
        assert(V2Setting.callbacks['beforeUpdate'], 'beforeUpdate is missing.');
      });

      it('"beforeUpdate" callback should be a function', function() {
      assert(_.isFunction(V2Setting.callbacks['beforeUpdate']), 'beforeUpdate should be a function.');
    });
    
      

      it('should contain "afterUpdate" callback', function() {
        assert(V2Setting.callbacks['afterUpdate'], 'afterUpdate is missing.');
      });

      it('"afterUpdate" callback should be a function', function() {
      assert(_.isFunction(V2Setting.callbacks['afterUpdate']), 'afterUpdate should be a function.');
    });
    
      

      it('should contain "beforeDestroy" callback', function() {
        assert(V2Setting.callbacks['beforeDestroy'], 'beforeDestroy is missing.');
      });

      it('"beforeDestroy" callback should be a function', function() {
      assert(_.isFunction(V2Setting.callbacks['beforeDestroy']), 'beforeDestroy should be a function.');
    });
    
      

      it('should contain "afterDestroy" callback', function() {
        assert(V2Setting.callbacks['afterDestroy'], 'afterDestroy is missing.');
      });

      it('"afterDestroy" callback should be a function', function() {
      assert(_.isFunction(V2Setting.callbacks['afterDestroy']), 'afterDestroy should be a function.');
    });
    
      
      
      
      
      
      
      
      
  });
});

