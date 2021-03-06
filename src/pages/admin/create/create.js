import React from "react";
import Header from "../../../components/header/header";
import CustomizedInputs from "../../../components/input/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './create.css';
import Swal from "sweetalert2";

const Create = () => {
    const navigate = useNavigate()
    const [name, setName] = React.useState({ value: '' })
    const [address, setAddress] = React.useState({ value: '' })
    const [tag, setTag] = React.useState({ value: '' })
    const [image, setImage] = React.useState({ value: '' })
    const [district, setDistrict] = React.useState({ value: '' })

    const submit = async () => {
        try {
            await axios.post('https://project-web-mindx.herokuapp.com/api/dish/create', {
                name: name.value,
                address: address.value,
                district: district.value,
                img: image.value,
                tags: tag.value
            })
            Swal.fire(
                'Success!',
                'You just created an item!',
                'success'
              )
            navigate('/admin')
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
              })
        }

    }

    return (
        <div className="create-document">
            <Header title='Create' />
            <div className="create-container">
                <div className='create-input'>
                    <CustomizedInputs title='Name' onChange={(e) => setName({ value: e.target.value })} />
                </div>
                <div className='create-input'>
                    <CustomizedInputs title='Address' onChange={(e) => setAddress({ value: e.target.value })} />
                </div>
                <div className='create-input'>
                    <CustomizedInputs title='District' onChange={(e) => setDistrict({ value: e.target.value })} />
                </div>
                <div className='create-input'>
                    <CustomizedInputs title='Tags' onChange={(e) => setTag({ value: e.target.value })} />
                </div>
                <div className='create-input'>
                    <CustomizedInputs title='Image URL' onChange={(e) => setImage({ value: e.target.value })} />
                </div>
                <button className="create-submit-btn" onClick={submit}>Submit</button>
            </div>

        </div>
    )
}
export default Create