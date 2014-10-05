define(function (require) {
  var Marionette = require('marionette');

  var ChatView = Marionette.CompositeView.extend({
    template: require('hbs!templates/chat')
  });

  return ChatView;
});