import React from "react";
import "./District.css"

const District =  (props) => {
    const {name, imageURL} = props;

    console.log(name, imageURL);
    
    return(
        <div className="district" >
            <img src={imageURL} alt='' style={{
                height:"600px",
                width: "200px",
                objectFit:"cover"
            }}></img>
            <p>{name}</p>
        </div>
    )
}
export default District