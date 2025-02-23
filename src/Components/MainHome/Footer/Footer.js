import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h3>Portfolio</h3>
          <p>&copy; {new Date().getFullYear()} Dev Kishan. All rights reserved.</p>
        </div>
        <div className="footer__right">
          <ul className="footer__links">
            <li><a href="/Journey">Journey</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
