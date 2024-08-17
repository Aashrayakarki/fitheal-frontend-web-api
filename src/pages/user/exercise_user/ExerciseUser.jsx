import React, { useEffect, useState } from 'react';
import { getAllExercises } from '../../../apis/Api';
import { Link } from 'react-router-dom';
import { FaBurn, FaClock, FaFilter, FaInfoCircle, FaTimes } from 'react-icons/fa';
import './ExerciseUser.css';
import { FaStairs } from 'react-icons/fa6';

const UserExercise = () => {
    const [exercises, setExercises] = useState([]);
    const [filteredExercises, setFilteredExercises] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getAllExercises().then((res) => {
            setExercises(res.data.data);
            setFilteredExercises(res.data.data); 
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

    const handleShowModal = (exercise) => {
        setSelectedExercise(exercise);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedExercise(null);
    };

    return (
        <div className='container mt-3'>
            <div className="filter-section mb-3">
                <label htmlFor="levelFilter" className="form-label">
                    <FaFilter /> Filter Exercises by Level:
                </label>
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
                                <p className="exercise-card-text"><FaClock/> Time: {singleExercise.exerciseTime} min</p>
                                <p className="exercise-card-text"><FaBurn/> Calories: {singleExercise.exerciseCalories}</p>
                                <p className="exercise-card-text"><FaStairs/> Level: {singleExercise.exerciseLevel}</p>
                                <div className="exercise-card-actions">
                                    <button 
                                        className="btn orange-btn btn-details" 
                                        onClick={() => handleShowModal(singleExercise)}
                                    >
                                        <FaInfoCircle /> Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Modal */}
            {/* Modal */}
{showModal && selectedExercise && (
    <div className="modal show d-block" tabIndex="-1" role="dialog" aria-labelledby="exerciseVideoModalLabel">
        <div className="modal-dialog custom-modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 id="exerciseVideoModalLabel" className="modal-title">{selectedExercise.exerciseName} Video</h5>
                </div>
                <div className="modal-body">
                    <video width="100%" controls>
                        <source src={`http://localhost:5000/products/${selectedExercise.exerciseVideo}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default UserExercise;
