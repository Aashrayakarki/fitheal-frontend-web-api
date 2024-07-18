import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSingleUser } from '../../apis/Api';

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
            </div>
        </div>
    );
};

export default ProfilePage;
