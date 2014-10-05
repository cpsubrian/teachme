define(function (require) {
  var Marionette = require('marionette');

  var ChampionsItemView = Marionette.ItemView.extend({
    template: require('hbs!templates/champions_item')
  });

  return ChampionsItemView;
});