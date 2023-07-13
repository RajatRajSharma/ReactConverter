import { useState } from 'react';
import './App101.css';
import Alert from './Components/Alert';
import About from './Components/About';    // import About.js
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'; 
import {
  BrowserRouter as Router,
  Routes,  // Previous version "Switch" is now Known as " Routes "
  Route
} from "react-router-dom";

function App() { 
  const [mode, setMode] = useState('dark');  // State varible mode given default dark mode  
  const [modeBtntext , setModeBtnText] = useState('Dark Mode');
  const [alert, setAlert] = useState(null);  // Making object of alert

  const showAlert = (message, type) =>{     // showAlert is a function
      setAlert({       // null handling requires special syntax in Alert.js
         msg: message,
         type: type
      })
      setTimeout(() => {    // Provide time to Alert function
         setAlert(null);
      }, 2000);
  }
  const toggleMode = () => {    // function runs on click of switch
    if(mode === 'light'){       
      setMode('dark');
      setModeBtnText('Dark Mode');
      document.body.style.backgroundColor = "#003030";
      showAlert("Dark mode has been enabled","success");
      document.title = "ReactBasic -Dark Home";  // Website Title change
    }else if(mode === 'dark'){
      setMode('light');
      setModeBtnText('Light Mode');
      document.body.style.backgroundColor = "	#DEB887";
      showAlert("Light mode has been enabled","danger");
      document.title = "ReactBasic -Light Home";  // Website Title change
    }
  };
  return (          
    <>
    <Router>
    <Navbar title="LightKart" aboutText="About" mode={mode} toggleMode={toggleMode} modeBtntext={modeBtntext} />
    <Alert alert={alert} />
    <div className="container my-3"> 
      <Routes>
      {/* /users --> element 1
          /users/home --> element 2 */}
            <Route exact path="/about" element={ <About mode={mode} toggleMode={toggleMode} modeBtntext={modeBtntext}/> }></Route>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Login / Sign in to your Account" mode={mode}/> }></Route>
      </Routes>
    </div>
    </Router>
    </>       
  );
}
export default App;
