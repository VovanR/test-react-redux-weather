import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class ItemDate extends PureComponent {
  render() {
    return (
      <div className="item-date">
        <span className="item-date__weekday">
          {this.props.weekday}
        </span>

        {' '}

        <span className="item-date__day">
          {this.props.day}
        </span>
      </div>
    );
  }
}
ItemDate.propTypes = {
  day: PropTypes.number.isRequired,
  weekday: PropTypes.string.isRequired
};

export default ItemDate;
