const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DonorsSchema = new Schema({
    fullname: String,
    nominal: String,
    avatar: String
})


module.exports = mongoose.model('Donors', DonorsSchema)