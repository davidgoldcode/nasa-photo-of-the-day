import React from 'react';
// import "./Image.css"; - to fill in later

const Image = (props) => {
  const { imageUrl, title } = props
  return (
    <div>
      <img src={imageUrl} alt={title}/>
    </div>
  );
}

export default Image;