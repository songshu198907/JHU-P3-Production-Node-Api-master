// This module can be used to provide custom functionality to the authentication strategy.
// You can include libraries in this module. Ex:
// var http = require('http');
var util = require('util');
module.exports = {
 // Custom authentication code goes here.
 // Supplied parameters:
 //    req   : The incoming request object. http://expressjs.com/3x/api.html#request
 //    user  : The result of the authentication strategy, properties may differ
 //            between strategies. This object and any changes you make to it
 //            will be persisted to the session.
 //    done  : Callback. Needs to be invoked when finished. Accepts an error
 //            as the first parameter.
 // authCallback: function(req, user, done) {
 //  user.secretToken = 'ABC123';
 //  if (!user.active) {
 //    done(new Error('Inactive User!'));
 //  }
 //  http.get('http://mysite.com/path', function(res) {
 //    Custom logic...
 //    done();
 //  });
 //  Always call done when finished.
 //  done();
 // }
 
 authCallback: function(req, user, done) {
   if (user && user.id !==null) {
     	//Send 401 error response if user tries to login with a deactive account;
     	if (user.isDeactive){
     	
     		return done("user account is deactivated"); 
     	}

	    function currentModel(modelName) {
	      return sails.models['v'+sails.config.getCurrentApiVersion()+modelName];
	    }

	    //Add a record in user audit log when the user login is successful.
	    var userAuditLogging = currentModel('userauditlogging');
	    var audit_log={};
	    audit_log.userId = user.id;
	    audit_log.username = user.email;
	    audit_log.ipAddress = req.ip;
	    audit_log.userAgent = req.headers['user-agent'];
	    audit_log.loggedInAt = new Date();
	    
	    userAuditLogging.create(audit_log)
	    .then(function(resultAuditLog) {
	      sails.log.debug('User Audit Log creation responding with: ' + util.inspect(resultAuditLog));
	      audit_log.id=resultAuditLog.id;
	      // Commenting out as per https://www.pivotaltracker.com/projects/1537087/stories/115189425
	      user.userAuditLoggings=[audit_log];
	      done();
	    })
	    .catch(function(err) {
	      sails.log.debug('error Audit Log creation: ' + util.inspect(err));
	      // Call done, passing an error containing the response message.
	      return done(util.inspect(err)); 
	    });

	   delete user.searchAuditLoggings;
	   delete user.userSurveyVideos;
	   delete user.userSurveys;
    
   }else{
      // Call done, passing an error containing the response message.
      return done(user.message); 
   }
 }
};
