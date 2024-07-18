import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSingleUser } from '../../apis/Api';

const ProfilePage = () => {
    const { _id } = useParams();

    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    useEffect(() => {
        getSingleUser(_id)
            .then((res) => {
                const { fname, lname, age, gender, height, weight } = res.data.data;
                setFirstName(fname);
                setLastName(lname);
                setAge(age);
                setGender(gender);
                setHeight(height);
                setWeight(weight);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [_id]);

    return (
        <div className="container mt-3">
            <h2>Profile Details</h2>
            <div className="profile-details">
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        value={fname}
                        className="form-control"
                        type="text"
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        value={lname}
                        className="form-control"
                        type="text"
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        value={age}
                        className="form-control"
                        type="number"
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <input
                        value={gender}
                        className="form-control"
                        type="text"
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label>Height (cm)</label>
                    <input
                        value={height}
                        className="form-control"
                        type="number"
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label>Weight (kg)</label>
                    <input
                        value={weight}
                        className="form-control"
                        type="number"
                        readOnly
                    />
                </div>
                
                <Link to={`/update_profile/${_id}`} className="btn btn-primary mt-3">Update Profile</Link>
            </div>
        </div>
    );
};

export default ProfilePage;
