import React, {PureComponent, PropTypes} from 'react';

import './index.css';

class Param extends PureComponent {
	render() {
		const {
      className,
      units,
      value
    } = this.props;

		return (
			<span className={`param${className ? ' ' + className : ''}`}>
				<span className="param__value">
					{value}
				</span>

				{units ? (
					<span className="param__units">
						{units}
					</span>
				) : null}
			</span>
		);
	}
}
Param.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	units: PropTypes.string,
	className: PropTypes.string
};
Param.defaultProps = {
};

export default Param;
