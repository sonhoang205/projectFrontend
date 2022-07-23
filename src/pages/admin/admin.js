import React from "react";
import Header from "../../components/header/header";
// import { Form } from "react-bootstrap";
import './Admin.css';
import AdminFunction from '../../components/function/function'
const Admin = ()=>{
    const functions = [
        {
            title: 'Create',
            icon:'https://cdn-icons-png.flaticon.com/512/3658/3658756.png',
            path: 'create'
        },
        {
            title: 'Read',
            icon:'https://cdn-icons.flaticon.com/png/512/2436/premium/2436882.png?token=exp=1658501943~hmac=8b920eedccb07e0d3f34876831473207',
            path:'read'
        },
        {
            title: 'Update',
            icon:'https://cdn-icons-png.flaticon.com/512/1632/1632666.png',
            path:'update'
        },
        {
            title: 'Delete',
            icon:'https://cdn-icons-png.flaticon.com/512/3221/3221897.png',
            path:'delete'
        },
        
    ]

    const renderAdminFunction = () => {
        return (
            <>
                {functions.map((data) => {
                    // console.log(data.icon);
                    return (
                        <AdminFunction name={data.title} key={data.title} symbol={data.icon} path={data.path} />
                    )
                })}
            </>
        )
    }

    return(
        <div className="admin-document">
            <Header title='Trang Admin'/>
            <div className="admin-container">
                {renderAdminFunction()}
            </div>
        </div>
    )
}
export default Admin