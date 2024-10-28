
import axios from 'axios';
import styles from '../src/Styles/App.module.css'
import Login from './Components/Login';
import Menu from './Components/Menu';
import { useState } from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
function App() {
  //Handing input fields //

  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birthday, setBirthDay] = useState("")
  const [email, setEmail] = useState("")
  const [complete, isComplete] = useState(false) 
  const [gender, setGender] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(true)
 
   const handleInputChange = (event) => {
   setUserName(event.target.value)
   setPassWord(event.target.value)
   setFirstName(event.target.value)
   setLastName(event.target.value)
   setBirthDay(event.target.value)
   setEmail(event.target.value)
   setGender(event.target.value)
   }

   const refreshList = (event) => {
    axios.get("http://localhost:8000/api/Users/")
    .then((res) => setUserName({"Username": res}))
    .then(res => setPassWord(res))
    .catch((err) => console.log(err));
   }
  

   const handleSubmit = (event) => {
    event.preventDefault();
    // Send data to Django backend
    axios.post("http://localhost:8000/api/Users/", {
       "FirstName": firstName,
       "LastName": lastName,
       "Username": username,
       "Password": password,
       "Email": email,
       "Birthday": birthday,
      
      
      })
    
    .then(res => refreshList(res))

  };

  return (
    <div className= {styles.App}>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={
       <Login 
       onChange = {(e) => handleInputChange(e)}
       username = {username}
       password = {password}
       handleSubmit = {handleSubmit}
       />
      }
      />
      <Route path = "/SignUp" element={<SignUp 
        onChange = {(e) => handleInputChange(e)}
        username = {username}
        password = {password}
        firstName = {firstName}
        lastName = {lastName}
        email = {email}
        birthday = {birthday}
        handleSubmit = {handleSubmit}
        gender = {gender}
      />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
