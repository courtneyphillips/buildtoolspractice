var expect = require('chai').expect;
var pingPong = require('./../js/ping-pong.js').pingPong;

describe("pingPong", function(){
  it("returns array of numbers from 1 up to and including the input number when that number is < 3.",function(){
    expect(pingPong(2)).to.eql([1, 2]);
  });

  it("replaces numbers divisible by 3 (and not 3)  with the word 'ping'.",function(){
    expect(pingPong(3)).to.eql([1, 2, "Ping"]);
  });

  it("replaces numbers divisible by 5 (and not 3) with the word 'Pong'.",function(){
    expect(pingPong(5)).to.eql([1, 2, "Ping", 4, "Pong"]);
  });

  it("replaces numbers divisible by both 5 and 3 with the word 'Ping-Pong'.",function(){
    expect(pingPong(15)).to.eql([1, 2, "Ping", 4, "Pong", "Ping", 7, 8, "Ping", "Pong", 11, "Ping", 13, 14, "Ping-Pong"]);
  });
});
