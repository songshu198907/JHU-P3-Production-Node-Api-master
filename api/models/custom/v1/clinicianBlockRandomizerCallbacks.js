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

  beforeSortedByClinicIdScope: function(values, req, done) {
    
if (process.env.NODE_ENV === 'test') return done(); //don't run during tests or if there are no records
  var customSQL="select id,clinician_code_id as clinicianCodeId,intervention_group as interventionGroup,patient_type as patientType "+
            "from clinic_block_randomizer "+
            "order by clinician_code_id asc, id asc ";
          if(req.query.limit){
            customSQL+="limit "+req.query.limit+" ";
            }
            if(req.query.offset){
              customSQL+="offset "+req.query.offset + " "; 
            }
            customSQL+=";";
  this.models('ClinicianBlockRandomizer').query(customSQL, function soretedRandomizers(err, clinicBlockRandomizers){
      if(err){
        done(err);
      }
      req.res.json(200,clinicBlockRandomizers);       
      return false;
  });

  },

  afterSortedByClinicIdScope: function(models, req, done) {
    
done();

  },

  beforeFilterByClinicIdScope: function(values, req, done) {
    
 done();

  },

  afterFilterByClinicIdScope: function(models, req, done) {
    
done();

  },

};