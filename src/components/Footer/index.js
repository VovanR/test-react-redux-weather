import React, {Component} from 'react';
import ApiCredits from '../ApiCredits';
import ClearActivePosition from '../ClearActivePosition';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__action">
          <ClearActivePosition/>
        </div>

        <div className="footer__legal">
          <ApiCredits/>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
};
Footer.defaultProps = {
};

export default Footer;
