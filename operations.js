var io = require("socket.io");
var pty = require("pty.js");

///////////////////
// Open Terminal //
///////////////////
var buff = [], socket, term;

var term = pty.fork(process.env.SHELL || 'sh', [], {
    name: 'xterm',
    cols: 80,
    rows: 24,
    cwd: process.env.HOME
});

term.on('data', function(data) {
  return !socket
    ? buff.push(data)
    : socket.emit('data', data);
});

///////////////////
// Sockets       //
///////////////////
io = io.listen(server);

io.configure(function() {
  io.disable('log');
});

io.sockets.on('connection', function(sock) {
  socket = sock;

  socket.on('data', function(data) {
    term.write(data);
  });

  socket.on('disconnect', function() {
    socket = null;
  });

  while (buff.length) {
    socket.emit('data', buff.shift());
  }
});

///////////////////
// Operations    //
///////////////////
// TODO Do we need this 'run' operation?
exports.run = function (link) {
    if (!link.data) { return link.send(400, "Missing data."); }

    link.send(200);
};
