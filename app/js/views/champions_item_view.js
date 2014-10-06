define(function (require) {
  var app = require('app')
    , Marionette = require('marionette');

  var ChampionsItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: require('hbs!templates/champions_item'),
    templateHelpers: function () {
      var data = this.model.toJSON();
      data.image.spriteUrl = app.api.spriteUrl(data.image.sprite);
      return data;
    }
  });

  return ChampionsItemView;
});