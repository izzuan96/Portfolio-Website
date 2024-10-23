import React from 'react';
import Title from '../Title/Title';
import PreviewProjectCard from '../PreviewProjectCard/PreviewProjectCard';
import apple from '../images/appleWebsite.png'; 
import wedding from '../images/wedding.png';// Import the image or ensure it's correctly referenced
import './PreviewProjectsGrid.css'

const projects = [
  { id: 1, image: wedding, title: 'Wedding Invitation', isLocked: false, projectLink: 'https://izzuanzawawi.com/iwenaz/' },
  { id: 2, image: apple, title: 'Epal', isLocked: true, projectLink: 'https://project2.com' },
  

  // Add more projects as needed
];

const PreviewProjectsGrid = () => {
  return (
    <>
      <div className="project-wrap">
        <Title text="Sneak Peek Central: Future Projects in the Spotlight" className="custom-class" color="#ffff" />
        <div className="projects-grid-container">
          {projects.map((project) => (
            <PreviewProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              isLocked={project.isLocked}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PreviewProjectsGrid;
