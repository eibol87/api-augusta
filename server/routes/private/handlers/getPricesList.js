const PricesList = require('../../../models/PricesList')

async function getPricesList( req, res ) {
  PricesList.find({}, function(err, pricesList) {
  	res.status(200).json(pricesList);  
  });
}

module.exports = getPricesList


