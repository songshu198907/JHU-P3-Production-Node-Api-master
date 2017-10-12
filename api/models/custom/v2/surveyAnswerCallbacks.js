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

  beforeGetAnswersByQuestionScope: function(values, req, done) {
    
 done();

  },

  afterGetAnswersByQuestionScope: function(models, req, done) {
    
done();

  },

  beforeDeleteQuestionAnswerScope: function(values, req, done) {
    
 if (process.env.NODE_ENV === 'test') return done(); //don't run during tests 
  if(req.query && req.query.query && req.query.query.id){
   
    var customSQL="Delete from survey_answers where id="+req.query.query.id+";";
                
    this.models('surveyAnswer').query(customSQL, function findQuestionsCallback(err, surveyAnswer){
        if(err){
          done(err);
        }
        req.res.json(200,surveyAnswer);       
        return false;
      });
  }else{
    done();
  }

  },

  afterDeleteQuestionAnswerScope: function(models, req, done) {
    
done();

  },

};