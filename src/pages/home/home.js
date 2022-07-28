import React from "react";
import District from "../../components/district/district";
import './home.css'
import { useNavigate } from "react-router-dom";


const Home = () => {

    const districtData = [
        {
            name: 'Hoàn Kiếm',
            backgroundColor: "rgb(201, 86, 86)",
            icon:'https://cdn-icons-png.flaticon.com/512/616/616485.png'
        },
        {
            name: 'Hai Bà Trưng',
            backgroundColor: "rgb(183, 83, 95)",
            icon:'https://cdn-icons.flaticon.com/png/512/1063/premium/1063451.png?token=exp=1658807778~hmac=6ed4f0c0ab3e4a6466dde59772d39cd8'
        },
        {
            name: 'Hoàng Mai',
            backgroundColor: "rgb(164, 79, 104)",
            icon:'https://cdn-icons-png.flaticon.com/512/1684/1684121.png'
        },
        {
            name: 'Tây Hồ',
            backgroundColor: "rgb(145, 75, 113)",
            icon:'https://cdn-icons.flaticon.com/png/512/2046/premium/2046235.png?token=exp=1658807957~hmac=cd317e9f6797fe2e14ab42823b2290bb'
        },
        {
            name: 'Cầu Giấy',
            backgroundColor: "rgb(126, 71, 122)",
            icon:'https://cdn-icons.flaticon.com/png/512/4480/premium/4480852.png?token=exp=1658808080~hmac=436737f7b0b79f650b110a17fbf3dffe',
            
        },
        {
            name: 'Hà Đông',
            backgroundColor: "rgb(108, 68, 131)",
            icon:'https://cdn-icons-png.flaticon.com/512/3095/3095141.png',
        },
        {
            name: 'Thanh Xuân',
            backgroundColor: "rgb(89, 64, 140)",
            icon:'https://cdn-icons.flaticon.com/png/512/4533/premium/4533930.png?token=exp=1658808162~hmac=594a156547899bb73a0af2ef57dad566'
        },
        {
            name: 'Đống Đa',
            backgroundColor: "rgb(70, 60, 149)",
            icon:'https://cdn-icons-png.flaticon.com/512/6527/6527720.png'
        },
        {
            name: 'Ba Đình',
            backgroundColor: "rgb(51, 56, 157)",
            icon:'https://cdn-icons-png.flaticon.com/512/1752/1752289.png'
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
                        <District name={data.name} backgroundColor={data.backgroundColor} background={data.background} key={data.name} symbol={data.icon} />
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