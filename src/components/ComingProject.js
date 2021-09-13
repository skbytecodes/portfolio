import React from 'react'
import "../styles/ComingProject.css"

function ComingProject() {
    return (
        <div className="coming_project">
            <p className="cp_heading">Latest Project</p>
            <p className="cp_desc">
                I am working on my latest project which is a Rest API. 
                This API is based on MARVEL characters and movies. From this API you
                can fetch the infomation about all the characters of MCU and also update
                and delete the records. To use this API you have to sign up first and
                you will be provided an API_KEY that will be used to fetch the data from our
                server. I am using MYSQL database as a storage to store the user informaton
                and data on the server. So basically the idea is to provide the MARVEL fans an
                application which they can use to know more about thier favouite super heroes.  
            </p>
        </div>
    )
}

export default ComingProject
