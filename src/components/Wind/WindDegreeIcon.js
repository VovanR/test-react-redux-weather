import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class WindDegreeIcon extends PureComponent {
  render() {
    const {degree} = this.props;

    return (
      <svg
        className="wind__degree"
        style={{
          transform: `rotate(${degree}deg)`
        }}
        >
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref="#wind-degree-icon"
          />
      </svg>
    );
  }
}
WindDegreeIcon.propTypes = {
  degree: PropTypes.number.isRequired
};
WindDegreeIcon.defaultProps = {
};

export default WindDegreeIcon;
