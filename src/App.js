import './App.css';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Registerpage from './pages/register/Registerpage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Loginpage from './pages/login/Loginpage';
import Navbar from './components/Navbar/Navbar';
import Footer from './pages/footer/Footer';
import ContactUs from './pages/contactus/ContactUs';
import UpdateExercise from './pages/admin/update_exercise/UpdateExercise';
import ExerciseAdmin from './pages/admin/exercise_admin/ExerciseAdmin';
import MealplanAdmin from './pages/admin/meal_plan_admin/MealplanAdmin';
import UpdateMeal from './pages/admin/update_meal/UpdateMeal';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path= '/home' element={<Homepage/>}/>
        <Route path= '/register' element={<Registerpage/>}/>
        <Route path= '/login' element={<Loginpage/>}/>
        <Route path= '/contact-us' element={<ContactUs/>}/>

        {/* Exercise Admin routes */}
        <Route path='/admin/exercise' element={<ExerciseAdmin/>} />
        <Route path='/admin/update/:id' element={<UpdateExercise/>} />

        {/* Meal Plan Admin routes */}
        <Route path='/admin/meal' element={<MealplanAdmin/>} />
        <Route path='/admin/update/:id' element={<UpdateMeal/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
