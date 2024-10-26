// About.jsx
/* File: About.jsx
   Student Name: Lorenzo Jr Menil
   Student ID: 301341544
   Date: 2024-09-21
*/
import React from 'react';
import '../styles/About.css';
import jewel from "../assets/JEWEL.jpg"


const About = () => {
  return (
    <div className="container">
        <div className="text-section">
            <h1>So, who am I?</h1>
            <p className="about-text">My name is Lorenzo Menil Jr, and I’ve spent the last 15 years honing my technical skills as a user support engineer in Singapore. This experience has equipped me with a deep understanding of user needs and the ability to troubleshoot complex issues efficiently. As I embark on my journey to become a software engineer in Canada, I’m excited to leverage my IT background to create innovative solutions. By combining my hands-on experience with the theoretical knowledge I’ll gain from my studies, I’m confident in my ability to develop high-quality software that meets the evolving demands of today’s digital landscape.</p>
            <a href="../src/assets/resume.pdf" class="btn">Download Resume</a>
        </div>
        <div className="image-section">
            <img src={jewel} alt="Social Media Bestie"/>
        </div>
    </div>
  );
};

export default About;
