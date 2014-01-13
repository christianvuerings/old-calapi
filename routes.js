var app = module.parent.exports.app;

// Include
var api = require('./modules/api');
var cal1card = require('./modules/cal1card');

// Endpoints
app.get('/api/', api.routes);
app.get('/api/cal1card', cal1card.balance);

// Export variables
module.exports.app = app;
