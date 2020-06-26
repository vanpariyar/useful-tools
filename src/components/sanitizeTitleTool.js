import React, { useState, useEffect }from 'react'

export default function SanitizeTitleTool() {


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
    const [text, setText] = useState('');

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
                    <label htmlFor="exampleFormControlTextarea1">Your Text</label>
                    <textarea 
                        defaultValue={ string_to_slug( text ) } 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3">
                        
                    </textarea>
                </div>
            </div>
        </div>
    )
}
