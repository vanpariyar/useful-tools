import React, { useState }from 'react'
import SupportComponent from './supportComponent';

export default function TransformText() {

    const [text, setText] = useState('');
    const [selectType, setSelectType] = useState('sanitize');

    const removeLinebreakAndCommaSeparate = function (str)
    {
        return str.split("\n").join(",")
    }

    const removeLinebreakAndSpaceSeparate = function (str)
    {
        return str.split("\n").join(" ")
    }
    

    function removeSpace(str){
        let arr= str.match(/[a-z]+|\d+/gi);
    
        if( !arr ) { return ''; }

        return arr.map((m,i)=>{
            let low = m.toLowerCase();
            if (i!==0){
                low = low.split('').map((s,k)=>k===0?s.toUpperCase():s).join``
            }
            return low;
        }).join``;
    }

    function handleBySelectedMode(str){
        switch( selectType ){
            case 'remove-linebreak-and-comma-separate':
                return removeLinebreakAndCommaSeparate(str);
            
            case 'remove-linebreak-and-space-separate':
                    return removeLinebreakAndSpaceSeparate(str);
                
            case 'remove-space':
                return removeSpace(str);

            default:
                return '';
            
        }

            
        
    }

    return (
        <div className="card">
            <h5 className="card-header bg-primary text-white">Transform Text</h5>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="titleBox">Add String / Text to Transform</label>
                    <textarea 
                        className="form-control" 
                        id="titleBox" 
                        placeholder="Enter Text / string to Transform" 
                        value={ text }
                        onChange={ (e) => setText( e.target.value ) }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sanitize-mode-select">Select Tool:</label>
                    <select className="form-control" id="sanitize-mode-select" value={ selectType } onChange={ (e) => setSelectType( e.target.value ) }>
                        <option></option>
                        <option value="remove-linebreak-and-comma-separate">Remove Linebreak & Add Comma</option>
                        <option value="remove-linebreak-and-space-separate">Remove Linebreak & Add Spaces</option>
                        <option value="remove-space">Remove Spaces</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Your Text</label>
                    <textarea 
                        value={ handleBySelectedMode( text ) }
                        onChange={ (e) => "nothing" } 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3">
                    </textarea>
                </div>
                <SupportComponent />
            </div>
        </div>
    )
}
