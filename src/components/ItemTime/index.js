import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

class ItemTime extends PureComponent {
  render() {
    const {
      hour
    } = this.props;

    const className = classNames(
      'item-time',
      {
        'item-time_one-sigh': hour < 10
      }
    );

    return (
      <span className={className}>
        {hour}
      </span>
    );
  }
}

ItemTime.propTypes = {
  hour: PropTypes.number.isRequired,
};

ItemTime.defaultProps = {
};

export default ItemTime;
