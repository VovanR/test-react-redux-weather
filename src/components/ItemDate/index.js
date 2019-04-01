import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class ItemDate extends Component {
  render() {
    const className = `item-date item-date_time_${this.props.variant}`;

    return (
      <div className={className}>
        <div className="container">
          <div className="item-date__content">
            <div className="item-date__date">
              <span className="item-date__weekday">
                {this.props.weekday}
              </span>

              {' '}

              <span className="item-date__day">
                {this.props.day}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ItemDate.propTypes = {
  day: PropTypes.number.isRequired,
  weekday: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'day',
    'night'
  ]).isRequired
};

export default ItemDate;
