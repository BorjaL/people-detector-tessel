var http = require('http');
var tessel = require('tessel');
//Connecting the PIR: PIR's GND goes to Tessel's GND on the GPIO bank PIR's +5V goes to Tessel's Vin on the GPIO bank PIR's OUT goes to Tessel's G3 on the GPIO bank
var PIR = tessel.port['GPIO'].pin['G3'];

var options = {
  host: '192.168.0.11',
  port: '8080',
  path: '/'
};


PIR.on('fall', function(){
  http.get(options)
});



