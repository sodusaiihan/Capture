import React from 'react'
// Import Images
import home1 from '../img/home1.png'

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals amazing skills
        </p>
        <button>Contact Us</button>
      </div>
      <div className="img">
        <img src={home1} alt="home1" />
      </div>
    </div>
  )
}

export default AboutSection
