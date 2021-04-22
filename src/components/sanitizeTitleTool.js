import React, { useState }from 'react'
import SupportComponent from './supportComponent';

export default function SanitizeTitleTool() {

    const [text, setText] = useState('Demo Text');
    const [selectType, setSelectType] = useState('sanitize');

    const string_to_slug = function (str)
    {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        const from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
        const to   = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";

        for (let i=0, l=from.length ; i<l ; i++)
        {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace('.', '-') // replace a dot by a dash 
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by a dash
            .replace(/-+/g, '-') // collapse dashes
            .replace( /\//g, '' ); // collapse all forward-slashes

        return str;
    }

    function toCamelCase(str){
        let arr= str.match(/[a-z]+|\d+/gi);
        return arr.map((m,i)=>{
            let low = m.toLowerCase();
            if (i!==0){
                low = low.split('').map((s,k)=>k===0?s.toUpperCase():s).join``
            }
            return low;
        }).join``;
    }

    function handleBySelectedMode(str){
        if( selectType === 'sanitize' ){
            return string_to_slug(str);
        }
        return toCamelCase(str);
    }

    return (
        <div className="card">
            <h5 className="card-header bg-primary text-white">Santize Title</h5>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="titleBox">Add String / Text to sanitize</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="titleBox" 
                        placeholder="Enter Text / string to sanitize" 
                        value={ text }
                        onChange={ (e) => setText( e.target.value ) }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sanitize-mode-select">Select Tool:</label>
                    <select className="form-control" id="sanitize-mode-select" value={ selectType } onChange={ (e) => setSelectType( e.target.value ) }>
                        <option value="sanitize">sanitize-tool</option>
                        <option value="camelcase">CamelCaseTool</option>
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
