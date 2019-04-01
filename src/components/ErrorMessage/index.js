import React from 'react';
import PropTypes from 'prop-types';
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
