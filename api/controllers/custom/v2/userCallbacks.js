module.exports = {
  beforeCreate: function(req, done) {

    done();

  },

  afterCreate: function(req, res, done) {

    done();

  },

  beforeFind: function(req, done) {

    done();

  },

  afterFind: function(req, res, done) {

    done();

  },

  beforeUpdate: function(req, done) {

    done();

  },

  afterUpdate: function(req, res, done) {

    done();

  },

  beforeDestroy: function(req, done) {

    done();

  },

  afterDestroy: function(req, res, done) {

    done();

  },

  beforeAllScope: function(req, done) {

    done();

  },

  afterAllScope: function(req, res, done) {

    done();

  },

  beforeExactMatchScope: function(req, done) {

    done();

  },

  afterExactMatchScope: function(req, res, done) {

    done();

  },

  beforeCountScope: function(req, done) {

    done();

  },

  afterCountScope: function(req, res, done) {

    done();

  },

  beforeCountExactMatchScope: function(req, done) {

    done();

  },

  afterCountExactMatchScope: function(req, res, done) {

    done();

  },

  beforeResetPasswordScope: function(req, done) {

    var util = require('util'),
      bcrypt = require('bcrypt'),
      Promise = require('bluebird');
    var self = this;
    var lUserModel = this.models('user');
    if (req.query.query !== undefined && req.query.query.email !== undefined) {
      var lUserEmail = req.query.query.email;
      var lSearchCriteria = {
        email: lUserEmail,
        is_deactive: false
      };
      lUserModel.findOne(lSearchCriteria, function(err, result) {
        if (err) {
          req.res.json(401, {
            "message": "unable to find user."
          });
          req.res.end();
          return;
        }
        if (result !== undefined) {
          var newPassword = generatePassword();
          result.password = newPassword;
          result.resetPassword = true;

          function updateUserPassword() {

            lUserModel.update(lSearchCriteria, {
                passwordDigest: result.passwordDigest,
                resetPassword: true
              })
              .then(function(result) {
                sails.log.debug('User password updated: ' + util.inspect(result));
                if (result !== undefined && result.length > 0) {
                  var settingsModel = self.models("setting");
                  settingsModel.find({}, {
                      fields: {
                        forgotPasswordEmailText: 1,
                        forgotPasswordSubject: 1,
                        fromEmail: 1
                      }
                    }).paginate({
                      page: 1
                    }, {
                      limit: 1
                    })
                    .exec(function(err, settings) {
                      if (err) {
                        req.res.json(401, "settings not available");
                        return false;
                      } else if (settings && settings.length > 0) {
                        sendPasswordToUser(result[0].email, newPassword, settings[0].forgotPasswordEmailText, settings[0].forgotPasswordSubject, settings[0].fromEmail);
                      }
                    });
                } else {
                  req.res.json(401, {
                    message: "password reset failed"
                  });
                  req.res.end();
                  return;
                }
              })
              .catch(function(err) {
                sails.log.debug('error while updating password: ' + util.inspect(err));
                req.res.json(401, {
                  message: "password reset failed"
                });
                req.res.end();
                return;
              });
          }

          hashPassword(result, updateUserPassword);
        } else {
          req.res.json(401, {
            message: "unable to find user"
          });
          req.res.end();
          return;
        }
      });

      function sendPasswordToUser(pToEmail, pPassword, pBody, pSubject, pFromEmail) {
        sails.log.debug('req', req);
        _.templateSettings = {
          interpolate: /\{\{(.+?)\}\}/g
        };
        var template = _.template(pBody);
        var finalTemplate = template({
          password: pPassword
        });

        var SendGrid = self.models('sendGrid');
        var msgBody = "from=" + pFromEmail + "&to=" + pToEmail + "&subject=" + pSubject + "&html=" + finalTemplate;

        Promise.promisify(SendGrid.request)('create', {}, {}, {
            body: msgBody,
            env: req.context.env
          })
          .then(function(resultSendGrid) {
            sails.log.debug("Sendgrid responding with object: " + util.inspect(resultSendGrid));
            req.res.json(200, {
              message: "password reset successful"
            });
            req.res.end();
            return;
          })
          .catch(function(err) {
            sails.log.debug('error Sendgrid: ' + util.inspect(err));
            req.res.json(401, {
              message: "password reset failed"
            });
            req.res.end();
            return;
          });
      }

      function generatePassword() {
        var length = 10,
          charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
          retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }

      function hashPassword(values, next) {
        if (values.password) {

          bcrypt.hash(values.password, 10, function(err, res) {
            if (err) {
              req.res.json(401, {
                message: "unable to hash password"
              });
              req.res.end();
              return;
            }
            values.passwordDigest = res;
            delete values.password;
            next();
          });
        }
      }
    } else {
      req.res.json(401, {
        message: "email parameter missing ...."
      });
      req.res.end();
      return;
    }
  },

  afterResetPasswordScope: function(req, res, done) {

    done();

  },

  beforeConsentAcceptedScope: function(req, done) {

    var util = require("util");
    if (req.context.current_user.role === "patient" && req.context.current_user.patientType === 2) {

      if (req.context.current_user.consentAcceptedOn !== null) {
        req.res.json(401, {
          "error": "consent already accepted for this user."
        });
        return false;
      }
      var userModel = this.models('user');
      userModel.update({
          id: req.context.current_user.id
        }, {
          consent_accepted_on: new Date()
        })
        .then(function(response) {
          sails.log.debug('User Audit Log creation responding with: ' + util.inspect(response));
          done();
        })
        .catch(function(err) {
          sails.log.debug('error updating user consent: ' + util.inspect(err));
          return done(util.inspect(err));
        });
    } else {
      done();
    }
  },

  afterConsentAcceptedScope: function(req, res, done) {

    done();

  },

  beforeDeactivateScope: function(req, done) {

    var self = this;
    var currentUser = req.context.current_user;
    if (currentUser) {
      if (currentUser.role === 'administrator') {
        deActiveUser(typeof req.query.email !== "undefined" ? req.query.email : req.context.current_user.email);

      } else if (currentUser.role === 'patient') {
        deActiveUser(req.context.current_user.email);
      } else {
        done();
      }
    } else {
      done();
    }

    function deActiveUser(pEmail) {
      if ((req.query && (_.isNull(req.query.reason_for_deactivation) || _.isUndefined(req.query.reason_for_deactivation))) && req.context.current_user.role != "administrator") {
        req.res.json(401, {
          "message": "Missing reason for deactivation parameter."
        });
        req.res.end();
        return false;
      }
      var deActivated_on = (new Date()).getTime();
      var reasonForDeactivation = req.query.reason_for_deactivation;
      var UserModel = self.models("user");
      UserModel.update({
        "email": pEmail
      }, {
        "is_deactive": true,
        "vaccination_reminders": false,
        "reason_for_deactivation": reasonForDeactivation,
        "deactivatedOn": (new Date())
      }, function(error, response) {
        if (error) {
          req.res.json(401, {
            "error": "failed to deactivate user"
          });
          return false;

        } else {
          req.res.json(200, response);
          req.res.end;
          return false;
        }
      });
    }
  },

  afterDeactivateScope: function(req, res, done) {

    done();

  },

  beforeMyprofileScope: function(req, done) {

    done();

  },

  afterMyprofileScope: function(req, res, done) {

    done();

  },

  beforeGetMyContactsScope: function(req, done) {

    done();

  },

  afterGetMyContactsScope: function(req, res, done) {

    done();

  },

  beforeGetPatientsByClinicsScope: function(req, done) {

    done();

  },

  afterGetPatientsByClinicsScope: function(req, res, done) {

    done();

  },

  beforeGetUsersByRaceScope: function(req, done) {
    
    done();
  },
  afterGetUsersByRaceScope: function(req, res, done) {
    done();
  },

  beforeGetUsersByEducationScope: function(req, done) {
    done();
  },
  afterGetUsersByEducationScope: function(req, res, done) {
    done();
  }, 

  beforeGetHealthcareByClinicScope: function(req, done) {

    done();

  },

  afterGetHealthcareByClinicScope: function(req, res, done) {

    done();

  },

  beforePatientSurveyExportScope: function(req, done) {

    done();

  },

  afterPatientSurveyExportScope: function(req, res, done) {

    done();

  },

};
