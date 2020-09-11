import React , { useState } from 'react'

export default function SpeechRecognitionTool() {
    
    const[ text, setText ] = useState('')

    const handleSpeech = () => {
        let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 5;
        recognition.start();

        recognition.onresult = function(event) {
            // console.log('You said: ', event.results[0][0].transcript);
            setText( text+" "+event.results[0][0].transcript);
        };
    }

    return (
        <div className="card mt-5">
            <h5 className="card-header bg-primary text-white">Speech Recognition Tool</h5>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Your Text</label>
                    <textarea 
                        defaultValue={ text } 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        onChange = { (e) => setText( e.target.value ) }
                        >
                    </textarea>
                </div>
                <div className="form-group">
                    <button 
                        className="btn btn-primary"
                        onClick={ handleSpeech } 
                        >
                        Click To Listen Text
                    </button>
                    
                    <button 
                        className="btn btn-info ml-2"
                        onClick={() =>  navigator.clipboard.writeText(text)}
                        >
                        Copy Text
                    </button>
                </div>
            </div>
        </div>
    )
}
