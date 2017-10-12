module.exports = {
  beforeCreate: function(values, req, done) {
    
 
done();

  },

  afterCreate: function(models, req, done) {
    
if (process.env.NODE_ENV === 'test' || !models.length) return done(); //don't run during tests or if there are no records
      if(models && models.length>0 && models[0].categoryGroup!="useful links"){
         
        var AWS   = require('aws-sdk');
        AWS.config.update({ 
              accessKeyId: process.env.AWS_ACCESS_KEY, //change this in the Environment variables
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY //change this in the Environment variables
            });
        var s3 = new AWS.S3();
        
        function createExternalLink() {
          models[0].externalLink=encodeURIComponent("https://"+process.env.AWS_BUCKET_HEALTHCARE_PROVIDER+".s3.amazonaws.com/"+models[0].id);
          models[0].save();
           
            models[0].externalLink = s3.getSignedUrl('putObject', { 
              Bucket: process.env.AWS_BUCKET_HEALTHCARE_PROVIDER, 
              Key: models[0].id+"", 
              ACL: 'public-read',//'private',//'authenticated-read',
              ContentType: req.context.body.content_type,
              Expires: parseInt(process.env.AWS_EXPIRES || 15)*60 //if environment variable expires can't be found, defaults to 15 minutes
            },function (err, url) {
              models[0].externalLink=encodeURIComponent(url);
              req.res.json(200,models);
              return false;
            });
        }
        createExternalLink();
      }else{
        done();
      } 
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
    
if (process.env.NODE_ENV === 'test' || !models.length) return done(); //don't run during tests or if there are no records
    if(models && models.length>0){
       
      var AWS   = require('aws-sdk');
      AWS.config.update({ 
            accessKeyId: process.env.AWS_ACCESS_KEY, //change this in the Environment variables
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY //change this in the Environment variables
          });
      var s3 = new AWS.S3();
      
      function createExternalLink() {
        
          models[0].externalLink = s3.getSignedUrl('putObject', { 
            Bucket: process.env.AWS_BUCKET_HEALTHCARE_PROVIDER, 
            Key: models[0].id+"", 
            ACL: 'public-read',//'private',//'authenticated-read',
            ContentType: req.context.body.content_type,
            Expires: parseInt(process.env.AWS_EXPIRES || 15)*60 //if environment variable expires can't be found, defaults to 15 minutes
          },function (err, url) {
            models[0].externalLink=encodeURIComponent(url);
            req.res.json(200,models);
            return false;
          });
      }
      createExternalLink();
    }else{
      done();
    } 

  },

  beforeDestroy: function(values, req, done) {
    
 done();

  },

  afterDestroy: function(models, req, done) {
    
if (process.env.NODE_ENV === 'test' || !models.length) return done(); //don't run during tests or if there are no records
if(models && models.length>0 && models[0].categoryGroup!="useful links"){
   
  var AWS = require('aws-sdk');
   AWS.config.update({ 
            accessKeyId: process.env.AWS_ACCESS_KEY, //change this in the Environment variables
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY //change this in the Environment variables
          });
  var s3 = new AWS.S3();
  var deleteParam = {
        Bucket: process.env.AWS_BUCKET_HEALTHCARE_PROVIDER,
        Key: models[0].id+""
    };
  
  s3.deleteObject(deleteParam, function(err, data) {
      if (err) done(err);
      else {
          done();
      }
  });
  
}else{
  done();  
}

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

  beforeSearchContentScope: function(values, req, done) {
    
 done();

  },

  afterSearchContentScope: function(models, req, done) {
    
done();

  },

  beforeSortedByNameScope: function(values, req, done) {
    
 done();

  },

  afterSortedByNameScope: function(models, req, done) {
    
done();

  },

  beforeFilterByCategoryGroupScope: function(values, req, done) {
    
 done();

  },

  afterFilterByCategoryGroupScope: function(models, req, done) {
    
done();

  },

};