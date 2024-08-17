import React, { useEffect, useState } from 'react';
import { getAllMeals } from '../../../apis/Api';
import MealUserCard from '../../../components/user_meal_card/MealUserCard';
import './MealUser.css';

const MealUser = () => {
    const [meals, setMeals] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getAllMeals().then((res) => {
            setMeals(res.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container mt-3'>
            <div className="search-bar mb-3">
                <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search meals" 
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </form>
            </div>
            <div className='meal-cards mt-3'>
                {
                    meals.map((meal) => (
                        <MealUserCard key={meal._id} mealInformation={meal} />
                    ))
                }
            </div>
        </div>
    );
};

export default MealUser;
