import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSingleUser, updateUserApi } from '../../apis/Api';

const ProfilePage = () => {
    const { _id } = useParams();

    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');

    useEffect(() => {
        getSingleUser(_id)
            .then((res) => {
                const { fname, lname, age, gender, height} = res.data.data;
                setFirstName(fname);
                setLastName(lname);
                setAge(age);
                setGender(gender);
                setHeight(height);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [_id]);

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstName', fname);
        formData.append('lastName', lname);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('height', height);

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

    return (
        <div className="container mt-3">
            <h2>Edit Profile</h2>
            <div className="profile-update">
                <form>
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
                            onChange={(e) => setGender(e.target.value)}
                            className="form-control"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
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
                    <button onClick={handleUpdateProfile} className="btn orange-btn w-100 mt-2">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
