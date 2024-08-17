import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllMeals, searchMeal } from '../../../apis/Api';
import './MealUser.css'; // Ensure you have the appropriate styles

const MealUser = () => {
    const [meals, setMeals] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const res = searchQuery
                    ? await searchMeal(searchQuery)
                    : await getAllMeals();
                setMeals(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMeals();
    }, [searchQuery]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container mt-3'>
            <h2>Available Meal Plans</h2>
            <form className="d-flex mb-3" role="search" onSubmit={handleSearchSubmit}>
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search for meals" 
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </form>
            <div className='meal-cards'>
                {
                    meals.map((singleMeal) => (
                        <div className="meal-card" key={singleMeal._id}>
                            <img src={`http://localhost:5000/products/${singleMeal.mealImage}`} alt='' className="meal-card-img"/>
                            <div className="meal-card-body">
                                <h5 className="meal-card-title">{singleMeal.mealName}</h5>
                                <p className="meal-card-text">Time: {singleMeal.mealTime} min</p>
                                <p className="meal-card-text">Calories: {singleMeal.mealCalories}</p>
                                <p className="meal-card-text">Proteins: {singleMeal.mealProteins}</p>
                                <p className="meal-card-text">Carbs: {singleMeal.mealCarbs}</p>
                                <div className="meal-card-actions">
                                    <Link to={`/meal_details/${singleMeal._id}`} className="btn orange-btn btn-details">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MealUser;
