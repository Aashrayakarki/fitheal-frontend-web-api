import React, { useState } from 'react';
import './ExerciseCard.css';
import { FaBurn, FaClock, FaInfoCircle } from 'react-icons/fa';

const ExerciseCard = ({ exerciseInformation, color }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    
    return (
        <div>
            <div className="card custom-card" style={{ width: '18rem' }}>
                <span style={{ backgroundColor: color }} className='badge position-absolute top-0'>
                    {exerciseInformation.exerciseLevel}
                </span>
                <img 
                    src={`http://localhost:5000/products/${exerciseInformation.exerciseThumbnail}`} 
                    className="card-img-top custom-card-img" 
                    alt={exerciseInformation.exerciseName}
                />
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">{exerciseInformation.exerciseName}</h5>
                        <h5 className="card-title text-danger"><FaBurn/> {exerciseInformation.exerciseCalories} cal</h5>
                    </div>
                    <p className="card-text"><FaClock/> {exerciseInformation.exerciseTime} minutes</p>
                    <button className="btn btn-outline-dark w-100" onClick={handleShowModal}>
                        <FaInfoCircle/> Details
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" aria-labelledby="exerciseVideoModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="exerciseVideoModalLabel" className="modal-title">{exerciseInformation.exerciseName} Video</h5>
                            </div>
                            <div className="modal-body">
                                <video width="100%" controls>
                                    <source src={`http://localhost:5000/products/${exerciseInformation.exerciseVideo}`} type="video/mp4" />
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

export default ExerciseCard;
