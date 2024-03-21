// App.js
import React from 'react';
import './App.css';
import logo from './holberton_logo.png';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-content">
          <img src={logo} className="App-logo" alt="Holberton logo" />
          <h1>School dashboard</h1>
        </div>
        <div className="Header-Line"></div>
      </header>
      <div className="App-body">
        <p className="App-login">Login to access the full dashboard</p>
        {/* We have added the new tags and input fields here */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="button">OK</button>
      </div>
      <footer className="App-footer">
        {/* We continue to use the utility functions to set the year and the footer text */}
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
