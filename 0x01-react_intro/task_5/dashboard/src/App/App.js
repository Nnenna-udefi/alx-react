import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils'

function App() {
  const isIndex = true;

  const handleLabelClick = (idInput) => {
    const input = document.getElementById(idInput);
    if (input) {
      input.focus();
    }
  };
  
  return (
    <div>
      <header className='App-header'>
        <img src={logo} alt='Holberton logo'></img>
        <h1>School dashboard</h1>
      </header>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" onClick={() => handleLabelClick('email')}>
          Email Address:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password" onClick={() => handleLabelClick('password')}>
          Password:</label>
        <input type="password" name="password" id="password" />
        <button>OK</button>
      </div>

      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      </footer>
    </div>
  );
}

export default App;
