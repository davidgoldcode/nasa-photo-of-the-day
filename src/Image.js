import React from 'react';
import styled from 'styled-components'

const StyledImg = styled.img`
  border-radius: 50%;
`

const Image = ({imageUrl, title}) => {
  return (
    <div>
      <StyledImg src={imageUrl} alt={title}/>
    </div>
  );
}

export default Image;