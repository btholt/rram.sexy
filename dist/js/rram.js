/** @jsx React.DOM */
/**
* @jsx React.DOM
*/
(function() {
  'use strict';

  var Arrow = React.createClass({displayName: 'Arrow',
    render: function() {
      var arrowClasses = 'fa fa-inverse fa-stack-1x fa-arrow-' + this.props.direction;
      return (
        React.DOM.div( {className:"arrow-container"}, 
          React.DOM.a( {className:"arrow-link", href:"#"}, 
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
    }
  });

  React.renderComponent(
    Arrow( {direction:"down", title:"rg Pets"} ),
    document.getElementById('arrow')
  );

})();

console.log('thing');