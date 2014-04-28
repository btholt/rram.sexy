/**
* @jsx React.DOM
*/
(function() {
  'use strict';

  var Arrow = React.createClass({
    handleClick: function(event) {

    },
    render: function() {
      var arrowClasses = 'fa fa-inverse fa-stack-1x fa-arrow-' + this.props.direction;
      var containerClasses = "arrow-container arrow-container-" + this.props.direction;
      /* jshint ignore:start */
      return (
        <div className={containerClasses}>
          <a onClick={this.handleClick} className="arrow-link" href={this.props.link}>
            <div className="arrow-inner">
              <div className="arrow-stack">
                <span className="fa-stack fa-lg">
                  <i className="fa arrow-back fa-square fa-stack-2x"></i>
                  <i className={arrowClasses}></i>
                </span>
              </div>
              <p className="arrow-title">
                {this.props.title}
              </p>
            </div>
          </a>
        </div>
      );
      /* jshint ignore:end */
    }
  });

  var ArrowGroup = React.createClass({
    render: function() {
      /* jshint ignore:start */
      return (
        <div>
          <Arrow link="#rg" direction="up" title="redditgifts" />
          <Arrow link="#nyc" direction="left" title="NYC" />
          <Arrow link="#slc" direction="right" title="SLC" />
          <Arrow link="#office" direction="down" title="SLC Office" />
        </div>
      );
      /* jshint ignore:end */
    }
  });

  console.log('arrow', document.getElementById('arrow'));

  /* jshint ignore:start */
  React.renderComponent(
    <ArrowGroup />,
    document.getElementById('arrow')
  );
  /* jshint ignore:end */

})();