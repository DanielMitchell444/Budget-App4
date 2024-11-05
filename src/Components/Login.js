import React from "react";
import styles from '../Styles/App.module.css'
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = ({onChange, username, password, handleSubmit, valid}) => {

 return(
<div className =  {styles.container}>
 <div className= {styles.content}>
   <h2>Sign In</h2>
   <form 
   className= {styles.form}
   onSubmit={handleSubmit}
   >
    <div className= {styles.inputFields}>
      <input type = "text" placeholder="Username"
       required 
       data-id = "username"
       onChange={(e) => onChange(e)}
       name = "username"
       value = {username}
       />
    </div>
    <div className= {styles.inputFields}>
    <input type = "text" 
    placeholder="Password" 
    required 
    value = {password}
    name = "password"
    data-id = "password"
    />
    </div>
    <div className= {styles.links}>
      <a href = "#">Forgot Password</a>
      <Link to = "/SignUp">
      <a href = "#">Sign Up</a>
      </Link>

    </div>
    <div className= {styles.inputFields}>
      <input type = "submit" value= "Login" 
      />
    </div>
   </form>
 </div>

</div>
 )
}

export default Login