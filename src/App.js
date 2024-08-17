import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Registerpage from './pages/register/Registerpage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Loginpage from './pages/login/Loginpage';
import Footer from './pages/footer/Footer';
import ContactUs from './pages/contactus/ContactUs';
import UpdateExercise from './pages/admin/update_exercise/UpdateExercise';
import ExerciseAdmin from './pages/admin/exercise_admin/ExerciseAdmin';
import MealplanAdmin from './pages/admin/meal_plan_admin/MealplanAdmin';
import UpdateMeal from './pages/admin/update_meal/UpdateMeal';
import ProfilePage from './pages/Profile/Profilepage';
import AdminRoutes from './protected_routes/AdminRoutes';
import ForgotPassword from './pages/forgot_password/ForgotPassword';
import UpdateProfile from './pages/Profile/UpdateProfile';
import Navbar from './components/Navbar/Navbar';
import UserNavbar from './components/user_navbar/UserNavbar';
import MyExercise from './pages/MyExercise/MyExercise';

function App() {
  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem('userData'));

  // Define which navbar should be displayed based on user's admin status
  const isAdmin = user && user.isAdmin;

  return (
    <Router>
      <ToastContainer />
      
      {/* Render the appropriate navbar based on the user's admin status */}
      {isAdmin ? <Navbar /> : <UserNavbar />}
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/get_single_user/:_id' element={<ProfilePage />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/update_profile/:_id' element={<UpdateProfile />} />
        <Route path='/my_exercise' element={<MyExercise />} />

        {/* Exercise Admin routes */}
        <Route element={<AdminRoutes />}>
          <Route path='/admin/exercise' element={<ExerciseAdmin />} />
          <Route path='/admin/update_exercise/:id' element={<UpdateExercise />} />

          {/* Meal Plan Admin routes */}
          <Route path='/admin/meal' element={<MealplanAdmin />} />
          <Route path='/admin/update_meal/:id' element={<UpdateMeal />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
