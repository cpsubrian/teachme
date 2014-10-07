define(function (require) {
  var app = require('app')
    , Marionette = require('marionette');

  var ChampionsItemView = Marionette.ItemView.extend({
    tagName: 'li',

    className: function () {
      return this.model.get('locked') ? 'locked' : '';
    },

    template: require('hbs!templates/champions_item'),

    events: {
      'click': 'onClick',
    },

    modelEvents: {
      'change:locked': 'onChangeLocked'
    },

    onChangeLocked: function (model, locked) {
      if (locked) {
        this.$el.addClass('locked');
      }
      else {
        this.$el.removeClass('locked');
      }
    },

    onClick: function (e) {
      e.preventDefault();
      app.vent.trigger('champion:clicked', this.model);
    }
  });

  return ChampionsItemView;
});