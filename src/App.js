import React, { useState, useEffect } from "react";
import Image from './Image'
import Title from './Title'
import Bio from './Bio'
import Owner from './Owner'
import reactDOM from 'react-dom'
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'

import "./App.css";

function App() {
  const [dataObj, setDataObj] = useState({})
  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(info => setDataObj(info.data))
      .catch(err => console.log(err, `ERROR`))
  }, [])

  return (
    <div className="App">
      <Title title={dataObj.title}/>
      <Image imageUrl={dataObj.url} title={dataObj.title}/>
      <Bio bio={dataObj.explanation}/>
      <Owner name={dataObj.copyright}/>
    </div>
  );
}

export default App;
