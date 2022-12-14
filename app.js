const express = require('express');
const dotenv = require("dotenv");
const routes = require('./routes/Router')
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
const Data = require('./models/data')


dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 8008
app.use(cors());
app.use(express.json());
app.use(routes);


mongoose.connect(process.env.mongo)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`app listening at ${PORT}`);
        })
        var  SerialPort = require('serialport');
        const parsers = SerialPort.parsers;
        var curTime = new Date();
        var h = curTime.getHours();
        var m = curTime.getMinutes();
        var s = curTime.getSeconds();
        var date = h+":"+m+":"+s;
        const parser = new parsers.Readline({
            delimiter: '\n'
        });

        var port = new SerialPort('/dev/cu.usbserial-0001',{ 
            baudRate: 9600,
            dataBits: 8,
            parity: 'none',
            stopBits: 1,
            flowControl: false
        });
        port.pipe(parser);
        parser.on('data', function(data) {
            let values = data.toString().split(" ")
            const entry = new Data({
                Voltage:values[0],
                Current:values[1],
                Power:values[2],
                time: date
            })
            entry.save()
            .then(()=> console.log(date))
            .catch((err)=> console.log(err.message))
            console.log(values);
        });

    }).catch((err)=> {
        console.log(err.message)
    })


