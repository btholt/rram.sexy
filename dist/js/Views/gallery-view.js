/** @jsx React.DOM */
var Gallery = React.createClass({displayName: 'Gallery',
  render : function() {
    var bg = this.props.hero.asset;
    var style = { 'background-image': 'url(' + bg + ')' };

    /* jshint ignore:start */
    return (
      React.DOM.div( {className:"home-back"}, 
        React.DOM.div( {className:"hero-container"}, 
          React.DOM.h1( {className:"hero-title"}, this.props.hero.title),
          React.DOM.div( {className:"hero-asset"}, 
            React.DOM.div( {style:style, className:"hero-bg"})
          )
        ),
        React.DOM.div( {className:"minors-container"}, 
          this.props.model.get('entries').map(function(item) {
            var minorStyle = {'background-image' : 'url(' + item.thumbnail + ')'};
            return (
              React.DOM.div( {className:"minor-container"}, 
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