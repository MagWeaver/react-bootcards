import React from 'react';
import classNames from 'classnames';
import {Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      cardsClassName,
      className,
      ...props
    } = this.props;
    return (
      <Col {...props} className={classNames(className, cardsClassName)}>
        {this.props.children}
      </Col>
    );
  }
}

Cards.propTypes = {
  cardsClassName: PropTypes.string,
};

Cards.defaultProps = {
  cardsClassName: 'bootcards-cards',
};

export default Cards;
