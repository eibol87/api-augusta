const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'complements'

const ComplementsSchema = new Schema({
  complement:String
}, { collection })

ComplementsSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Complements', ComplementsSchema)
