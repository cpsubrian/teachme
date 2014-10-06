define(function (require) {
  var app = require('app')
    , LayoutView = require('views/layout_view');

  // Define app regions.
  app.addRegions({
    'mainRegion': '#main'
  });

  // Create the main layout view on app start.
  app.addInitializer(function () {
    app.mainRegion.show(new LayoutView());
  });

  return app;
});