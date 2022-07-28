import React from "react";
import Header from "../../components/header/header";
// import { Form } from "react-bootstrap";
import './Admin.css';

import { useNavigate, } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Admin = () => {
    const instance = axios.create({
        baseURL: 'https://project-web-mindx.herokuapp.com/',
        timeout: 300000,
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const token = localStorage.getItem('token')
    instance.defaults.headers['authorization'] = token;


    const navigate = useNavigate();



    const [dishData, setDishData] = React.useState({
        status: 'idle',
        data: null
    })
    const fetchAllDishes = async () => {
        try {
            setDishData(prestate => ({
                ...prestate,
                status: 'loading'
            }))

            const res = await instance.get(`https://project-web-mindx.herokuapp.com/api/dish`,
            );
            // console.log(res.data.success);

            if (res.data.success === 1) {
                setDishData({
                    status: 'success',
                    data: {
                        dishes: res.data.data,
                        total: res.data.data.total
                    }
                })
                // console.log(dishData.data);
            } else {
                setDishData({ status: 'error' })
            }
        } catch (error) {
            setDishData({ status: 'error' })
        }
    }


    const deleteDish = async (dishId) => {
        try {
            await instance.delete(`https://project-web-mindx.herokuapp.com/api/dish/${dishId}`)
            Swal.fire(
                'Success!',
                'Data has been deleted!',
                'success'
            )
            fetchAllDishes()
        } catch (err) {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
            })
        }
    }
    // console.log(dishData.data);


    React.useEffect(() => {
        const fetchDishes = async () => {
            try {
                setDishData(prestate => ({
                    ...prestate,
                    status: 'loading'
                }))

                const res = await instance.get(`https://project-web-mindx.herokuapp.com/api/dish`,
                );
                // console.log(res.data.success);

                if (res.data.success === 1) {
                    setDishData({
                        status: 'success',
                        data: {
                            dishes: res.data.data,
                            total: res.data.data.total
                        }
                    })
                    // console.log(dishData.data);
                } else {
                    setDishData({ status: 'error' })
                }
            } catch (error) {
                setDishData({ status: 'error' })
            }
        }
        fetchDishes();
        const checkToken = async () => {
            const res = await axios.get(`https://project-web-mindx.herokuapp.com/api/auth/userInfor`, { headers: { authorization: localStorage.getItem('token') } })
            setUser(res.data.data)
        }
        checkToken();
    }, [])

    const [user, setUser] = React.useState(null)



    const renderTable = () => {
        // console.log(user);
        if (!user) {
            return (
                <div>Không thể truy cập</div>
            )
        }
        return (
            <div className="admin-table-contrainer">
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                    <button className="admin-create-btn" onClick={() => {
                        navigate('/create')
                    }}>
                        Add New Dish
                    </button>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>District</th>
                            <th>Address</th>
                            <th>Tags</th>
                            <th>Image URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderDishes()}
                    </tbody>
                </table>

            </div>
        )
    }

    const renderDishes = () => {

        const isLoading = dishData.status === 'idle' || dishData.status === 'loading';
        const isError = dishData.status === 'error';

        if (isLoading) {
            return (
                <tr>
                    <td>
                        Loading....
                    </td>

                </tr>
            )
        }
        if (isError) {
            return (
                <tr>
                    <td>
                        Something went wrong
                    </td>
                </tr>

            )
        }
        return (
            <>
                {dishData.data.dishes.dishes.map((dish) => {

                    return (
                        <tr key={dish._id}>
                            <td>{dish.name}</td>
                            <td>{dish.district}</td>
                            <td>{dish.address}</td>
                            <td>{dish.tags}</td>
                            <td style={{ paddingLeft: '25px' }}>
                                <div className="admin-imageURL">
                                    <a href={dish.img}>Link</a>
                                </div>
                            </td>
                            <td>
                                <img className="admin-delete-btn" onClick={() => { deleteDish(dish._id) }} src="/delete.png" alt="delete button" />
                                <img className="admin-update-btn" onClick={() => { navigate('/update', { state: { dish: dish } }) }} src="refresh.png" alt="update button" />
                            </td>
                        </tr>
                    )
                })}
            </>
        )


    }

    return (
        <div className="admin-document">
            <Header title='Trang Admin' />
            <div className="admin-container">
                {renderTable()}
            </div>
        </div>
    )
}
export default Admin