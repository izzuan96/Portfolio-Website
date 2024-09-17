import React from 'react'
import './Home.css';
import Profile from '../profile/profile';
import Work from '../WorkExperiences/work';
import TechStackCarousel from '../TechStackCarousel/TechStackCarousel';
import SocialLinks from '../Sociallinks/SocialLinks';



function Home() {
  return (
    <div className='home'>
              <Profile/>
              <Work/>
              <TechStackCarousel />
              <SocialLinks />
    </div>
  )
}
export default Home;
