import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSingleUser, updateUserApi } from '../../apis/Api';

const UpdateProfile = () => {
    const { _id } = useParams();

    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male'); // Setting 'Male' as default
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [genderError, setGenderError] = useState('');

    useEffect(() => {
        getSingleUser(_id)
            .then((res) => {
                const { fname, lname, age, gender, height, weight } = res.data.data;
                setFirstName(fname);
                setLastName(lname);
                setAge(age);
                setGender(gender); // Set gender from fetched data
                setHeight(height);
                setWeight(weight);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [_id]);

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('height', height);
        formData.append('weight', weight);

        updateUserApi(_id, formData)
            .then((res) => {
                if (res.status === 201) {
                    toast.success(res.data.message);
                }
            })
            .catch((error) => {
                if (error.response.status === 500 || error.response.status === 400) {
                    toast.error(error.response.data.message);
                }
            });
    };

    const handleGender = (e) => {
        setGender(e.target.value);
    };

    return (
        <div className="container mt-3">
            <h2>Update Profile</h2>
            <div className="profile-update">
                <form onSubmit={handleUpdateProfile}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            value={fname}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Enter first name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            value={lname}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Enter last name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="form-control"
                            type="number"
                            placeholder="Enter age"
                        />
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

                    <div className="form-group">
                        <label>Height (cm)</label>
                        <input
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="form-control"
                            type="number"
                            placeholder="Enter height in cm"
                        />
                    </div>

                    <div className="form-group">
                        <label>Weight (kg)</label>
                        <input
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="form-control"
                            type="number"
                            placeholder="Enter weight in kg"
                        />
                    </div>

                    <button type="submit" className="btn orange-btn w-100 mt-2">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
