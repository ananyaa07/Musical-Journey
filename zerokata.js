var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
  console.log('User Online');
  
  socket.on('codeboard-message', (msg) => {
    console.log('message: ' + msg);
	socket.broadcast.emit('message-from-others', msg);
  });
  
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
http.listen(server_port, () => {
  console.log('listening on *:' + server_port);
});

var socket;
			window.onload = function() {
				
				socket = io.connect('http://localhost:3000');
				
				socket.on('message-from-others', function(message){
					var html = '<div class="message-box others-message-box">' +
								'<div class="message others-message"> ' + message + ' </div>' +
								'<div class="separator"></div>' +
							'</div>';
							
					document.getElementById("messaging").innerHTML += html;
				})
			}
		
			function sendMessage() {
				var message = document.getElementById("texting_box").value;
				var html = '<div class="message-box my-message-box">' +
								'<div class="message my-message"> ' + message + ' </div>' +
								'<div class="separator"></div>' +
							'</div>';
							
				document.getElementById("messaging").innerHTML += html;
				document.getElementById("texting_box").value = "";
				
				socket.emit('codeboard-message', message);
			}