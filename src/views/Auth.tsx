 /** @jsxImportSource theme-ui */
import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'theme-ui'
import { inputStyles, authCardStyles, buttonStyles, dividerStyles, dividerTextStyles } from '@styles/views/authStyles' 
function Auth() {
  enum authType {
    Login = 'login',
    Signup = 'signup'
  }
  const [state, setState] = useState({
    formOn: authType.Login,
    signup: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
    },
    login: {
    email: '',
    password: '',
    }
  })
  const handleChange = (e: any, type: authType) => {
    const {id , value} = e.target
    if(id !== '') {
      setState(prevState => ({
        ...prevState,
        [type] : {
          ...prevState[type],
          [id] : value
        }
      }))
    }
  }
  const loginAction = async(): Promise<void> => {
    const what = await axios.get('http://www.example.com')
    // ADD CORS to backend?
    //axios call
  }
  const signUpAction = (): void => {
    console.log('hello signup', state.signup)
    //axios call
  }
  const switchToForm = (type: authType): void => {
    setState(prevState => ({
      ...prevState,
      formOn: type
    }))
  }

  return (
    <div id="auth-card" sx={authCardStyles}>
      <div id="card-header" sx={{textAlign: 'center'}}>
        Welcome To Shift Management
      </div>
      <div className="card-content">
        { state.formOn === authType.Login 
        ? (<div id="login-form">
            <input id="email" onInput={(e) => handleChange(e, authType.Login)} sx={inputStyles} type="email" placeholder="Email"></input>
            <input id="password" onInput={(e) => handleChange(e, authType.Login)} sx={inputStyles} type="password" placeholder="Password"></input>
            {/* <a>Forgot Password?</a> */}
          </div>) 
        : (<div id="signup-form">
            <label>First Name</label>
            <input id="firstName" type="text" sx={inputStyles} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Last Name</label>
            <input id="lastName" type="text" sx={inputStyles} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Phone Number</label>
            <input id="phoneNumber" type="phone" sx={inputStyles} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Email</label>
            <input id="email" type="email" sx={inputStyles} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Password</label>
            <input id="password" type="text" sx={inputStyles} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Company Name</label>
            <input id="companyName" sx={inputStyles} type="text" />
          </div>)
        }
      </div>
      <div className="card-actions">
        {
        state.formOn === authType.Login ? 
        (<> 
        <Button onClick={loginAction} sx={{...buttonStyles, marginTop: '0.5rem'}}>Log In</Button>       
          <div sx={dividerStyles}>
            <span sx={dividerTextStyles}>or</span>
          </div>
        <Button variant={"secondary"} sx={buttonStyles} onClick={() => switchToForm(authType.Signup)}>Sign Up</Button>
        </>):
        (<>
        <Button variant={"secondary"} sx={{...buttonStyles, marginTop: '0.5rem'}} onClick={signUpAction}>Sign Up</Button>
        <div sx={dividerStyles}>
          <span sx={{...dividerTextStyles, borderRadius: '9999px'}}>Already have an account?</span>
        </div>
        <Button sx={buttonStyles} onClick={() => switchToForm(authType.Login)}>Login</Button>
        </>)
      }
      </div>
    </div>
  );
}

export default Auth;
