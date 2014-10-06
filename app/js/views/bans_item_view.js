define(function (require) {
  var app = require('app')
    , Marionette = require('marionette');

  var BansItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: require('hbs!templates/bans_item'),
    templateHelpers: function () {
      var data = app.champions.findWhere({key: this.model.get('champion')}).toJSON();
      return data;
    }
  });

  return BansItemView;
});