import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../Header.css';
import logo from "../../images/creativelogo.webp";

const HeaderLp = () => {



  return (
    <header >
      <nav className="navbar navbar-expand-lg container">
        <div className="d-flex align-items-center">
          {/* Logo */}
          <Link to="/" className="navbar-brand logo">
            <img className='logo' src={logo} alt="Logo" />
          </Link>
        </div>

        {/* First Get Started Button */}
        <a
          className="get-started-transparent-btn ms-auto me-3"
          data-bs-toggle="modal"
          data-bs-target="#popupForm"
          style={{ textDecoration: 'none' }}
        >
          Call Now
          <AiOutlineArrowRight className="arrow-icon" />
        </a>

        {/* Second Get Started Button */}
        <a
          className="get-started-btn"
          data-bs-toggle="modal"
          data-bs-target="#popupForm"
        >
          Get Started
          <AiOutlineArrowRight className="arrow-icon" />
        </a>
      </nav>
    </header>
  );
};

export default HeaderLp;
