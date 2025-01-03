import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-project-btn">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;

