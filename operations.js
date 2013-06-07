// require tty

exports.run = function (link) {
    if (!link.data) { return link.send(400, "Missing data."); }

    link.send(200);
};
