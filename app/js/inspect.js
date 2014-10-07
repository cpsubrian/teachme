define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , _ = require('underscore');

  // Add tooling methods.
  _.extend(Marionette.View.prototype, {
    setupTooling: function () {
      var self = this;
      this.on('show', function () {
        if (self instanceof Marionette.LayoutView) {
          self.$el.addClass('inspect-view inspect-view-layout');
        }
        else if (self instanceof Marionette.CompositeView) {
          self.$el.addClass('inspect-view inspect-view-composite');
        }
        else if (self instanceof Marionette.CollectionView) {
          self.$el.addClass('inspect-view inspect-view-collection');
        }
        else if (self instanceof Marionette.ItemView) {
          self.$el.addClass('inspect-view inspect-view-item');
        }
      });
    }
  });

  // Override the constructor to setup tooling.
  Marionette.View = (function (Class) {
    return Class.extend({
      constructor: function () {
        // Setup the tooling.
        this.setupTooling();

        // Call original constructor.
        Class.apply(this, arguments);
      },
    });
  })(Marionette.View);

  // Add inspect toolbar.
  app.addInitializer(function () {
    var $inspect = $('<a class="inspect-toggle box active" href="#">Inspect</a>');
    $inspect.on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('inspecting');
    });
    $('body').append($inspect);
  });
});