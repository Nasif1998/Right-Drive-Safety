import React from 'react';

const BookingList = ({booking}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">Price</th>
                    <th className="text-secondary" scope="col">Payment Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    booking.map((order, index) =>

                        <tr>
                            <td>{order.name}</td>
                            <td>{order.serviceName}</td>
                            <td>{order.price}</td>
                            <td>{order.paymentId}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookingList;