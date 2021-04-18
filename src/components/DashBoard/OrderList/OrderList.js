import React, { useState } from 'react';
import { useHistory } from 'react-router';

const OrderList = ({ orders }) => {
    const [status, setStatus] = useState(null);
    const history = useHistory();
    const deleteOrder = (id, event) => {
        const url = `https://limitless-scrubland-20028.herokuapp.com/deleteOrder/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    //  event.target.parentNode.style.display = 'none';
                    //  window.location.reload(false);
                    history.go(0);
                }

            })
    }
    
    function updateStatus(id){
        // console.log('updating');
    //     setUpdateStatus("")
    //     const updateStatus = {status: 'Done'};
    //     fetch(`https://limitless-scrubland-20028.herokuapp.com/update/${id}`, {
    //         method: 'PATCH',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(updateStatus)
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         // console.log('updated');
    //         if(result){
    //             // document.getElementById('products').innerHTML= '';
    //         }
    //     })

    }


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service Name</th>
                        <th className="text-secondary" scope="col">Price</th>
                        <th className="text-secondary" scope="col">Status</th>
                        <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>

                            <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                                <td><button onClick={() => deleteOrder(order._id)}>Delete</button> <button onClick={() => updateStatus(order._id)}>Update Status</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <div id="update">
            </div>
        </div>


    );
};

export default OrderList;