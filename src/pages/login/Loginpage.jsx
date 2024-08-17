import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUserApi } from '../../apis/Api';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Loginpage.css';
import { EyeFilled, EyeInvisibleFilled, FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Loginpage = () => {
    const navigate = useNavigate(); // Initialize navigate function
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validation = () => {
        let isValid = true;
        if (email.trim() === '' || email.includes('@') === false || email.includes('.') === false) {
            setEmailError('Email is invalid or empty');
            isValid = false;
        }
        if (password.trim() === '') {
            setPasswordError('Password is required');
            isValid = false;
        }
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var isValidated = validation();
        if (!isValidated) {
            return;
        }

        const data = {
            "email": email,
            "password": password
        };

        loginUserApi(data).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
                localStorage.setItem('token', res.data.token);

                const convertedData = JSON.stringify(res.data.userData);
                localStorage.setItem('userData', convertedData);

                // Redirect to home page after successful login
                navigate('/'); // Use navigate to redirect
            }
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='login-container'>
            <div className="login-form-container">
                <h2 className="login-heading">Login</h2>
                <form className="login-form">
                    <div>
                        Login to access your account
                    </div>
                    <label className="mt-2">Email :</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter your email" />
                    {emailError && <p className="text-danger">{emailError}</p>}

                    <div className="password-container">
                        <label className="mt-2">Password :</label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter your password"
                        />
                        {passwordVisible ? (
                            <EyeInvisibleFilled className="password-toggle-icon" onClick={() => setPasswordVisible(false)} />
                        ) : (
                            <EyeFilled className="password-toggle-icon" onClick={() => setPasswordVisible(true)} />
                        )}
                    </div>

                    {passwordError && <p className="text-danger">{passwordError}</p>}

                    <div className="form-options">
                        <div className="remember-me">
                            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                            <label htmlFor="rememberMe"> Remember me</label>
                        </div>
                        <a href="/forgot_password" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button onClick={handleSubmit} className="btn orange-btn mt-3 w-100">Login</button>
                </form>

                <div className="signup-link">
                    Don't have an account? <a href="/register">Sign Up</a>
                </div>

                
            </div>
            <div className="login-slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="assets/images/slider1.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="assets/images/slider2.png" alt="Slide 2" />
                    </div>
                    <div>
                        <img src="assets/images/gym2.jpg" alt="Slide 3" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Loginpage;
