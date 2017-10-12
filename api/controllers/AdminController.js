module.exports = {
  index: function (req, res) {
    return res.view('admin');
  },

  countAll: function (req, res) {
		var aggregates = {
			
				clinicianBlockRandomizer: function(done) {
          V2ClinicianBlockRandomizer.count().then(function(count) {
            done(null, count);
          });
        },

			
				clinicianCode: function(done) {
          V2ClinicianCode.count().then(function(count) {
            done(null, count);
          });
        },

			
				education: function(done) {
          V2Education.count().then(function(count) {
            done(null, count);
          });
        },

			
				healthcareProviderContent: function(done) {
          V2HealthcareProviderContent.count().then(function(count) {
            done(null, count);
          });
        },

			
				jobAuditLogging: function(done) {
          V2JobAuditLogging.count().then(function(count) {
            done(null, count);
          });
        },

			
				questionCategory: function(done) {
          V2QuestionCategory.count().then(function(count) {
            done(null, count);
          });
        },

			
				questionCode: function(done) {
          V2QuestionCode.count().then(function(count) {
            done(null, count);
          });
        },

			
				questionType: function(done) {
          V2QuestionType.count().then(function(count) {
            done(null, count);
          });
        },

			
				race: function(done) {
          V2Race.count().then(function(count) {
            done(null, count);
          });
        },

			
				searchAuditLogging: function(done) {
          V2SearchAuditLogging.count().then(function(count) {
            done(null, count);
          });
        },

			
				setting: function(done) {
          V2Setting.count().then(function(count) {
            done(null, count);
          });
        },

			
				survey: function(done) {
          V2Survey.count().then(function(count) {
            done(null, count);
          });
        },

			
				surveyAnswer: function(done) {
          V2SurveyAnswer.count().then(function(count) {
            done(null, count);
          });
        },

			
				surveyQuestion: function(done) {
          V2SurveyQuestion.count().then(function(count) {
            done(null, count);
          });
        },

			
				surveyQuestionSkipLogic: function(done) {
          V2SurveyQuestionSkipLogic.count().then(function(count) {
            done(null, count);
          });
        },

			
				topic: function(done) {
          V2Topic.count().then(function(count) {
            done(null, count);
          });
        },

			
				user: function(done) {
          V2User.count().then(function(count) {
            done(null, count);
          });
        },

			
				userAuditLogging: function(done) {
          V2UserAuditLogging.count().then(function(count) {
            done(null, count);
          });
        },

			
				userSurvey: function(done) {
          V2UserSurvey.count().then(function(count) {
            done(null, count);
          });
        },

			
				userSurveyAnswer: function(done) {
          V2UserSurveyAnswer.count().then(function(count) {
            done(null, count);
          });
        },

			
				userSurveyVideo: function(done) {
          V2UserSurveyVideo.count().then(function(count) {
            done(null, count);
          });
        },

			
				vaccinationReminder: function(done) {
          V2VaccinationReminder.count().then(function(count) {
            done(null, count);
          });
        },

			
				video: function(done) {
          V2Video.count().then(function(count) {
            done(null, count);
          });
        },

			
				videoAuditLogging: function(done) {
          V2VideoAuditLogging.count().then(function(count) {
            done(null, count);
          });
        },

			
		};

    async.series(aggregates, function(err, results) {
			if(err) {
				console.log("Error encountered while trying to pull counts for all objects: #{util.inspect(err, {depth:null})}");
        res.json(500, results);
			} else {
				res.json(results);
			}
		});
  }
};
