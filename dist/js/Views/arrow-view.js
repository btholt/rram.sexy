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
        React.DOM.a( {onClick:this.handleClick, className:"arrow-link", href:this.props.model.get('link')}, 
          React.DOM.div( {className:"arrow-inner"}, 
            React.DOM.div( {className:"arrow-stack"}, 
              React.DOM.span( {className:"fa-stack fa-lg"}, 
                React.DOM.i( {className:"fa arrow-back fa-square fa-stack-2x"}),
                React.DOM.i( {className:arrowClasses})
              )
            ),
            React.DOM.p( {className:"arrow-title"}, 
              this.props.model.get('title')
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
    var up, left, right, down;
    if(this.props.models.get('up')) {
      up = Arrow( {direction:"up", model:this.props.models.get('up')} )
    }
    if(this.props.models.get('left')) {
      left = Arrow( {direction:"left", model:this.props.models.get('left')} )
    }
    if(this.props.models.get('down')) {
      down = Arrow( {direction:"down", model:this.props.models.get('down')} )
    }
    if(this.props.models.get('right')) {
      right = Arrow( {direction:"right", model:this.props.models.get('right')} )
    }
    return (
      React.DOM.div(null, 
        up,
        left,
        right,
        down
      )
    );
    /* jshint ignore:end */
  }
});