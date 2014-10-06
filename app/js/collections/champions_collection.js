define(function (require) {
  var Backbone = require('backbone');

  var Champions = Backbone.Collection.extend({
    comparator: 'name'
  });

  return Champions;
});