window.RramApp = new (Backbone.Router.extend({
  routes: {
    '' : 'index',
    'home': 'index',
    'office': 'office',
    'slc': 'slc',
    'nyc': 'nyc',
    'rg' : 'rg'
  },
  initialize: function() {
    console.log('initial');
  },
  index: function() {
    console.log('index');
  },
  rg: function() {
    console.log('rg');
  },
  nyc: function() {
    console.log('nyc');
  },
  slc: function() {
    console.log('slc');
  },
  office: function() {
    console.log('office');
  },
  start: function() {
    Backbone.history.start();
  }
}))();

(function(){ RramApp.start(); })();