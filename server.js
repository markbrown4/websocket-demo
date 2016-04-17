#!/usr/bin/env node
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8081 });

wss.on('connection', function(socket) {
  console.log('Opened Connection 🎉');

  var json = JSON.stringify({ message: 'Gotcha' });
  socket.send(json);
  console.log('Sent: ' + json);

  socket.on('message', function(message) {
    console.log('Received: ' + message);
  });

  socket.on('close', function() {
    console.log('Closed Connection');
  });

});

var broadcast = function() {
  var json = JSON.stringify({
    message: 'Hello hello!'
  });

  wss.clients.forEach(function each(client) {
    client.send(json);
    console.log('Sent: ' + json);
  });
}
setInterval(broadcast, 3000)
