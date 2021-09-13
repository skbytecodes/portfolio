import { BottomNavigation } from "@material-ui/core"
import React from "react"
import "../styles/about.css"

function About(){
    let style = {
        marginBottom:"5px",
        textDecoration:"underline"
    }
    return(
        <div className="about_container">
            <div className="about_me">
                <div className="text">
                    <p className="para1 para">
                    My aspiration is to live productivity and meet people's actual needs when it 
                    comes to software development led me to complete my Bachelor's in Computer Applications. 
                    My aim is always to develope the products which help the people and companies, 
                    while improving my technical skills and communication between people.
                    </p>
                
                    <p className="para2 para">
                    To be honest being a middle class boy I bought my first Computer when I was in the end of my 
                    first year of college.
                    Because In my college lab I was so much interested in programming and building some stuff but 
                    there was nobody who could help me in learning coding because the faculties were not so much helpful
                    so I started learnig to code online from youtube and websites.
                    After the I cleared my basics and advanced stuffs and build some projects based on that skillset.
                    Till the end of my college I had a very good grasp on all the techs which I wanted to learn.
                    I am interested in web development and want to persue my career as a full stack web developer but 
                    I can shift to the other technologies as well as fast as possible. and 
                    now I am confident on myself that I can provide the value to the company which I will work for.
                    </p>
                    <p className="skills" style={style}>Skills</p>
                    <p className="para3 para">
                        My technical skills include web development, Java, Spring Framework, Spring MVC, 
                        Spring Jdbc, Spring REST, MYSQL, Html, CSS, Javascript and React JS. Because
                        I am a quick learner so I am always ready to learn anything as fast as possible
                        and I really like to implement my learnings by doing the practical implemntation.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About