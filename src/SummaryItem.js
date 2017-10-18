import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SummaryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentClass,
      itemClassName,
      className,
      ...props
    } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, itemClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

SummaryItem.propTypes = {
  componentClass: PropTypes.string,
  itemClassName: PropTypes.string,
};

SummaryItem.defaultProps = {
  componentClass: 'a',
  itemClassName: 'bootcards-summary-item',
};

export default SummaryItem;
