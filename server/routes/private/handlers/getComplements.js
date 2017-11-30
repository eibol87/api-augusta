const Complements = require('../../../models/Complements')

async function getComplements( req, res ) {
  Complements.find({}, function(err, complements) {
    res.status(200).json(complements);  
  });
}

module.exports = getComplements


