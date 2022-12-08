const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    Current:{
        type:Number,
        required:true
    },
    Voltage:{
        type:Number,
        required:true,
    },
    Power:{
        type:Number,
        required:true
    },
},{timestamps:true})

const Data = mongoose.model('value',dataSchema);
module.exports = Data;