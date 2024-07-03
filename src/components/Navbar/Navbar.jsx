import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('userData'));
    console.log('User from local storage:', user); // Log the user object

    // Logout function
    const handlelogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100" style={{ zIndex: 1000 }}>
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <img src="/assets/images/fitheal.png" alt="Logo" className="top-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5">
                                <a className="nav-link" href='/'>Home</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="/admin/exercise">Exercises</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="/admin/meal">Meal Plans</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        {user ? (
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Welcome
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link to={`/profile/${user._id}`} className="dropdown-item">Profile</Link> 
                                    </li>
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
            </nav>
            <div style={{ paddingTop: '100px' }}></div> {/* Add padding to avoid content overlap */}
        </>
    );
};

export default Navbar;
