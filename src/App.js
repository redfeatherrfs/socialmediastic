import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contactus from './pages/ContactUs';
import Services from './pages/Services';
import Ourwork from './pages/Ourwork';
import PrivacyPolicy from './pages/Privacypolicy';
import Thankyou from './pages/Thankyoupage';
import TermsandConditions from './pages/Termsconditions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ScrollToTop from './components/ScrollToTop';
import BlogPage from './pages/Blog';
import BlogsPage from './pages/Blogs';

const App = () => {
    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/services" element={<Services />} />
                <Route path="/our-work" element={<Ourwork />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsandConditions />} />
                <Route path="/thank-you" element={<Thankyou />} />
                <Route path="/:slug" element={<BlogPage />} />
                    <Route path="/blogs" element={<BlogsPage />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
