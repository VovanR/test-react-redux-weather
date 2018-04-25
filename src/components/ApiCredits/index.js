import React from 'react';
import './index.css';

const ApiCredits = () => (
  <span className="api-credits">
    <span className="api-credits__text">
      weather API by
    </span>

    <img
      className="api-credits__logo"
      src="images/weather-underground-logo.png"
      srcSet="images/weather-underground-logo@x2.png 2x, images/weather-underground-logo@x3.png 3x"
      alt="Weather Underground logo"
      />
  </span>
);

export default ApiCredits;
