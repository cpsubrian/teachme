define(function (require) {
  var app = require('app')
    , Backbone = require('backbone')
    , LayoutView = require('views/layout_view');

  // Define app regions.
  app.addRegions({
    'mainRegion': '#main'
  });

  // Create global collections.
  app.teams = {
    friendly: new Backbone.Collection(require('data/team_friendly')),
    enemy: new Backbone.Collection(require('data/team_enemy'))
  };
  app.bans = {
    friendly: new Backbone.Collection(require('data/bans_friendly')),
    enemy: new Backbone.Collection(require('data/bans_enemy'))
  };
  app.chats = new Backbone.Collection(require('data/chats'));
  app.champions = new Backbone.Collection([]);

  // Create the main layout view on app start.
  app.addInitializer(function () {
    app.mainRegion.show(new LayoutView());
  });

  return app;
});