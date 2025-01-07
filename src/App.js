
import React, { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';  // Correct import

import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';

const App = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Power BI Ecommerce Sales Dashboard Analysis',
      description: 'An Interactive Power BI dashboard analyzes sales performance and provides insights into various metrics like profit, sales quantity, and customer behavior. It includes interactive filters for deeper data exploration.',
      image: '/images/sales_dashboard_preview.png',
      githubLink: 'https://github.com/brijeshgupta8/Ecommerce-sales-dashboard',
    },
    {
      id: 2,
      title: 'Excel Placement Data Analysis',
      description: 'This project analyzes placement data to provide actionable insights for improving placement rates and salary packages across various student demographics, degree specializations, and career fields',
      image: '/images/Excel Dashboard.PNG',
      githubLink: 'https://github.com/brijeshgupta8/Placement-Data-Analysis-using-Excel',
    },
    {
      id: 3,
      title: 'Customer Churn Analysis using Python',
      description: 'This project analyzes customer churn patterns to identify key factors influencing churn and provide actionable insights for retention strategies. The analysis uses Python and explores data on payment methods, contract types, tenure, demographics, and internet service types.',
      image: '/images/Python data analysis image.PNG',
      githubLink: 'https://github.com/brijeshgupta8/Customer-Churn-Analysis-using-Python',
    },
    {
      id: 4,
      title: 'Music Store data analysis using SQL' ,
      description: 'This project, Music Store Data Analysis, involves analyzing data from a music store database to extract insights about sales, customers, employees, and tracks. The database schema is designed to store information about customers, employees, invoices, playlists, tracks, artists, and more, enabling comprehensive analysis of the store\'s operations.',
      image: '/images/MusicDatabaseSchema.png',
      githubLink: 'https://github.com/brijeshgupta8/SQL-music-store-analysis',
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

