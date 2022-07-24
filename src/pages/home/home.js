import React from "react";
import District from "../../components/district/district";
import './home.css'
import { useNavigate } from "react-router-dom";


const Home = () => {

    const districtData = [
        {
            name: 'Hoàn Kiếm',
            backgroundColor: "rgb(201, 86, 86)"
        },
        {
            name: 'Hai Bà Trưng',
            backgroundColor: "rgb(183, 83, 95)"
        },
        {
            name: 'Hoàng Mai',
            backgroundColor: "rgb(164, 79, 104)"
        },
        {
            name: 'Tây Hồ',
            backgroundColor: "rgb(145, 75, 113)"
        },
        {
            name: 'Cầu Giấy',
            backgroundColor: "rgb(126, 71, 122)"
        },
        {
            name: 'Hà Đông',
            backgroundColor: "rgb(108, 68, 131)"
        },
        {
            name: 'Thanh Xuân',
            backgroundColor: "rgb(89, 64, 140)"
        },
        {
            name: 'Đống Đa',
            backgroundColor: "rgb(70, 60, 149)"
        },
        {
            name: 'Ba Đình',
            backgroundColor: "rgb(51, 56, 157)"
        },
    ]
    // route 
    
    const navigate = useNavigate();
    const handleClickSignIn =()=>{
        navigate("/login")
    }
    const handleClickHome =()=>{
        navigate("/")
    }
    
    const renderDistrict = () => {
        return (
            <>
                {districtData.map((data) => {
                    return (
                        <District name={data.name} backgroundColor={data.backgroundColor} background={data.background} key={data.name} />
                    )
                })}
            </>
        )
    }
    
    return (
        <div className="homeDocument">
            <div className="homeHeader">
                <div className="homeNavbar">
                    <div className="homeTitle" onClick={handleClickHome}>
                        Hôm Nay Ăn Gì?
                    </div>
                    <div className="homeAuthentication">
                        <button className="homeSignUp">Sign Up</button>
                        <button className="homeSignIn" onClick={handleClickSignIn}>Sign In</button>
                    </div>
                </div>
                <div className="homeNote">
                    Chọn một nơi bạn muốn đi
                </div>
            </div>
            <div className="homeContainer">
                {renderDistrict()}
            </div>
        </div>
    )
}
export default Home