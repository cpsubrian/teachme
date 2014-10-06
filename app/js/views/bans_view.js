define(function (require) {
  var Marionette = require('marionette');

  var BansView = Marionette.CollectionView.extend({
    childView: require('views/bans_item_view')
  });

  return BansView;
});