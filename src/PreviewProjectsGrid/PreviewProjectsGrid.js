import React from 'react';
import Title from '../Title/Title';
import PreviewProjectCard from '../PreviewProjectCard/PreviewProjectCard';
import projectImage from '../images/appleWebsite.png'; // Import the image or ensure it's correctly referenced
import './PreviewProjectsGrid.css'

const projects = [
  { id: 1, image: projectImage, title: 'Project 1', isLocked: false, projectLink: 'https://project2.com' },
  { id: 2, image: projectImage, title: 'Project 2', isLocked: true, projectLink: '' },
  { id: 3, image: projectImage, title: 'Project 3', isLocked: true, projectLink: '' },

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
