var Io = require("socket.io");
var pty = require("pty.js");

///////////////////
// Operations    //
///////////////////
exports.initialize = function (link) {
//    // Open Terminal
//    var buff = [], socket, term;
//
//    var term = pty.fork(process.env.SHELL || 'sh', [], {
//        name: 'xterm',
//        cols: 80,
//        rows: 24,
//        cwd: process.env.HOME
//    });
//
//    term.on('data', function(data) {
//      return !socket
//        ? buff.push(data)
//        : socket.emit('data', data);
//    });
//
//    // Sockets
//    io = Io.listen(server);
//
//    io.configure(function() {
//      io.disable('log');
//    });
//
//    io.sockets.on('connection', function(sock) {
//      socket = sock;
//
//      socket.on('data', function(data) {
//        term.write(data);
//      });
//
//      socket.on('disconnect', function() {
//        socket = null;
//      });
//
//      while (buff.length) {
//        socket.emit('data', buff.shift());
//      }
//    });

    link.send(200);
};
