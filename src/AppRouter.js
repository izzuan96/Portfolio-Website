import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import AboutMePage from './pages/AboutMePage'; // Import the AboutMePage component

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element = {<AboutMe/>}/>
        <Route path="/about-me-page" element = {<AboutMePage />} />
    </Routes>
  );
}

export default AppRouter;
