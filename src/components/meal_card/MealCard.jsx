import React from 'react';

const MealCard = ({ mealInformation, color }) => {
    return (
        <div className="card custom-card" style={{ width: '18rem' }}>
            {/* <span style={{ backgroundColor: color }} className='badge position-absolute top-0'>{mealInformation.exerciseLevel}</span> */}
            <img 
                src={`http://localhost:5000/products/${mealInformation.mealImage}`} 
                className="card-img-top custom-card-img" 
                alt={mealInformation.mealName}
            />
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{mealInformation.mealName}</h5>
                    <h5 className="card-title text-danger">{mealInformation.mealCalories} cal</h5>
                </div>
                <p className="card-text">{mealInformation.mealTime.slice(0, 40)} minutes</p>
                <a href="#" className="btn btn-outline-dark w-100">Go somewhere</a>
            </div>
        </div>
    );
};

export default MealCard;
