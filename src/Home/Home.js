import React from 'react';
import './Home.css';
import Profile from '../profile/profile';
import Work from '../WorkExperiences/work';
import TechStackCarousel from '../TechStackCarousel/TechStackCarousel';
import SocialLinks from '../Sociallinks/SocialLinks';
import PreviewProjectsGrid from '../PreviewProjectsGrid/PreviewProjectsGrid'; // Use the correct import

function Home() {
  return (
    <div className='home'>
      <Profile />
      <Work />
      <TechStackCarousel />
      <SocialLinks />
      <PreviewProjectsGrid /> 
    </div>
  );
}

export default Home;
