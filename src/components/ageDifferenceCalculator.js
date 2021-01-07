import React, { useEffect, useState } from 'react'
import SupportComponent from './supportComponent';

export default function AgeDifferenceCalculator() {

    const [currentDate, setCurrentDate] = useState(Date.now());
    const [birthDate, setBirthDate] = useState(Date.now());
    const [diffrence, setDiffrence] = useState(0);
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const ONE_MONTH = 1000 * 3600 * 24 * 12;
    
    useEffect(() => {
        setDiffrence( () => {
            let timeDiffrence = (new Date(currentDate) - new Date(birthDate).getTime());
            let year = Math.floor( timeDiffrence / 3.15576e+10);
            let month = Math.floor( timeDiffrence / ONE_MONTH);
            let days = Math.floor( timeDiffrence / ONE_DAY);
            //let diffrenceMonth = Math.floor( new Date( timeDiffrence ).getMonth() )
            let total = `${year} years`; 
            return { 
                year: year, 
                month: month , 
                days: days,
                total: total,
            }
        });
    }, [birthDate, currentDate, ONE_MONTH, ONE_DAY])

    return (
        <div className="card mb-5">
            <h5 className="card-header bg-primary text-white">Age Diffrece Calculator</h5>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="titleBox1">Current Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="titleBox1" 
                        placeholder="Enter Text / string to sanitize" 
                        defaultValue={ currentDate }
                        onChange={ (e) => setCurrentDate( e.target.value ) }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="titleBox">Birth Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="titleBox" 
                        placeholder="Enter Text / string to sanitize" 
                        defaultValue={ birthDate }
                        onChange={ (e) => setBirthDate( e.target.value ) }
                    />
                </div>
                <p>Diffrence Total { diffrence.total } </p>
                <p>Diffrence in Year { diffrence.year } </p>
                <p>Diffrence in months { diffrence.month } </p>
                <p>Diffrence in Days { diffrence.days } </p>

                <SupportComponent />
            </div>
        </div>
    )
}
