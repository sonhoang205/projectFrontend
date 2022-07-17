import React from "react";
import District from "../../components/district/district";
import './home.css'
import DenseAppBar from "./navbar";
const Home = ()=>{
    
    const districtData = [
        {
            name:'Hoàn Kiếm',
            imageURL: 'https://luatvietan.vn/wp-content/uploads/2021/10/Hoan-Kiem.jpg'},
        {
            name:'Hai Bà Trưng',
            imageURL: 'https://image.nhadatmoi.net/tin-tuc/wp-content/uploads/2021/07/07170503/kho-bac-nha-nuoc-quan-hai-ba-trung-5-1024x576.jpg'},
        {
            name:'Hoàng Mai',
            imageURL: 'https://maisonoffice.vn/wp-content/uploads/2021/09/tong-quan-thi-truong-van-phong-cho-thue-quan-hoang-mai.jpg'},
        {
            name:'Tây Hồ',
            imageURL: 'https://vivuhotay.com/wp-content/uploads/2021/03/duong-Trich-Sai-Meat-Plus-Ho-Tay.jpg'},
        {
            name:'Cầu Giấy',
            imageURL: 'https://nld.mediacdn.vn/291774122806476800/2021/5/25/img6467112-16219297451421931194310.jpg',},
        {
            name:'Hà Đông',
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Ga_H%C3%A0_%C4%90%C3%B4ng.jpg',},
        {
            name:'Thanh Xuân',
            imageURL:  'https://luxhomes.vn/xmedia/2019/12/cong-vinhomes-royal-city.jpg',},
        {
            name:'Đống Đa',
            imageURL: 'https://quanlykhachsan.edu.vn/wp-content/uploads/2021/12/du-lich-quan-dong-da-van-mieu-quoc-tu-giam.jpg',},
        {
            name:'Ba Đình',
            imageURL: 'https://vcdn1-dulich.vnecdn.net/2015/08/31/2-BaDinh-08-1440985910.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=NawiDE0y7o_vBV_yLOoB8w'},
    ]
    const renderDistrict = () =>{
        return(
            <>
                {districtData.map((data)=>{
                    return(
                        <District name={data.name} imageURL={data.imageURL}/>
                    )})}
            </>
        )
    }

    return(
        <>
        <header className="header" style={{
            position: "fixed",
            width:'100%',
            zIndex:'10'
        }}>
            <DenseAppBar/>
        </header>
        <div className="container">
            {renderDistrict()}
        </div>
        </>
    )
}
export default Home