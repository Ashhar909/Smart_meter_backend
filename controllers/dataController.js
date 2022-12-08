var  SerialPort = require('serialport');
const parsers = SerialPort.parsers;
const Data = require('../models/data');
const Test = require('../models/test')

exports.addData = (req,res) => {
    try {
        const data = new Data({
            Current:req.body.current,
            Voltage:req.body.voltage,
            Power:req.body.power
        })
    
        data.save()
        .then(()=>{
            res.json({"status":"saved"})
        })
        .catch((err)=>{
            res.json({"status":"not saved"})
        })
    } catch (error) {
        res.json({"err":error.message})
    }
}

exports.getData = async (req,res) => {
    try {
        const data = await Data.find();
        res.send({"data":data});
    } catch (error) {
        res.json({"err":error})
    }
}
