import React from "react";
import District from "../../components/district/district";
import './home.css'
import DenseAppBar from "./navbar";
const Home = () => {

    const districtData = [
        {
            name: 'Hoàn Kiếm',
            backgroundColor: "rgb(143, 149, 211)",
            color: "rgb(62, 76, 230)"
        },
        {
            name: 'Hai Bà Trưng',
            backgroundColor: "rgb(160, 161, 215)",
            color: "rgb(85, 80, 215)"
        },
        {
            name: 'Hoàng Mai',
            backgroundColor: "rgb(177, 173, 219)",
            color: "rgb(108, 83, 199)"
        },
        {
            name: 'Tây Hồ',
            backgroundColor: "rgb(194, 185, 223)",
            color: "rgb(131, 87, 183)"
        },
        {
            name: 'Cầu Giấy',
            backgroundColor: "rgb(211, 196, 227)",
            color: "rgb(154, 90, 167)"
        },
        {
            name: 'Hà Đông',
            backgroundColor: "rgb(213, 192, 218)",
            color: "rgb(177, 94, 151)"
        },
        {
            name: 'Thanh Xuân',
            backgroundColor: "rgb(215, 187, 208)",
            color: "rgb(200, 97, 135)"
        },
        {
            name: 'Đống Đa',
            backgroundColor: "rgb(217, 182, 198)",
            color: "rgb(223, 100, 119)"
        },
        {
            name: 'Ba Đình',
            backgroundColor: "rgb(219, 177, 188)",
            color: "rgb(245, 103, 103)"
        },
    ]
    const renderDistrict = () => {
        return (
            <>
                {districtData.map((data) => {
                    return (
                        <District name={data.name} color={data.color} backgroundColor={data.backgroundColor} />
                    )
                })}
            </>
        )
    }

    return (
        <div className="document">
            {/* <header className="header" style={{
            position: "fixed",
            width:'100%',
            zIndex:'10'
        }}>
            <DenseAppBar/>
        </header> */}
            <div className="header">
                <div className="navbar">
                    <div className="title">
                        Hôm Nay Ăn Gì?
                    </div>
                    <div className="authentication">
                        <button className="sign-up">Sign Up</button>
                        <button className="sign-in">Sign In</button>
                    </div>
                </div>
                <div className="note">
                    Chọn một nơi bạn muốn đi
                </div>
            </div>
            <div className="container">
                {renderDistrict()}
            </div>
        </div>
    )
}
export default Home