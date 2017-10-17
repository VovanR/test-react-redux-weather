import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
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

        {units && (
          <span className="param__units">
            {units}
          </span>
        )}
      </span>
    );
  }
}
Param.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  units: PropTypes.string,
  className: PropTypes.string
};
Param.defaultProps = {
};

export default Param;
