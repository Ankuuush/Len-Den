import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar';
import HomeState from './Context/Home/HomeState';
import CurrentItemDetails from './Components/Home/CurrentItemDetails';
import Form from './Components/Application Form/Form';
import MyApplications from './Components/MyApplications/MyApplications';
import RepayedLoanDetails from './Components/MyApplications/RepayedLoanDetails';
function App() {
  return (
    <HomeState>
    <Router>
      <Routes>
        <Route path='/' element={<><NavBar/><Home/></>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/currentLoan' element={<><NavBar/><CurrentItemDetails/></>}/>
        <Route path='/apply' element={<><NavBar/><Form/></>}/>
        <Route path='/applications' element={<><NavBar/><MyApplications/></>}/>
        <Route path='/repayeddetails' element={<><NavBar/><RepayedLoanDetails/></>}/>
      </Routes>
    </Router>
    </HomeState>
  );
}

export default App;
