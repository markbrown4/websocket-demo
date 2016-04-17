
// open a connection
var socket = new WebSocket('ws://localhost:8081/');
socket.onopen = function(event) {
  log('Opened connection 🎉');
  var json = JSON.stringify({
    message: 'Hello'
  });

  socket.send(json);
  log('Sent: ' + json);
}

socket.onerror = function(event) {
  // Couldn't connect
  log(event);
}

socket.onmessage = function (event) {
  var json = event.data;
  var data = JSON.parse(json);
  log('Received: ' + json);
}

document.querySelector('#close').addEventListener('click', function(event) {
  socket.close();
  log('Closed connection');
});

document.querySelector('#send').addEventListener('click', function(event) {
  var json = JSON.stringify({
    message: 'Hey there'
  });
  socket.send(json);
  log('Sent: ' + json);
});

var log = function(text) {
  var li = document.createElement('li');
  li.innerHTML = text;
  document.getElementById('log').appendChild(li);
}

window.addEventListener('beforeunload', function() {
  socket.close();
});
