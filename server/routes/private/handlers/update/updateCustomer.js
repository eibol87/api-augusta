const Customers = require('../../../../models/Customers')

function updateCustomer( req, res ) {
  const {id,body} =req.params 
  Customers.findByIdAndUpdate(id, { $set: req.body}, { new: true }, function (err, customer) {
    if (err) return handleError(err);
    res.send(customer);
  });
}

module.exports = updateCustomer