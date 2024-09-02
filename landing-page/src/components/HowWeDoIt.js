import React from 'react';
import './HowWeDoIt.css';
import sampleVideo from '../assets/feature-video.mp4';


const HowWeDoIt = () => {
  return (
    <div className="how-we-do-it-container">
            <div className="how-we-do-it-r">
              <div className="feature-items">
              <p className="title" >How We Do It</p>
                <div className="feature-item">
                  <p className="title" ><i class="fa-solid fa-circle-down"></i>Install the Extension</p>
                  <p className="subtitle">Easily add our extension to your browser for seamless integration with your online activities.</p>
                </div>
                <div className="feature-item">
                  <p className="title"><i class="fa-solid fa-circle-exclamation"></i> Receive Alerts</p>
                  <p className="subtitle">Enter sensitive information as usual on any website. Our extension will monitor the data in real-time. Get instant alerts if sensitive information is detected, prompting you to confirm or cancel the upload.</p>
                </div>
                <div className="feature-item">
                  <p className="title"><i class="fa-solid fa-chart-line"></i> View Your Dashboard</p>
                  <p className="subtitle">Access your personalized dashboard to review past alerts, risk levels, and insights into your data privacy.</p>
                </div>
                <div className="feature-item">
                  <p className="title"><i class="fa-solid fa-gears"></i> Customize Settings</p>
                  <p className="subtitle">Tailor alerts and preferences to fit your needs through the extension settings.</p>
                </div>
              </div>
            </div>
      <div className="video-section">
         <video className="feature-video" autoPlay muted loop>
        <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HowWeDoIt;
