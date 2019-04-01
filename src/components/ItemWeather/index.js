import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Param from '../Param';
import './index.css';

class ItemWeather extends PureComponent {
  render() {
    const {
      iconUrl,
      temperature
    } = this.props;

    const temperatureClassName = classNames('item-weather__param', {
      'item-weather__temperature_positive': temperature >= 0
    });
    const formattedTemperature = temperature >= 0 ? temperature : '−' + Math.abs(temperature);

    return (
      <span className="item-weather">
        <img
          className="item-weather__icon"
          src={iconUrl}
          alt=""
        />

        <Param
          className={temperatureClassName}
          value={formattedTemperature}
          units="℃"
        />
      </span>
    );
  }
}

ItemWeather.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

ItemWeather.defaultProps = {
};

export default ItemWeather;
