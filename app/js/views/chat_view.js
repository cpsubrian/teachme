define(function (require) {
  var Marionette = require('marionette');

  var ChatView = Marionette.CompositeView.extend({
    className: 'chat-wrapper',
    template: require('hbs!templates/chat'),
    childViewContainer: 'ul',
    childView: require('views/chat_item_view'),

    ui: {
      list: 'ul',
      input: 'input',
      button: 'button'
    },

    events: {
      'click @ui.button': 'onClickButton',
    },

    onClickButton: function (e) {
      e.preventDefault();
      if (this.ui.input.val()) {
        this.collection.add({
          name: 'Froggen',
          msg: this.ui.input.val()
        });
        this.ui.input.val('');
        this.children.last().el.scrollIntoView(false);
      }
    }
  });

  return ChatView;
});