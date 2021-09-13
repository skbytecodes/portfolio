import React from "react"
import "../styles/Contact.css"

function Contact(props){
    return(
        <div className="contactPage">
            <div className="contact_container">
                <div className="top_section">
                    <p className="contact_me">contact</p>
                    <p className="contact_text">
                     If you'd like to work together on a new project or have any
                     questions then please get in touch - I'd love to hear from you!
                    </p>
                </div>
                <div className="up_middle">
                    <div>
                        <p>Address</p>
                    </div>
                    <div>
                        <p>Email Me</p>
                    </div>
                </div>
                <div className="middle">
                    <div className="first_half">
                       
                        <div className="address_info">
                            <p>Sushil Kumar</p>
                            <p>A-1 Madangir,South Delhi,</p>
                            <p>New delhi, 110062,</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="second_half">
                        <div className="mail_info">
                            <p>Mobile : 9582364692</p>
                            <p>www.skbytecodes@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="social_links">
                    <p className="insta">
                         <a href="" 
                         target="_blank"><img src={props.insta}/>
                         </a>
                    </p>
                    <p className="twitter">
                         <a href="https://twitter.com/sushil55399409" 
                         target="_blank"><img src={props.twitter}/>
                        </a>
                    </p>
                    <p className="lin">
                        <a href="https://www.linkedin.com/in/sushil-kumar-260b24206/" 
                        target="_blank"><img src={props.lin}/>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact