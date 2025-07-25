import React from 'react';
import { Helmet } from 'react-helmet';
import '../Thankyou.css'
import PopupForm from '../components/PopupForm';
const Contactus = () => {

    return (
        <div>
         <Helmet>
                <title>Thank you | Social Mediastic </title>
                <meta name="description" content="Thank you for submitting the form! We’ve received your information and will get back to you shortly. If you have any questions, feel free to reach out. Stay tuned for further updates!" />
                <link rel="canonical" href="https://socialmediastic.com/thank-you" />
            </Helmet>
     
            <div className="thankyou-page">
                {/* <img src={ebooklogo} alt="Mobile Logo" /> */}
                <h1>Thank You!</h1>
            </div>
            <div className="contact">
                <h2>Please check your email for further instructions.</h2>
                <p>
                    Your brief has been successfully received. We’ve received it and one
                    of our representatives will be in touch soon to discuss it further and
                    guide you through the next steps.
                </p>
                <p>
                    Having trouble? <a href="tel:+442045112054">Contact us</a>
                </p>
                <div className="container">
             <div className="row align-items-center">
                      <div className="col-12 justify-content-center button-group">
               <button className="get-started-btn">
               Back to Homepage
               </button>
               </div></div></div>

  
            </div>
            <PopupForm/>
        </div>
      
    );
};

export default Contactus;
