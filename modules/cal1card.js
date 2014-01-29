(function() {

  'use strict';

  var parent = module.parent.exports;
  var request = parent.request;
  var request_options = {
    jar: true
  };

  var createOptions = function(url) {
    var options = Object.create(request_options);
    options.url = url;
    return options;
  };

  var checkQueryParams = function(req, res) {
    if (!req.query.username || !req.query.password) {
      res.send(403, {
        'error': 'Please supply a username and password'
      });
    }
  };

  var login = function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  };

  exports.balance = function(req, res) {
    checkQueryParams(req, res);

    var options = createOptions('https://auth.berkeley.edu/cas/login?service=https://services.housing.berkeley.edu/c1c/dyn/CasLogin.asp');
    request(options, login);

    res.json({"test": "Test"});
  };
})();
