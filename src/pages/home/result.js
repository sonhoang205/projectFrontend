import React from "react";
import './result.css'
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";

const Result = () => {
    const [dishData, setDishData] = React.useState('')
    const location = useLocation();
    console.log(location.state)

    const fetchDish = async () => {
        const res = await axios.get('https://project-web-mindx.herokuapp.com/api/dish/search',{
            params:{
                district: location.state.district,
                tags: location.state.tags
            }
        })
        // console.log( await res)
        setDishData(res.data.data.result)

        return res
    }
    // fetchDish()
    console.log(dishData);
    React.useEffect(() => {
        fetchDish()
    }, [])
    const handleChangeOtherDish = ()=>{
        fetchDish()
    }
    const navigate = useNavigate()
    const checkUndefined = ()=>{
        if(location.state === undefined ||location.state === null){
            navigate('/')
        }
    }
    React.useEffect(()=>{
        checkUndefined()
    },[])
    const renderResultCard = () => {

        if(dishData === undefined){
            return (
                <>
                    <div className="result-card">
                        <div className="result-name result-undefine">Hiện tại, không có dữ liệu</div>
                    </div>
                </>
            )
        }
        if (dishData !== '') {
            return (
                <>
                    <div className="result-card">
                        <img className="result-img" src={dishData.img} alt='Mon an'></img>
                        <div className="result-name">{dishData.name}</div>
                        <div className="result-address">{dishData.address}</div>
                        <button className="result-other-dish" onClick={handleChangeOtherDish}>Món Khác</button>
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="result-card">
                    <div className="result-name">Không có dữ liệu</div>
                </div>
            </>
        )
    }




    return (
        <div className="result-document">
            <Header title="Kết Quả"/>
            <div className="result-container">
                {renderResultCard()}
            </div>

        </div>
    )
}
export default Result