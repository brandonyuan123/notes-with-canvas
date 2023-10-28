import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // useState functions here:

  return (
    <div>
      <div classname = "App">
        <NavBar/>
        <h1><u>Welcome to the Notes with Canvas Application!</u></h1>
      </div>

      <div id="container">
        <h2>Click HERE to find out more!</h2>
      </div>
    </div>
    
  );
}

export default App
