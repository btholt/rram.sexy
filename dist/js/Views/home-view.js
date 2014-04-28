/** @jsx React.DOM */
var HomeView = React.createClass({displayName: 'HomeView',
  render: function() {
    /* jshint ignore:start */
    return (
      React.DOM.div( {className:"home-back"}, 
        React.DOM.h1( {className:"home-h"}, "rram belongs in slc"),
        React.DOM.img( {className:"home-img", src:"img-optim/rram.png", alt:"Ricky is so very sexy"} )
      )
    );
    /* jshint ignore:end */
  }
});