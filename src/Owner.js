import React from 'react';
// import "./Image.css"; - to fill in later


const Owner = (props) => {
  const { name } = props
  return (
    <div>
      <h4> {name} </h4>
    </div>
  );
}

export default Owner;