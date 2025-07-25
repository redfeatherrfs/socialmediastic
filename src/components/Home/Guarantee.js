// GuaranteedSection.js
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import guarantee from "../../images/guarantee.svg";
import '../../GuaranteedSection.css';

const GuaranteedSection = () => {
  return (
    <section className="guaranteed-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Column 1 - Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={guarantee}
              alt="Guaranteed Badge"
              className="guaranteed-image img-fluid"
            />
          </div>

          {/* Column 2 - Text Content */}
          <div className="col-lg-6 col-md-12">
            <h2 className="guaranteed-heading">Our Fair Refund Policy</h2>
            <ul className="guaranteed-list">
              <li>We're so certain about the quality of our social media marketing that we offer a 100% money-back guarantee. </li>
              <li>If you're not completely satisfied with the results, we'll refund your entire payment, no questions asked</li>
              <li>Experience the power of our services without any risk. Our 100% money-back guarantee ensures your peace of mind.</li>
            </ul>
            <div className="button-group">
            <a href="tel:+442045112054" style={{ textDecoration: 'none' }}>
              <button className="get-started-btn">
                Free Consultation
                <AiOutlineArrowRight className="arrow-icon" />
              </button>
              </a>
             <a data-bs-toggle='modal' data-bs-target="#popupForm">
              <button className="get-started-transparent-btn">
                Get Started
                <AiOutlineArrowRight className="arrow-icon" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteedSection;
