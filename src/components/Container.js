import React from "react"
import "../styles/Container.css"
import Programmer from "../images/programmer.jpg"

function Container(){
    return(
        <div className="whole-container">
            <div className="text-container">
                <p className="para1">Hi, I am sushil. <p><i>self taught</i> full stack</p>web developer.</p>
                <p className="para2">"First, solve the problem. Then, write the code.”</p>
            </div>
            <div className="image-container">
                <img src={Programmer} alt="image"/>
            </div>
        </div>
    )
}
export default Container