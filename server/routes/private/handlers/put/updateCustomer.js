const Customers = require('../../../../models/Customers')

function updateCustomer( req, res ) {
  const {id,body} =req.params
  Customers.findByIdAndUpdate(id, { $set: req.body}, { new: true }, function (err, customer) {
    if (err){
      res.status(400).send(err.message)
    }else{
     res.status(200).send(customer);
    } 
  })
}

module.exports = updateCustomer
