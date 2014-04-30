/** @jsx React.DOM */
window.RramApp = new (Backbone.Router.extend({
  routes: {
    '' : 'index',
    'home': 'index',
    'office': 'office',
    'slc': 'slc',
    'nyc': 'nyc',
    'rg' : 'rg'
  },

  previousDirection: 'up',

  arrows: {
    rg: new ArrowModel({ link:'#rg', title:'redditgifts'}),
    nyc: new ArrowModel({ link:'#nyc', title:'NYC'}),
    slc: new ArrowModel({ link:'#slc', title:'SLC'}),
    office: new ArrowModel({ link:'#office', title:'Office'}),
    home: new ArrowModel({ link:'#', title:'Home' })
  },

  models: {
    rg: new GalleryModel(),
    office: new GalleryModel(),
    nyc: new GalleryModel(),
    slc: new GalleryModel(),
  },

  initialize: function() {
    console.log('initial');
  },
  index: function() {
    console.log('index');
    $('.js-transition').addClass('off');
    $('#content').removeClass('js-'+this.previousDirection);
    var arrowModels = new ArrowGroupModel({
      up: this.arrows.rg,
      left: this.arrows.nyc,
      right: this.arrows.slc,
      down: this.arrows.office
    });
    this.renderArrows(arrowModels);
    /* jshint ignore:start */
    React.renderComponent(
      HomeView(null ),
      document.getElementById('content')
    );
    /* jshint ignore:end */
  },
  rg: function() {
    console.log('rg');
    this.renderArrows(new ArrowGroupModel({down: this.arrows.home}));
    this.translateToNewGallery(this.models.rg, 'up');
  },
  nyc: function() {
    console.log('nyc');
    this.renderArrows(new ArrowGroupModel({right: this.arrows.home}));
    this.translateToNewGallery(this.models.nyc, 'left');
  },
  slc: function() {
    console.log('slc');
    this.renderArrows(new ArrowGroupModel({left: this.arrows.home}));
    this.translateToNewGallery(this.models.slc, 'right');
  },
  office: function() {
    console.log('office');
    this.renderArrows(new ArrowGroupModel({up: this.arrows.home}));
    this.translateToNewGallery(this.models.office, 'down');
  },
  start: function() {
    Backbone.history.start();
  },
  translateToNewGallery: function(model, direction) {
    this.previousDirection = direction;
    console.log('direction', direction);

    /* jshint ignore:start */
    React.renderComponent(
      Gallery( {model:model, hero:model.get('entries')[0]} ),
      document.getElementById('transition-' + direction)
    );
    /* jshint ignore:end */
    $('#content').addClass('js-' + direction);
    $('#transition-' + direction).removeClass('off');
  },
  renderArrows: function(arrowModels) {

    /* jshint ignore:start */
    React.renderComponent(
      ArrowGroup( {models:arrowModels} ),
      document.getElementById('arrow')
    );
    /* jshint ignore:end */

  }
}))();

(function(){ RramApp.start(); })();