import React  from 'react';
import './login.css';
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Login() {
  const initialValues = { email : "", password: ""};
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit] = useState(false); 

  const handleChange = (e) => {
    const{email, value} = e.target;
    setFormValues({...formValues, [email]:value});

  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

useEffect(() => {
  console.log(formErrors);
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
  }
}, [formErrors])

  const validate = (values) => {
  const errors = {}
    if(!values.email){
      errors.email = "Email est obligatoire";
    }  
    if(!values.password){
      errors.password = "Le mote de passe est obligatoire";
    }    
    return errors;
  };
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
          <form onSubmit={handleSubmit}>
            <h1>S'identifier</h1>
            <input type="email" placeholder="Email or phone number" value ={formValues.email} onChange={handleChange}/>
            <p>{formErrors.email}</p>
            <input type="password" placeholder="Password" value = {formValues.password} onChange={handleChange}/>
            <p>{formErrors.password}</p>
            <button className='loginButton'><Link to="home">S'identifier</Link></button>
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