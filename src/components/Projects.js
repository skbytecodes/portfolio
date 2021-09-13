import React from "react"
import "../styles/Projects.css"
import Project from "./Project"
import NetflixHome from "../images/money heist.png"
import Net2 from "../images/lucifer.png"
import Net3 from "../images/first.png"
import Net4 from "../images/youvid.png"
import Foo4 from "../images/cart.png"
import Foo3 from "../images/login.png"
import Foo1 from "../images/breakfast.png"
import Foo2 from "../images/lunch.png"
import Foo6 from "../images/paymentprocess.png"
import Foo7 from "../images/paymentsuccess.png"
import Foo5 from "../images/shipping.png"
import Twitter1 from "../images/twitter1.png"
import Twitter2 from "../images/twitter2.png"
import Twitter3 from "../images/twitter3.png"
import Foodhub from "../images/foodhub.png"
import ComingProject from "./ComingProject"

function Projects(){

    let fooimages = [Foodhub,Foo1,Foo2,Foo3,Foo4,Foo5,Foo6,Foo7];
    let netimages = [NetflixHome,Net2,Net3,Net4];
    let twitimages = [Twitter1, Twitter2, Twitter3];

    let netflixdesc = `
    This is the Netflix-clone web aplication. Using this you can easily
    watch the latest trailers of the Netflix Movies.
    It took me around 15 days to finally build and complete this small 
    application.This is a good example of my front end designng skills
    from my point of view. The techonlogies I have used for building this
    application are Html, css, javascript and the most importantly React Js.
    This app is moreover for testing and entertainment purpose which really 
    helped me to enhance my skills in web designing and lift me to the another level.
    This is the first React project of my career by which I got an interest in 
    web designing and for web designing react is the best framework for me.
    `; 

    let foodhubdesc = `
    This is an online Food Orderig web application named FOODHUB. We can actually use it to 
    order our favourite food online and make payments online as well. For Payment 
    gateway I have used Stripe which provides an amazing API and easy to follow documentation
    to integrate payments with our application. This application is very user friendly and
    easy to use.I completed this project almost in a month and this is the 
    most important and tricky project I have ever worked on. The technologies used in this 
    application are Html, css, and javascript for frontend designing and in 
    backend I have used Java, Spring MVC, Spring REST and Mysql database. 
    `;

    let twitterdesc = `
    This is a Twitter clone not an actual Twitter application.The project is built only for the testing purpose.
    I have used Html, CSS and React JS to build the project without any backend code. The application is deployed 
    on the Firebase and for storing the posts of the user firebase's firestore is used.
    `;
    return(
        <div className="projects__container">
            <div className="introduction">
                <p className="intro_para">
                    "I have been working in web development for last one year on my own without any work experience.
                    And during this time I have learnt a lot of things, and worked on some
                    of new technologies. I have also worked with some of the very good web developers
                    and build very good projects from scratch by which today I feel very comfortable
                    in web development.
                    Here are some of the projects of them  listed below, I hope you would lik them."
                </p>
            </div>

            <div className="projects__section">
                <Project 
                    name = "Netflix" images = {netimages}  desc = {netflixdesc} 
                    weblink={"https://netflix-clone-79019.web.app/"}
                />
                <Project name = "FOODHUB" images = {fooimages} desc = {foodhubdesc} />
                <Project 
                    name = "Twitter-Clone" images = {twitimages} desc = {twitterdesc} 
                    weblink={"https://twitter-clone-408ab.web.app/"}
                />
                <ComingProject />
            </div>
        </div>
    )
}

export default Projects