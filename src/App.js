import React from 'react';
import './App.css';
import './bootstrap.min.css'
import AgeDifferenceCalculator from './components/ageDifferenceCalculator';
import Navbar from './components/navbar'; 
import SanitizeTitleTool from './components/sanitizeTitleTool';
import SpeechRecognitionTool from './components/speechRecognitionTool'
import SumYourTimeFromRecap from './components/sumYourTimeFromRecap';


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
           <SumYourTimeFromRecap />
           <AgeDifferenceCalculator />
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>  
    </div>
  );
}

export default App;
    

