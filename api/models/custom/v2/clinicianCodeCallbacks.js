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
    //don't delete if clinic code being used by a registered user.
    var userModel=this.models("user");
    userModel.findOne({"clinician_code_id":values}).exec(function(error,result){
      if(result && result.id>0){
        req.res.json(500,{"message":"a user with clinic code id exists"});
        req.res.end();
        return false;
      }else{
        done();
      }
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

  beforeSortedByNameScope: function(values, req, done) {
    
 done();

  },

  afterSortedByNameScope: function(models, req, done) {
    
done();

  },

};