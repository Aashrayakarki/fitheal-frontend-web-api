import React, { useEffect, useState } from 'react'
import { getSingleUser } from '../../apis/Api'
import { useParams } from 'react-router-dom'

const Profilepage = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        if (id) {
            getSingleUser(id).then((res) => {
                console.log('API response:', res.data) // Log the API response
                setUser(res.data.data)
            }).catch((error) => {
                console.error('Error fetching user data:', error) // Log any errors
            })
        }
    }, [id])

    console.log('User state:', user) // Log the user state
    console.log('User ID:', id); // Log the extracted id


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
                        {
                            user.map((singleUser, index) => (
                                <tr key={index}>
                                    <td>{singleUser.fname}</td>
                                    <td>{singleUser.lname}</td>
                                    <td>{singleUser.age}</td>
                                    <td>{singleUser.gender}</td>
                                    <td>{singleUser.height}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Profilepage
