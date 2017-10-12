  var assert = require('assert');
var adapter = require('sails-memory');
var _ = require('lodash');


describe('V1User Model', function() {

  afterEach(function() {
    V1User.destroy();
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

  it('should successfully create an instance of V1User', function(done) {
    var beforeCount;

    V1User.count()
      .then(function(count) {
        beforeCount = count;
        return V1User.create({"actualChildBirth":"2015-07-11","address":"Meteorologist scapegoated","cellPhone":"Musical hospitalization","city":"Breastworks ragas","clinicianCodeId":86616,"clinicName":"Excommunication caromed","consentAcceptedOn":"2004-09-14 17:57:43 +0000","contactCellPhone":"Merak equity","contactEmail":"Fetich impressionists","contactHomePhone":"Straits intrenching","contactName":"Cheerleader Rojas","deactivatedOn":"1984-03-17 23:04:52 +0000","educationId":59959,"email":"risa.jacobi90@vaccinesurvey.com","expectedChildBirth":"2014-09-11","firstName":"Shakita","hasContactUsers":false,"homePhone":"Instrumentalist unintentionally","interventionGroup":"Dividers altering","isDeactive":true,"lastName":"Nicolas","parentRelationshipType":"Trellised administrations","parentUserId":68740,"password":"password","passwordConfirmation":"password","passwordDigest":"Imploring chambermaids","patientType":72608,"postalCode":"Impoverishes verify","raceId":89436,"reasonForDeactivation":"Specializations astrophysicists","resetPassword":false,"role":"Misappropriate eclipsed","state":"Pitchforked loiterer","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Condemning squinting"});
      })
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        return V1User.count();
      })
      .then(function(count) {
        assert(count > beforeCount, 'Expected create to increase object count.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully read an instance of V1User', function(done) {

    var attributes = {"actualChildBirth":"2015-10-05","address":"Slammed overemphasizing","cellPhone":"Facetiousness commercialized","city":"Philologists overages","clinicianCodeId":60283,"clinicName":"Shantytown officiousness","consentAcceptedOn":"1978-10-12 16:13:54 +0000","contactCellPhone":"Conquistadores splendidly","contactEmail":"Eileen mowed","contactHomePhone":"Dissatisfaction freighter","contactName":"Microbiologist helps","deactivatedOn":"2004-12-26 21:53:02 +0000","educationId":30385,"email":"vicente.kassulke87@vaccinesurvey.com","expectedChildBirth":"2013-12-01","firstName":"Jarod","hasContactUsers":true,"homePhone":"Disservices debasements","interventionGroup":"Sanctions professorships","isDeactive":false,"lastName":"Auer","parentRelationshipType":"Hibernation roundhouse","parentUserId":96436,"password":"password","passwordConfirmation":"password","passwordDigest":"Latin Kareem","patientType":44889,"postalCode":"Pauperized melancholics","raceId":39883,"reasonForDeactivation":"Irrelevancy anthracite","resetPassword":false,"role":"Internalizing unquestionably","state":"Peritonitis disgustedly","updatedUserProfile":false,"vaccinationReminders":true,"xSessionId":"Notarizes seducer"};
    var id;

    if (attributes && Object.keys(attributes).length !== 0) {
      V1User.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V1User.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          id = obj.id;
          return V1User.findOne({'id':obj.id});
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

  it('should successfully update an instance of V1User', function(done) {
    var attributes = {"actualChildBirth":"2016-04-30","address":"Flurry deviling","cellPhone":"Fagged distinguishable","city":"Counteractions motors","clinicianCodeId":36793,"clinicName":"Demagnetization haemorrhoids","consentAcceptedOn":"2006-12-05 17:14:19 +0000","contactCellPhone":"Pensioners notwithstanding","contactEmail":"Trustworthiness diversification","contactHomePhone":"Bunging roadshow","contactName":"Entrepreneurial pares","deactivatedOn":"2015-11-17 06:40:44 +0000","educationId":95091,"email":"lawrence.goodwin61@vaccinesurvey.com","expectedChildBirth":"2014-09-10","firstName":"Veola","hasContactUsers":false,"homePhone":"Teletype Simon","interventionGroup":"Chattering adjudicating","isDeactive":true,"lastName":"Schulist","parentRelationshipType":"Irreverent bruin","parentUserId":61300,"password":"password","passwordConfirmation":"password","passwordDigest":"Ecstatic squid","patientType":27505,"postalCode":"Unfaithfulness shying","raceId":12361,"reasonForDeactivation":"Apothecaries duvet","resetPassword":true,"role":"Damply professionalism","state":"Torso Bright","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Commemoration regenerative"};
    var updatedObject;

    V1User.create(attributes)
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        var attributes = {"actualChildBirth":"2014-10-11","address":"Conservatively prolongations","cellPhone":"Companionways disregarding","city":"Upheavals terminable","clinicianCodeId":68419,"clinicName":"Heartening rapprochements","consentAcceptedOn":"1971-06-29 20:45:43 +0000","contactCellPhone":"Seeps impressionable","contactEmail":"Inkwell enterprises","contactHomePhone":"Noncompetitive vogue","contactName":"Deforesting infestation","deactivatedOn":"2011-05-29 05:35:27 +0000","educationId":87302,"email":"deetta.orn59@vaccinesurvey.com","expectedChildBirth":"2014-03-14","firstName":"Ka","hasContactUsers":true,"homePhone":"Haydn hoist","interventionGroup":"Unrealized Americanization","isDeactive":true,"lastName":"Kuphal","parentRelationshipType":"Krugerrand misappropriate","parentUserId":7160,"password":"password","passwordConfirmation":"password","passwordDigest":"Nudists freezers","patientType":90036,"postalCode":"Quarks observantly","raceId":1108,"reasonForDeactivation":"Disaffection transcription","resetPassword":true,"role":"Atalanta inebriation","state":"Attenuating memory","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Anthologies insanity"};
        return V1User.update(obj.id, attributes);
      })
      .then(function(collection) {
        updatedObject = collection[0];
        assert(updatedObject, 'Failed to update object.');
        return V1User.findOne({'id':updatedObject.id});
      })
      .then(function(obj) {
        assert(obj.id === updatedObject.id, 'Expected to find the instance just created.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully destroy an instance of V1User', function(done) {

    var attributes = {"actualChildBirth":"2015-03-26","address":"Sparer Chattanooga","cellPhone":"Fertilizes successively","city":"Merchandizing stepfathers","clinicianCodeId":50507,"clinicName":"Panorama hermaphrodites","consentAcceptedOn":"1972-08-14 23:09:21 +0000","contactCellPhone":"Splint quenches","contactEmail":"Ritualistic levelheadedness","contactHomePhone":"Honks bevel","contactName":"Problematically camcorder","deactivatedOn":"2006-11-25 08:34:58 +0000","educationId":50670,"email":"marjorie.carroll93@vaccinesurvey.com","expectedChildBirth":"2015-03-19","firstName":"Karmen","hasContactUsers":false,"homePhone":"Discombobulates intuitions","interventionGroup":"Obligates pessimistically","isDeactive":false,"lastName":"Breitenberg","parentRelationshipType":"Rustled indefensibly","parentUserId":34035,"password":"password","passwordConfirmation":"password","passwordDigest":"Potentialities gallstone","patientType":40747,"postalCode":"Nonprofessional barter","raceId":69,"reasonForDeactivation":"Judges wresting","resetPassword":true,"role":"Countermanding conservationist","state":"Constellations naive","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Becomingly inconsistently"};

    if (attributes && Object.keys(attributes).length !== 0) {
      V1User.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V1User.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          return V1User.destroy(obj.id);
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
    assert(V1User.transientAttributes.indexOf('clinicName') !== -1);
  });

  it('should have a getter', function() {
    assert(V1User.attributes['getClinicName']);
  });

  

  it('should have the correct transientAttributes', function() {
    assert(V1User.transientAttributes.indexOf('password') !== -1);
  });

  it('should have a getter', function() {
    assert(V1User.attributes['getPassword']);
  });

  

  it('should have the correct transientAttributes', function() {
    assert(V1User.transientAttributes.indexOf('passwordConfirmation') !== -1);
  });

  it('should have a getter', function() {
    assert(V1User.attributes['getPasswordConfirmation']);
  });

  

  it('should have the correct transientAttributes', function() {
    assert(V1User.transientAttributes.indexOf('xSessionId') !== -1);
  });

  it('should have a getter', function() {
    assert(V1User.attributes['getXSessionId']);
  });

  


    

  
  describe('Authenticatable logout callback', function() {
    it('should have the proper method name configured in the model', function() {
      assert.equal(V1User.logoutCb, 'auditlogout');
    });

    it('should exist in the customCode', function() {
      assert(_.isFunction(V1User.customCode['auditlogout']),
                          'Logout callback auditlogout is configured but cannot be found or is not a function.');
    });
  });
  

  describe('custom callbacks', function() {
    it('should have a callbacks object', function() {
      assert(V1User.callbacks, 'V1User is missing the callbacks object');
    });

    
      

      it('should contain "beforeCreate" callback', function() {
        assert(V1User.callbacks['beforeCreate'], 'beforeCreate is missing.');
      });

      it('"beforeCreate" callback should be a function', function() {
      assert(_.isFunction(V1User.callbacks['beforeCreate']), 'beforeCreate should be a function.');
    });
    
      

      it('should contain "afterCreate" callback', function() {
        assert(V1User.callbacks['afterCreate'], 'afterCreate is missing.');
      });

      it('"afterCreate" callback should be a function', function() {
      assert(_.isFunction(V1User.callbacks['afterCreate']), 'afterCreate should be a function.');
    });
    
      

      it('should contain "beforeFind" callback', function() {
        assert(V1User.callbacks['beforeFind'], 'beforeFind is missing.');
      });

      it('"beforeFind" callback should be a function', function() {
      assert(_.isFunction(V1User.callbacks['beforeFind']), 'beforeFind should be a function.');
    });
    
      

      it('should contain "afterFind" callback', function() {
        assert(V1User.callbacks['afterFind'], 'afterFind is missing.');
      });

      it('"afterFind" callback should be a function', function() {
      assert(_.isFunction(V1User.callbacks['afterFind']), 'afterFind should be a function.');
    });
    
      

      it('should contain "beforeUpdate" callback', function() {
        assert(V1User.callbacks['beforeUpdate'], 'beforeUpdate is missing.');
      });

      it('"beforeUpdate" callback should be a function', function() {
      assert(_.isFunction(V1User.callbacks['beforeUpdate']), 'beforeUpdate should be a function.');
    });
    
      

      it('should contain "afterUpdate" callback', function() {
        assert(V1User.callbacks['afterUpdate'], 'afterUpdate is missing.');
      });

      it('"afterUpdate" callback should be a function', function() {
      assert(_.isFunction(V1User.callbacks['afterUpdate']), 'afterUpdate should be a function.');
    });
    
      

      it('should contain "beforeDestroy" callback', function() {
        assert(V1User.callbacks['beforeDestroy'], 'beforeDestroy is missing.');
      });

      it('"beforeDestroy" callback should be a function', function() {
      assert(_.isFunction(V1User.callbacks['beforeDestroy']), 'beforeDestroy should be a function.');
    });
    
      

      it('should contain "afterDestroy" callback', function() {
        assert(V1User.callbacks['afterDestroy'], 'afterDestroy is missing.');
      });

      it('"afterDestroy" callback should be a function', function() {
      assert(_.isFunction(V1User.callbacks['afterDestroy']), 'afterDestroy should be a function.');
    });
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  });
});

