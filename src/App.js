import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.jpeg';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import twitter from './assets/twitter.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import useHistory
import Forgot from './components/forgot';
import Register from './components/Register';
import Home from './components/homepage';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              {/* logo */}
              <div className='logo-container'>
                <h2 className="title">EduKada</h2>
                <img src={logo} alt='edukadalogo' style={{ height: '355px' }} />
              </div>
              {/* form */}
              <form onSubmit={handleLogin} className="form">
                <div className="form-group">
                  <input
                    placeholder='Email Address'
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder='Password'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="Password"
                  />
                </div>
                <div className='RememberMe'>
                  <label>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember me
                  </label>
                  {/* forgot password */}
                  <Link to="/forgot" className="forgot-password">Forgot Password</Link>
                </div>
                  <Link to="/homepage" className="homepage-link">
                    <button type="submit" className="submit-button">Sign In</button>
                  </Link>
                <div className="NoAccount">
                  <p>Don't have an account?</p>
                </div>
                <Link to="/register" className="Register-button">
                  <button type="button" className="Register">Register</button>
                </Link>
                <div className='Logo'>
                  <img src={facebook} alt='facebook' style={{ height: '36px', weight: '38px' }} />
                  <img src={google} alt='google' style={{ height: '36px', weight: '38px' }} />
                  <img src={twitter} alt='twitter' style={{ height: '36px', weight: '38px' }} />
                </div>
              </form>
            </>
          } />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/explore" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
