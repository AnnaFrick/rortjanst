import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="Hero" id="home">
      <video className="Hero-video" autoPlay loop muted>
        <source src="/car-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="Hero-overlay">
        <h1>Peter Engström Rörtjänst AB</h1>
        <p>
          Utför VS-jobb hos dig! Kvalitet och trygghet enligt <strong>Säker Vatten-certifiering</strong>.
        </p>
        <button className="Hero-button">Läs mer om våra tjänster</button>
      </div>
    </section>
  );
};

export default Hero;
