import React from 'react';
import classNames from 'classnames';
import {Panel} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardClassName =
      this.props.cardStyle === 'default'
        ? null
        : 'bootcards-' + this.props.cardStyle;
	const otherProps = Object.assign({}, this.props);
	delete otherProps.cardStyle;
    return (
      <Panel {...otherProps} className={classNames(this.props.className, cardClassName)}>
        {this.props.children}
      </Panel>
    );
  }

}

Card.propTypes = {
  cardStyle: PropTypes.oneOf(['default', 'chart', 'summary', 'media', 'file', 'richtext']),
};

Card.defaultProps = {
  cardStyle: 'default',
};

export default Card;
