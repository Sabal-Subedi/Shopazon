import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Login.css";
import {auth} from "../firebase";

function Login() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

    const signInHandler = (e) =>{
      e.preventDefault();
      //some firebase login codes
      auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
          console.log(auth);
          history.push('/');
        })
        .catch(error => error.message);
    }

    const registerHandler = (e) =>{
      e.preventDefault();
      
      //some firebase register codes
      auth.createUserWithEmailAndPassword(email, password)
      .then((auth)=>{
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://lh3.googleusercontent.com/proxy/vElaJY98eR9X198l6ZhSxa8hewmnykZkpLooCvSix8ml7HJBn72hhrIdavuu5MZfFnE2C5YVeza0xH7PGkA3YuSyz7DTrfLrTcDNQL6PAExxxb-2sL7yIoCn293d1crn4yuTL7NtHFJjCnbk7g"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input 
            type="text" 
            value= {email}
            onChange={(e)=>setEmail(e.target.value)}
           />

          <h5>Password</h5>
          <input 
          type="password"
            value= {password}
            onChange={e=>setPassword(e.target.value)}
          />

          <button 
                className="login__signInButton"
                type="submit"
                onClick={signInHandler}
                >Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon fake clone conditions of Use and
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button 
          onClick={registerHandler}
          className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
