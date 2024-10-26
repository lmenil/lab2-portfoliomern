// Projects.jsx
/* File: Projects.jsx
   Student Name: Lorenzo Jr Menil
   Student ID: 301341544
   Date: 2024-09-21
*/
import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/SPA.jpg';
import project2 from '../assets/javascript_assignment.jpg';
import project3 from '../assets/firstweb.jpg';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: project1,
      title: 'Project One',
      description: "Played a pivotal role in developing a comprehensive spa website. My responsibilities included creating user-friendly interfaces, and integrating features like a survey page that allows visitors to provide valuable feedback directly to the company. The end result is a visually appealing and informative website that effectively showcases the spa's services and fosters customer engagement.",
      role: 'Member Developer',
      url: 'http://studentweb.cencol.ca/lmenil/spa/project.html',
    },
    {
      id: 2,
      image: project2,
      title: 'Project Two',
      description: "In my JavaScript assignment, I brought Centennial College's logo to life through interactive drag-and-drop functionality. Users could grab the logo and place it on top of various school pictures, creating personalized and creative compositions. This project allowed me to explore event handling, DOM manipulation, and basic JavaScript animations, solidifying my understanding of dynamic web elements.",
      role: 'Javascript Programmer',
      url: 'http://studentweb.cencol.ca/lmenil/javascript/LorenzoJrMenil_Assignment4.html',
    },
    {
      id: 3,
      image: project3,
      title: 'Project Three',
      description: "I embarked on my initial journey into the world of HTML and CSS through COMP 213 at Centennial College. My first website, a humble creation, served as a stepping stone towards understanding the fundamental building blocks of web design. I learned how to structure content using HTML tags and style it visually with CSS. While simple in its design, this project marked the beginning of a lifelong passion for crafting digital experiences.",
      role: 'Web Developer',
      url: 'http://studentweb.cencol.ca/lmenil/',
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map(project => (
          <div className="project-card" key={project.id}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Role:</strong> {project.role}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
