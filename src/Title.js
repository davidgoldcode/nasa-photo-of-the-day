import React, { useState } from 'react';
import App from './App'
// import "./Image.css"; - to fill in later


const Title = (props) => {
  const { title } = props
  return (
    <div>
      <h1> {title} </h1>
    </div>
  );
}

export default Title;