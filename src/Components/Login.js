import React from "react";
import styles from '../Styles/App.module.css'
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = ({onChange, username, password, handleSubmit, valid, loginData}) => {

 return(
<div className= {styles.wrappedContainer}>
<div className =  {styles.container}>
 <div className= {styles.content}>
   <h2>Sign In</h2>
   <form 
   className= {styles.form}
   onSubmit={handleSubmit}
   >
    <div className= {styles.inputFields2}>
      <input type = "text" placeholder="Username"
       required 
       onChange={onChange}
       name = "Username"
       value = {loginData.Username}
       />
    </div>
    <div className= {styles.inputFields2}>
    <input type = "text" 
    placeholder="Password" 
    required 
    value = {loginData.Password}
    onChange={onChange}
    name = "Password"
    />
    </div>
    <div className= {styles.links}>
      <Link to = "/ForgotPassword">
      <a href = "#">Forgot Password</a>
      </Link>
      <Link to = "/SignUp">
      <a href = "#">Sign Up</a>
      </Link>

    </div>
    <div className= {styles.inputFieldsLogin}>
      <input type = "submit" value= "Login" 
      className= {styles.login}
      />
    </div>
   </form>
 </div>

</div>
</div>
 )
}

export default Login