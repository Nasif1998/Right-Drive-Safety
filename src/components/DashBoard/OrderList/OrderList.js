import React from 'react';

const OrderList = ({orders}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">Price</th>
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
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderList;