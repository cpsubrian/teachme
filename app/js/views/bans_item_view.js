define(function (require) {
  var Marionette = require('marionette');

  var BansItemView = Marionette.ItemView.extend({
    template: require('hbs!templates/bans_item')
  });

  return BansItemView;
});