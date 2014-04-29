/** @jsx React.DOM */
var Gallery = React.createClass({displayName: 'Gallery',
  getInitialState: function() {
    return {'hero':this.props.model.get('entries')[0]};
  },
  handleClick: function(e) {
    var index = $(e.target).parents('.js-minor-index').data('index');
    this.setState({ hero: this.props.model.get('entries')[index] });
  },
  render : function() {
    // context for click handler
    var _this = this;
    /* jshint ignore:start */
    return (
      React.DOM.div( {className:"home-back"}, 
        GalleryHero( {hero:this.state.hero} ),
        React.DOM.div( {className:"minors-container"}, 
          this.props.model.get('entries').map(function(item, index) {
            var minorStyle = {'background-image' : 'url(' + item.thumbnail + ')'};
            return (
              React.DOM.div( {'data-index':index, onClick:_this.handleClick, className:"js-minor-index minor-container"}, 
                React.DOM.div( {style:minorStyle, className:"minor-bg"})
              )
            );
          })
        )
      )
    );
    /* jshint ignore:end */
  }
});

var GalleryHero = React.createClass({displayName: 'GalleryHero',
  render: function() {
    var bg = this.props.hero.asset;
    var style = { 'background-image': 'url(' + bg + ')' };
    /* jshint ignore:start */
     return (
      React.DOM.div( {className:"hero-container"}, 
        React.DOM.h1( {className:"hero-title"}, this.props.hero.title),
        React.DOM.div( {className:"hero-asset"}, 
        React.DOM.p( {className:"hero-description"}, this.props.hero.description),
          React.DOM.div( {style:style, className:"hero-bg"})
        )
      )
      );
     /* jshint ignore:end */
  }
});