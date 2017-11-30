const Complements = require('../../../../models/Complements')

function addComplements( req, res ) {
  const newComplement = new Complements(req.body);
  newComplement.save(function (err) {
    if (err){
      res.status(400).send(err.message)
    }else{
     res.status(200).send("add New complement");
    } 
  })
}

module.exports = addComplements