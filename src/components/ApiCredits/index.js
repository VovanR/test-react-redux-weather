import React from 'react';
import './index.css';

const ApiCredits = () => (
  <a
    className="api-credits"
    href="https://www.wunderground.com/?apiref=3a3c817e9706260c"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="api-credits__text">
      weather API by
    </span>

    <img
      className="api-credits__logo"
      src="images/weather-underground-logo.png"
      srcSet="images/weather-underground-logo@x2.png 2x, images/weather-underground-logo@x3.png 3x"
      alt="Weather Underground logo"
    />
  </a>
);

export default ApiCredits;
