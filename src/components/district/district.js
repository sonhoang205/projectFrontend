import React from "react";
import "./District.css"
import { useNavigate } from "react-router-dom";



const District = (props) => {
    const { name, color, backgroundColor } = props;
    let navigate = useNavigate();
    const handleChangeDistrict = () => {
        // console.log('onChange')
        // console.log(name)

        navigate("/district", { state: name })
    }


    return (
        <div className="districtContainer" onClick={handleChangeDistrict}>
            <div className="districtIcon" style={{ backgroundColor: backgroundColor, color: color }}>
            </div>
            <div className="districtTitle">{name}</div>
        </div>
    )
}
export default District