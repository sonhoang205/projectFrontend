import React from "react";
import Header from "../../../components/header/header";
import CustomizedInputs from "../../../components/input/input";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
// import { Form } from "react-bootstrap";
import './update.css';

const Update = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const dish = location.state.dish
    const [name, setName] = React.useState({ value: dish.name })
    const [address, setAddress] = React.useState({ value: dish.address })
    const [tag, setTag] = React.useState({ value: dish.tags })
    const [image, setImage] = React.useState({ value: dish.img})
    const [district, setDistrict] = React.useState({ value: dish.district })



    const submit = async () => {
        try {
            await axios.put(`https://project-web-mindx.herokuapp.com/api/dish/${dish._id}`, {
                name: name.value,
                address: address.value,
                district: district.value,
                img: image.value,
                tags: tag.value
            }).then((res) => {
                console.log(res.data.data);
            })
            Swal.fire(
                'Success!',
                'Data has been updated',
                'success'
              )
            navigate('/admin');
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
              })
        }

    }
    console.log(name.value, address.value, district.value);

    return (
        <div className="update-document">
            <Header title='update' />
            <div className="update-container">
                <div className='update-input'>
                    <CustomizedInputs title='Name' onChange={(e) => setName({ value: e.target.value })} defaultValue={dish.name} />
                </div>
                <div className='update-input'>
                    <CustomizedInputs title='Address' onChange={(e) => setAddress({ value: e.target.value })} defaultValue={dish.address} />
                </div>
                <div className='update-input'>
                    <CustomizedInputs title='District' onChange={(e) => setDistrict({ value: e.target.value })} defaultValue={dish.district} />
                </div>
                <div className='update-input'>
                    <CustomizedInputs title='Tags' onChange={(e) => setTag({ value: e.target.value })} defaultValue={dish.tags} />
                </div>
                <div className='update-input'>
                    <CustomizedInputs title='Image URL' onChange={(e) => setImage({ value: e.target.value })} defaultValue={dish.img} />
                </div>
                <button className="update-submit-btn" onClick={submit}>Submit</button>
            </div>

        </div>
    )
}
export default Update