define(function (require) {
  var app = require('app')
    , Marionette = require('marionette');

  var TeamItemView = Marionette.ItemView.extend({
    tagName: 'div',
    className: function () {
      var status = '';
      if (this.model.get('player')) {
        if (this.model.get('picking')) {
          status += 'highlight ';
        }
        else {
          status += 'active ';
        }
      }
      if (this.model.get('picking')) {
        status += 'selecting ';
      }
      return 'box player ' +  status;
    },
    template: require('hbs!templates/team_item'),
    templateHelpers: function () {
      var data = {};
      data.champion = app.champions.findWhere({key: this.model.get('champion')}).toJSON();
      return data;
    },

    initialize: function () {
      // Listen for champion clicks.
      app.vent.on('champion:clicked', this.onChampionClicked.bind(this));
    },

    activate: function () {
      if (this.model.get('player')) {
        this.$el.addClass('highlight');
      }
      this.$el.addClass('selecting');
      this.activated = true;
    },

    onChampionClicked: function (champion) {
      if (this.activated) {
        if (!champion.get('locked')) {
          app.champions.findWhere({key: this.model.get('champion')}).set('locked', false);
          champion.set('locked', true);
          this.model.set('champion', champion.get('key'));
          this.render();
        }
      }
    },

    pickRandomChampion: function () {
      var ids = app.champions
        .chain()
        .reject(function (model) {
          return model.get('locked');
        })
        .pluck('id')
        .value();
      var champion = app.champions.get(ids[Math.floor(Math.random() * (ids.length -1))]);
      if (champion) {
        champion.set('locked', true);
        app.champions.findWhere({key: this.model.get('champion')}).set('locked', false);
        this.model.set('champion', champion.get('key'));
        this.render();
      }
      else {
        // try again.
        this.pickRandomChampion();
      }
    },

    lockInChampion: function () {
      this.$el.removeClass('selecting');
      this.$el.removeClass('highlight');
    }
  });

  return TeamItemView;
});