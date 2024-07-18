import React, { useEffect, useState } from 'react';
import { getSingleUser } from '../../apis/Api';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { _id } = useParams();
    const [user, setUser] = useState(null); // Initialize user state as null

    useEffect(() => {
        if (_id) {
            getSingleUser(_id)
                .then((res) => {
                    console.log('API response:', res.data); // Log the API response
                    if (Array.isArray(res.data.data)) {
                        // If response is an array
                        setUser(res.data.data);
                    } else if (typeof res.data.data === 'object') {
                        // If response is a single object, convert to array
                        setUser([res.data.data]);
                    } else {
                        console.error('Unexpected API response:', res.data.data);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error); // Log any errors
                });
        }
    }, [_id]);

    console.log('User state:', user); // Log the user state
    console.log('User ID:', _id); // Log the extracted id

    return (
        <>
            <div>
                <table className="table mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Height</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user !== null ? (
                            user.map((singleUser, index) => (
                                <tr key={index}>
                                    <td>{singleUser.fname}</td>
                                    <td>{singleUser.lname}</td>
                                    <td>{singleUser.age}</td>
                                    <td>{singleUser.gender}</td>
                                    <td>{singleUser.height}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProfilePage;
