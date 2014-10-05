define(function (require) {
  var Marionette = require('marionette');

  var ChatItemView = Marionette.ItemView.extend({
    template: require('hbs!templates/chat_item')
  });

  return ChatItemView;
});