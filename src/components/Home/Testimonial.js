import "../../Testimonials.css";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // updated import
import 'swiper/css/navigation'; // updated import
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  // Importing icons
import { ImQuotesLeft } from "react-icons/im";

import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSection = () => {
    const testimonials = [
        {
            text: 'Creative Logo Design has contributed a lot to enhancing the online presence of our brand. Their team was successful in high-quality content deliveries and perfectly engaging with our audience as well. All this resulted in increased traffic to our website as well as social media followers, thanks to their strategic approach.',
            name: 'Rachael',
            location: 'UK'
        },
        {
            text: 'We have been constantly amazed by how well Creative Logo Design understands our corresponding target audience and tailors their strategies. Their creative content and timely responses have made it much easier to have a community built online. We love the results! ',
            name: 'Peter',
            location: 'Belgium'
        },
        {
            text: 'Took our social media marketing a whole different level. Their data-driven and innovative approach has helped our goals be reached. We recommend their business to any company that would like to make it big in social media. ',
            name: 'Keri',
            location: 'UK'
        },
        {
            text: 'We first hesitated quite a bit about social media outsourcing, but as soon as we contacted Creative Logo Design, all of that doubt disappeared. There is a great professional, fast response, and always go the extra mile taking from their team. So, no worries about handing over work to them. ',
            name: 'Thomas',
            location: 'USA'
        },
        {
            text: 'Creative Logo Design has totally changed the game for us as a company. Social media advertising expertise has had a positive impact on closing a good return for investment. We appreciate their partnership and look forward to continued benefits from this relationship."',
            name: 'Davide',
            location: 'Italy'
        }
    ];

    return (
        <section className='testimonial-section'>
            <div className='container'>
                <div className='row text-center'>
                    <h2>Testimonials</h2>
                </div>
                <div className='row'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            1200: { slidesPerView: 3}
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='testimonial-card'>
                                    <ImQuotesLeft className='quote-icon' />
                                    <p className='testimonial-text'>{testimonial.text}</p>
                                    <div className='testimonial-footer'>
                                        <p className='testimonial-name'>{testimonial.name}, {testimonial.location}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <div className="row justify-content-center">
                    <div className="col-12 arrows">
                    <div className="swiper-button-prev">
                        <a href="#prev" className="nav-link">
                           <i> <FaChevronLeft size={40} /></i> 
                        </a>
                    </div>
                    <div className="swiper-button-next">
                        <a href="#next" className="nav-link">
                            <FaChevronRight size={40} /> 
                        </a>
                    </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default TestimonialSection;
