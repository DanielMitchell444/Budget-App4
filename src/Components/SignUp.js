import React from "react";
import styles from '../Styles/App.module.css'

const SignUp = ({
onChange,
onSubmit,
isValid,
error
}) => {
 return(
    <div className =  {styles.container}>
    <div className= {styles.content}>
      <h2>Sign Up</h2>
      <form 
      className= {styles.form}
      onSubmit={(e) => onSubmit(e)}
      >
        <div className= {styles.inputFields2}>
         <input type = "text" 
         placeholder="First Name" 
         required
         name = "FirstName"
         onChange={(e) => onChange(e)}
         />
        </div>
        {error && <div style={{color: 'red'}}>error</div>}
        <div className= {styles.inputFields2}>
         <input type = "text"
         placeholder="Last Name"
         name = "LastName"
         data-id = "first-name"
         required
         onChange={(e) => onChange(e)}
         />
        </div>
       <div className= {styles.inputFields2}>
         <input type = "text" placeholder="Username"
          required 
          data-id = "username"
          onChange={(e) => onChange(e)}
          name = "Username"
          />
       </div>
       <div className= {styles.inputFields2}>
       <input type = "text" 
       placeholder="Password" 
       required 
       onChange={(e) => onChange(e)}
       name = "Password"
       data-id = "password"
       />
       </div>
       <div className= {styles.inputFields2}>
       <input type = "email" 
       placeholder="Email" 
       required 
       onChange={(e) => onChange(e)}
       name = "Email"
       data-id = "password"
       />
       </div>
       <div className= {styles.inputFields2}>
       <input type = "text" 
       placeholder="Birthday in MM/DD/YYYY" 
       required 
       onChange={(e) => onChange(e)}
       name = "Birthday"
       data-id = "password"
       />
       </div>
       <div className = {styles.inputFields2}>
       <input type = "text" 
       placeholder="Enter your gender" 
       required 
       onChange={(e) => onChange(e)}
       name ="Gender"
       data-id = "password"
       />
       </div>
       <div className= {styles.inputFields}>
         <input type = "submit" value= "Sign Up" 
         onClick={onSubmit}
         />
       </div>
      </form>
    </div>
   </div>
 )
}

export default SignUp