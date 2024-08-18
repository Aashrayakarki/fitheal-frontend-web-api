import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSingleExercise, updateExerciseApi } from '../../../apis/Api';
import './UpdateExercise.css';

const UpdateExercise = () => {
    const { id } = useParams();

    useEffect(() => {
        getSingleExercise(id)
            .then((res) => {
                setExerciseName(res.data.data.exerciseName);
                setExerciseTime(res.data.data.exerciseTime);
                setExerciseCalories(res.data.data.exerciseCalories);
                setExerciseLevel(res.data.data.exerciseLevel);
                setExerciseReps(res.data.data.exerciseReps);
                setExerciseSets(res.data.data.exerciseSets);
                setExerciseDescription(res.data.data.exerciseDescription);
                setOldInstruction(res.data.data.exerciseInstruction);
                setOldThumbnail(res.data.data.exerciseThumbnail);
                setOldVideo(res.data.data.exerciseVideo);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const [exerciseName, setExerciseName] = useState('');
    const [exerciseTime, setExerciseTime] = useState('');
    const [exerciseCalories, setExerciseCalories] = useState('');
    const [exerciseLevel, setExerciseLevel] = useState('');
    const [exerciseReps, setExerciseReps] = useState('');
    const [exerciseSets, setExerciseSets] = useState('');
    const [exerciseDescription, setExerciseDescription] = useState('');

    const [exerciseNewInstruction, setExerciseNewInstruction] = useState(null);
    const [previewNewInstruction, setPreviewNewInstruction] = useState(null);
    const [oldInstruction, setOldInstruction] = useState('');

    const [exerciseNewThumbnail, setExerciseNewThumbnail] = useState(null);
    const [previewNewThumbnail, setPreviewNewThumbnail] = useState(null);
    const [oldThumbnail, setOldThumbnail] = useState('');

    const [exerciseNewVideo, setExerciseNewVideo] = useState(null);
    const [previewNewVideo, setPreviewNewVideo] = useState(null);
    const [oldVideo, setOldVideo] = useState('');

    const handleInstruction = (event) => {
        const file = event.target.files[0];
        setExerciseNewInstruction(file);
        setPreviewNewInstruction(URL.createObjectURL(file));
    };

    const handleVideo = (event) => {
        const file = event.target.files[0];
        setExerciseNewVideo(file);
        setPreviewNewVideo(URL.createObjectURL(file));
    };

    const handleThumbnail = (event) => {
        const file = event.target.files[0];
        setExerciseNewThumbnail(file);
        setPreviewNewThumbnail(URL.createObjectURL(file));
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('exerciseName', exerciseName);
        formData.append('exerciseTime', exerciseTime);
        formData.append('exerciseCalories', exerciseCalories);
        formData.append('exerciseLevel', exerciseLevel);
        formData.append('exerciseReps', exerciseReps);
        formData.append('exerciseSets', exerciseSets);
        formData.append('exerciseDescription', exerciseDescription);

        if (exerciseNewVideo) {
            formData.append('exerciseVideo', exerciseNewVideo);
        }

        if (exerciseNewThumbnail) {
            formData.append('exerciseThumbnail', exerciseNewThumbnail);
        }

        if (exerciseNewInstruction) {
            formData.append('exerciseInstruction', exerciseNewInstruction);
        }

        updateExerciseApi(id, formData)
            .then((res) => {
                if (res.status === 201) {
                    toast.success(res.data.message);
                }
            })
            .catch((error) => {
                if (error.response.status === 500) {
                    toast.error(error.response.data.message);
                } else if (error.response.status === 400) {
                    toast.error(error.response.data.message);
                }
            });
    };

    return (
        <div className='update-exercise-container mt-3'>
            <h2>Update Exercise for {exerciseName}</h2>
            <div className='form-container'>
                <form>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Exercise Name</label>
                            <input value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} className='form-control' type='text' placeholder='Enter your exercise name' />
                        </div>
                        <div className='form-group'>
                            <label>Exercise Time</label>
                            <input value={exerciseTime} onChange={(e) => setExerciseTime(e.target.value)} className='form-control' type='number' placeholder='Enter your exercise time' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Exercise Calories</label>
                            <input value={exerciseCalories} onChange={(e) => setExerciseCalories(e.target.value)} className='form-control' type='number' placeholder='Enter your exercise calories' />
                        </div>
                        <div className='form-group'>
                            <label>Choose Level</label>
                            <select value={exerciseLevel} onChange={(e) => setExerciseLevel(e.target.value)} className='form-control'>
                                <option value='Beginner'>Beginner</option>
                                <option value='Amateur'>Amateur</option>
                                <option value='Advanced'>Advanced</option>
                                <option value='Elite'>Elite</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Exercise Reps</label>
                            <input value={exerciseReps} onChange={(e) => setExerciseReps(e.target.value)} className='form-control' type='number' placeholder='Enter your exercise reps' />
                        </div>
                        <div className='form-group'>
                            <label>Exercise Sets</label>
                            <input value={exerciseSets} onChange={(e) => setExerciseSets(e.target.value)} className='form-control' type='number' placeholder='Enter your exercise sets' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Exercise Description</label>
                            <textarea value={exerciseDescription} onChange={(e) => setExerciseDescription(e.target.value)} className='form-control' placeholder='Enter your exercise description' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Choose Thumbnail</label>
                            <input onChange={handleThumbnail} type='file' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Choose Video</label>
                            <input onChange={handleVideo} type='file' className='form-control' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Choose Instruction</label>
                            <input onChange={handleInstruction} type='file' className='form-control' />
                        </div>
                    </div>
                    <button onClick={handleUpdate} className='btn orange-btn w-100 mt-2'>Update Exercise</button>
                </form>
                <div className='preview-section'>
                    <div className='preview-container'>
                        <h6>Previewing Old Thumbnail</h6>
                        <img src={`http://localhost:5000/products/${oldThumbnail}`} alt='' />
                        {previewNewThumbnail && (
                            <>
                                <h6 className='mt-2'>Previewing New Thumbnail</h6>
                                <img src={previewNewThumbnail} alt='' />
                            </>
                        )}
                    </div>
                    <div className='preview-container'>
                        <h6>Previewing Old Video</h6>
                        <video controls src={`http://localhost:5000/products/${oldVideo}`} />
                        {previewNewVideo && (
                            <>
                                <h6 className='mt-2'>Previewing New Video</h6>
                                <video controls src={previewNewVideo} />
                            </>
                        )}
                    </div>
                    <div className='preview-container'>
                        <h6>Previewing Old Instruction</h6>
                        <img src={`http://localhost:5000/products/${oldInstruction}`} alt='' />
                        {previewNewInstruction && (
                            <>
                                <h6 className='mt-2'>Previewing New Instruction</h6>
                                <img src={previewNewInstruction} alt='' />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateExercise;
