define(function (require) {
  var app = require('app')
    , Backbone = require('backbone')
    , Handlebars = require('handlebars')
    , LayoutView = require('views/layout_view')
    , ChampionsCollection = require('collections/champions_collection');

  // Load inspection tooling.
  require('inspect');

  // Define app regions.
  app.addRegions({
    'mainRegion': '#main'
  });

  // Partials.
  Handlebars.registerPartial('champion_icon', require('hbs!templates/champion_icon'));

  // Define api variables.
  app.api = {
    cdn: 'http://ddragon.leagueoflegends.com/cdn',
    version: '4.18.1',
    spriteUrl: function (sprite) {
      return app.api.cdn + '/' + app.api.version + '/img/sprite/' + sprite;
    },
  };

  // Create champions collection.
  app.champions = new ChampionsCollection(require('data/champions'));
  app.champions.each(function (model) {
    var image = model.get('image');
    image.x = (-1 * image.x) - 1;
    image.y = (-1 * image.y) - 1;
    image.spriteUrl = app.api.spriteUrl(image.sprite);
    model.set('image', image);
  });

  // This is a slightly hacky way to get the flex layout of the
  // champions grid to behave expectedly for the last row of champs.
  app.champions.add([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  // More global collections.
  app.teams = {
    friendly: new Backbone.Collection(require('data/team_friendly')),
    enemy: new Backbone.Collection(require('data/team_enemy'))
  };
  app.bans = {
    friendly: new Backbone.Collection(require('data/bans_friendly')),
    enemy: new Backbone.Collection(require('data/bans_enemy'))
  };
  app.chats = new Backbone.Collection(require('data/chats'));

  // Mark initially selected champions as selected.
  app.teams.friendly.each(function (model) {
    app.champions.findWhere({key: model.get('champion')}).set('locked', true);
  });
  app.teams.enemy.each(function (model) {
    app.champions.findWhere({key: model.get('champion')}).set('locked', true);
  });

  // Some AI to get us rolling.
  app.mainRegion.on('show', function (layout) {
    // Enemies will start picking random champions.
    var enemies = layout.teamEnemy.currentView;
    enemies.collection.where({picking: true}).forEach(function (player) {
      var view = enemies.children.findByModel(player)
        , picks = 0
        , pickTimeout;

      function pick () {
        pickTimeout = setTimeout(function () {
          view.pickRandomChampion();
          pick();
        }, Math.random() * 3000 + 1000);
      }

      pick();

      // When someone gets impatient and chats, lock-in the champ.
      app.chats.once('add', function (chat) {
        clearTimeout(pickTimeout);
        view.lockInChampion();
      });
    });

    // On the first chat, the enemies will be done and we can pick now.
    app.chats.once('add', function (chat) {
      var player = app.teams.friendly.findWhere({player: true});
      var playerView = layout.teamFriendly.currentView.children.findByModel(player);
      playerView.activate();
    });
  });

   // Create the main layout view on app start.
  app.addInitializer(function () {
    app.mainRegion.show(new LayoutView());
  });

  return app;
});