import React from "react";
import "./District.css"
import { useNavigate } from "react-router-dom";



const District = (props) => {
    const { name, color, backgroundColor, symbol } = props;
    let navigate = useNavigate();
    const handleChangeDistrict = () => {
        // console.log('onChange')
        // console.log(name)

        navigate("/district", { state: name })
    }


    return (
        <div className="districtContainer" onClick={handleChangeDistrict}>
            <div className="districtIcon" style={{ backgroundColor: 'rgba(95, 95, 95, 0.528)', color: color }}>
                <img src={symbol} alt='icon'/>
            </div>
            <div className="districtTitle">{name}</div>
        </div>
    )
}
export default District