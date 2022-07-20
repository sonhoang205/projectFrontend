import React from "react";
import './tags.css'
import { useNavigate } from "react-router-dom";


const Tags = (proms) => {

    const navigate = useNavigate();
    const handleChangeFilter = ()=>{
        navigate("/result")
    }
    const { name, symbol } = proms;
    console.log(name, symbol);
    return (
        <>
            <div className="tag-container" id={`tag ${name}`} onClick={handleChangeFilter}>
                <div className="tag-icon">
                    <img src={symbol}/>
                </div>
                <div className="tag-title">{name}</div>
            </div>
        </>
    )
}
export default Tags