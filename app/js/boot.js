define(function (require) {
  var app = require('app')
    , Backbone = require('backbone')
    , LayoutView = require('views/layout_view')
    , ChampionsCollection = require('collections/champions_collection');

  // Define app regions.
  app.addRegions({
    'mainRegion': '#main'
  });

  // Create global collections.
  app.champions = new ChampionsCollection(require('data/champions'));
  app.teams = {
    friendly: new Backbone.Collection(require('data/team_friendly')),
    enemy: new Backbone.Collection(require('data/team_enemy'))
  };
  app.bans = {
    friendly: new Backbone.Collection(require('data/bans_friendly')),
    enemy: new Backbone.Collection(require('data/bans_enemy'))
  };
  app.chats = new Backbone.Collection(require('data/chats'));

  // Define api variables.
  app.api = {
    cdn: 'http://ddragon.leagueoflegends.com/cdn',
    version: '4.18.1',
    spriteUrl: function (sprite) {
      return app.api.cdn + '/' + app.api.version + '/img/sprite/' + sprite;
    },
  };

  // Create the main layout view on app start.
  app.addInitializer(function () {
    app.mainRegion.show(new LayoutView());
  });

  return app;
});