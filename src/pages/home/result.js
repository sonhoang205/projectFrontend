import React from "react";
import './result.css'

import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {


    const navigate = useNavigate()
    const handleClickHome =()=>{
        navigate("/")
    }
    const handleClickSignIn =()=>{
        navigate("/login")
    }
    const location = useLocation();
    console.log(location.state)

    return (
        <div className="-document">
            {/* <header className="header" style={{
            position: "fixed",
            width:'100%',
            zIndex:'10'
        }}>
            <DenseAppBar/>
        </header> */}
            <div className="result-header">
                <div className="result-navbar">
                    <div className="result-title" onClick={handleClickHome}>
                        Hôm Nay Ăn Gì?
                    </div>
                    <div className="result-authentication">
                        <button className="result-sign-up">Sign Up</button>
                        <button className="result-sign-in"onClick={handleClickSignIn}>Sign In</button>
                    </div>
                </div>
                <div className="result-note">
                    Kết Quả
                </div>
            </div>
            <div className="result-container">
                <div className="result-card"></div>
            </div>
            
        </div>
    )
}
export default Result