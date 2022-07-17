import React from "react";
import "./District.css"

const District =  (props) => {
    const {name, imageURL} = props;

    console.log(name, imageURL);
    
    return(
        <div className="district" >
            <img className="image" src={imageURL} alt='' style={{
                height:"850px",
                width: "300px",
                objectFit:"cover"
            }}></img>
            <p class="text">{name}</p>
        </div>
    )
}
export default District