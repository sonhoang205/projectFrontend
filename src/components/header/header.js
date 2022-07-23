import React from "react";
import { useNavigate } from "react-router-dom";
import './header.css'

const Header = (props) => {
    const { title } = props;

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/")
    }
    const handleClickSignIn = () => {
        navigate("/login")
    }

    return (
        <div className="header">
            <div className="navbar">
                <div className="title" onClick={handleClickHome}>
                    Hôm Nay Ăn Gì?
                </div>
                <div className="authentication">
                    <button className="sign-up">Sign Up</button>
                    <button className="sign-in" onClick={handleClickSignIn}>Sign In</button>
                </div>
            </div>
            <div className="note">
                {title}
            </div>
        </div>
    )
}
export default Header