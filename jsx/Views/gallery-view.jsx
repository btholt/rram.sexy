var Gallery = React.createClass({
  render : function() {
    var bg = this.props.hero.asset;
    var style = { 'background-image': 'url(' + bg + ')' };

    /* jshint ignore:start */
    return (
      <div className="home-back">
        <div className="hero-container">
          <h1 className="hero-title">{this.props.hero.title}</h1>
          <div className="hero-asset">
            <div style={style} className="hero-bg"></div>
          </div>
        </div>
        <div className="minors-container">
          {this.props.model.get('entries').map(function(item) {
            var minorStyle = {'background-image' : 'url(' + item.thumbnail + ')'};
            return (
              <div className="minor-container">
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