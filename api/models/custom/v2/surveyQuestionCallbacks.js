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

  beforeGetQuestionBySurveyScope: function(values, req, done) {
    
 done();

  },

  afterGetQuestionBySurveyScope: function(models, req, done) {
    
done();

  },

  beforeDeleteSurveyQuestionScope: function(values, req, done) {
    
if (process.env.NODE_ENV === 'test') return done(); //don't run during tests 
  if(req.query && req.query.query && req.query.query.id){
    var self=this;
    var customSQL="Delete from survey_answers where survey_question_id in ( "+
                   "Select id from survey_questions where id="+req.query.query.id+
                  ");"; 
    self.models('SurveyAnswer').query(customSQL, function functionAnswerDeleted(err, answers){
        if(err){
          done(err);
        }
        self.models('SurveyQuestion').destroy({id:req.query.query.id}).exec(function(err,success){
          
            req.res.json(200);       
            return false;
        
        });
        
        
      });
  }else{
    done();
  }

  },

  afterDeleteSurveyQuestionScope: function(models, req, done) {
    
done();

  },

  beforeGetQuestionByQuestionCodeScope: function(values, req, done) {
    
 done();

  },

  afterGetQuestionByQuestionCodeScope: function(models, req, done) {
    
done();

  },

};