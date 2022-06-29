import React, { useEffect, useState } from 'react';
import SupportComponent from './supportComponent';

export default function SumOfNumbersFromText() {
    const [recapText, setRecapText] = useState('100/- For Tour \n400/- skate board \n500/- demo');
    const [total, setTotal] = useState('Add Recap Text');

    useEffect( () => {
        let regularExpression = /\d+/g;
        let times;
        times = recapText.match(regularExpression);
        times =  times ? times.reduce((total, currentValue) => total = addTimes(total, currentValue)) : times;
        setTotal(times);
    },[recapText]);
    
    function addTimes(startTime, endTime) {
       return  parseInt(startTime) + parseInt(endTime);
    }

    return (
        <div className="card mt-5 mb-5">
            <h5 className="card-header bg-primary text-white"> Sum only Number Value from Text To Total Count</h5>
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
                            Your Total Value &nbsp;    
                            <strong>
                                { total }
                            </strong>
                        </p>    
                    </div>
                    <button 
                        className="btn btn-info ml-2"
                        onClick={() =>  navigator.clipboard.writeText(total)}
                        >
                        Copy Total
                    </button>

                    <SupportComponent />
                </div>
            </div>
        </div>
    )
}
