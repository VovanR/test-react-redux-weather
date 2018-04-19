import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class ClearActivePosition extends Component {
  handleClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <button
        className="clear-active-position"
        onClick={this.handleClick}
        type="button"
        >
        Clear position
      </button>
    );
  }
}
ClearActivePosition.propTypes = {
  onClick: PropTypes.func.isRequired
};
ClearActivePosition.defaultProps = {
};

export default ClearActivePosition;
