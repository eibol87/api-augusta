const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'pricesList'

const PricesListSchema = new Schema({
  type: String,
  leather: String,
  base_price: Number,
  assign_prices: [String],
  prices_per_customer:[{id_customer:Schema.ObjectId,price: String}]

}, { collection })

PricesListSchema.statics.listUnicType = async function(err, callback) {
  const result = await this.find({},{type:1}, function(error, list){})
  const aList = []
  result.forEach((value) => aList.push(value.type) )
  return aList.filter((v, i, a) => a.indexOf(v) === i)
}
PricesListSchema.statics.listUnicleather = async function(err, callback) {
  const result = await this.find({},{leather:1}, function(error, list){})
  const aList = []
  result.forEach((value) => aList.push(value.leather) )
  return aList.filter((v, i, a) => a.indexOf(v) === i)
}
PricesListSchema.statics.exist = async function exist(query) {
  const result = await this.findOne(query)
  if(result) return result
  return false
}


PricesListSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('PricesList', PricesListSchema)
