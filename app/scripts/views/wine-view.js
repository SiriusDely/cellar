/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
], function ($, _, Backbone, JST) {
  'use strict';

  var WineView = Backbone.View.extend({
    template: JST['app/scripts/templates/wine.ejs'],
    render:function (eventName) {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });

  return WineView;
});