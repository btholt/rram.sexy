/**
* @jsx React.DOM
*/
(function() {
  'use strict';

  var Arrow = React.createClass({
    render: function() {
      var arrowClasses = 'fa fa-inverse fa-stack-1x fa-arrow-' + this.props.direction;
      return (
        <div className="arrow-container">
          <a className="arrow-link" href="#">
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
    }
  });

  React.renderComponent(
    <Arrow direction="down" title="rg Pets" />,
    document.getElementById('arrow')
  );

})();

console.log('thing');