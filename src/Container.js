import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentClass,
      headingClassName,
      className,
      ...props
    } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, headingClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

Container.propTypes = {
  componentClass: PropTypes.string,
  headingClassName: PropTypes.string,
};

Container.defaultProps = {
  componentClass: 'div',
  headingClassName: 'container',
};

export default Container;
