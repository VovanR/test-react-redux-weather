import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Wind from '../Wind';
import './index.css';

class ItemWind extends PureComponent {
  render() {
    const {
      windDegree,
      windDirection,
      windSpeed
    } = this.props;

    return (
      <span className="item-wind">
        <Wind
          windDegree={windDegree}
          windDirection={windDirection}
          windSpeed={windSpeed}
          />
      </span>
    );
  }
}
ItemWind.propTypes = {
  windDegree: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
  windSpeed: PropTypes.number.isRequired,
};
ItemWind.defaultProps = {
};

export default ItemWind;
