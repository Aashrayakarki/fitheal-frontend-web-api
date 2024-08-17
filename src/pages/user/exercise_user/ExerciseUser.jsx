import React, { useEffect, useState } from 'react';
import { getAllExercises } from '../../../apis/Api';
import { Link } from 'react-router-dom';
import './ExerciseUser.css';

const UserExercise = () => {
    const [exercises, setExercises] = useState([]);
    const [filteredExercises, setFilteredExercises] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState('All');

    useEffect(() => {
        getAllExercises().then((res) => {
            setExercises(res.data.data);
            setFilteredExercises(res.data.data); // Set initial filtered list
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleLevelChange = (e) => {
        const level = e.target.value;
        setSelectedLevel(level);
        if (level === 'All') {
            setFilteredExercises(exercises);
        } else {
            setFilteredExercises(exercises.filter(exercise => exercise.exerciseLevel === level));
        }
    };

    return (
        <div className='container mt-3'>
            <h2>Exercise Workouts</h2>
            
            <div className="filter-section mb-3">
                <label htmlFor="levelFilter" className="form-label">Filter by Level:</label>
                <select id="levelFilter" className="form-select" value={selectedLevel} onChange={handleLevelChange}>
                    <option value="All">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Amateur">Amateur</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Elite">Elite</option>
                </select>
            </div>

            <div className="exercise-cards mt-3">
                {
                    filteredExercises.map((singleExercise) => (
                        <div className="exercise-card" key={singleExercise._id}>
                            <img src={`http://localhost:5000/products/${singleExercise.exerciseThumbnail}`} alt='' className="exercise-card-img" />
                            <div className="exercise-card-body">
                                <h5 className="exercise-card-title">{singleExercise.exerciseName}</h5>
                                <p className="exercise-card-text">Time: {singleExercise.exerciseTime} min</p>
                                <p className="exercise-card-text">Calories: {singleExercise.exerciseCalories}</p>
                                <p className="exercise-card-text">Level: {singleExercise.exerciseLevel}</p>
                                <div className="exercise-card-actions">
                                    <Link to={`/exercise_details/${singleExercise._id}`} className="btn orange-btn btn-details">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UserExercise;
