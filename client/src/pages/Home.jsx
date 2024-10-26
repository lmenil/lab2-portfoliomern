// Home.jsx
/* File: Home.jsx
   Student Name: Lorenzo Jr Menil
   Student ID: 301341544
   Date: 2024-09-21
*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import enzo from '../assets/enzo.jpg';
import Layout from '../components/Layout';


const Home = () => {
  return (
    <>
   
    <div className="header-container">

    
      <img src={enzo} alt="Enzo Image" className="image-container"/>
      
      <h1>Welcome to My Portfolio</h1>
    </div>
    
    <div className="home">  
      <p>As a software engineer, I'm passionate about crafting innovative solutions that make a positive impact. My mission is to leverage my technical expertise to develop efficient and user-friendly applications. Explore my projects to see how I've applied my skills in real-world scenarios. If you're interested in discussing how my services can benefit your project, please don't hesitate to reach out. Let's collaborate and create something extraordinary together!</p>
    </div>
    <Link to="/about" className="btn">Learn More About Me</Link>
    </>
  );
};

export default Home;
