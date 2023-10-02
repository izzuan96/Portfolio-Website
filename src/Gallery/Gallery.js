import React,{useEffect, useState} from 'react';
import './Gallery.css';
import image1 from '../images/aboutme.jpeg';
import image2 from '../images/msj2.jpeg';
import image3 from '../images/msj3.jpeg';
import image4 from '../images/msj1.jpeg';
import image5 from '../images/msj4.jpeg';
import image6 from '../images/msj5.jpeg';
import image7 from '../images/msj6.jpeg';
import image8 from '../images/msj7.jpeg';
import image9 from '../images/ntr.jpeg';
import image10 from '../images/ntr2.jpeg';
import image11 from '../images/ntr3.jpeg';
import image12 from '../images/ntr4.jpeg';
import image13 from '../images/bld.jpeg';
import image14 from '../images/gls.jpeg';
import image15 from '../images/tea.jpeg';


function Gallery() {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(5);
  const [currentSlide3, setCurrentSlide3] = useState(10);
  const images = [
      image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15
      // Add more image URLs as needed
  ];

    const prevSlide1 = () => {
      setCurrentSlide1((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const nextSlide1 = () => {
         setCurrentSlide1((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };


    const prevSlide2 = () => {
        setCurrentSlide2((prev) => (prev + 1  === 0 ? images.length - 1 : prev - 1));
    };
    const nextSlide2 = () => {
        setCurrentSlide2((prev) => (prev + 1  === images.length - 1 ? 0 : prev + 1));
    };
    


    const prevSlide3 = () => {
        setCurrentSlide3((prev) => (prev + 2  === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide3 = () => {
        setCurrentSlide3((prev) => (prev + 2 === images.length - 1 ? 0 : prev + 1));
    };

  useEffect(() => {
      const interval = setInterval(() => {
          nextSlide1();
      }, 7000); // Change slide every 7 seconds (7000 milliseconds)

      return () => {
          clearInterval(interval); // Clear the interval when the component unmounts
      };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide2();
    }, 7000); // Change slide every 7 seconds (7000 milliseconds)

    return () => {
        clearInterval(interval); // Clear the interval when the component unmounts
    };
}, []);
  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide3();
    }, 7000); // Change slide every 7 seconds (7000 milliseconds)

    return () => {
        clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
   <div className='gallery' id='gallery'>
    <h4>Gallery for display</h4>
    <p>I captured a stunning array of images using my smartphone, seamlessly blending the architectural wonders of towering buildings with the serene beauty of untouched nature. Each picture tells a unique story, showcasing the harmonious coexistence of human-made marvels and the unspoiled grace of the natural world, a testament to the beauty of our planet.</p>
    <div className='galleryContainer'>
      <div className='card1'>
        <button className='prev' onClick={prevSlide1}>Previous</button>
        <img src={images[currentSlide1]} alt={`Slide ${currentSlide1 + 1}`}></img>
        <button className='next' onClick={nextSlide1}>Next</button>
      </div>
      <div className='card2'>
      <button className='prev' onClick={prevSlide2}>Previous</button>
        <img src={images[currentSlide2]} alt={`Slide ${currentSlide2 + 2}`}></img>
        <button className='next' onClick={nextSlide2}>Next</button>
      </div>
      <div className='card3'>
        <button className='prev' onClick={prevSlide3}>Previous</button>
        <img src={images[currentSlide3]} alt={`Slide ${currentSlide3 + 3}`}></img>
        <button className='next' onClick={nextSlide3}>Next</button>
    </div>
   </div>
   </div>
  );
}

export default Gallery;
