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
    render:function (eventName) {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });
  
  return WineListItemView;
});