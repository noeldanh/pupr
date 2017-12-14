let mongoose= require('mongoose');
let User=mongoose.model('User');
let Pup= mongoose.model('Pup');



class PupsController{
  index(req, res){
    Pup.find({}).populate('user').exec((err, pups)=> {
      if(err){ return res.json(err)}
      return res.json(pups);
  })
 }
 create(req,res){

   Pup.create(req.body, (err, pup)=>{
     if(err){return res.json(err)}
   })
 }
 upload(req, res) {
   Pup.create(req.body, (err, pup)=>{
     if(err){
       return res.json(err)
     }
     return res.json(pup)
   })
 }
 show(req, res){
   Pup.findById(req.params.id,(err, pup)=>{
   if(err){return res.json(err)}
    return res.json(pup);

   })
  }
  delete(req, res){
  Pup.findByIdAndRemove(req.params.id, (err,pup) => {
          if(err) {
            return res.json(err);
          }
          console.log(pup)
          return res.json(pup);
      });
  }

}
module.exports = new PupsController();
