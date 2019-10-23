import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default function InputForm(props) {
  
  const responseFacebook = (response) => {
    let tempUserState = props.userState
    tempUserState.currentUser = response.name
    console.log("input", props.userState.currentUser)
    props.setUserState({...tempUserState})
  }

  const responseGoogle =(resp) => {
    console.log(resp)
  }

  const [tempUserName, setTempUserName] = useState('')
  return (
    <div className="container inputForm">
      <input className="Input-Form" onChange={event => setTempUserName(event.target.value)} onKeyPress={event =>{
        if (event.key === 'Enter'){
          let tempUserState = props.userState
          tempUserState.currentUser = tempUserName
          props.setUserState({...tempUserState})
        }
      }} type="text" placeholder="Please Input your name" />
        <div className="LoginButtons">
        <FacebookLogin
          id="Facebook-Login"
          appId="778127272619194"
          autoLoad={true}
          fields="name, picture"
          scope=""
          callback={responseFacebook}
        />
        <GoogleLogin
        clientId="905026034129-7lr5dvmk4t2tmeqcnoe3ipecpht608qt.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          className ="google-button"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        </div>
    </div>
  )
}
