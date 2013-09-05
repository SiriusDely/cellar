/*global define*/

define([
  'underscore',
  'backbone',
], function (_, Backbone) {
  'use strict';

  var WineModel = Backbone.Model.extend({
    defaults: {
    }
  });

  return WineModel;
});