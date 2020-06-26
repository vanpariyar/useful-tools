import React, { useState } from 'react'

export default function Navbar() {
    const [menuStatus, setMenuStatus] = useState(0);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="./" className="navbar-brand">Navbar</a>
            <button 
                className="navbar-toggler" 
                type="button" 
                onClick={ ()=>setMenuStatus( !menuStatus )  }
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div 
                className= { (menuStatus) ? "collapse navbar-collapse show" : "collapse navbar-collapse" } 
                id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="#home" className="nav-link">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a href="https://github.com/vanpariyar/useful-tools/" className="nav-link" >Features</a>
                </li>
                <li className="nav-item">
                    <a href="#never" className="nav-link disabled">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}
