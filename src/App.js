import React, { useState, useEffect } from "react";
import Image from './Image'
import Title from './Title'
import Bio from './Bio'
import Button from './Button'
import Owner from './Owner'
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants/constants'
import styled from 'styled-components' 
import "./App.css";

const AppDiv = styled.div`
  font-family: ${props=>props.theme.fontFamily};
  text-align: ${props=>props.theme.textAlign};
  margin: ${props=>props.theme.margin};
  color: ${props=>props.theme.color};
  font-size: ${props=>props.theme.fontSize};
`

function App() {
  const [dataObj, setDataObj] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(info => setDataObj(info.data))
      .catch(err => console.log(err, `ERROR`))
  }, [])

  

  return (
    <AppDiv>
      <Title title={dataObj.title}/>
      <Image imageUrl={dataObj.url} title={dataObj.title}/>
      <Bio bio={dataObj.explanation}/>
      <Owner name={dataObj.copyright}/>
    </AppDiv>
  );
}

export default App;
