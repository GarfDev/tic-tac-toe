import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';


export default function InputForm(props) {

  const responseFacebook = (response) => {
    let tempUserState = props.userState
    tempUserState.currentUser = response.name
    console.log("input", props.userState.currentUser)
    props.setUserState({...tempUserState})
  }

  const [tempUserName, setTempUserName] = useState('')
  return (
    <div className="container inputForm">
      <input className="Input-Form" onChange={event => setTempUserName(event.target.value)} onKeyPress={event =>{
        if (event.key === 'Enter'){
          props.setUserName(tempUserName)
        }
      }} type="text" placeholder="Please Input your name" />
      <FacebookLogin
        appId="778127272619194"
        autoLoad={true}
        fields="name"
        scope=""
        callback={responseFacebook}
      />
    </div>
  )
}
