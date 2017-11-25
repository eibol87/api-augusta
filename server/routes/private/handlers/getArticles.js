const Articles = require('../../../models/Articles')
const Customers = require('../../../models/Customers')

async function getArticles( req, res ) {
  const { state } = req
	const query = state ? { state } : {}
  const articles = await Articles.find(query)
  const orders = await Articles.populate(articles, { path: "customer_id" })
  res.status(200).json(orders)
}

module.exports = getArticles


