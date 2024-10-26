// Services.jsx
/* File: Services.jsx
   Student Name: Lorenzo Jr Menil
   Student ID: 301341544
   Date: 2024-09-21
*/
import React from 'react';
import '../styles/Services.css';
import service1 from '../assets/webdev.jpg';
import service2 from '../assets/softwaremaintenance.jpg';
import service3 from '../assets/customsoftwaredev.jpg';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: service1,
      title: 'Web Development',
      description: "Designing and building visually appealing and user-friendly websites.",
    },
    {
      id: 2,
      icon: service2,
      title: 'Software Maintenance',
      description: "Identifying and resolving software defects to maintain optimal performance.",
    },
    {
      id: 3,
      icon: service3,
      title: 'Custom Software Development',
      description: "Developing a comprehensive software architecture that aligns with your client's business objectives.",
    },
  ];

  return (
    
    <div className="services" id="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {servicesData.map(service => (
          <div className="service-card" key={service.id}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Services;
