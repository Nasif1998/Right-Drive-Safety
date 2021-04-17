import React, { useState } from 'react';
import SideBar from '../DashBoard/SideBar/SideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            serviceName: data.serviceName,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:9003/addAService`;

        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response'))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'aab7862e73868b2ce0b96b1c96ee6492');
        imageData.append('image', event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const formStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(211, 206, 206)',
        textAlign: 'center'
    }



    // const [info, setInfo] = useState({});
    // const [file, setFile] = useState(null);

    // const handleBlur = e => {
    //     const newInfo = { ...info };
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo);
    // }

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    // const handleSubmit = () => {
    //     const formData = new FormData()
    //     console.log(info);
    //     formData.append('file', file);
    //     formData.append('name', info.name);
    //     formData.append('email', info.email);

    //     fetch('http://localhost:9001/addAService', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }


    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>

                {/* <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> */}

                <div style={formStyle}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input name="serviceName" defaultValue="Service Name" ref={register} />
                        <br />
                        {/* <input name="authorName" defaultValue="Author Name" ref={register} />
                        <br /> */}
                        <input name="price" defaultValue="Price" ref={register} />
                        <br />

                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br />


                        <input type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;