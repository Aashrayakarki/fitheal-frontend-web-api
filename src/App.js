import './App.css';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Registerpage from './pages/register/Registerpage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Loginpage from './pages/login/Loginpage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path= '/' element={<Homepage/>}/>
        <Route path= '/register' element={<Registerpage/>}/>
        <Route path= '/login' element={<Loginpage/>}/>
      </Routes>
    </Router>
  );
}
export default App;
