import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class ListGroupItemHeader extends React.Component {
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

ListGroupItemHeader.propTypes = {
  componentClass: PropTypes.string,
  headerClassName: PropTypes.string,
};

ListGroupItemHeader.defaultProps = {
  componentClass: 'h4',
  headerClassName: 'list-group-item-heading',
};

export default ListGroupItemHeader;
