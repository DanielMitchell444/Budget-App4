import React from "react";
import styles from '../Styles/App.module.css'

const SignUp = ({onChange, username, 
 password, handleSubmit,
 firstName, lastName,
 email, birthday, gender

}) => {
 return(
    <div className =  {styles.container}>
    <div className= {styles.content}>
      <h2>Sign Up</h2>
      <form 
      className= {styles.form}
      onSubmit={handleSubmit}
      >
        <div className= {styles.inputFields2}>
         <input type = "text" 
         placeholder="First Name" 
         required
         data-id = "first-name"
         defaultValue = {firstName}
         onChange={(e) => onChange(e)}
         />
        </div>

        <div className= {styles.inputFields2}>
         <input type = "text"
         placeholder="Last Name"
         data-id = "first-name"
         required
         defaultValue = {lastName}
         onChange={(e) => onChange(e)}
         />
        </div>
       <div className= {styles.inputFields2}>
         <input type = "text" placeholder="Username"
          required 
          data-id = "username"
          onChange={(e) => onChange(e)}
          name = "username"
          defaultValue = {username}
          />
       </div>
       <div className= {styles.inputFields2}>
       <input type = "text" 
       placeholder="Password" 
       required 
       defaultValue = {password}
       name = "password"
       data-id = "password"
       />
       </div>
       <div className= {styles.inputFields2}>
       <input type = "text" 
       placeholder="Email" 
       required 
       defaultValue = {email}
       name = "password"
       data-id = "password"
       />
       </div>
       <div className= {styles.inputFields2}>
       <input type = "text" 
       placeholder="Birthday in MM/DD/YYYY" 
       required 
       defaultValue = {birthday}
       name = "password"
       data-id = "password"
       />
       </div>
       <div className = {styles.inputFields2}>
       <input type = "text" 
       placeholder="Enter your gender" 
       required 
       defaultValue = {gender}
       name = "password"
       data-id = "password"
       />
       </div>
       <div className= {styles.inputFields}>
         <input type = "submit" value= "Sign Up" 
         onClick={handleSubmit}
         />
       </div>

      </form>
    </div>
   </div>
 )
}

export default SignUp