const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    strTest:{
        type:String,
        required:true
    },
},{timestamps:true})

const Test = mongoose.model('test',testSchema);
module.exports = Test;