//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './Components/AboutUs';


function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

 const showAlert =(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
 }
  
  

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = ('#042743');
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = " Install TextUtils now";
      }, 1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = ('white');
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
      
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <div>
    <Alert alert={alert}/>
    <Routes>
          <Route exact path="/" element={<Text heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<AboutUs mode = {mode}/>} />
    </Routes>
    
    </div>
    </Router>
    </>
  );
}

export default App;
