requirejs.config({
  baseUrl: '/js/',
  paths: {
    // Vendor libs
    'jquery': '../vendor/jquery',
    'underscore': '../vendor/underscore',
    'handlebars': '../vendor/handlebars',
    'backbone': '../vendor/backbone',
    'marionette': '../vendor/backbone.marionette',

    // Loaders
    'text': '../vendor/text',
    'hbs': '../vendor/hbs',

    // Stuff outside /js directory.
    'templates': '../templates',
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
  }
});