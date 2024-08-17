import React from 'react';
import { Link } from 'react-router-dom';

const DefaultNavbar = () => {
    const user = JSON.parse(localStorage.getItem('userData'));

    // Logout function
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar position-fixed w-100">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <img src="/assets/images/fitheal.png" alt="Logo" className="top-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5">
                                <a className="nav-link custom-nav-link" href='/'>Home</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link custom-nav-link" href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        {user ? (
                            <div className="dropdown">
                                <button className="btn custom-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    {`Welcome, ${user.fname}`}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <Link to={`/get_single_user/${user._id}`} className="dropdown-item">Profile</Link>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/forgot_password">Settings</a>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="dropdown-item">Log Out</button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link to={'/register'} className="btn custom-btn">Register</Link>
                                <Link to={'/login'} className="btn login-btn ms-1">Login</Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <div style={{ paddingTop: '100px' }}></div>
        </>
    );
};

export default DefaultNavbar;
