import './App.css';
import Login from './components/Login';
import Quote from './components/Quote';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/quote" element={<Quote/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/:userid" element={<UserProfile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
