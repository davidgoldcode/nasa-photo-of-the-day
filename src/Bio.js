import React from 'react';
// import "./Image.css"; - to fill in later


const Bio = (props) => {
  const { bio } = props
  return (
    <div>
      <h4> {bio} </h4>
    </div>
  );
}

export default Bio;