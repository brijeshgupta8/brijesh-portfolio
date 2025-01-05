
import React, { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';  // Correct import

import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';

const App = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Ecommerce Sales Dashboard Analysis',
      description: 'An Interactive Power BI dashboard analyzes sales performance and provides insights into various metrics like profit, sales quantity, and customer behavior. It includes interactive filters for deeper data exploration.',
      image: '/images/sales_dashboard_preview.png',
      githubLink: 'https://github.com/brijeshgupta8/Ecommerce-sales-dashboard',
    },
    {
      id: 2,
      title: 'Sales Dashboard Analysis',
      description: 'A dashboard for visualizing sales data using Tableau Deserunt velit cillum nisi Lorem commodo aliqua amet qui do velit. Laborum velit exercitation consequat non veniam consectetur dolor.Est ullamco ut voluptate elit. Culpa ipsum qui est duis ',
      image: '/images/sales_dashboard.png',
      githubLink: 'https://github.com/yourusername/sales-dashboard',
    },
    {
      id: 3,
      title: 'Sales Dashboard Analysis',
      description: 'A dashboard for visualizing sales data using Tableau Deserunt velit cillum nisi Lorem commodo aliqua amet qui do velit. Laborum velit exercitation consequat non veniam consectetur dolor.Est ullamco ut voluptate elit. Culpa ipsum qui est duis ',
      image: '/images/sales_dashboard.png',
      githubLink: 'https://github.com/yourusername/sales-dashboard',
    },
    {
      id: 4,
      title: 'Customer Segmentation',
      description: 'Machine learning project for segmenting customers based on purchasing behavior Fugiat qui eu mollit duis pariatur tempor irure aliqua mollit non elit occaecat esse incididunt. Reprehenderit sunt aliqua culpa anim excepteur magna deserunt non .',
      image: '/images/customer_segmentation.png',
      githubLink: 'https://github.com/yourusername/customer-segmentation',
    },
    {
      id: 5,
      title: 'Sales Dashboard Analysis',
      description: 'A dashboard for visualizing sales data using Tableau Deserunt velit cillum nisi Lorem commodo aliqua amet qui do velit. Laborum velit exercitation consequat non veniam consectetur dolor.Est ullamco ut voluptate elit. Culpa ipsum qui est duis ',
      image: '/images/sales_dashboard.png',
      githubLink: 'https://github.com/yourusername/sales-dashboard',
    },
    {
      id: 6,
      title: 'Sales Dashboard Analysis',
      description: 'A dashboard for visualizing sales data using Tableau Deserunt velit cillum nisi Lorem commodo aliqua amet qui do velit. Laborum velit exercitation consequat non veniam consectetur dolor.Est ullamco ut voluptate elit. Culpa ipsum qui est duis ',
      image: '/images/sales_dashboard.png',
      githubLink: 'https://github.com/brijeshgupta8/QR-Code-Management',
    }
  ]);

  return (
    <div className="App">
      <header className="header">
        <h1>Hi, I'm BRIJESH GUPTA</h1>
        <nav>
          <a href="#about"><b>ABOUT</b></a>
          <a href="#projects"><b>PROJECTS</b></a>
          <a href="#contact"><b>CONTACT</b></a>
        </nav>
      </header>

      <section id="about" className="about">
        <div className="about-me-container">
          <h2>About Me</h2>
          <p>
            <b>Hello! I'm Brijesh Gupta, a passionate Data Analyst with a strong foundation in Python, SQL, Excel, and Power BI. I recently graduated with MCA from a central university, named Pondicherry University and am excited to apply my skills in data analysis to solve real-world problems and contribute to data-driven decision-making.</b>
          </p>
         
        </div>
      </section>

      <section id="projects" className="projects">
        <h2><b>PROJECTS</b></h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2><b>CONTACT</b></h2>
        <p>
          <FaEnvelope /> 
          <a href="mailto:brijeshgupta8083@gmail.com">brijeshgupta8083@gmail.com</a>
        </p>
        <p>
          <FaLinkedin /> 
          <a href="https://www.linkedin.com/in/brijesh-gupta-63167a1ab/" target="_blank" rel="noopener noreferrer">/brijesh-gupta-vksu</a>
        </p>
        <p>
          <FaGithub /> 
          <a href="https://github.com/brijeshgupta8" target="_blank" rel="noopener noreferrer">/brijeshgupta8</a>
        </p>
        <p>
          <FaPhoneAlt /> 
          <a href="tel:+91 8329876770">+91 8329876770</a>
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Brijesh Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

