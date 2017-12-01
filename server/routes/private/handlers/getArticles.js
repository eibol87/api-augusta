const Articles = require('../../../models/Articles')
const Customers = require('../../../models/Customers')

function getArticles( req, res ) {
  const state= (req.state) ? {state:req.state} : {}
  Articles.find(state, function(err, articles) {
  	Articles.populate(articles, {path: "customer_id"},function(err, orders){
        	res.status(200).json(orders);
        })
  });
}

module.exports = getArticles


