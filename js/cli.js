var pingPong = require('./ping-pong.js').pingPong;
var prompt = require('prompt');

prompt.start();

console.log('Ping-ponging up to 100!');
var result = pingPong(100);
result.forEach(function(element) {
  console.log(element);
});
