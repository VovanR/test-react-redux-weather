import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clearActivePosition} from '../../ducks/activePosition';
import Container from '../../components/Container';
import Copyright from '../../components/Copyright';
import ApiCredits from '../../components/ApiCredits';
import ClearActivePosition from '../../components/ClearActivePosition';
import './index.css';

class Footer extends Component {
  handleClickClearActivePosition = () => {
    this.props.onClickClearActivePosition();
  }

  render() {
    return (
      <footer className="footer">
        <Container>
          <div className="footer__content">
            <div className="footer__block footer__block_action">
              {this.props.activePosition && (
                <ClearActivePosition
                  onClick={this.handleClickClearActivePosition}
                  />
              )}
            </div>

            <div className="footer__block footer__block_copyright">
              <Copyright/>
            </div>

            <div className="footer__block footer__block_legal">
              <ApiCredits/>
            </div>
          </div>
        </Container>
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
