import React, {useState} from 'react';
import Login from './components/Login';
import StockVisualizer from './components/StockVisualizer';
import './App.css';

function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = (username, password) => {
    if(username && password){
      setIsLoggedIn(true);
    }
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return(
    <div className={`App ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
      <div className='left-panel'>
        <div className='login-container'>
          <Login onLogin={handleLogin} onLogout={handleLogOut}/>
        </div>
      </div>
      <div className='right-panel'>
        <StockVisualizer isLoggedIn={isLoggedIn}/>
      </div>
    </div>
  );
}

export default App;