const mongoose = require('mongoose')
const subscriberSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subsriberToChannel:{
        type: String,
        required: true
    },
    subscriberdata:{
        type: Date,
        required: true,
        default: Date.now
    }
})
module.exports = mongoose.model('Subscriber' , subscriberSchema)