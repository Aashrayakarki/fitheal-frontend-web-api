import React from 'react'

const ExerciseCard = ({exerciseInformation, color}) => {
    return (
        <>
            <div class="card" style= {{width: '18rem'}}>
                <span style={{backgroundColor: color}} className='badge position-absolute top-0'>{exerciseInformation.exerciseLevel}</span>
                <img src={`http://localhost:5000/products/${exerciseInformation.exerciseVideo}`} className="card-img-top" alt="..." />
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                    <h5 class="card-title">{exerciseInformation.exerciseName}</h5>
                    <h5 class="card-title text-danger">NPR. {exerciseInformation.exerciseTime}</h5>
                    </div>
                    <p class="card-text">{exerciseInformation.exerciseCalories.slice(0, 40)}</p>
                    <a href="#" class="btn btn-outline-dark w-100">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default ExerciseCard;
