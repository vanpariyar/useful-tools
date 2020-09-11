import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Navbar from './components/navbar'; 
import SanitizeTitleTool from './components/sanitizeTitleTool';
import  SpeechRecognitionTool from './components/speechRecognitionTool'

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 mt-5">
           <SanitizeTitleTool /> 
           <SpeechRecognitionTool /> 
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>  
    </div>
  );
}

export default App;
    

