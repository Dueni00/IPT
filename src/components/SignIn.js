import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.jpeg'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import twitter from './assets/twitter.png'



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
    <div className="App">
{/* logo */}
<div className='logo-container'>
      <h2 className="title">EduKada</h2>
      <img src={logo} alt='edukadalogo' style={{height:'355px'}}/>
      
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

          <a href=''>Forgot Password</a>
          
          
        </div>
        
        <button type="submit" className="submit-button">Sign In</button>
        <div className="NoAccount">

        <p>Don't have an account?</p>

      
        
        
        </div>
        <button type="Register" className="Register">Register</button>
        <div className='Logo'>
        <img src={facebook} alt='facebook' style={{height:'36px',weight:'38px'}}/>
        <img src={google} alt='google' style={{height:'36px',weight:'38px'}}/>
        <img src={twitter} alt='twitter' style={{height:'36px',weight:'38px'}}/>

        </div>

      </form>
    </div>

  );
}

export default App;
