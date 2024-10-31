import React from 'react';
import './Home.css';
import Profile from '../profile/profile';
import Work from '../WorkExperiences/work';
import TechStackCards from '../TechStackCards/TechStackCards';
import SocialLinks from '../Sociallinks/SocialLinks';
import PreviewProjectsGrid from '../PreviewProjectsGrid/PreviewProjectsGrid'; 
import Separator from '../Separator/Separator';

function Home() {
  return (
    <div className='home'>
      <Profile />
      <Separator gradientDegree="45deg"  height="auto" waveType="wave2" startColor="rgba(54, 136, 222, 0.9)" endColor="rgba(41, 67, 111, 1)" className="custom-class" darkMode={false} />
      <Work />
      <TechStackCards />
      <SocialLinks />
      <PreviewProjectsGrid />
    </div>
  );
}

export default Home;
