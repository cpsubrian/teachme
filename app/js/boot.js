define(function (require) {
  var app = require('app')
    , MainLayoutView = require('views/main_layout_view');

  // Define app regions.
  app.addRegions({
    'mainRegion': '#main'
  });

  // Create the main layout view on app start.
  app.addInitializer(function () {
    app.mainRegion.show(new MainLayoutView());
  });

  return app;
});