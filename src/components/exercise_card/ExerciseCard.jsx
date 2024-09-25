import './ExerciseCard.css';
import { FaBurn, FaClock } from 'react-icons/fa';

const ExerciseCard = ({ exerciseInformation, color }) => {    
    return (
        <div>
            <div className="card custom-card" style={{ width: '18rem' }}>
                <span style={{ backgroundColor: color }} className='badge exercise-level-badge position-absolute top-0'>
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
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;
