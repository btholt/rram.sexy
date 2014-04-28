/** @jsx React.DOM */
var ArrowModel = Backbone.Model.extend({
  defaults : {
    link: '#',
    title: 'Home'
  }
});

var ArrowGroupModel = Backbone.Model.extend({
  defaults: {
    up: false,
    down: false,
    left: false,
    right: false
  }
});