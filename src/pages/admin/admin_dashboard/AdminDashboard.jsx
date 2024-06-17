import React, { useState } from 'react';
import './AdminDashboard.css'; // Make sure to create and import this CSS file
import { createExerciseApi } from '../../../apis/Api';
import { toast } from 'react-toastify';

const AdminDashboard = () => {

    const [exerciseVideo, setExerciseVideo] = useState(null)
    const [previewVideo, setPreviewVideo] = useState(null)

    const [exerciseName, setExerciseName] = useState('')
    const [exerciseCalories, setExerciseCalories] = useState('')
    const [exerciseTime, setExerciseTime] = useState('')
    const [exerciseLevel, setExerciseLevel] = useState('')

    const handleVideo = (e) => {
        const file = e.target.files[0]
        setExerciseVideo(file)
        setPreviewVideo(URL.createObjectURL(file))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('exerciseName', exerciseName)
        formData.append('exerciseCalories', exerciseCalories)
        formData.append('exerciseTime', exerciseTime)
        formData.append('exerciseLevel', exerciseLevel)
        formData.append('exerciseVideo', exerciseVideo)

        createExerciseApi(formData).then((res) => {
            if (res.status == 201) {
                toast.success(res.data.message)
            }
        }).catch((error) => {
            //for error status code
            if (error.response) {
                if (error.response.status === 400) {
                    toast.warning(error.response.data.message)
                } else if (error.response.status === 500) {
                    toast.error(error.response.data.message)
                } else {
                    toast.error('Something went wrong')
                }
            } else {
                toast.error('Something went wrong')
            }
        })

    }

    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>

                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add exercise
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create a new exercise</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action=''>
                                        <label>Exercise Name</label>
                                        <input onChange={(e) => setExerciseName(e.target.value)} type="text" className='form-control' placeholder='Enter exercise name'></input>

                                        <label className='mt-2'>Exercise Time</label>
                                        <input onChange={(e) => setExerciseTime(e.target.value)} type="number" className='form-control' placeholder='Enter exercise time'></input>

                                        <label className='mt-2'>Exercise Calories</label>
                                        <input onChange={(e) => setExerciseCalories(e.target.value)} type="number" className='form-control' placeholder='Enter exercise calories'></input>

                                        <label className='mt-2'>Choose Exercise Level</label>
                                        <select onChange={(e) => setExerciseLevel(e.target.value)} className='form-control'>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Amateur">Amateur</option>
                                            <option value="Advanced">Advanced</option>
                                            <option value="Elite">Elite</option>
                                        </select>

                                        <label className='mt-2'>Choose exercise video</label>
                                        <input onChange={handleVideo} type='file' className='form-control'></input>
                                        {
                                            previewVideo && <video src={previewVideo} className='preview-size mt-2' controls></video>
                                        }


                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Video</th>
                            <th>Exercise Name</th>
                            <th>Calories Burn</th>
                            <th>Time</th>
                            <th>Difficulty Level</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><video src="/assets/videos/abc.mp4" className="video-size" controls></video></td>
                            <td>Jump roping</td>
                            <td>200</td>
                            <td>30 minutes</td>
                            <td>Beginner</td>
                            <td>
                                <button className='btn btn-primary'>Edit</button>
                                <button className="btn btn-danger ms-2">Delete</button>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
};

export default AdminDashboard;
