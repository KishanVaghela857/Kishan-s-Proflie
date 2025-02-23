import React, { useState } from 'react';
import './navbarCss.css';
import { Link } from 'react-router-dom';

export default function Navbar({ title }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title,
                description: `Check out my services on ${title}!`,
                url: window.location.href
            }).then(() => {
                console.log("Shared successfully");
            }).catch((error) => {
                console.error("Error sharing:", error);
            });
        } else {
            alert("Sharing not supported in this browser.");
        }
    };

    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <h5 style={{color: 'rgb(0, 171, 223)'}}>{title}</h5>
                    <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
                </div>

                <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Journey">My journey</Link></li>
                        {/* <li><a href="#">Contact</a></li> */}
                    </ul>
                </div>

                <div className="share">
                    <button className="Btn" onClick={handleShare}>
                        <span className="svgContainer">
                            <svg viewBox="0 0 448 512">
                                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"></path>
                            </svg>
                        </span>
                        <span className="textContainer">Share</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
