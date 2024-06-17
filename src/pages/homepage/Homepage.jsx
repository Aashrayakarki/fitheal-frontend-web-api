import React from 'react'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <header className='hero-section'>
        <div className='hero-content'>
          <h1>Welcome to FitHeal</h1>
          <img src='assets/images/banner2.png' alt='FitHeal Logo' />
          <p>Your ultimate destination for fitness and wellness</p>
        </div>
      </header>
      
      <section className='features-section'>
        <h2>Our Features</h2>
        <div className='features'>
          <div className='feature'>
            <img src='assets/icons/fitness.ico' alt='Workouts' />
            <h3>Personalized Workouts</h3>
            <p>Customized workout plans tailored to your goals.</p>
          </div>
          <div className='feature'>
            <img src='assets/icons/nutrition.ico' alt='Nutrition' />
            <h3>Nutrition Guides</h3>
            <p>Healthy and delicious meal plans to fuel your body.</p>
          </div>
          <div className='feature'>
            <img src='assets/icons/progress.ico' alt='Progress' />
            <h3>Track Your Progress</h3>
            <p>Monitor your fitness journey and see results.</p>
          </div>
        </div>
      </section>

      <section className='workouts-section'>
        <h2>Featured Workouts</h2>
        <div className='workouts'>
          <div className='workout'>
            <img src='assets/images/workout1.jpg' alt='Workout 1' />
            <h3>Full Body Blast</h3>
            <p>A high-intensity workout to tone your entire body.</p>
          </div>
          <div className='workout'>
            <img src='assets/images/workout2.jpg' alt='Workout 2' />
            <h3>Yoga Flow</h3>
            <p>Relax and strengthen with this calming yoga routine.</p>
          </div>
          <div className='workout'>
            <img src='assets/images/workout3.jpg' alt='Workout 3' />
            <h3>Cardio Burn</h3>
            <p>Boost your heart rate and burn calories fast.</p>
          </div>
        </div>
      </section>

      <section className='nutrition-section'>
        <h2>Nutrition Diets</h2>
        <div className='nutrition'>
          <div className='diet'>
            <img src='assets/images/meal1.png' alt='Diet 1' />
            <h3>Mediterranean diet</h3>
            <p>Green beans, tomatoes and eggs.</p>
          </div>
          <div className='diet'>
            <img src='assets/images/meal2.png' alt='Diet 2' />
            <h3>Vegan Diet</h3>
            <p>Healthy balanced vegetarian food.</p>
          </div>
          <div className='diet'>
            <img src='assets/images/meal3.png' alt='Diet 3' />
            <h3>Keto Diet</h3>
            <p>Fried eggs and salmon.</p>
          </div>
        </div>
      </section>

      <section className='cta-section'>
        <h2>Ready to Get Started?</h2>
        <img src='assets/images/fitheal.png' alt='FitHeal Logo' />
        <p className='mt-3'>Join us today and start your journey to a healthier, fitter you.</p>
        <a href='/register' className='cta-button mt-3'>GET STARTED NOW</a>
      </section>
    </div>
  )
}

export default Homepage
