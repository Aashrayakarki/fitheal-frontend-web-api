import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

const AdminDashboard = () => {
    return (
        <div>
            <Navbar />
            <div>
                <table class="table">

                    <tbody>
                        <tr>
                            <td>Running</td>
                            <td>Walking</td>
                            <td>Jogging</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AdminDashboard
