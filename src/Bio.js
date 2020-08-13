import React from 'react';
import styled from 'styled-components' 

const BioDiv = styled.div`
  margin: ${props => props.theme.margin};
  width: ${props => props.theme.width};
`

const Bio = ({ bio }) => {
  return (
    <BioDiv>
      <h4> {bio} </h4>
    </BioDiv>
  );
}

export default Bio;