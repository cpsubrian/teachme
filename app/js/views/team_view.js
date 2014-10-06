define(function (require) {
  var Marionette = require('marionette');

  var TeamView = Marionette.CollectionView.extend({
    className: 'players',
    childView: require('views/team_item_view')
  });

  return TeamView;
});