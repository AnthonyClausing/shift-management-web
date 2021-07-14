import axios from 'axios';
import React, { useState } from 'react';

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
  const inputClasses : string = "p-1 mx-auto my-4 text-base text-black border outline-none border-gray-400 focus:border-blue-400 rounded"
  return (
    <div id="auth-card" className="text-gray-500 bg-white px-2 mt-4 flex flex-col justify-center">
      <div className="card-header text-center">
        hello
      </div>
      <div className="card-content">
        { state.formOn === authType.Login 
        ? (<div id="login-form">
            <input id="email" onInput={(e) => handleChange(e, authType.Login)} className={inputClasses} type="email" placeholder="Email"></input>
            <input id="password" onInput={(e) => handleChange(e, authType.Login)} className={inputClasses} type="password" placeholder="Password"></input>
            {/* <a>Forgot Password?</a> */}
          </div>) 
        : (<div id="signup-form">
            <label>First Name</label>
            <input id="firstName" type="text" className={inputClasses} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Last Name</label>
            <input id="lastName" type="text" className={inputClasses} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Phone Number</label>
            <input id="phoneNumber" type="phone" className={inputClasses} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Email</label>
            <input id="email" type="email" className={inputClasses} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Password</label>
            <input id="password" type="text" className={inputClasses} onInput={(e) => handleChange(e, authType.Signup)}/>
            <label>Company Name</label>
            <input id="companyName" className={inputClasses} type="text" />
          </div>)
        }
      </div>
      <div className="card-actions ">
        {
        state.formOn === authType.Login ? 
        (<> 
        <button onClick={loginAction} className="bg-blue-600 text-white rounded font-bold py-1 block mx-auto mt-2 w-8/12">Log In</button>       
          <div className="text-center relative border-t border-gray-500 mt-5 mx-3">
            <span className="py-0 px-2 relative -top-4 bg-white">or</span>
          </div>
        <button onClick={() => switchToForm(authType.Signup)} className="bg-gray-300 text-black block mx-auto rounded font-bold py-1 w-8/12">Sign Up</button>
        </>):
        (<>
        <button onClick={signUpAction} className="bg-blue-600 text-white block mx-auto rounded font-bold py-1 mt-2 w-8/12">Sign Up</button>
        <div className="text-center relative border-t border-gray-500 mt-5 mx-3">
          <span className="py-0 px-2 relative -top-4 bg-white rounded-full">Already have an account?</span>
        </div>
        <button onClick={() => switchToForm(authType.Login)} className="bg-gray-300 text-black block mx-auto rounded font-bold py-1 w-8/12">Login</button>
        </>)
      }
      </div>
    </div>
  );
}

export default Auth;
