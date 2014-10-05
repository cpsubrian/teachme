define(function (require) {
  var Marionette = require('marionette');

  var MainLayoutView = Marionette.LayoutView.extend({
    tagName: 'section',
    className: 'layout',
    template: require('hbs!templates/layout'),
  });

  return MainLayoutView;
});