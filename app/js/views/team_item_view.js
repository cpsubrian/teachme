define(function (require) {
  var app = require('app')
    , Marionette = require('marionette');

  var TeamItemView = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'box player',
    template: require('hbs!templates/team_item'),
    templateHelpers: function () {
      var data = {};
      data.champion = app.champions.findWhere({key: this.model.get('champion')}).toJSON();
      return data;
    }
  });

  return TeamItemView;
});