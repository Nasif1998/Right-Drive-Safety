import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { serviceName, price, imageURL, _id } = props.service;

    const serviceStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(211, 206, 206)'
    }
    return (
        <div>
            
            <div style={serviceStyle}>
                <img style={{ height: '200px', width: '200px' }} src={imageURL} key={_id} alt="" />
                <h4>{serviceName}</h4>
                <br />
                <h4 style={{ color: 'blue' }}>{price}$</h4>
                {/* <p> <Link to={`/destination/${id}`}>
                    <button style={{ backgroundColor: 'orange' }}>Select</button>
                </Link></p> */}
                <p> <Link to={`/checkout/${_id}`}>
                    <button style={{ backgroundColor: 'blue', marginLeft: '5%' }}>Buy Now</button>
                </Link> </p>

            </div>
        </div>
    );
};

export default Service;