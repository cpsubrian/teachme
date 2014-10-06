define(function (require) {
  var Marionette = require('marionette');

  var ChatView = Marionette.CompositeView.extend({
    className: 'chat-wrapper',
    template: require('hbs!templates/chat'),
    childViewContainer: 'ul',
    childView: require('views/chat_item_view')
  });

  return ChatView;
});