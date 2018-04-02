import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import hourToDayOrNight from 'hour-to-day-or-night';
import Container from '../Container';
import ItemTime from '../ItemTime';
import ItemWeather from '../ItemWeather';
import ItemWind from '../ItemWind';
import './index.css';

class Item extends PureComponent {
  render() {
    const {
      hour,
      iconUrl,
      isComfort,
      temperature,
      windDegree,
      windDirection,
      windSpeed
    } = this.props;

    const className = classNames(
      'item',
      'item_time_' + hourToDayOrNight(hour),
      {
        item_comfort_true: isComfort
      }
    );

    return (
      <div className={className}>
        <Container>
          <div className="item__content">
            <div className="item__block item__block_time">
              <ItemTime hour={hour}/>
            </div>

            <div className="item__block item__block_weather">
              <ItemWeather
                iconUrl={iconUrl}
                temperature={temperature}
                />
            </div>

            <div className="item__block item__block_wind">
              <ItemWind
                windDegree={windDegree}
                windDirection={windDirection}
                windSpeed={windSpeed}
                />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
Item.propTypes = {
  hour: PropTypes.number.isRequired,
  iconUrl: PropTypes.string.isRequired,
  isComfort: PropTypes.bool.isRequired,
  temperature: PropTypes.number.isRequired,
  windDegree: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
  windSpeed: PropTypes.number.isRequired,
};
Item.defaultProps = {
};

export default Item;
