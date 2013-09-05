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
    initialize: function () {
      this.model.bind('change', this.render, this);
    },
    render: function (eventName) {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
    events: {
      'change input': 'change',
      'click .save': 'saveWine',
      'click .delete': 'deleteWine'
    },
    change: function (event) {
      var target = event.target;
      console.log('changing ' + target.id + ' from: ' + target.defaultValue + ' to: ' + target.value);
      // You could change your model on the spot, like this:
      // var change = {};
      // change[target.name] = target.value;
      // this.model.set(change);
    },
    saveWine: function () {
      this.model.set({
        name:$('#name').val(),
        grapes:$('#grapes').val(),
        country:$('#country').val(),
        region:$('#region').val(),
        year:$('#year').val(),
        description:$('#description').val()
      });
      if (this.model.isNew()) {
        window.App.wineList.create(this.model);
      } else {
        this.model.save();
      }
      return false;
    },
    deleteWine: function () {
      this.model.destroy({
        success:function () {
          alert('Wine deleted successfully');
          window.history.back();
        }
      });
      return false;
    },
    close: function () {
      $(this.el).unbind();
      $(this.el).empty();
    }
  });

  return WineView;
});