import React, {PureComponent, PropTypes} from 'react';
import Wind from '../Wind';
import Param from '../Param';
import hourToDayOrNight from 'hour-to-day-or-night';
import './index.css';

class Item extends PureComponent {
	render() {
		const {
      hour,
      iconUrl,
      temp,
      windDegree,
      windDirection,
      windSpeed
    } = this.props;

		return (
			<div className={`item item_time_${hourToDayOrNight(hour)}`}>
				<span className="item__time">
					{hour}
				</span>

				<span className="item__block">
					<img
						className="item__icon"
						src={iconUrl}
						alt=""
						/>

					<Param
						className="item__param"
						value={temp > 0 ? `+${temp}` : temp}
						units={'℃'}
						/>
				</span>

				<span className="item__block">
					<Wind
            windDegree={windDegree}
            windDirection={windDirection}
            windSpeed={windSpeed}
            />
				</span>
			</div>
		);
	}
}
Item.propTypes = {
	hour: PropTypes.number.isRequired,
	iconUrl: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired,
	windDegree: PropTypes.number.isRequired,
	windDirection: PropTypes.string.isRequired,
	windSpeed: PropTypes.number.isRequired
};
Item.defaultProps = {
};

export default Item;
