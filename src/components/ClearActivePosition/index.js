import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {clearActivePosition} from '../../ducks/activePosition';
import './index.css';

class ClearActivePosition extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClickClearActivePosition();
  }

  render() {
    if (!this.props.activePosition) {
      return null;
    }

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
  activePosition: PropTypes.object,
  onClickClearActivePosition: PropTypes.func.isRequired
};
ClearActivePosition.defaultProps = {
};

export default connect(
  state => {
    const {
      activePosition
    } = state;

    return {
      activePosition
    };
  },

  dispatch => ({
    onClickClearActivePosition: () => {
      dispatch(clearActivePosition());
    }
  })
)(ClearActivePosition);
