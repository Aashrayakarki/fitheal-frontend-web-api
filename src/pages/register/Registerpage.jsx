import React, { useState } from 'react';
import { registerUserApi } from '../../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Registerpage.css';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import Slider from 'react-slick';

const Registerpage = () => {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [fnameError, setfnameError] = useState('');
    const [lnameError, setlnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [heightError, setHeightError] = useState('');
    const [weightError, setWeightError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const navigate = useNavigate();

    const handlefname = (e) => setfname(e.target.value);
    const handlelname = (e) => setlname(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleHeight = (e) => setHeight(e.target.value);
    const handleWeight = (e) => setWeight(e.target.value);
    const handleAge = (e) => setAge(e.target.value);
    const handleGender = (e) => setGender(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

    const validate = () => {
        let isValid = true;

        if (fname.trim() === '') {
            setfnameError("First name is required");
            isValid = false;
        } else {
            setfnameError('');
        }

        if (lname.trim() === '') {
            setlnameError("Last name is required");
            isValid = false;
        } else {
            setlnameError('');
        }

        if (email.trim() === '' || !email.includes('@') || !email.includes('.')) {
            setEmailError('Email is invalid or empty');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (phone.trim() === '') {
            setPhoneError("Phone Number is required");
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (height.trim() === '') {
            setHeightError("Height is required");
            isValid = false;
        } else {
            setHeightError('');
        }

        if (weight.trim() === '') {
            setWeightError("Weight is required");
            isValid = false;
        } else {
            setWeightError('');
        }

        if (age.trim() === '') {
            setAgeError("Age is required");
            isValid = false;
        } else {
            setAgeError('');
        }

        if (gender.trim() === '') {
            setGenderError("Gender is required");
            isValid = false;
        } else {
            setGenderError('');
        }

        if (password.trim() === '') {
            setPasswordError("Password is required");
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (confirmPassword.trim() === '') {
            setConfirmPasswordError("Confirm Password is required");
            isValid = false;
        } else if (confirmPassword.trim() !== password.trim()) {
            setConfirmPasswordError("Password and Confirm Password don't match!");
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const data = {
            fname,
            lname,
            email,
            phone,
            height,
            weight,
            age,
            gender,
            password,
            confirmPassword
        };

        registerUserApi(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    navigate('/login');
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(() => {
                toast.error('Internal Server Error!');
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
        <div className='register-container mt-2'>
            <div className="register-form-container">
                <h2>Create an account</h2>
                <form className='w-50'>
                    <div>
                        Lets get started up so you can access your personal account.
                    </div>
                    <div className="form-group-row mt-2">
                        <div className="form-group">
                            <label>First name:</label>
                            <input
                                onChange={handlefname}
                                type="text"
                                className='form-control'
                                placeholder='Enter your first name'
                            />
                            {fnameError && <p className="text-danger">{fnameError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Last name:</label>
                            <input
                                onChange={handlelname}
                                type="text"
                                className='form-control'
                                placeholder='Enter your last name'
                            />
                            {lnameError && <p className="text-danger">{lnameError}</p>}
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                onChange={handleEmail}
                                type="text"
                                className='form-control'
                                placeholder='Enter your email address'
                            />
                            {emailError && <p className="text-danger">{emailError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input
                                onChange={handlePhone}
                                type="text"
                                className='form-control'
                                placeholder='Enter your phone number'
                            />
                            {phoneError && <p className="text-danger">{phoneError}</p>}
                        </div>
                    </div>

                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Height:</label>
                            <input
                                onChange={handleHeight}
                                type="text"
                                className='form-control'
                                placeholder='(in cm)'
                            />
                            {heightError && <p className="text-danger">{heightError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Weight:</label>
                            <input
                                onChange={handleWeight}
                                type="text"
                                className='form-control'
                                placeholder='(in kg)'
                            />
                            {weightError && <p className="text-danger">{weightError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input
                                onChange={handleAge}
                                type="text"
                                className='form-control'
                                placeholder='Enter your age'
                            />
                            {ageError && <p className="text-danger">{ageError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <select
                                value={gender}
                                onChange={handleGender}
                                className="form-control"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {genderError && <p className="text-danger">{genderError}</p>}
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="password-container form-group">
                            <label>Password:</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                onChange={handlePassword}
                                className="form-control"
                                placeholder="Enter your password"
                            />
                            {passwordVisible ? (
                                <EyeInvisibleFilled className="password-toggle-icon" onClick={() => setPasswordVisible(false)} />
                            ) : (
                                <EyeFilled className="password-toggle-icon" onClick={() => setPasswordVisible(true)} />
                            )}
                            {passwordError && <p className="text-danger">{passwordError}</p>}
                        </div>
                        <div className="confirm-password-container form-group">
                            <label>Confirm password:</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                onChange={handleConfirmPassword}
                                className="form-control"
                                placeholder="Enter your password again"
                            />
                            {passwordVisible ? (
                                <EyeInvisibleFilled className="password-toggle-icon" onClick={() => setPasswordVisible(false)} />
                            ) : (
                                <EyeFilled className="password-toggle-icon" onClick={() => setPasswordVisible(true)} />
                            )}
                            {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="btn orange-btn mt-3 w-100">Create Account</button>
                </form>

                <div className="login-link">
                    Already have an account? <a href="/Login">Login</a>
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
    );
};

export default Registerpage;
