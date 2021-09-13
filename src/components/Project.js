import React,{useState} from 'react'
import "../styles/Project.css"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


function Project(props) {

    // const [images, setimages] = useState(props.images[0])
    const [counter, setcounter] = useState(0)

    
    let nextImage = ()=>{
        if(counter < (props.images.length)-1)
        {
            setcounter((prev) =>prev+1);
            // setimages(props.images[counter]);
            console.log("right clicked "+counter)
        }
    }

    let prevImage = ()=>{
        if(counter >= 0){
            if(counter != 0){
                setcounter((prev) =>prev-1); 
            }
            // setimages(props.images[counter])
            console.log("left clicked "+counter)
        }
    }

    let styles = {
        color:"white",
        fontSize: "50px"
    }
    return (
        <div className="myproject">

            <div className="head_desc_container">
                <div className="heading">
                    <p>{props.name}</p>
                </div>
                
                <div className="desc">
                    <p>
                        {props.desc}
                    </p>
                    {props.weblink !=null ?<p><a href = {props.weblink} target="_blank">{props.weblink}</a></p>:<p></p>}
                </div>
            </div>
            <div className="project_images">
                <div>
                   <ArrowLeftIcon className="left" style={styles} onClick={prevImage}/>
                </div>
                    <img className = "project__image" src={props.images[counter]} alt="image"/>
                <div>
                   <ArrowRightIcon className="right" style={styles} onClick={nextImage}/>
                </div>
            </div> 
        </div>
    )
}

export default Project
