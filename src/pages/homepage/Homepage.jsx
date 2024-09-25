import React, { useEffect, useState } from 'react';
import './Homepage.css';
import { paginationExercises, paginationMeals } from '../../apis/Api';
import ExerciseCard from '../../components/exercise_card/ExerciseCard';
import MealCard from '../../components/meal_card/MealCard';

const Homepage = () => {
    const [exercises, setExercises] = useState([]);
    const [exercisePage, setExercisePage] = useState(1);
    const [exerciseTotalPages, setExerciseTotalPages] = useState(1);

    const [meals, setMeals] = useState([]);
    const [mealPage, setMealPage] = useState(1);
    const [mealTotalPages, setMealTotalPages] = useState(1);

    useEffect(() => {
        fetchExercises(exercisePage);
    }, [exercisePage]); // Fetch exercises whenever exercisePage changes

    useEffect(() => {
        fetchMeals(mealPage);
    }, [mealPage]); // Fetch meals whenever mealPage changes

    const fetchExercises = async (page) => {
        try {
            const res = await paginationExercises(page);
            setExercises(res.data.data);
            setExerciseTotalPages(res.data.pagination.totalPages);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchMeals = async (page) => {
        try {
            const res = await paginationMeals(page);
            setMeals(res.data.data);
            setMealTotalPages(res.data.pagination.totalPages);
        } catch (error) {
            console.log(error);
        }
    };

    const handleExercisePageChange = (page) => {
        setExercisePage(page);
    };

    const handleMealPageChange = (page) => {
        setMealPage(page);
    };

    // Generate page numbers for exercises
    const exercisePageNumbers = [];
    for (let i = 1; i <= exerciseTotalPages; i++) {
        exercisePageNumbers.push(
            <li key={i} className={`page-item ${exercisePage === i && 'active'}`}>
                <button className="page-link" onClick={() => handleExercisePageChange(i)}>
                    {i}
                </button>
            </li>
        );
    }

    // Generate page numbers for meals
    const mealPageNumbers = [];
    for (let i = 1; i <= mealTotalPages; i++) {
        mealPageNumbers.push(
            <li key={i} className={`page-item ${mealPage === i && 'active'}`}>
                <button className="page-link" onClick={() => handleMealPageChange(i)}>
                    {i}
                </button>
            </li>
        );
    }

    return (
        <>
            <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide">
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img src="/assets/images/banner2.png" className="d-block w-100" alt="" />
                          <div className="carousel-caption d-none d-md-block">
                              <h5></h5>
                              <p></p>
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="/assets/images/banner1.jpg" className="d-block w-100" alt="..." />
                          <div className="carousel-caption d-none d-md-block">
                              <h5></h5>
                              <p></p>
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="/assets/images/banner3.jpg" className="d-block w-100" alt="..." />
                          <div className="carousel-caption d-none d-md-block">
                              <h5></h5>
                              <p></p>
                          </div>
                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
                <h2 className="mt-5">Featured Exercises</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {exercises.map((singleExercise) => (
                        <div key={singleExercise._id} className="col">
                            <ExerciseCard exerciseInformation={singleExercise} color={"orange"} />
                        </div>
                    ))}
                </div>

                {/* Exercise pagination */}
                <nav aria-label="Exercise Pagination">
                    <ul className="pagination justify-content-center mt-3">
                        <li className={`page-item ${exercisePage === 1 && 'disabled'}`}>
                            <button className="page-link" onClick={() => handleExercisePageChange(exercisePage - 1)}>Previous</button>
                        </li>
                        {exercisePageNumbers}
                        <li className={`page-item ${exercisePage === exerciseTotalPages && 'disabled'}`}>
                            <button className="page-link" onClick={() => handleExercisePageChange(exercisePage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>

                <h2 className="mt-5">Featured Meal Plans</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {meals.map((singleMeal) => (
                        <div key={singleMeal._id} className="col">
                            <MealCard mealInformation={singleMeal} color={"orange"} />
                        </div>
                    ))}
                </div>

                {/* Meal pagination */}
                <nav aria-label="Meal Pagination">
                    <ul className="pagination justify-content-center mt-3">
                        <li className={`page-item ${mealPage === 1 && 'disabled'}`}>
                            <button className="page-link" onClick={() => handleMealPageChange(mealPage - 1)}>Previous</button>
                        </li>
                        {mealPageNumbers}
                        <li className={`page-item ${mealPage === mealTotalPages && 'disabled'}`}>
                            <button className="page-link" onClick={() => handleMealPageChange(mealPage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Homepage;
