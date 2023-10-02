import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Work from './Work/Work';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Item from './Item/Item';
import AboutMePage from './pages/AboutMePage';
import AppRouter from './AppRouter';
import Home from './Home/Home';


function App() {
  return (
  <div className="App" id='App'>
     <Home/>
  </div>
  );
}

export default App;
