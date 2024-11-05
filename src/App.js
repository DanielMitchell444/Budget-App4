
import axios from 'axios';
import styles from '../src/Styles/App.module.css'
import Login from './Components/Login';
import Menu from './Components/Menu';
import { useState } from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage';
import Nav from './Components/Nav';
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
  const [isValidEmail, setIsValidEmail] = useState()
  const [menu, setShowMenu] = useState(false)

  const [data, setFormData] = useState({
    "FirstName": "",
    "LastName": "",
    "Username": "",
    "Password": "",
    "Email": "",
    "Birthday": "",
    "Gender": ""
  })

  const [valid, setIsValid] = useState()

  const [error, setError] = useState("")
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
};

const toggleMenu = () => {
  setShowMenu(!menu)
}


    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
       const response = await axios.post("http://localhost:8000/api/Users/",
        data
       )
       window.location.href = "/"
       alert("Succesfully signed up")
       
        
      } catch(error){
        if(error.response){
          setError(error.response.data.errors)
        }
        else{
          setError({general: "An unexpected error has occured"})
        }
      }
      }

  return (
    <div className= {styles.App}>
    <BrowserRouter>
    <Nav />
    <main className= {styles.mainContent}>
    <Routes>
      <Route path = "/" element= {
          <LandingPage
          show = {menu}
          menu = {toggleMenu}
          />
      }
      />
      <Route path = "/Login" element= { <Login 

username = {username}
password = {password}
handleSubmit = {handleSubmit}
valid = {valid}
      
      />} />
    

      <Route path = "/SignUp" element={<SignUp 
      valid = {valid}
       onChange={handleChange}
       onSubmit = {handleSubmit}
       error = {error}
      />} />
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
