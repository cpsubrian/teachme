define(function (require) {
  var Marionette = require('marionette');

  var TeamView = Marionette.CollectionView.extend({
    childView: require('views/team_item_view')
  });

  return TeamView;
});