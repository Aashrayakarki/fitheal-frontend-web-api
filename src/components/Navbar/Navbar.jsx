import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5 me-5" href="#">FitHeal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
                        <ul className="navbar-nav ms-5 me-5">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Welcome
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
