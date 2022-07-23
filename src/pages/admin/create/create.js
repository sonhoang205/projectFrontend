import React from "react";
import Header from "../../../components/header/header";
import CustomizedInputs from "../../../components/input/input";
import axios from "axios";
// import { Form } from "react-bootstrap";
import './create.css';

const Create = () => {

    const [name, setName] = React.useState({ value: '' })
    const [address, setAddress] = React.useState({ value: '' })
    const [tag, setTag] = React.useState({ value: '' })
    const [image, setImage] = React.useState({ value: '' })
    const [district, setDistrict] = React.useState({ value: '' })

    const submit = () => {
        try {

            axios.post('http://localhost:6060/api/dish/create', {
                name: name.value,
                address: address.value,
                district: district.value,
                img: image.value,
                tags: tag.value
            }).then((res) => {
                console.log(res.data.data);
            })
            alert('Success')
        }
        catch (err) {
            console.log(err.message);
            alert('ERROR')
        }
    }
    console.log(name.value, address.value,tag.value,image.value, district.value);



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