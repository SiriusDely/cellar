/*global define*/

define([
  'underscore',
  'backbone',
  'models/wine-model'
], function (_, Backbone, WineModel) {
  'use strict';

  var WinesCollection = Backbone.Collection.extend({
    model: WineModel,
    url: '../api/wines'
  });

  return WinesCollection;
});