import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageList from '../ManageList/ManageList';
import SideBar from '../SideBar/SideBar';

const ManageServices = () => {
    const [manages, setManages] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://limitless-scrubland-20028.herokuapp.com/manageServices')
            .then(res => res.json())
            .then(data => setManages(data))
    }, [])
    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h2>Services: {manages.length}</h2>
                <ManageList manage={manages}></ManageList>

            </div>
        </section>
    );
};

export default ManageServices;