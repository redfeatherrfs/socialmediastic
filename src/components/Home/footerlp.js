import React from 'react';
import footer from '../../images/footerlogo.png'; // Ensure the image path is correct
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../../footer.css';

import { Link } from 'react-router-dom';
import ScrollToTopButton from '../scrolltoback';

const FooterLp = () => {
   
    return (
      
        <footer className="footer" style={{ backgroundColor: '#222222' }}>
            <div className="container">
                <div className="row">
                <ScrollToTopButton/>

                    {/* About Section with Logo */}
                    <div className="col-md-6">
                        <h5 className="footer-heading-sub">
                            <Link to="/"> <img src={footer} alt="Animation Rush" style={{ maxWidth: '150px' }} /></Link>
                        </h5>
                        <p className="text-light">
                        Social Mediastics is your trusted partner in digital marketing. We focus on boosting your brand’s presence across all major social media platforms. From content creation to audience engagement, we handle everything with a strategic approach. Our goal is to help your business grow online and connect with the right audience.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    {/* <div className="col-md-2">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="footer-links list-unstyled">
                            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="/about-us" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
                            <li><a href="/contact-us" className="text-light text-decoration-none">Contact Us</a></li>


                        </ul>
                    </div> */}
                    {/* Our Services Section */}
                    <div className="col-md-2 mb-4">
                        <h5 className="footer-heading">Other Links</h5>
                        <ul className="footer-links list-unstyled">
                            {/* <li> <a href="/our-work" className="text-light text-decoration-none">Our Work</a></li> */}
                            <li> <a href="https://creativelogodesign.co.uk/terms-and-conditions/" className="text-light text-decoration-none">Terms & Condition</a></li>
                            <li> <a href="https://creativelogodesign.co.uk/privacy-policy/" className="text-light text-decoration-none">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Follow Us and Contact Section */}
                    <div className="col-md-4 mb-4">
                        

                        {/* Contact Us Section */}
                        <div className="contact-details">
                            <h5 className="footer-heading">Contact Us</h5>
                            <p className="mb-1 text-light">
                                <FaPhoneAlt />
                                <a href="tel:+442045112054" className="text-light text-decoration-none"> 0204-511-2054</a>
                            </p>
                            <p className="mb-1 text-light">
                                <FaEnvelope />
                                <a href="mailto:support@creativelogodesign.co.uk" className="text-light text-decoration-none"> support@creativelogodesign.co.uk</a>
                            </p>
                            <p className="text-light">
                                <FaMapMarkerAlt />
                                <a href="https://www.google.com/maps?q=Continental+House,+497+Sunleigh+Road,+Wembley,+England,+HA0+4LY" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"> Continental House, 497 Sunleigh Road,
Wembley, England, HA0 4LY</a>
                            </p>
                        </div>

                        <h5 className="footer-heading">Follow Us</h5>
                        <div className="d-flex gap-3 mb-3">
                            <a href="https://www.facebook.com/Creativelogodesignuk/" className="text-light"><FaFacebookF size={25} /></a>
                            <a href="https://www.instagram.com/creative_logo_design_uk/" className="text-light"><FaInstagram size={25} /></a>
                            <a href="https://www.linkedin.com/company/creativelogo-design-uk/" className="text-light"><FaLinkedinIn size={25} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section with two columns */}
            <div className="footer-bottom text-center py-2">
                <p>© 2025 Social Mediastics. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default FooterLp;
