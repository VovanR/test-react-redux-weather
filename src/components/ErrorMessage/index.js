import React, {PropTypes} from 'react';
import './index.css';

const ErrorMessage = props => (
  <div className="error-message">
    {props.message}
  </div>
);
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};
ErrorMessage.defaultProps = {
};

export default ErrorMessage;
