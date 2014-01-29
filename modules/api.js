(function() {

  'use strict';

  var parent = module.parent.exports;

  exports.routes = function(req, res) {
    var url = req.protocol + '://' + req.get('host');

    var parseRoute = function(route) {
      var expose = {
        method: route.method,
        path: url + '' + route.path
      };

      if (route.params && route.params.length) {
        expose.params = route.params;
      }

      return expose;
    };

    var routes = function() {
      var routes_expose = [];
      for (var i in parent.app.routes) {
        if (parent.app.routes.hasOwnProperty(i)) {
          var method = parent.app.routes[i];
          for (var j = 0; j < method.length; j++) {
            routes_expose.push(parseRoute(method[j]));
          }
        }
      }
      return routes_expose;
    };

    res.json({
      name: 'calapi',
      routes: routes()
    });
  };

})();
