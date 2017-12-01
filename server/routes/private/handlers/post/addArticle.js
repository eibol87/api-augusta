const Articles = require('../../../../models/Articles')

async function addArticle( req, res ) {
  const newArticle = new Articles(req.body);
  newArticle.save(function (err) {
    if (err){
      res.status(400).send(err.message)
    }else{
      res.status(200).send("addNew");
    } 
  })
  
}

module.exports = addArticle