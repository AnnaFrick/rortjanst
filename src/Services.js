import React from 'react';
import './Services.css';
import { FaTools, FaBath, FaWater } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="Services" id="services">
      <h2>Våra Tjänster</h2>
      <div className="Services-grid">
        <div className="Service-item">
          <FaTools className="Service-icon" />
          <h3>Installation</h3>
          <p>Installation och justering av värmesystem och värmepumpar.</p>
        </div>
        <div className="Service-item">
          <FaBath className="Service-icon" />
          <h3>Renovering</h3>
          <p>Badrum-, köks- och tvättstugerenoveringar.</p>
        </div>
        <div className="Service-item">
          <FaWater className="Service-icon" />
          <h3>Rördragning</h3>
          <p>Professionell rördragning och VVS-arbeten.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
