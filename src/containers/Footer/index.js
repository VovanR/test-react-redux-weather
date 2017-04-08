import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {clearActivePosition} from '../../ducks/activePosition';
import ApiCredits from '../../components/ApiCredits';
import ClearActivePosition from '../../components/ClearActivePosition';
import './index.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClickClearActivePosition = this.handleClickClearActivePosition.bind(this);
  }

  handleClickClearActivePosition() {
    this.props.onClickClearActivePosition();
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__action">
          {this.props.activePosition ? (
            <ClearActivePosition
              onClick={this.handleClickClearActivePosition}
              />
          ) : null}
        </div>

        <div className="footer__legal">
          <ApiCredits/>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
  activePosition: PropTypes.object,
};
Footer.defaultProps = {
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
)(Footer);
