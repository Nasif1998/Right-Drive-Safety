import React from 'react';
import { useHistory } from 'react-router';

const OrderList = ({ orders }) => {
    const history = useHistory();
    const deleteOrder = (id, event) => {
        const url = `http://localhost:9003/deleteOrder/${id}`
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

    function loadOrder(id) {
        fetch(`http://localhost:9003/orderDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const update = document.getElementById('update');
                update.innerHTML = `
            <h3>Update: ${data._id}</h3>
            Status: <input type="text" value="${data.status}" id="status">
            <br>
            <button onclick="updateProduct('${data._id}')">Submit</button>
                `;
            })

            
    }


    function updateProduct(id){
        // console.log('updating');
        const status = document.getElementById('status').value;
        const product = {id, status};
        fetch(`/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result => {
            // console.log('updated');
            if(result){
                // document.getElementById('products').innerHTML= '';
            }
        })
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
                                <td><button onClick={() => deleteOrder(order._id)}>Delete</button> <button onClick={() => loadOrder(order._id)}>Update Status</button></td>
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