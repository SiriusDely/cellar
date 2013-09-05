/*global define*/

define([
  'underscore',
  'backbone',
], function (_, Backbone) {
  'use strict';

  var WineModel = Backbone.Model.extend({
    defaults: {
      'id': null,
      'name': '',
      'grapes': '',
      'country': 'USA',
      'region': 'California',
      'year': '',
      'description': '',
      'picture': ''
    }
  });

  return WineModel;
});