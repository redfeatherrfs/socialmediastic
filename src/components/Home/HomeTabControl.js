import React, { useState } from "react";
import "../../TabHomeSection.css";
import tabimg1 from "../../images/tabimg1.webp"
import tabimg2 from "../../images/SocialMediMarketing.png"
import tabimg3 from "../../images/SocialMediaMonitoring.png"



const TabHomeSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Social Media Management" },
    { id: "tab2", label: "Social Media Marketing" },
    { id: "tab3", label: "Social Media Monitoring" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div className="tab-content-section">
            <div className="row">
              <div className="col-md-6 align-content-center">
                <h2>Social Media Management</h2>
                <p>
                Creative Logo Design are experts in the management of your brands. Our team will develop and execute an overarching plan to reach your target audience and build brand affinity. Engaging Content Implementing Online Community Management Running Targeted Ads, You'll get everything you want.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={tabimg1}
                  alt="Organic Social Media Management"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className="tab-content-section">
            <div className="row">
              <div className="col-md-6 align-content-center">
                <h2>Social Media Marketing</h2>
                <p>
                Our social media marketing packages are targeted to get your brand to stand out in the whole digital crowd. We design and implement campaigns that provide incremental brand awareness, leads, and sales results. Organic or paid social media, we'll make your message accessible to your target audience at the right time.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={tabimg2}
                  alt="Content Strategy"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        );
      case "tab3":
        return (
          <div className="tab-content-section">
            <div className="row">
              <div className="col-md-6 align-content-center">
                <h2>Social Media Monitoring</h2>
                <p>
                Our social media monitoring service keeps a close eye on online conversations about your brand. We track mentions, analyze sentiment, and identify trends to protect your reputation, spot opportunities, and engage with your audience.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={tabimg3}
                  alt="Content Creation & Design"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tab-home-section container">
      {/* First Row */}
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="tabsectionheading">Comprehensive Social Media Solutions</h2>
          <p style={{ color: "#F26B6B", fontSize: "20px", fontWeight:"700" }}>
          Empower your business with strategic social media solutions tailored to achieve your goals.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
  <div className="col-12 text-center">
    <div className="tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
          style={{ margin: '5px' }} // Optional: adds spacing between buttons
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
</div>


      {/* Third Row */}
      <div className="row mt-4">{renderContent()}</div>
    </div>
  );
};

export default TabHomeSection;
