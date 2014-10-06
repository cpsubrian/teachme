module.exports = function (grunt) {

  // Configuration.
  grunt.initConfig({

    clean: {
      public: ['app/vendor']
    },

    copy: {
      // Bower files.
      bower: {
        files: [
          {src: 'bower_components/requirejs/require.js', dest: 'app/vendor/require.js'},
          {src: 'bower_components/requirejs-text/text.js', dest: 'app/vendor/text.js'},
          {src: 'bower_components/requirejs-hbs/hbs.js', dest: 'app/vendor/hbs.js'},
          {src: 'bower_components/underscore/underscore.js', dest: 'app/vendor/underscore.js'},
          {src: 'bower_components/jquery/dist/jquery.js', dest: 'app/vendor/jquery.js'},
          {src: 'bower_components/handlebars/handlebars.js', dest: 'app/vendor/handlebars.js'},
          {src: 'bower_components/backbone/backbone.js', dest: 'app/vendor/backbone.js'},
          {src: 'bower_components/normalize.css/normalize.css', dest: 'app/vendor/normalize.css'},
          {src: 'bower_components/marionette/lib/backbone.marionette.js', dest: 'app/vendor/backbone.marionette.js'},
          {src: 'bower_components/fontawesome/css/font-awesome.css', dest: 'app/vendor/fontawesome/css/font-awesome.css'},
          {expand: true, cwd: 'bower_components/fontawesome/fonts/', src: '**', dest: 'app/vendor/fontawesome/fonts/'},
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          keepalive: true
        }
      }
    }

  });

  // Load all npm tasks.
  require('load-grunt-tasks')(grunt);

  // Define meta-tasks.
  grunt.registerTask('build', ['clean', 'copy']);
  grunt.registerTask('default', ['build', 'connect']);
};
