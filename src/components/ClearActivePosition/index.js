import React, {Component, PropTypes} from 'react';
import './index.css';

class ClearActivePosition extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button
        className="clear-active-position"
        onClick={this.handleClick}
        type="button"
        >
        {'Clear active position'}
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
