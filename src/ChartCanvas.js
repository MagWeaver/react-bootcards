import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class ChartCanvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentClass,
      canvasClassName,
      className,
      ...props
    } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, canvasClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

ChartCanvas.propTypes = {
  componentClass: PropTypes.string,
  canvasClassName: PropTypes.string,
};

ChartCanvas.defaultProps = {
  componentClass: 'div',
  canvasClassName: 'bootcards-chart-canvas',
};

export default ChartCanvas;
