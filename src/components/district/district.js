import React from "react";
import "./District.css"

const District =  (props) => {
    const {name, color, backgroundColor} = props;


    
    return(
        <div className="container">
        <div className="district" style={{backgroundColor: backgroundColor,color: color  }}>
            {name}
        </div>
        </div>
    )
}
export default District