import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentClass,
      footerClassName,
      className,
      ...props
    } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, footerClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

CardFooter.propTypes = {
  componentClass: PropTypes.string,
  footerClassName: PropTypes.string,
};

CardFooter.defaultProps = {
  componentClass: 'div',
  footerClassName: 'panel-footer',
  fill: 'true',
};

export default CardFooter;
