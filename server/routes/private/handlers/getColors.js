const Colors = require('../../../models/Colors')

async function getColors( req, res ) {
  Colors.find({}, function(err, colors) {
    res.status(200).json(colors);  
  });
}

module.exports = getColors


