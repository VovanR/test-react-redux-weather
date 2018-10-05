import React from 'react';

const Loading = ({status}) => (
  <div className="loading">
    <img className="loading__icon" src="apple-touch-icon.png"/>

    <span className="loading__status">
      {status}
    </span>
  </div>
);

export default Loading;
