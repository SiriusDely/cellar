/*global define*/

define([
  'jquery',
  'backbone',
  'collections/wines-collection',
  'views/wine-list-view',
  'views/wine-view',
  'views/header-view'
], function ($, Backbone, WinesCollection, WineListView, WineView, HeaderView) {
  'use strict';

  var AppRouter = Backbone.Router.extend({
    initialize:function () {
      $('#header').html(new HeaderView().render().el);
    },
    routes: {
      '' : 'list',
      'wines/:id' : 'wineDetails'
    },
    list: function () {
      console.log("AppRouter:list");
      this.wineList = new WinesCollection();
      this.wineListView = new WineListView({model:this.wineList});
      this.wineList.fetch({reset: true});
      $('#sidebar').html(this.wineListView.render().el);
    },
 
    wineDetails: function (id) {
      this.wine = this.wineList.get(id);
      this.wineView = new WineView({model:this.wine});
      $('#content').html(this.wineView.render().el);
    }
  });

  return AppRouter;
});