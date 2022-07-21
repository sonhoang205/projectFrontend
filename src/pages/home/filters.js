import React from "react";
import './filter.css'
import Tags from "../../components/tags/tags";
import { useLocation, useNavigate } from "react-router-dom";


const Filter = () => {

    const tags = [
        {
            type:'Món Khô',
            icon: 'https://cdn-icons-png.flaticon.com/512/4646/4646375.png'
        },
        {
            type:'Món Nước',
            icon: 'https://cdn-icons-png.flaticon.com/512/1027/1027308.png'
        },
        {
            type:'Món Chay',
            icon: 'https://cdn-icons.flaticon.com/png/512/1617/premium/1617578.png?token=exp=1658259980~hmac=96bf41d41c1713b382caceb76ab23cca' 
        }

    ]





    const navigate = useNavigate()
    const handleClickHome =()=>{
        navigate("/")
    }
    const handleClickSignIn =()=>{
        navigate("/login")
    }
    const location = useLocation();

    // console.log(location.state)
    const renderTags = () => {
        return (
            <>
                {tags.map((data) => {
                    // console.log(data.icon);
                    return (
                        <Tags name={data.type} key={data.type} symbol={data.icon} district={location.state}/>
                    )
                })}
            </>
        )
    }
    return (
        <div className="filter-document">
            {/* <header className="header" style={{
            position: "fixed",
            width:'100%',
            zIndex:'10'
        }}>
            <DenseAppBar/>
        </header> */}
            <div className="filter-header">
                <div className="filter-navbar">
                    <div className="filter-title" onClick={handleClickHome}>
                        Hôm Nay Ăn Gì?
                    </div>
                    <div className="filter-authentication">
                        <button className="filter-sign-up">Sign Up</button>
                        <button className="filter-sign-in"onClick={handleClickSignIn}>Sign In</button>
                    </div>
                </div>
                <div className="filter-note">
                    Chọn Loại Món Ăn
                </div>
            </div>
            <div className="filter-container">
                {renderTags()}
            </div>
            {/* <div className="filter-btn">
            <button className='filter-random'>Random</button>
            </div> */}
        </div>
    )
}
export default Filter