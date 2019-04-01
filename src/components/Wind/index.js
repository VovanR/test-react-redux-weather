import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import getWindSpeedName from '../../utils/getWindSpeedName';
import Param from '../Param';
import WindDegreeIcon from './WindDegreeIcon';
import './index.css';

class Wind extends PureComponent {
  render() {
    const {
      windDegree,
      windDirection,
      windSpeed
    } = this.props;

    return (
      <span className={`wind wind_speed_${getWindSpeedName(windSpeed)}`}>
        <Param
          className="wind__speed"
          value={windSpeed}
          units="m/s"
        />

        <span className="wind__wind">
          <WindDegreeIcon degree={windDegree}/>

          <span className="wind__direction">
            {windDirection}
          </span>
        </span>
      </span>
    );
  }
}

Wind.propTypes = {
  windDegree: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
  windSpeed: PropTypes.number.isRequired
};

Wind.defaultProps = {
};

export default Wind;
