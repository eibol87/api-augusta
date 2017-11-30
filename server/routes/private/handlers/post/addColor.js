const Colors = require('../../../../models/Colors')

function addColors( req, res ) {
  const newColor = new Colors(req.body);
  newColor.save(function (err) {
    if (err){
      res.status(400).send(err.message)
    }else{
     res.status(200).send("add New color");
    } 
  })
}

module.exports = addColors