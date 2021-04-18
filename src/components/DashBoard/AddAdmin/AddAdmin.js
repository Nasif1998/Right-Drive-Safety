import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            // serviceName: data.serviceName,
            // price: data.price,
            // imageURL: imageURL,
            email: data.email
        };

        const url = `https://limitless-scrubland-20028.herokuapp.com/addAdmin`;

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
                <h5 className="text-brand">Add Admin</h5>

                <div style={formStyle}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input name="email" defaultValue="Email" ref={register} />

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;