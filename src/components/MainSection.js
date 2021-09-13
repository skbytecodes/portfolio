import React from "react"
import Container from "./Container"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import "../styles/MainSection.css"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function MainSection(){
    return(
        <Router>
            <div className="main">
                <Container />
            </div>
        </Router>
    )
}

export default MainSection