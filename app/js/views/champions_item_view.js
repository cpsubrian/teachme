define(function (require) {
  var app = require('app')
    , Marionette = require('marionette');

  var ChampionsItemView = Marionette.ItemView.extend({
    tagName: 'li',
    className: function () {
      return this.model.get('locked') ? 'locked' : '';
    },
    template: require('hbs!templates/champions_item')
  });

  return ChampionsItemView;
});