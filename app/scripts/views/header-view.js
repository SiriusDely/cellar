/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/wine-view',
  'models/wine-model'
], function ($, _, Backbone, JST, WineView, WineModel) {
  'use strict';

  var HeaderView = Backbone.View.extend({
    template: JST['app/scripts/templates/header.ejs'],
    initialize: function () {
      this.render();
    },
 
    render: function (eventName) {
      $(this.el).html(this.template());
      return this;
    },
 
    events:{
      'click .new': 'newWine'
    },
 
    newWine: function (event) {
      if (this.wineView) app.wineView.close();
      this.wineView = new WineView({model:new WineModel()});
      $('#content').html(this.wineView.render().el);
      return false;
    }
  });

  return HeaderView;
});