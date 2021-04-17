import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingList from '../BookingList/BookingList';
// import BookingList from '../BookingList';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        // fetch('http://localhost:9003/booings?email=' +loggedInUser.email)
        fetch('http://localhost:9003/bookings?email=' +loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div>
            <h2>Bookings: {bookings.length}</h2>
            {/* <BookingList booking={bookings}></BookingList> */}
            <BookingList booking={bookings}></BookingList>
        </div>
    );
};

export default Bookings;