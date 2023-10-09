import React from 'react'
import './Home.css';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import myPicture from '../images/izzuan.jpeg';
import image1 from '../images/js.png';
import image2 from '../images/html.png';
import image3 from '../images/css.png';
import image4 from '../images/bootstrap.png';



function Home() {

  const imageTools = [
    {title: image1, des:"javascript"},
    {title: image2, des:"html"},
    {title: image3, des:"css"},
    {title: image4, des:"bootstrap"}
  ];

  return (
    <>
    <div className='home'>
        <Header/>
          <div className='homeWrap'>
          <div className='homeContainer'>
            <h1>Front-End React Developer</h1>
            <p>Hi, I'm Izzuan Zawawi. A passionate Front-End React Developer. Turning Lines of Code into Reality!</p>
          </div>
          <div className='homePicture'>
            <img src={myPicture} alt='my'></img>
          </div>
        </div>
        <div className='toolList' >
              <p>Tech stack |</p>
              {imageTools.map((imageTool) => (
              <img src={imageTool.title} alt={imageTool.des}>
              </img>       
              ))}
        </div>
        <AboutMe />
        <Gallery/>
        {/* <Work /> */}
        {/* <Item /> */}
 
        <Contact />
        {/* Add other components and content as needed */}
    </div>
    </>
  )
}
export default Home;
