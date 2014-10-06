define(function (require) {
  var Marionette = require('marionette');

  var ChampionsView = Marionette.CollectionView.extend({
    childView: require('views/champions_item_view')
  });

  return ChampionsView;
});