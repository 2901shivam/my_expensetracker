import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SignUp from './components/Pages/SignUp';
import{BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from './components/Pages/AboutUs';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Profile from './components/Pages/Profile';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' exact element={<AboutUs/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
