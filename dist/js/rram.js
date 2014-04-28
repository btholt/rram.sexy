/** @jsx React.DOM */
var Arrow = React.createClass({displayName: 'Arrow',
  handleClick: function(event) {

  },
  render: function() {
    var arrowClasses = 'fa fa-inverse fa-stack-1x fa-arrow-' + this.props.direction;
    var containerClasses = "arrow-container arrow-container-" + this.props.direction;
    /* jshint ignore:start */
    return (
      React.DOM.div( {className:containerClasses}, 
        React.DOM.a( {onClick:this.handleClick, className:"arrow-link", href:this.props.link}, 
          React.DOM.div( {className:"arrow-inner"}, 
            React.DOM.div( {className:"arrow-stack"}, 
              React.DOM.span( {className:"fa-stack fa-lg"}, 
                React.DOM.i( {className:"fa arrow-back fa-square fa-stack-2x"}),
                React.DOM.i( {className:arrowClasses})
              )
            ),
            React.DOM.p( {className:"arrow-title"}, 
              this.props.title
            )
          )
        )
      )
    );
    /* jshint ignore:end */
  }
});

var ArrowGroup = React.createClass({displayName: 'ArrowGroup',
  render: function() {
    /* jshint ignore:start */
    return (
      React.DOM.div(null, 
        Arrow( {link:"#rg", direction:"up", title:"redditgifts"} ),
        Arrow( {link:"#nyc", direction:"left", title:"NYC"} ),
        Arrow( {link:"#slc", direction:"right", title:"SLC"} ),
        Arrow( {link:"#office", direction:"down", title:"SLC Office"} )
      )
    );
    /* jshint ignore:end */
  }
});