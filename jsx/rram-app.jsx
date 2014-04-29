window.RramApp = new (Backbone.Router.extend({
  routes: {
    '' : 'index',
    'home': 'index',
    'office': 'office',
    'slc': 'slc',
    'nyc': 'nyc',
    'rg' : 'rg'
  },

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
    var arrowModels = new ArrowGroupModel({
      up: this.arrows.rg,
      left: this.arrows.nyc,
      right: this.arrows.slc,
      down: this.arrows.office
    });
    this.renderArrows(arrowModels);
    /* jshint ignore:start */
    React.renderComponent(
      <HomeView />,
      document.getElementById('content')
    );
    /* jshint ignore:end */
  },
  rg: function() {
    console.log('rg');
    this.renderArrows(new ArrowGroupModel({down: this.arrows.home}));
    this.translateToNewGallery(this.models.rg);
  },
  nyc: function() {
    console.log('nyc');
    this.renderArrows(new ArrowGroupModel({right: this.arrows.home}));
    this.translateToNewGallery(this.models.nyc);
  },
  slc: function() {
    console.log('slc');
    this.renderArrows(new ArrowGroupModel({left: this.arrows.home}));
    this.translateToNewGallery(this.models.slc);
  },
  office: function() {
    console.log('office');
    this.renderArrows(new ArrowGroupModel({up: this.arrows.home}));
    this.translateToNewGallery(this.models.office);
  },
  start: function() {
    Backbone.history.start();
  },
  translateToNewGallery: function(model) {
    /* jshint ignore:start */
    React.renderComponent(
      <Gallery model={model} hero={model.get('entries')[0]} />,
      document.getElementById('content')
    );
    /* jshint ignore:end */
  },
  renderArrows: function(arrowModels) {

    /* jshint ignore:start */
    React.renderComponent(
      <ArrowGroup models={arrowModels} />,
      document.getElementById('arrow')
    );
    /* jshint ignore:end */

  }
}))();

(function(){ RramApp.start(); })();