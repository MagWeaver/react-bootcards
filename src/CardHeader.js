import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class CardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentClass,
      headerClassName,
      className,
      ...props
    } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, headerClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

CardHeader.propTypes = {
  componentClass: PropTypes.string,
  headerClassName: PropTypes.string,
};

CardHeader.defaultProps = {
  componentClass: 'div',
  headerClassName: 'panel-heading',
  fill: true,
};

export default CardHeader;
