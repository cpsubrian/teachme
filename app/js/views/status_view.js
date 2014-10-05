define(function (require) {
  var Marionette = require('marionette');

  var StatusView = Marionette.ItemView.extend({
    template: require('hbs!templates/status')
  });

  return StatusView;
});