/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
], function ($, _, Backbone, JST) {
  'use strict';

  var WineListItemView = Backbone.View.extend({
    tagName: 'li',
    template: JST['app/scripts/templates/wine-list-item.ejs'],
    initialize: function () {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.close, this);
    },
    render: function (eventName) {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
    close: function () {
      $(this.el).unbind();
      $(this.el).remove();
    }
  });
  
  return WineListItemView;
});