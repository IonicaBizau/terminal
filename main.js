module.exports = function (config) {
//    // Requiring the server file.
//    this.link("initialize", function (err) {
//        if (err) { return; }
//
//        ;(function() {
//            return setTimeout(function() {
//                var term = new Terminal(80, 24)
//                  , socket = io.connect();
//
//                socket.on('connect', function() {
//                    term.on('data', function(data) {
//                        socket.emit('data', data);
//                    });
//
//                    term.on('title', function(title) {
//                        document.title = title;
//                    });
//
//                    term.open();
//
//                    socket.on('data', function(data) {
//                        term.write(data);
//                    });
//                });
//            }, 1000);
//        }).call(this);
//    });
};
