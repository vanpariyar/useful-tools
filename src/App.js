import React from 'react';
import './App.css';
import './bootstrap.min.css';
import './bootstrap.min.css.map';
import AgeDifferenceCalculator from './components/ageDifferenceCalculator';
import Navbar from './components/navbar'; 
import SanitizeTitleTool from './components/sanitizeTitleTool';
import TransformText from './components/transformText';
import SpeechRecognitionTool from './components/speechRecognitionTool';
import SumOfNumbersFromText from './components/sumOfNumbersFromText';
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
           <TransformText />
           <SumYourTimeFromRecap />
           <SumOfNumbersFromText />
           <AgeDifferenceCalculator />
           <SpeechRecognitionTool /> 
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>  
    </div>
  );
}

export default App;
    

