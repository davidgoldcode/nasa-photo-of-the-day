import React from 'react'
import styled from 'styled-components' 

const Button = ({currentDate, changeDate}) => {
    return (
        <div>
            <button onClick={changeDate}> {currentDate} </button>
        </div>
    )
}

export default Button