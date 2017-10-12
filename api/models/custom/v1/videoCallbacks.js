module.exports = {
  beforeCreate: function(values, req, done) {
    
 done();

  },

  afterCreate: function(models, req, done) {
    
if (process.env.NODE_ENV === 'test' || !models.length) return done(); //don't run during tests or if there are no records
if(models && models.length>0){
   
  var AWS   = require('aws-sdk');
  AWS.config.update({ 
        accessKeyId: process.env.AWS_ACCESS_KEY, //change this in the Environment variables
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY //change this in the Environment variables
      });
  var s3 = new AWS.S3();
  
  function createAWSUploadUrl() {
    models[0].videoUrl=encodeURIComponent("https://"+process.env.AWS_BUCKET_VIDEOS+".s3.amazonaws.com/"+models[0].id);
     models[0].save();
      models[0].videoUrl = s3.getSignedUrl('putObject', { 
        Bucket: process.env.AWS_BUCKET_VIDEOS, 
        Key: models[0].id+"",
        ACL: 'public-read',
        ContentType: req.context.body.content_type,
        Expires: parseInt(process.env.AWS_EXPIRES || 15)*60 //if environment variable expires can't be found, defaults to 15 minutes
      },function (err, url) {
        models[0].videoUrl=encodeURIComponent(url);
        req.res.json(200,models);
        return false;
      });
  }
  createAWSUploadUrl();
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
      
      function createAWSUploadUrl() {
        
         
          models[0].videoUrl = s3.getSignedUrl('putObject', { 
            Bucket: process.env.AWS_BUCKET_VIDEOS, 
             Key: models[0].id+"",
            ACL: 'public-read',//'private',//'authenticated-read',
            ContentType: req.context.body.content_type,
            Expires: parseInt(process.env.AWS_EXPIRES || 15)*60 //if environment variable expires can't be found, defaults to 15 minutes
          },function (err, url) {
            models[0].videoUrl=encodeURIComponent(url);
            req.res.json(200,models);
            return false;
          });
      }
      createAWSUploadUrl();
    }else{
      done();
    }

  },

  beforeDestroy: function(values, req, done) {
    
 if (process.env.NODE_ENV === 'test') return done(); //don't run during tests or if there are no records
this.models('video').update({"id":req.params.id},{"is_active":0},function(err,result){
  
  
  if(result && result.length>0){
     
    var AWS = require('aws-sdk');
     AWS.config.update({ 
              accessKeyId: process.env.AWS_ACCESS_KEY, //change this in the Environment variables
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY //change this in the Environment variables
            });
    var s3 = new AWS.S3();
    var deleteParam = {
          Bucket: process.env.AWS_BUCKET_VIDEOS,
          Key: result[0].id+""
      };
    
    s3.deleteObject(deleteParam, function(err, data) {
        
    });
    
  }
  req.res.json(200,result);
  return false;
});

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

  beforeSearchVideoScopedByRaceEduScope: function(values, req, done) {
    
 done();

  },

  afterSearchVideoScopedByRaceEduScope: function(models, req, done) {
    
 done();
  },

  beforeSearchVideoByKeywordScope: function(values, req, done) {
    
 done();

  },

  afterSearchVideoByKeywordScope: function(models, req, done) {
    
done();

  },

  beforeSortedByNameScope: function(values, req, done) {
    
 done();

  },

  afterSortedByNameScope: function(models, req, done) {
    
done();

  },

  beforeVideoGalleryScope: function(values, req, done) {
    
 done();

  },

  afterVideoGalleryScope: function(models, req, done) {
    
if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
    var self = this;
    var filterModels=[];
    if(models.length > 0 ){
      
      var sql="select us.video_source_version from "+
              "user_surveys us, surveys s where "+
              "s.id = us.survey_id "+
              "AND  user_id = "+req.context.current_user.id+
              " and s.survey_type = 'registration' "+
              "order by us.created_at asc LIMIT 1;";
          
      self.models('video').query(sql,function(err,result){
        if(result && result.length>0 && result[0].video_source_version){
           
          _.each(models,function(model){
            if(model.sourceVersion == result[0].video_source_version){
              filterModels.push(model);
            }
          });
          models=filterModels;
          req.res.send(200,models);
          return false;
        }
      });
    }else{
      done();
    }
    

  },

};