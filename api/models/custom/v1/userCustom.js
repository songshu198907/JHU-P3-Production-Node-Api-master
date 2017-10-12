
module.exports = {
  auditlogout: function(req, user, done){
    var util=require("util");
    var analyse = require('../../../../api/analytics/analytics').analyse;
    if(req.session.passport.user && req.session.passport.user.userAuditLoggings && req.session.passport.user.userAuditLoggings.length>0)
    {
      var userAuditLogging= this.models("userAuditLogging");
      userAuditLogging.update({id:req.session.passport.user.userAuditLoggings[0].id},{loggedOutAt:new Date()})
        .then(function(resultAuditLog) {
          sails.log.debug('User Audit Log update responding with: ' + util.inspect(resultAuditLog));
          signout(req);
        })
        .catch(function(err) {
          sails.log.debug('error Audit Log update: ' + util.inspect(err));
          return done(util.inspect(err));
        });
    }else{
      signout(req);
    }
    function signout(req)
    {
      req.logout();
      sails.log.debug("Destroyed session : " + util.inspect(req.session));
      analyse(req,req.res);
      req.res.json(200,{"message":"signout successful"});
      return false;
    }
  }
};
