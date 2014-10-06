define(function (require) {
  var Marionette = require('marionette');

  var ChatView = Marionette.CompositeView.extend({
    template: require('hbs!templates/chat'),
    childView: require('views/chat_item_view')
  });

  return ChatView;
});