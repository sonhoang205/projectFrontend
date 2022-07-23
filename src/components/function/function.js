import React from "react";
import './function.css'
import { useNavigate } from "react-router-dom";



const AdminFunction = (proms) => {

    const { name, symbol, path } = proms;

    const navigate = useNavigate();
    const handleChangeFunction = async () => {
        // await fetchDish()
        navigate(`/${path}`);
        console.log(path);

    }
    return (
        <>
            <div className="function-container" id={`function ${name}`}
                onClick={handleChangeFunction}
            >
                <div className="function-icon">
                    <img src={symbol} alt='icon' />
                </div>
                <div className="function-title">{name}</div>
            </div>
        </>
    )
}
export default AdminFunction