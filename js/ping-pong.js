exports.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 == 0) {
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
}
