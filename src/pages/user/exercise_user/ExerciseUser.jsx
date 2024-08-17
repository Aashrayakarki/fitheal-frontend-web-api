import React, { useState, useEffect } from 'react';
import ExerciseCard from '../../../components/exercise_card/ExerciseCard';
import { getUserExercises } from '../../../apis/Api';

const ExerciseUser = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await getUserExercises(); 
                if (response.data.success) {
                    setExercises(response.data.data);
                } else {
                    alert('Failed to fetch exercises');
                }
            } catch (error) {
                console.error('Error fetching exercises:', error);
                alert('An error occurred');
            }
        };

        fetchExercises();
    }, []);

    return (
        <div className="container">
            <h1>My Exercises</h1>
            <div className="row">
                {exercises.map(exercise => (
                    <div className="col-md-4" key={exercise._id}>
                        <ExerciseCard exerciseInformation={exercise} color="#f0f0f0" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExerciseUser;
