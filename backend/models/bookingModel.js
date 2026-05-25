const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    customerName:{
        type:String,
        required:true
    },

    providerName:{
        type:String,
        required:true
    },

    serviceDate:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:'Pending'
    }

},{
    timestamps:true
});

module.exports = mongoose.model(
    'Booking',
    bookingSchema
);