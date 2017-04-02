import React, {Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import {clearActivePosition} from '../../ducks/activePosition';

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
