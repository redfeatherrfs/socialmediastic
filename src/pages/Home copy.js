import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Home/header';
import MainBanner from '../components/Home/mainbanner';
import AwardsLogo from '../components/Home/awardslogo';
import TabHomeSection from '../components/Home/HomeTabControl';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import right arrow icon
import PricingSection from '../components/Home/PricingSection';
import GuaranteedSection from '../components/Home/Guarantee';
import CtaHome from '../components/Home/cta-home';
import IconTextHomeBox from '../components/Home/icontext-box';
import LogoPortfolio from '../components/Home/Porfoliogallery';
import CreativeServices from '../components/Home/services-card';
import Testimonials from '../components/Home/Testimonial';
import ContactUsFormHome from '../components/Home/contactushome';
import Footer from '../components/Home/footer';
import OurProcess from '../components/Home/our-process';
import { Helmet } from 'react-helmet';
import PopupForm from '../components/PopupForm';
import ScrollToTopButton from '../components/scrolltoback';
import HeaderLp from '../components/Home/headerLp';



const Home = () => {
  return (

    <div>
      <Helmet>
        <title>Social Media Management Company & Agency | Social Mediastic</title>
        <meta name="description" content="A social media management company. We offer social media marketing, social media management, and social media advertising. Call us today!" />
        <link rel="canonical" href="https://socialmediastic.com/" />
      </Helmet>
      <HeaderLp/>
      {/* <Header /> */}
      <MainBanner />
      <AwardsLogo />
      <TabHomeSection />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 justify-content-center button-group">
               <a href="tel:+442045112054" style={{ textDecoration: 'none' }}>
                  <button className="get-started-btn">
                    Free Consultation
                    <AiOutlineArrowRight className="arrow-icon" />
                  </button>
                </a>

            <a href="/services" style={{ textDecoration: 'none' }}>
  <button className="get-started-transparent-btn">
    View Services
    <AiOutlineArrowRight className="arrow-icon" />
  </button>
</a>

          </div></div>

      </div>
      <div id="pricing-section">
        <PricingSection />
      </div>
      <GuaranteedSection />
      <CtaHome />
      <IconTextHomeBox />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 justify-content-center button-group">
          <a href="tel:+442045112054" style={{ textDecoration: 'none' }}>
                  <button className="get-started-btn">
                    Schedule a Free Consultation
                    <AiOutlineArrowRight className="arrow-icon" />
                  </button>
                </a>
          </div></div></div>
      <LogoPortfolio />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 justify-content-center button-group">
                <a className="get-started-btn" data-bs-toggle='modal' data-bs-target="#popupForm" style={{ cursor: 'pointer' }}  >
                                Get Started
                                <AiOutlineArrowRight className="arrow-icon" />
                              </a>
          </div></div></div>
      <CreativeServices />
      <OurProcess />
      <Testimonials />
      <ContactUsFormHome />
      {/* <ScrollToTopButton/> */}
      <Footer />

      <PopupForm />
    </div>
  );
};

export default Home;
