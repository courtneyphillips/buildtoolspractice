(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("Ping-Pong");
    } else if (i % 3 === 0) {
      output.push("Ping");
    } else if (i % 5 === 0) {
      output.push("Pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

},{}],2:[function(require,module,exports){
var pingPong = require('./../js/ping-pong.js').pingPong;

$(document).ready(function(){
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + 'has been added to our mailing list!</p>');
  });
});

var apiKey = "ac4cd0a0188bdb1f0aaaa90f1b116362";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val('');
    $('.showWeather').text('The city you have chosen is ' + city + ' .');
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apiKey, function (response) {
      console.log(response);
    });
  });
});

},{"./../js/ping-pong.js":1}]},{},[2]);
