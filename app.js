var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var clientPath = path.join(__dirname, '/http/client');

server.listen(8080);

app.use('/bower_components', express.static(clientPath + '/bower_components'));

app.get('/', function (req, res) {
    res.sendFile(clientPath + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('response', 'Bienveido a nuestro mud!');
});
