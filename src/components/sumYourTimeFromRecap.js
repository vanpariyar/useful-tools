import React, { useEffect, useState } from 'react';
import SupportComponent from './supportComponent';

export default function SumYourTimeFromRecap() {
    const [recapText, setRecapText] = useState('10:20 \n 0:30 10:20');
    const [totalTime, setTotalTime] = useState('Add Recap Text');

    useEffect( () => {
        let regularExpression = /\d{1,}:\d{2}/g;
        let times;
        times = recapText.match(regularExpression);
        times =  times ? times.reduce((total, currentValue) => total = addTimes(total, currentValue)) : times;
        setTotalTime(times);
    },[recapText]);
    

    function addTimes(startTime, endTime) {
        var times = [ 0, 0, 0 ]
        var max = times.length

        var a = (startTime || '').split(':')
        var b = (endTime || '').split(':')

        // normalize time values
        for (var i = 0; i < max; i++) {
            a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
            b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
        }

        // store time values
        for (i = 0; i < max; i++) {
            times[i] = a[i] + b[i]
        }

        var hours = times[0]
        var minutes = times[1]
        var seconds = times[2]

        if (seconds >= 60) {
            var m = (seconds / 60) << 0
            minutes += m
            seconds -= 60 * m
        }

        if (minutes >= 60) {
            var h = (minutes / 60) << 0
            hours += h
            minutes -= 60 * h
        }

        return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
    }

    return (
        <div className="card mt-5 mb-5">
            <h5 className="card-header bg-primary text-white">Recap Text To Total Time Converter</h5>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Your Text</label>
                    <textarea 
                        defaultValue={ recapText } 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        onChange = { (e) => setRecapText( e.target.value ) }
                        >
                    </textarea>
                </div>
                <div className="form-group">
                    <div>
                        <p>
                            Your Total Time &nbsp;    
                            <strong>
                                { totalTime }
                            </strong>
                        </p>    
                    </div>
                    <button 
                        className="btn btn-info ml-2"
                        onClick={() =>  navigator.clipboard.writeText(totalTime)}
                        >
                        Copy Time
                    </button>

                    <SupportComponent />
                </div>
            </div>
        </div>
    )
}
