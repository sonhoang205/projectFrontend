import React from "react";
import District from "../../components/district/district";
import './home.css'
import Header from "../../components/header/header";


const Home = () => {

    const districtData = [
        {
            name: 'Hoàn Kiếm',
            backgroundColor: "rgb(201, 86, 86)",
            icon:'/turtle.png'
        },
        {
            name: 'Hai Bà Trưng',
            backgroundColor: "rgb(183, 83, 95)",
            icon:'/elephant.png'
        },
        {
            name: 'Hoàng Mai',
            backgroundColor: "rgb(164, 79, 104)",
            icon:'/apricot.png'
        },
        {
            name: 'Tây Hồ',
            backgroundColor: "rgb(145, 75, 113)",
            icon:'/lake.png'
        },
        {
            name: 'Cầu Giấy',
            backgroundColor: "rgb(126, 71, 122)",
            icon:'/canals.png',
            
        },
        {
            name: 'Hà Đông',
            backgroundColor: "rgb(108, 68, 131)",
            icon:'/river.png',
        },
        {
            name: 'Thanh Xuân',
            backgroundColor: "rgb(89, 64, 140)",
            icon:'/children.png'
        },
        {
            name: 'Đống Đa',
            backgroundColor: "rgb(70, 60, 149)",
            icon:'/temple.png'
        },
        {
            name: 'Ba Đình',
            backgroundColor: "rgb(51, 56, 157)",
            icon:'/badinh.png'
        },
    ]

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
            <Header title='Chọn Nơi Bạn Muốn Đi'/>
            <div className="homeContainer">
                {renderDistrict()}
            </div>
        </div>
    )
}
export default Home