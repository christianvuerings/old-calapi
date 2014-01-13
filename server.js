(function() {
  'use strict';

  var express = require('express');
  var app = express();

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
  require('./routes');
})();
