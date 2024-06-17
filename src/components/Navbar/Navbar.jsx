import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    //get user data from local storage
    const user = JSON.parse(localStorage.getItem('userData'))

    //logout function
    const handlelogout = () => {
        localStorage.clear()
        window.location.href = '/login'
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src="/assets/images/fitheal.png" alt="Logo" className="top-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#">Exercises</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#">Meal Plans</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="d-flex ms-auto">
                            {user ? (
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Welcome, {user.name}!
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Settings</a></li>
                                        <li><button onClick={handlelogout} className="dropdown-item">Log Out</button></li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <Link to={'/register'} className="btn btn-primary">Register</Link>
                                    <Link to={'/login'} className="btn btn-success ms-2" type="Submit">Login</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
