'use strict';
var http = require('http');

module.exports = function (port) {
	var srv = http.createServer(function (req, res) {
		if (req.url.match(/first/)) {
			return setTimeout(function () {
				res.writeHead(301, {Location: 'http://localhost:' + port + '/second'});
				res.end();
			}, 2500)
		}
		res.write('<html style="background-color: black;"></html>');
		srv.emit(req.url, req, res);
		res.end();
	});

	srv.listen(port);
	return srv;
};
