define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , BansView = require('views/bans_view')
    , ChampionsView = require('views/champions_view')
    , ChatView = require('views/chat_view')
    , OptionsView = require('views/options_view')
    , StatusView = require('views/status_view')
    , TeamView = require('views/team_view');

  var LayoutView = Marionette.LayoutView.extend({
    tagName: 'section',
    className: 'layout',
    template: require('hbs!templates/layout'),

    regions: {
      teamFriendly: '.team-friendly',
      teamEnemy: '.team-enemy',
      status: '.status',
      champions: '.champions',
      playerOptions: '.player-options',
      bansFriendly: '.bans-friendly',
      bansEnemy: '.bans-enemy',
      chat: '.chat'
    },

    onRender: function () {
      this.teamFriendly.show(new TeamView({
        collection: app.teams.friendly
      }));
      this.teamEnemy.show(new TeamView({
        collection: app.teams.enemy
      }));
      this.status.show(new StatusView({

      }));
      this.champions.show(new ChampionsView({
        collection: app.champions
      }));
      this.playerOptions.show(new OptionsView({

      }));
      this.bansFriendly.show(new BansView({
        collection: app.bans.friendly
      }));
      this.bansEnemy.show(new BansView({
        collection: app.bans.enemy
      }));
      this.chat.show(new ChatView({
        collection: app.chats
      }));
    }
  });

  return LayoutView;
});