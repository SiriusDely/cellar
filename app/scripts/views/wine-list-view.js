/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/wine-list-item-view'
], function ($, _, Backbone, JST, WineListItemView) {
  'use strict';

  var WineListView = Backbone.View.extend({
    tagName: 'ul',
    template: JST['app/scripts/templates/wine-list.ejs'],

    initialize: function () {
      this.model.bind('reset', this.render, this);
    },

    render: function (eventName) {
      _.each(this.model.models, function (wine) {
        $(this.el).append(new WineListItemView({model:wine}).render().el);
      }, this);
      return this;
    }
  });

  return WineListView;
});