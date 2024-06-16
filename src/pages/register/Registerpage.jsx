import React, { useState } from 'react'
import { registerUserApi } from '../../apis/Api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Registerpage.css'
import { EyeFilled, EyeInvisibleFilled, FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Slider from 'react-slick';

const Registerpage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const navigate = useNavigate();


    const handleFirstname = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastname = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    var validate = () => {
        var isValid = true;

        //validate the first name
        if (firstName.trim() == '') {
            setFirstNameError("First name is required")
            isValid = false;
        }

        if (lastName.trim() == '') {
            setLastNameError("Last name is required")
            isValid = false;
        }

        if (email.trim() === '' || email.includes('@') === false || email.includes('.') === false) {
            setEmailError('Email is invalid or empty');
            isValid = false;
        }

        if (phoneNumber.trim() == '') {
            setPhoneNumberError("Phone Number is required")
            isValid = false;
        }

        if (password.trim() == '') {
            setPasswordError("Password is required")
            isValid = false;
        }

        if (confirmPassword.trim() == '') {
            setConfirmPasswordError("Confirm Password is required")
            isValid = false;
        }

        if (confirmPassword.trim() !== password.trim()) {
            setConfirmPasswordError("Password and Confirm Password doesn't match!!")
            isValid = false;
        }

        return isValid;

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var isValidated = validate();
        if (!isValidated) {
            return
        }

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        registerUserApi(data).then((res) => {
            if (res.data.success == true) {
                toast.success(res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            console.log(err)
            toast.error('Internal Server Error!')
        })
    }

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
            <div className='register-container mt-2'>
                <div className="register-form-container">
                    <h2>Create an account</h2>
                    <form className='w-50'>
                        <div>
                            Let’s get started up so you can access your personal account.
                        </div>
                        <div className="form-group-row mt-2">
                            <div className="form-group">
                                <label>Firstname: </label>
                                <input onChange={handleFirstname} type="text" className='form-control' placeholder='Enter your first name' />
                                {firstNameError && <p className="text-danger">{firstNameError}</p>}
                            </div>
                            <div className="form-group">
                                <label>Lastname:</label>
                                <input onChange={handleLastname} type="text" className='form-control' placeholder='Enter your last name' />
                                {lastNameError && <p className="text-danger">{lastNameError}</p>}
                            </div>
                        </div>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Email:</label>
                                <input onChange={handleEmail} type="text" className='form-control' placeholder='Enter your email address' />
                                {emailError && <p className="text-danger">{emailError}</p>}
                            </div>
                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input onChange={handlePhoneNumber} type="text" className='form-control' placeholder='Enter your phone number' />
                                {phoneNumberError && <p className="text-danger">{phoneNumberError}</p>}
                            </div>
                        </div>
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
                        <div className="confirm-password-container">
                            <label className="mt-2">Confirm password :</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter your password again"
                            />
                            {passwordVisible ? (
                                <EyeInvisibleFilled className="password-toggle-icon" onClick={() => setPasswordVisible(false)} />
                            ) : (
                                <EyeFilled className="password-toggle-icon" onClick={() => setPasswordVisible(true)} />
                            )}
                        </div>
                        {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
                        <div className="form-options">
                        <div className="remember-me">
                            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                            <label htmlFor="rememberMe"> Remember me</label>
                        </div>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button onClick={handleSubmit} className="btn orange-btn mt-3 w-100">Create Account</button>
                    </form>
                
                    <div className="login-link">
                        Already have an account? <a href="/Login">Login</a>
                    </div>

                    <div className="register-separator">
                        <div className="line"></div>
                        <div className="or-text">or login with</div>
                        <div className="line"></div>
                    </div>

                    <div className="register-social-buttons">
                        <Button type='primary' icon={<FacebookFilled />} className="facebook-btn">
                            Login with Facebook
                        </Button>
                        <Button icon={<GoogleOutlined />} className="google-btn">
                            Login with Google
                        </Button>
                    </div>
                </div>
                <div className='register-slider-container'>
                    <Slider {...settings}>
                        <div>
                            <img src="assets/images/slider2.png" alt="Slide 1" />
                        </div>
                        <div>
                            <img src="assets/images/slider1.png" alt="Slide 2" />
                        </div>
                        <div>
                            <img src="assets/images/gym2.jpg" alt="Slide 3" />
                        </div>
                    </Slider>
                </div>
            </div>
    )
}

export default Registerpage
