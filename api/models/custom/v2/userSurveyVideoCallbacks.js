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
    
 if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') return done();
 var self=this;
 if(models && models.length>0){
   if(models[0].isComplete){
     var lSelectionCriteria={user_survey_id:models[0].userSurveyId,video_type:models[0].videoType,is_complete:0};
     
     self.models('usersurveyvideo').find(lSelectionCriteria).exec(function(err, matchingVideos){
        
        if(matchingVideos && matchingVideos.length===0){
          var lUpdate={};
          if(models[0].videoType=="maternal"){
            lUpdate.maternal_video_complete=1;
          }else{
            lUpdate.pediatric_video_complete=1;
          }
          self.models('usersurvey').update({id: models[0].userSurveyId},lUpdate).then(function(result){
                
          });
        }
        
    });
    done();
   }else{
     done();
   }
   
 }else{
    done();   
 }

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

  beforeGetVideosForUserSurveyIdScope: function(values, req, done) {
    
 done();

  },

  afterGetVideosForUserSurveyIdScope: function(models, req, done) {
    
done();

  },

  beforeGetVideoByIdScope: function(values, req, done) {
    
 done();

  },

  afterGetVideoByIdScope: function(models, req, done) {
    
done();

  },

};