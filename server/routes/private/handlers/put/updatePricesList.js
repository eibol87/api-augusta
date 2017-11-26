const PricesList = require('../../../../models/PricesList')

function updatePricesList( req, res ) {
  const {id,body} =req.params
  PricesList.findByIdAndUpdate(id, { $set: req.body}, { new: true }, function (err, PricesList) {
    if (err){
      res.status(400).send(err.message)
    }else{
     res.status(200).send(PricesList);
    } 
  })
}

module.exports = updatePricesList
