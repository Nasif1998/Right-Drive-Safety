import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './CheckOut.css';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';

const CheckOut = () => {
    let { _id } = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [shippingData, setShippingData] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:9002/checkout/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [_id])

    const newId = _id;
    console.log(newId);

    const { serviceName, price } = service;

    // const handleCheckOut = () => {

    // }

    const onSubmit = data => {
        setShippingData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const newOrder = { ...loggedInUser, serviceName, price, paymentId, shipment: shippingData, orderTime: new Date() };

        fetch('http://localhost:9002/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('order placed');
                }
            })
    }
    return (
        <div>
            <h1>Checkout</h1>
            <table id="customers">
                <tr>
                    <th>Service Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{serviceName}</td>
                    <td>{loggedInUser.name}</td>
                    <td>{loggedInUser.email}</td>
                    <td>{price}</td>
                </tr>
            </table>
            <div style={{display: shippingData ? 'none' : 'block'}}>
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                    {errors.email && <span className="error">Email is required</span>}

                    <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                    {errors.address && <span className="error">Address is required</span>}

                    <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                    {errors.phone && <span className="error">Phone Number is required</span>}

                    <input type="submit" />
                </form>
            </div>
            {/* <Button style={{ textAlign: 'center', marginLeft: '50%' }} onClick={handleCheckOut} variant="contained" color="primary">
                CheckOut
            </Button> */}
            <div style={{display: shippingData ? 'block' : 'none'}} className="mt-4 col-md-6">
                <h2>Please Pay for Ordering...</h2>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>

        </div>
    );
};

export default CheckOut;