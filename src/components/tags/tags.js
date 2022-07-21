import React from "react";
import './tags.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Tags = (proms) => {

    // const [dishData, setDishData] = React.useState(null)

    // const fetchDish = async ()=>{
    //     const res = await axios.get('http://localhost:6060/api/dish/search')
        
    //     // console.log( await res)
    //     setDishData(res.data.data)
    //     // return res
    // }
    // fetchDish()
    // console.log(dishData);

    const navigate = useNavigate();
    const handleChangeFilter = async()=>{
        // await fetchDish()
        navigate("/result", {state: {type:name,district:district, }});

    }
    const { name, symbol, district } = proms;
    // console.log(name, symbol);
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