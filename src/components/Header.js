import React from  "react"
import "../styles/Header.css"
import Logo from "../images/logo.png"
import {Link, withRouter} from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <div className="logodiv">
                <Link to='/'>
                    <img  className="logo" src = {Logo} alt="logo"/>
                </Link>
            </div>
                <div className="menuContainer">
                    <ul>
                        <Link className="link" to='/projects'>
                            <li className="project">Projects</li>
                        </Link>
                        
                        <Link className="link" to='/about'>
                            <li className="about">About</li> 
                        </Link>

                        <Link className="link" to='/contact' >
                            <li className="contact">Contact</li>
                        </Link>                  
                    </ul>
                </div>
        </header>

    )
}

export default Header