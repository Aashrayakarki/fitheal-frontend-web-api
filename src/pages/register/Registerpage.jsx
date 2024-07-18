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
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const [fnameError, setfnameError] = useState('')
    const [lnameError, setlnameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [heightError, setHeightError] = useState('')
    const [weightError, setWeightError] = useState('')
    const [ageError, setAgeError] = useState('')
    const [genderError, setGenderError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const navigate = useNavigate();


    const handlefname = (e) => {
        setfname(e.target.value);
    }

    const handlelname = (e) => {
        setlname(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleHeight = (e) => {
        setHeight(e.target.value);
    }

    const handleWeight = (e) => {
        setWeight(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
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
        if (fname.trim() == '') {
            setfnameError("First name is required")
            isValid = false;
        }

        if (lname.trim() == '') {
            setlnameError("Last name is required")
            isValid = false;
        }

        if (email.trim() === '' || email.includes('@') === false || email.includes('.') === false) {
            setEmailError('Email is invalid or empty');
            isValid = false;
        }

        if (phone.trim() == '') {
            setPhoneError("Phone Number is required")
            isValid = false;
        }

        if (height.trim() == '') {
            setHeightError("Height is required")
            isValid = false;
        }

        if (weight.trim() == '') {
            setWeightError("Weight is required")
            isValid = false;
        }

        if (age.trim() == '') {
            setAgeError("Age is required")
            isValid = false;
        }

        if (gender.trim() == '') {
            setGenderError("Gender is required")
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
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            height: height,
            weight: weight,
            age: age,
            gender: gender,
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
                        Lets get started up so you can access your personal account.
                    </div>
                    <div className="form-group-row mt-2">
                        <div className="form-group">
                            <label>First name: </label>
                            <input onChange={handlefname} type="text" className='form-control' placeholder='Enter your first name' />
                            {fnameError && <p className="text-danger">{fnameError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Last name:</label>
                            <input onChange={handlelname} type="text" className='form-control' placeholder='Enter your last name' />
                            {lnameError && <p className="text-danger">{lnameError}</p>}
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
                            <input onChange={handlePhone} type="text" className='form-control' placeholder='Enter your phone number' />
                            {phoneError && <p className="text-danger">{phoneError}</p>}
                        </div>
                    </div>

                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Height:</label>
                            <input onChange={handleHeight} type="text" className='form-control' placeholder='(in cm)' />
                            {heightError && <p className="text-danger">{heightError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Weight:</label>
                            <input onChange={handleWeight} type="text" className='form-control' placeholder='(in kg)' />
                            {weightError && <p className="text-danger">{weightError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input onChange={handleAge} type="text" className='form-control' placeholder='Enter your age' />
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
                    <div className="password-container">
                        <label>Password :</label>
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
