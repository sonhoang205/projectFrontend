import React from "react";
import './result.css'
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

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
    const handleClickHome = () => {
        navigate("/")
    }
    const handleClickSignIn = () => {
        navigate("/login")
    }
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
            {/* <header className="header" style={{
            position: "fixed",
            width:'100%',
            zIndex:'10'
        }}>
            <DenseAppBar/>
        </header> */}
            <div className="result-header">
                <div className="result-navbar">
                    <div className="result-title" onClick={handleClickHome}>
                        Hôm Nay Ăn Gì?
                    </div>
                    <div className="result-authentication">
                        <button className="result-sign-up">Sign Up</button>
                        <button className="result-sign-in" onClick={handleClickSignIn}>Sign In</button>
                    </div>
                </div>
                <div className="result-note">
                    Kết Quả
                </div>
            </div>
            <div className="result-container">
                {renderResultCard()}
            </div>

        </div>
    )
}
export default Result