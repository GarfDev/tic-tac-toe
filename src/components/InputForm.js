import React, { useState } from 'react';

export default function InputForm(props) {
  const [tempUserName, setTempUserName] = useState('')
  return (
    <div className="container inputForm">
      <input className="Input-Form" onChange={event => setTempUserName(event.target.value)} onKeyPress={event =>{
        if (event.key === 'Enter'){
          props.setUserName(tempUserName)
        }
      }} type="text" placeholder="Please Input your name" />
    </div>
  )
}
