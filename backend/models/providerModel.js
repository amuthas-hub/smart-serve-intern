const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({

    providerName:{
        type:String,
        required:true
    },

    serviceType:{
        type:String,
        required:true
    },

    experience:{
        type:Number,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        default:5
    }

},{
    timestamps:true
});

module.exports = mongoose.model(
    'Provider',
    providerSchema
);