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
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><NavBar/><Home/></>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
