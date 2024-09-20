import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App" id="App">
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className={darkMode ? 'sun-icon' : 'moon-icon'} />
      </button>
      <Home />
    </div>
  );
}

export default App;
