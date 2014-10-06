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
    friendly: new Backbone.Collection([
      {name: 'Froggen', champion: 'anivia'},
      {name: 'Froggen', champion: 'anivia'},
      {name: 'Froggen', champion: 'anivia'},
      {name: 'Froggen', champion: 'anivia'},
      {name: 'Froggen', champion: 'anivia'},
    ]),
    enemy: new Backbone.Collection([
      {name: 'Froggen', champion: 'anivia'},
      {name: 'Froggen', champion: 'anivia'},
      {name: 'Froggen', champion: 'anivia'},
      {name: 'Froggen', champion: 'anivia'},
      {name: 'Froggen', champion: 'anivia'},
    ])
  };
  app.bans = {
    friendly: new Backbone.Collection([
      {champion: 'Teemo'},
      {champion: 'Teemo'},
      {champion: 'Teemo'},
    ]),
    enemy: new Backbone.Collection([
      {champion: 'Teemo'},
      {champion: 'Teemo'},
      {champion: 'Teemo'},
    ])
  };
  app.chats = new Backbone.Collection([
    {name: 'Froggen', msg: 'Mid!'}
  ]);
  app.champions = new Backbone.Collection([]);

  // Create the main layout view on app start.
  app.addInitializer(function () {
    app.mainRegion.show(new LayoutView());
  });

  return app;
});