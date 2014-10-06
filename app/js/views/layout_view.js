define(function (require) {
  var Marionette = require('marionette')
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
      teamA: '.team-a',
      teamB: '.team-b',
      status: '.status',
      champions: '.champions',
      playerOptions: '.player-options',
      bansA: '.bans-a',
      bansB: '.bans-b',
      chat: '.chat'
    },

    onRender: function () {
      this.teamA.show(new TeamView({

      }));
      this.teamB.show(new TeamView({

      }));
      this.status.show(new StatusView({

      }));
      this.champions.show(new ChampionsView({

      }));
      this.playerOptions.show(new OptionsView({

      }));
      this.bansA.show(new BansView({

      }));
      this.bansB.show(new BansView({

      }));
      this.chat.show(new ChatView({

      }));
    }
  });

  return LayoutView;
});