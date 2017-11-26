const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const getCustomers = require('./handlers/getCustomers')
const getCustomersPayments = require('./handlers/getCustomersPayments')
const getArticles = require('./handlers/getArticles')
const getPricesList = require('./handlers/getPricesList')
const getDeliveryNotes = require('./handlers/getDeliveryNotes')
const updateCustomer = require('./handlers/put/updateCustomer')
const addCustomer = require('./handlers/post/addCustomer')
const updatePricesList = require('./handlers/put/updatePricesList')
const getListArticleType = require('./handlers/getListArticleType')
const addArticle = require('./handlers/post/addArticle')

router.use( passport.authenticate('jwt', { session: false } ) )

router.get('/customers', getCustomers)
router.get('/customers/payments', getCustomersPayments)
router.put('/customer/:id',updateCustomer)
router.put('/pricesList',updatePricesList)
router.get('/pricesList',getPricesList)
router.get('/listArticlesType/:list',getListArticleType)
router.post('/customer',addCustomer)
router.post('/pricesList',addArticle)
router.get('/articles', getArticles)
router.get('/deliveryNotes', getDeliveryNotes)


module.exports = router
