import React from 'react';
// import "./Image.css"; - to fill in later


const Owner = (props) => {
  const { name } = props
  return (
    <div>
      <h4> Copyright by: {name} </h4>
    </div>
  );
}

export default Owner;