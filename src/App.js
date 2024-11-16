
import axios from 'axios';
import styles from '../src/Styles/App.module.css'
import Login from './Components/Login';
import Menu from './Components/Menu';
import { useState } from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage';
import Nav from './Components/Nav';
import About from './Components/About';
import News from './Components/News';
import Contact from './Components/Contact';
import ForgotPassword from './Components/ForgotPassword';
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
    FirstName: "",
    LastName: "",
    Username: "",
    Password: "",
    Email: "",
    Birthday: "",
  })

  const [loginData, setLoginData] = useState({
    Username: "",
    Password: ""
  })

  const [valid, setIsValid] = useState()

  const [error, setError] = useState({})
  const [generalError, setGeneralError] = useState("")
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
};

const handleLoginChange = (e) => {
  const { name, value } = e.target;
  setLoginData((prev) => ({ ...prev, [name]: value }));
};

const showMenu = () => {
  setShowMenu(!menu)
}

const handleSubmitLogIn = async (e) => {
  e.preventDefault()

  try{
    const response = await axios.post("http://localhost:8000/api/Login/",
     loginData
    )
    console.log(response.data)
    console.log(loginData)
    console.log('Login Succesfull')
    
     
   } catch(error){
     if(error.response){
       console.log('Backend Error', error.response.data)
       setError(error.response.data || {})
       console.log(loginData)
       setGeneralError(error.response.data.message || '')
       console.log(data)
     }
     else{
       setGeneralError("An unexpected error has occured")
     }
   }
   }

const handleSubmit = async (e) => {
      e.preventDefault();

      setError({})
      setGeneralError("")

      const newErrors = {}

      if (!data.FirstName) newErrors.FirstName = "First Name is required.";
  if (!data.LastName) newErrors.LastName = "Last Name is required.";
  if (!data.Username) newErrors.Username = "Username is required.";
  if (!data.Password) newErrors.Password = "Password is required.";
  if (!data.Email) newErrors.Email = "Email is required.";
  if (!data.Birthday) newErrors.Birthday = "Birthday is required.";

      if(Object.keys(newErrors).length > 0){
        setError(newErrors)
        return
      }
      try{
       const response = await axios.post("http://localhost:8000/api/Users/",
        data
       )
       window.location.href = "/"
       alert("Succesfully signed up")
       console.log(data)
       
        
      } catch(error){
        if(error.response){
          console.log('Backend Error', error.response.data)
          setError(error.response.data || {})
          setGeneralError(error.response.data.message || '')
          console.log(data)
        }
        else{
          setGeneralError("An unexpected error has occured")
        }
      }
      }

  return (
    <div className= {styles.App}>
      <Nav 
      menu = {menu}
      toggleMenu = {showMenu}
      />
      <div className= {styles.landingContainer2}>
    <main className= {styles.mainContent}>
    <Routes>
      <Route path = "/" element= {
          <LandingPage
          show = {menu}

          />
      }

      />
      <Route path = "/About" element = {
       <About />
      }

      />
      <Route path = "/News" element = {
        <News />
      
      }

      />

      <Route path = "/Contact" element = {
       <Contact />
      }

      />
      <Route path = "/Login" element= { <Login 
loginData = {loginData}
username = {username}
password = {password}
handleSubmit = {handleSubmitLogIn}
onChange={handleLoginChange}
valid = {valid}
      
      />} />
    

      <Route path = "/SignUp" element={<SignUp 
       valid = {valid}
       data = {data}
       onChange={handleChange}
       onSubmit = {handleSubmit}
       error = {error}
       generalError = {generalError}
      />} />

      <Route path = "/ForgotPassword" element = {

        <ForgotPassword />
      }
      />
      </Routes>
      </main>
      </div>
    </div>

  );
}
export default App;
