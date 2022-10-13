import './App.css';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import LoginPage from './pages/Loginpage';
import SignupPage from './pages/Signuppage';
import HomePage from './pages/Homepage';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>

      </Router>
           
           

    </div>
  );
}

export default App;
