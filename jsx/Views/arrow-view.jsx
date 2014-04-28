var Arrow = React.createClass({
  handleClick: function(event) {

  },
  render: function() {
    var arrowClasses = 'fa fa-inverse fa-stack-1x fa-arrow-' + this.props.direction;
    var containerClasses = "arrow-container arrow-container-" + this.props.direction;
    /* jshint ignore:start */
    return (
      <div className={containerClasses}>
        <a onClick={this.handleClick} className="arrow-link" href={this.props.model.get('link')}>
          <div className="arrow-inner">
            <div className="arrow-stack">
              <span className="fa-stack fa-lg">
                <i className="fa arrow-back fa-square fa-stack-2x"></i>
                <i className={arrowClasses}></i>
              </span>
            </div>
            <p className="arrow-title">
              {this.props.model.get('title')}
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
    var up, left, right, down;
    if(this.props.models.get('up')) {
      up = <Arrow direction="up" model={this.props.models.get('up')} />
    }
    if(this.props.models.get('left')) {
      left = <Arrow direction="left" model={this.props.models.get('left')} />
    }
    if(this.props.models.get('down')) {
      down = <Arrow direction="down" model={this.props.models.get('down')} />
    }
    if(this.props.models.get('right')) {
      right = <Arrow direction="right" model={this.props.models.get('right')} />
    }
    return (
      <div>
        {up}
        {left}
        {right}
        {down}
      </div>
    );
    /* jshint ignore:end */
  }
});