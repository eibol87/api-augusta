const PricesList = require('../../../models/PricesList')

async function getPricesList( req, res ) {
  if(req.query.type){
    const article = {type:req.query.type,leather:req.query.leather}
    const result = await PricesList.exist(article)
    if(result){
        res.status(200).json(result)
    }else{
        res.status(201).send("not found article")
    }
  }else{
    PricesList.find({}, function(err, pricesList) {
    	res.status(200).json(pricesList);  
    })
  }
}

module.exports = getPricesList
