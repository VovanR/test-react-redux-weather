import React, {Component, PropTypes} from 'react';

import Param from '../Param';
import './index.css';

class Wind extends Component {
	render() {
		const {
      windDegree,
      windDirection,
      windSpeed
    } = this.props;

		return (
			<span className="wind">
				<Param
					className="wind__speed"
					value={windSpeed}
					units={'m/s'}
					/>

				<span className="wind__wind">
					<span
						className="wind__degree"
						style={{
							transform: `rotate(${windDegree}deg)`
						}}
						/>

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
