import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://limitless-scrubland-20028.herokuapp.com/orderDetails')
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    return (
        <div>
            <h2>Orders: {order.length}</h2>
            <OrderList orders={order}></OrderList>
        </div>
    );
};

export default Orders;