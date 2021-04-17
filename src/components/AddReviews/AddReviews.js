import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import SideBar from '../DashBoard/SideBar/SideBar';

const AddReviews = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            quote: data.quote,
            from: data.from,
            imageURL: imageURL
        };
        const url = `http://localhost:9003/addReview`;

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
    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>

                <div style={formStyle}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input name="name" defaultValue="Name" ref={register} />
                        <br />
                        {/* <input name="authorName" defaultValue="Author Name" ref={register} />
                        <br /> */}
                        <input name="quote" defaultValue="Quote" ref={register} />
                        <br />

                        <input name="from" defaultValue="From" ref={register} />
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

export default AddReviews;