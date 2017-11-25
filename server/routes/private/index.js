const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const getCustomers = require('./handlers/getCustomers')
const getCustomersPayments = require('./handlers/getCustomersPayments')
const getArticles = require('./handlers/getArticles')
const getPricesList = require('./handlers/getPricesList')
const getDeliveryNotes = require('./handlers/getDeliveryNotes')
const updateCustomer = require('./handlers/update/updateCustomer')
const addCustomer = require('./handlers/post/addCustomer')
const updatePricesList = require('./handlers/update/updatePricesList')
const getListArticleType = require('./handlers/getListArticleType')

router.use( passport.authenticate('jwt', { session: false } ) )

router.get('/customers', getCustomers)
router.get('/customers/payments', getCustomersPayments)
router.put('/customer/:id',updateCustomer)
router.put('/pricesList',updatePricesList)
router.get('/pricesList',getPricesList)
router.get('/listArticlesType/:list',getListArticleType)
router.post('/customer',addCustomer)
router.get('/articles', getArticles)
router.get('/deliveryNotes', getDeliveryNotes)


module.exports = router
