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

  beforeGetPatientsSurveyScope: function(req, done) {
    
done();

  },

  afterGetPatientsSurveyScope: function(req, res, done) {
    
done();

  },

  beforeGetfirstquestionScope: function(req, done) {
    
done();

  },

  afterGetfirstquestionScope: function(req, res, done) {
    
done();

  },

  beforeCompeleteSurveyScope: function(req, done) {
    
done();

  },

  afterCompeleteSurveyScope: function(req, res, done) {
    
done();

  },

  beforeGetVideoSurveyScope: function(req, done) {
    
done();

  },

  afterGetVideoSurveyScope: function(req, res, done) {
    
done();

  },

  beforeCheckSurveyExistsScope: function(req, done) {
    
done();

  },

  afterCheckSurveyExistsScope: function(req, res, done) {
    
done();

  },

  beforeCheckSurveyCountScope: function(req, done) {
    
done();

  },

  afterCheckSurveyCountScope: function(req, res, done) {
    
done();

  },

  beforeGenerateCsvResultsScope: function(req, done) {
    console.log("beofre csv generate");
    req.connection.setTimeout(10*60*1000);
    console.log(this.timeout);
done();

  },

  afterGenerateCsvResultsScope: function(req, res, done) {
    
done();

  },

};