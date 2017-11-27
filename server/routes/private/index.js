const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const getCustomers = require('./handlers/getCustomers')
const getCustomersPayments = require('./handlers/getCustomersPayments')
const getArticles = require('./handlers/getArticles')
const getPricesList = require('./handlers/getPricesList')
const getDeliveryNotes = require('./handlers/getDeliveryNotes')
const getListArticleType = require('./handlers/getListArticleType')

const updateCustomer = require('./handlers/put/updateCustomer')
const updatePricesList = require('./handlers/put/updatePricesList')
const updateArticle = require('./handlers/put/updateArticle')

const addCustomer = require('./handlers/post/addCustomer')
const addArticle = require('./handlers/post/addArticle')

router.use( passport.authenticate('jwt', { session: false } ) )

router.get('/customers',getCustomers)
router.get('/customers/payments', getCustomersPayments)
router.get('/listArticlesType/:list',getListArticleType)
router.get('/articles', getArticles)
router.get('/deliveryNotes', getDeliveryNotes)
router.put('/customer/:id',updateCustomer)
router.put('/pricesList/:id',updatePricesList)
router.put('/article/:id',updateArticle)
router.post('/customer',addCustomer)

router.route('/pricesList')
  .post(addArticle)
  .get(getPricesList)


module.exports = router
