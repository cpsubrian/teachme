define(function (require) {
  var Marionette = require('marionette');

  var BansView = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: require('views/bans_item_view')
  });

  return BansView;
});