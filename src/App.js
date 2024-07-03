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
import ProfilePage from './pages/Profile/Profilepage';
import AdminRoutes from './protected_routes/AdminRoutes';
import UserRoutes from './protected_routes/UserRoutes';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path= '/' element={<Homepage/>}/>
        <Route path= '/register' element={<Registerpage/>}/>
        <Route path= '/login' element={<Loginpage/>}/>
        <Route path= '/contact-us' element={<ContactUs/>}/>

        {/* Exercise Admin routes */}
        <Route element={<AdminRoutes/>}>
        <Route path='/admin/exercise' element={<ExerciseAdmin/>} />
        <Route path='/admin/update_exercise/:id' element={<UpdateExercise/>} />

        {/* Meal Plan Admin routes */}
        <Route path='/admin/meal' element={<MealplanAdmin/>} />
        <Route path='/admin/update_meal/:id' element={<UpdateMeal/>} />
        </Route>

        <Route element={<UserRoutes/>}>
          <Route path='/profile/:id' element={<ProfilePage/>}/>
        </Route>

      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
