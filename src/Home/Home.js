import React from 'react';
import './Home.css';
import Profile from '../profile/profile';
import Work from '../WorkExperiences/work';
import TechStackCarousel from '../TechStackCarousel/TechStackCarousel';
import SocialLinks from '../Sociallinks/SocialLinks';
import PreviewProjectsGrid from '../PreviewProjectsGrid/PreviewProjectsGrid'; 
import Separator from '../Separator/Separator';

function Home() {
  return (
    <div className='home'>
      <Profile />
      <Separator nextBgColor="#E1F3FB" height="auto" waveType="wave2" />
      <Work />
      <Separator nextBgColor="#CDC2A5" height="auto" waveType="wave2" />
      <TechStackCarousel />
      <SocialLinks />
      <PreviewProjectsGrid />
    </div>
  );
}

export default Home;
