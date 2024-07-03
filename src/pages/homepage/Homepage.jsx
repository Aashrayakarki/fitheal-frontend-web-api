import React, { useEffect, useState } from 'react'
import './Homepage.css'
import { getAllExercises } from '../../apis/Api'
import ExerciseCard from '../../components/exercise_card/ExerciseCard'

const Homepage = () => {

  const [exercises, setExercises] = useState([])

  useEffect(() => {
      getAllExercises().then((res) => {
          //response: res.data.exercises
          setExercises(res.data.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])

  return (
      <>
          <div className='container'>
              <div id="carouselExampleCaptions" class="carousel slide">
                  <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src="/assets/images/banner2.png" class="d-block w-100" alt="" />
                          <div class="carousel-caption d-none d-md-block">
                              <h5></h5>
                              <p></p>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..." />
                          <div class="carousel-caption d-none d-md-block">
                              <h5>Second slide label</h5>
                              <p>Some representative placeholder content for the second slide.</p>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <img src="https://images.pexels.com/photos/5463180/pexels-photo-5463180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..." />
                          <div class="carousel-caption d-none d-md-block">
                              <h5>Third slide label</h5>
                              <p>Some representative placeholder content for the third slide.</p>
                          </div>
                      </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
              </div>
              <h2 className="mt-5">Featured Exercises</h2>
              <div class="row row-cols-1 row-cols-md-4 g-4">
                  {
                      exercises.map((singleExercise) => (
                          <div class="col">
                              <ExerciseCard exerciseInformation={singleExercise} color={"orange"}/>
                          </div>
                      )
                      )}
              </div>

              <h2 className="mt-5">Featured Meal Plans</h2>
              <div class="row row-cols-1 row-cols-md-4 g-4">
                  {
                      meals.map((singleMeal) => (
                          <div class="col">
                              <MealCard mealInformation={singleMeal} color={"orange"}/>
                          </div>
                      )
                      )}
              </div>
          </div>
      </>
  )
}

export default Homepage;