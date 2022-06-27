// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextField from './Components/TextField';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  HashRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const[mode , setMode] = useState("light");
  const[alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg: message,
      Type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#052451";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled" , "success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled" , "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="MagicText" about="About Us" mode={mode} toggle={toggleMode}/>
    <Alert alert={alert} />
          <Switch>
          <Route exact path="/about">
            <div className="container">
            <About mode={mode}/>
            </div>
          </Route>
          <Route exact path="/">
          <div className="container my-4">
              <TextField heading="Try MagicText - Convert To UpperCase , Convert To Lowercase , Remove Extra Spaces , Clear And Copy Text" mode={mode}  showAlert={showAlert}/>
          </div>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
