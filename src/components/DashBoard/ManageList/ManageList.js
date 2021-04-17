import React from 'react';
import { useHistory } from 'react-router';

const ManageList = ({manage}) => {
    const history = useHistory();
    const deleteEvent = (id, event) => {
        const url = `http://localhost:9002/deleteEvent/${id}`
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
    return (
        <table className="table">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">ID</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">Price</th>
                    <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    manage.map((mg, index) =>

                        <tr>
                            <td>{mg._id}</td>
                            <td>{mg.serviceName}</td>
                            <td>{mg.price}</td>
                            <td><button onClick={() => deleteEvent(mg._id)}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ManageList;