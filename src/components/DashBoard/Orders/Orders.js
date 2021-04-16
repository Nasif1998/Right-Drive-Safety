import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:9002/orderDetails')
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