/*global define*/

define([
  'jquery',
  'backbone',
  'collections/wines-collection',
  'views/wine-list-view',
  'views/wine-view'
], function ($, Backbone, WinesCollection, WineListView, WineView) {
  'use strict';

  var AppRouter = Backbone.Router.extend({
    routes: {
      "" : "list",
      "wines/:id" : "wineDetails"
    },
    list:function () {
      this.wineList = new WinesCollection();
      this.wineListView = new WineListView({model:this.wineList});
      this.wineList.fetch();
      $('#sidebar').html(this.wineListView.render().el);
    },
 
    wineDetails:function (id) {
      this.wine = this.wineList.get(id);
      this.wineView = new WineView({model:this.wine});
      $('#content').html(this.wineView.render().el);
    }
  });

  return AppRouter;
});