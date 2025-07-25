import React from "react";
import "../../PricingSection.css";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";  // Import the arrow icon

const PricingSection = () => {
  const pricingPlans = [
    {
      type: "BASIC",
      price: 100,
      features: [
        { name: "No. of Posts 10", isAvailable: true },
        { name: "Platforms Included FB, LinkedIn", isAvailable: true },
        { name: "Per Additional Platforms $20/month", isAvailable: true },
        { name: "Captions Included", isAvailable: true },
        { name: "Hashtags Included", isAvailable: true },
        { name: "Posts' Custom Content", isAvailable: false },
        { name: "Client's Content Usage (Text and Images)", isAvailable: false },
        { name: "Company Brand Guideline", isAvailable: true },
        { name: "No. Of Post Revisions 3",   isAvailable: true },
        { name: "Custom Posts (Holidays, Seasonal, etc)", isAvailable: true },
        { name: "Post Scheduling", isAvailable: true },
        { name: "Monthly Reporting Standard", isAvailable: true },
        { name: "Customer Support", isAvailable: true, comingSoon: true },
      ],
      buttonText: "Get a Quote",
      isPopular: false,
    },
    {
      type: "PROFESSIONAL",
      price: 200,
      features: [
        { name: "No. of Posts 20", isAvailable: true },
        { name: "Platforms Included FB, Instagram, LinkedIn", isAvailable: true },
        { name: "Per Additional Platforms $20/month", isAvailable: true },
        { name: "Captions Included", isAvailable: true },
        { name: "Hashtags Included", isAvailable: true },
        { name: "Company Brand Guideline", isAvailable: true },
        { name: "No. Of Post Revisions 5", isAvailable: true },
        { name: "Posts' Custom Content", isAvailable: false },
        { name: "Client's Content Usage (Text and Images)", isAvailable: true },
        { name: "Custom Posts (Holidays, Seasonal, etc)", isAvailable: true },
        { name: "Post Scheduling", isAvailable: true },
        { name: "Monthly Reporting Standard", isAvailable: true },
        { name: "Customer Support", isAvailable: true },
     
      ],
      buttonText: "Get a Quote",
      isPopular: true,
    },
    {
      type: "ADVANCED",
      price: 300,
      features: [
        { name: "No. of Posts 30", isAvailable: true },
        { name: "Platforms Included FB, Instagram, LinkedIn, X (Twitter)", isAvailable: true },
        { name: "Per Additional Platforms $20/month", isAvailable: true },
        { name: "Captions Included", isAvailable: true },
        { name: "Hashtags Included", isAvailable: true },
        { name: "Company Brand Guideline", isAvailable: true },
        { name: "No. Of Post Revisions 10", isAvailable: true },
        { name: "Posts' Custom Content", isAvailable: true },
        { name: "Client's Content Usage (Text and Images)", isAvailable: true },
        { name: "Custom Posts (Holidays, Seasonal, etc)", isAvailable: true },
        { name: "Post Scheduling", isAvailable: true },
        { name: "Monthly Reporting Advance", isAvailable: true },
        { name: "Customer Support", isAvailable: true },

      ],
      buttonText: "Get a Quote",
      isPopular: false,
    },
  ];

  return (
    <section className="pricing-section-home">
      <div className="container">
        <div className="row">
        <div className="col-12 text-center">
          <h2 className="tabsectionheading py-3">Our Social Media Pricing</h2>
    
        </div>
          
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`col-md-4 pricing-card ${plan.isPopular ? "popular" : ""}`}
            >
              <div className={`card ${plan.isPopular ? "highlight" : ""}`}>
                <div className="basic-text">
                  <h4>{plan.type}</h4>
                </div>

                {/* <p className="card-paragraph">
                  {plan.type === "PROFESSIONAL"
                    ? "For professional domain investors"
                    : "For all individuals and starters who want to start domaining."}
                </p> */}
                <div className="divider"></div>
                <div className="card-price">
                  <h2>£{plan.price}</h2>
                  <p>Per Month</p>
                </div>
                <div className="divider"></div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      {feature.isAvailable ? (
                        <>
                          <FaCheck className="icon-check" />
                          {feature.name}
                        </>
                      ) : feature.comingSoon ? (
                        <>
                          <FaCheck className="icon-check" />
                          {feature.name}
                          <span className="coming-soon">Coming Soon</span>
                        </>
                      ) : (
                        <>
                          <FaTimes className="icon-cross" />
                          {feature.name}
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Updated the button with the <a> tag and the required data-bs-toggle and data-bs-target */}
                {/* <a
                  className={`trial-btn ${plan.isPopular ? "popular-btn" : ""}` }
                  data-bs-toggle="modal"
                  data-bs-target="#popupForm"
                  href="#"
                  style={{ textDecoration: 'none' }}
                >
                  {plan.buttonText}
                
                </a> */}

   <a
  className="trial-btn"
  data-bs-toggle="modal"
  data-bs-target="#popupForm"
  data-title={`${plan.type} PLAN - £${plan.price}`}
  style={{ textDecoration: 'none' }}
>
  Get Started
</a>

                <p className="note">{plan.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
