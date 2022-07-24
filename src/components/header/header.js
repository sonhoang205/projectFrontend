import React from "react";
import { useNavigate } from "react-router-dom";
import './header.css'


const Authentication = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate("/login")
    }
    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }
    if (!token) {
        return (
            <div className="authentication">
                <button className="sign-up">Sign Up</button>
                <button className="sign-in" onClick={handleClickSignIn}>Sign In</button>
            </div>
        )

    } else {
        return (
            <div className="authentication">
                <div className="user">
                <p>Admin</p>
                </div>
                <button className="logout" onClick={logout}>Log Out</button>
            </div>
        )
    }
}

const Header = (props) => {
    const { title } = props;

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/")
    }
    


    return (
        <div className="header">
            <div className="navbar">
                <div className="title" onClick={handleClickHome}>
                    Hôm Nay Ăn Gì?
                </div>
                <Authentication/>
            </div>
            <div className="note">
                {title}
            </div>
        </div>
    )
}
export default Header