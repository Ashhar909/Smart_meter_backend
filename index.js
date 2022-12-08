var  SerialPort = require('serialport');
const parsers = SerialPort.parsers;

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
    // let values = data.toString().split(" ")
    // const entry = new Data({
    //     Voltage:values[0],
    //     Current:values[1],
    //     Power:values[2]
    // })
    // entry.save()
    // .then(()=> console.log("saved"))
    // .catch((err)=> console.log(err.message))
    console.log(data);
});