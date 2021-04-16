import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link ms-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 " to="/dashboard">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 " to="#">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 " to="#">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 ps-5" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;