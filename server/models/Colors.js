const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'colors'

const ColorsSchema = new Schema({
  color:String
}, { collection })

ColorsSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Colors', ColorsSchema)
