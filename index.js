var http = require('http');
var tessel = require('tessel');
//Connecting the PIR: PIR's GND goes to Tessel's GND on the GPIO bank PIR's +5V goes to Tessel's Vin on the GPIO bank PIR's OUT goes to Tessel's G3 on the GPIO bank
var PIR = tessel.port['GPIO'].pin['G3'];
var led1 = tessel.led[1].output(0);

tessel.led[0].output(1);

var options = {
  host: '192.168.0.13',
  port: '8080',
  path: '/'
};


PIR.on('rise', function(){
  var fecha = new Date();
  console.log('subida -> ' + fecha.getMinutes() + ':' + fecha.getSeconds());
  http.get(options);
  led1.output(1);
});

PIR.on('fall', function(){
  var fecha = new Date();
  console.log('bajada -> ' + fecha.getMinutes() + ':' + fecha.getSeconds());
  led1.output(0);
});



