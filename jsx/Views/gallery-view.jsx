var Gallery = React.createClass({
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
      <div className="home-back">
        <GalleryHero hero={this.state.hero} />
        <div className="minors-container">
          {this.props.model.get('entries').map(function(item, index) {
            var minorStyle = {'background-image' : 'url(' + item.thumbnail + ')'};
            return (
              <div data-index={index} onClick={_this.handleClick} className="js-minor-index minor-container">
                <div style={minorStyle} className="minor-bg"></div>
              </div>
            );
          })}
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
});

var GalleryHero = React.createClass({
  render: function() {
    var bg = this.props.hero.asset;
    var style = { 'background-image': 'url(' + bg + ')' };
    /* jshint ignore:start */
     return (
      <div className="hero-container">
        <h1 className="hero-title">{this.props.hero.title}</h1>
        <div className="hero-asset">
        <p className="hero-description">{this.props.hero.description}</p>
          <div style={style} className="hero-bg"></div>
        </div>
      </div>
      );
     /* jshint ignore:end */
  }
});