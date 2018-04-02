import React from 'react';
import './index.css';

const Container = props => (
  <div className="container">
    {props.children}
  </div>
);

export default Container;
