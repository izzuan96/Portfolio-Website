import React, { useState } from 'react';
import './TechStackCards.css';

const techStackCategories = [
  { category: 'All', items: [] },
  {
    category: 'Frontend',
    items: [
      { name: 'React', iconClass: 'devicon-react-original colored' },
      { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
      { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
      { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
      { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'PHP', iconClass: 'devicon-php-plain colored' },
      { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
      { name: 'Python', iconClass: 'devicon-python-plain colored' },
    ]
  },
  {
    category: 'Integration',
    items: [
      { name: 'Axios', iconClass: 'devicon-axios-plain colored' },
      { name: 'Leaflet.js', iconClass: 'devicon-leaflet-plain colored' },
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'GitHub', iconClass: 'devicon-github-original colored' },
      { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
      // { name: 'Netlify', iconClass: 'devicon-netlify-plain colored' },
      { name: 'GitHub Actions', iconClass: 'devicon-github-original colored' },
    ]
  }
];

// Populate All category dynamically
techStackCategories[0].items = techStackCategories
  .slice(1)
  .flatMap(section =>
    section.items.map(item => ({ ...item, category: section.category }))
  );

const TechStackCards = ({ darkMode }) => {
  const [filter, setFilter] = useState('All');
  const displayedItems = techStackCategories.find(s => s.category === filter).items;

  return (
    <div className={`tech-wrapper ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="tech-title">Tech Stack</h2>
      <div className="tech-filters">
        {techStackCategories.map((sec, idx) => (
          <button
            key={idx}
            className={filter === sec.category ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(sec.category)}
          >
            {sec.category}
          </button>
        ))}
      </div>
      <div className="tech-grid">
        {displayedItems.map((tech, idx) => (
          <div className="tech-card" key={idx}>
            <i className={`tech-icon ${tech.iconClass}`}></i>
            <div className="tech-label">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCards;
