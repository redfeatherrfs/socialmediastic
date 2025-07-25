import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../contactusformhome.css';

const ContactUsFormHome = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Validation regex
  const nameRegex = /^[a-zA-Z\s]*$/;
  const phoneRegex = /^[+0-9\- ]{10,15}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.firstName || !nameRegex.test(formData.firstName)) {
      newErrors.firstName = 'Enter a valid first name';
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message) {
      newErrors.message = 'Enter a message';
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        await fetch("http://creativelogodesign.co.uk/social-media/php_mailer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        // No need to handle redirect in React — PHP will do it
      } catch (err) {
        console.error("Email sending failed:", err);
        alert("Something went wrong while sending your message.");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contactus-form-home py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="contactus-heading">Get In Touch</h2>
            <p className="contactus-text">
              Ready to elevate your brand's online presence and achieve your marketing goals?
              Let's connect and discuss how Social Mediastics can help you.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-5 col-md-12 contact-info-column">
            <div className="contact-info">
              <div className="contact-item mb-4">
                <FaPhone className="contact-icon" />
                <div>
                  <span className="subtitle-contact">Phone:</span><br />
                  <a href="tel:+442045112054" className="contact-link">0204-511-2054</a>
                </div>
              </div>
              <div className="contact-item mb-4">
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="subtitle-contact">Email:</span><br />
                  <a href="mailto:support@creativelogodesign.co.uk" className="contact-link">
                    support@creativelogodesign.co.uk
                  </a>
                </div>
              </div>
              <div className="contact-item mb-4">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="subtitle-contact">Address:</span><br />
                  <p>Continental House, 497 Sunleigh Road, Wembley, England, HA0 4LY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7 col-md-12">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <textarea
                    name="message"
                    placeholder="Enter Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-right">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsFormHome;
