import React from "react";
import './filter.css'
import Tags from "../../components/tags/tags";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/header";


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
            icon: 'https://cdn-icons.flaticon.com/png/512/2153/premium/2153788.png?token=exp=1658687661~hmac=ecd7b6c25a75a50f5108171b323cdb0d' 
        }

    ]

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
            <Header title='Chọn loại món ăn'/>
            
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