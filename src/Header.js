import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logo">
        <img src="/ro.png" alt="Peter Engström Rörtjänst AB" />
      </div>
      <nav className="Header-nav">
        <ul>
          <li><a href="#home">Hem</a></li>
          <li><a href="#about">Om Oss</a></li>
          <li><a href="#services">Tjänster</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
