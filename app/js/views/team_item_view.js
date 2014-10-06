define(function (require) {
  var Marionette = require('marionette');

  var TeamItemView = Marionette.ItemView.extend({
    template: require('hbs!templates/team_item')
  });

  return TeamItemView;
});