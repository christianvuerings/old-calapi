(function() {
  'use strict';

  // Express
  var express = require('express');
  var app = express();

  // Request - HTTP Client that has build-in cookie handling (only for chocolate-dip)
  var request = require('request');

  // Configuration
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

  // Start server
  var port = process.env.PORT || 3000;
  app.listen(port);

  // Log info on startup
  var now = new Date();
  console.log('Calapi - Server started');
  console.log('  at: ' + now.toString());
  console.log('  environment: ' + app.get('env'));

  // Expose variables
  module.exports.app = app;
  module.exports.request = request;
  require('./routes');
})();
