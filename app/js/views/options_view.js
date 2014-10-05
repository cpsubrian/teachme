define(function (require) {
  var Marionette = require('marionette');

  var OptionsView = Marionette.ItemView.extend({
    template: require('hbs!templates/options')
  });

  return OptionsView;
});