import React  from 'react';
import './login.css';
import { Link } from "react-router-dom";

export default function Login() {

    return (
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <form>
            <h1>S'identifier</h1>
            <input type="email" placeholder="Email or phone number"/>
            <input type="password" placeholder="Password"/>
            <button className='loginButton'><Link to="account">S'identifier</Link></button>
            <span>
              Nouveau sur Netflix? <b>S'inscrire.</b>
            </span>
            <small>
            Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    );
  }