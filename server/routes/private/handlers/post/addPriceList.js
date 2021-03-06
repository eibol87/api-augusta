const PricesList = require('../../../../models/PricesList')

async function addPricelist( req, res ) {
  const article = {type:req.body.type,leather:req.body.leather}
  const checkArticleExist =await PricesList.exist(article)
  if(checkArticleExist){
    res.status(201).send("Article exist")
  }else{
    const newArticle = new PricesList(req.body);
    newArticle.save(function (err) {
      if (err){
        res.status(400).send(err.message)
      }else{
       res.status(200).send("addNew");
      } 
    })
  }
}

module.exports = addPricelist