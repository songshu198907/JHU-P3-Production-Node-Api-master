module.exports = {
  beforeCreate: function(values, req, done) {
    
 done();

  },

  afterCreate: function(models, req, done) {
    
done();

  },

  beforeFind: function(values, req, done) {
    
 done();

  },

  afterFind: function(models, req, done) {
    
done();

  },

  beforeUpdate: function(values, req, done) {
    
 done();

  },

  afterUpdate: function(models, req, done) {
    
done();

  },

  beforeDestroy: function(values, req, done) {
    
 done();

  },

  afterDestroy: function(models, req, done) {
    
done();

  },

  beforeAllScope: function(values, req, done) {
    
 done();

  },

  afterAllScope: function(models, req, done) {
    
done();

  },

  beforeExactMatchScope: function(values, req, done) {
    
 done();

  },

  afterExactMatchScope: function(models, req, done) {
    
done();

  },

  beforeCountScope: function(values, req, done) {
    
 done();

  },

  afterCountScope: function(models, req, done) {
    
done();

  },

  beforeCountExactMatchScope: function(values, req, done) {
    
 done();

  },

  afterCountExactMatchScope: function(models, req, done) {
    
done();

  },

  beforeUserAuditExportScope: function(values, req, done) {
    
 done();

  },

  afterUserAuditExportScope: function(models, req, done) {
    
if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
var self=this;
if(models && models.length>0)
{
 
      
      sendCSVResponse = function(obj) {
        var body = '';
        
        var data=[];//extract attributes only
        _.each(obj,function(item,index){
          var row={};
          for(var key in item) {
              if(item.hasOwnProperty(key)) {
                   row[key] = item[key];
              }
          }
          data.push(row);
        });
        
        var json2csv = require('json2csv');
        var config={
          fields : ["email","loggedInAt","loggedOutAt","ipAddress","userAgent"],//['id','name', 'email'],
          fieldNames:["email","logged in at","logged out at","ip address","user agent"],
          data: data
        };
         json2csv(config, function(err, csv) {
              if (err) console.log(err);
              var filename = "user-audit-log-report.csv";
              req.res.attachment(filename);
              req.res.end(csv, 'UTF-8');
            });
        
      };
      var Promise = require('bluebird');
      var p = new Promise(function(resolve, reject) {
        _.each(models,function(model,pIndex){
        
           self.models("user").findOne({"id":model.userId},function(error,result){
            if(result){
              model.email=result.email;
            }
             if(pIndex==models.length-1){
              resolve();
            }
          });
        });
      });
      p.then(function(){
        sendCSVResponse(models);
      });
     
      
}else{
  done();
}

  },

};