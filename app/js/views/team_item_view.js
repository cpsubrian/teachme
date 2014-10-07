define(function (require) {
  var app = require('app')
    , Marionette = require('marionette');

  var TeamItemView = Marionette.ItemView.extend({
    tagName: 'div',
    className: function () {
      var status = '';
      if (this.model.get('player')) {
        if (this.model.get('picking')) {
          status = 'highlight';
        }
        else {
          status = 'active';
        }
      }
      else {
        if (this.model.get('picking')) {
          status = 'selecting';
        }
      }
      return 'box player ' +  status;
    },
    template: require('hbs!templates/team_item'),
    templateHelpers: function () {
      var data = {};
      data.champion = app.champions.findWhere({key: this.model.get('champion')}).toJSON();
      return data;
    }
  });

  return TeamItemView;
});