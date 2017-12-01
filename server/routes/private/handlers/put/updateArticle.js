const Article = require('../../../../models/Articles')

function updateArticle( req, res ) {
  const {id,body} =req.params
  //update date output for article
  req.body.output_date = Date.now()
  console.log(req.body)
  Article.findByIdAndUpdate(id, { $set: req.body}, { new: true }, function (err, article) {
    if (err){
      res.status(400).send(err.message)
    }else{
     res.status(200).send(article);
    } 
  })
}

module.exports = updateArticle
