const Article = require('../../../../models/Articles')

function updateArticle( req, res ) {
  const {id,body} =req.params
  Article.findByIdAndUpdate(id, { $set: req.body}, { new: true }, function (err, article) {
    if (err){
      res.status(400).send(err.message)
    }else{
     res.status(200).send(article);
    } 
  })
}

module.exports = updateArticle
