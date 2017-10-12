import React from 'react';
import classNames from 'classnames';
import {Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      listClassName,
      className,
      ...props
    } = this.props;
    return (
      <Col {...props} className={classNames(className, listClassName)}>
        {this.props.children}
      </Col>
    );
  }
}

List.propTypes = {
  listClassName: PropTypes.string,
};

List.defaultProps = {
  listClassName: 'bootcards-list',
};

export default List;
