import React from 'react';
import './App.css';
import logo from './holberton_logo.png';

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
      </div>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
