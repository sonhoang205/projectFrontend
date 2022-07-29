import React from "react";
import './filter.css'
import Tags from "../../components/tags/tags";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";


const Filter = () => {

    const tags = [
        {
            type:'Món Khô',
            icon: '/dry.png'
        },
        {
            type:'Món Nước',
            icon: '/splash.png'
        },
        {
            type:'Món Chay',
            icon: '/vegetables.png' 
        }

    ]
    const navigate = useNavigate()
    const location = useLocation();
    const checkUndefined = ()=>{
        if(location.state === undefined ||location.state === null){
            navigate('/')
        }
    }
    React.useEffect(()=>{
        checkUndefined()
    },[])
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