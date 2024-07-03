import React from 'react';
import './ExerciseCard.css';

const ExerciseCard = ({ exerciseInformation, color }) => {
    return (
        <div className="card custom-card" style={{ width: '18rem' }}>
            <span style={{ backgroundColor: color }} className='badge position-absolute top-0'>{exerciseInformation.exerciseLevel}</span>
            <img 
                src={`http://localhost:5000/products/${exerciseInformation.exerciseVideo}`} 
                className="card-img-top custom-card-img" 
                alt={exerciseInformation.exerciseName}
            />
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{exerciseInformation.exerciseName}</h5>
                    <h5 className="card-title text-danger">{exerciseInformation.exerciseCalories} cal</h5>
                </div>
                <p className="card-text">{exerciseInformation.exerciseTime.slice(0, 40)} minutes</p>
                <a href="#" className="btn btn-outline-dark w-100">Details</a>
            </div>
        </div>
    );
};

export default ExerciseCard;
