import React from 'react';
import './AdminDashboard.css'; // Make sure to create and import this CSS file

const AdminDashboard = () => {
    return (
        <div>
            <div>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Video</th>
                            <th>Exercise Name</th>
                            <th>Calories Burn</th>
                            <th>Time</th>
                            <th>Difficulty Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><video src="/assets/videos/abc.mp4" className="video-size" controls></video></td>
                            <td>Walking</td>
                            <td>200</td>
                            <td>30 min</td>
                            <td>Easy</td>
                        </tr>
                        <tr>
                            <td><video src="/assets/videos/abc.mp4" className="video-size" controls></video></td>
                            <td>Jogging</td>
                            <td>300</td>
                            <td>45 min</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td><video src="/assets/videos/abc.mp4" className="video-size" controls></video></td>
                            <td>Running</td>
                            <td>400</td>
                            <td>60 min</td>
                            <td>Hard</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
