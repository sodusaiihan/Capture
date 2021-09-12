import React from 'react'

// Import Icons
import Clock from '../img/clock.svg'
import Diaphragm from '../img/diaphragm.svg'
import Money from '../img/money.svg'
import Teamwork from '../img/teamwork.svg'

// Import Images
import Home2 from '../img/home2.png'

const ServicesSection = () => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            High <span>quality</span> services
          </h2>
          <div className="cards">
            {/* ======== CARD 1 ======== */}
            <div className="card">
              <div className="icon">
                <img src={Clock} alt="clock" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            {/* ======== CARD 2 ======== */}
            <div className="card">
              <div className="icon">
                <img src={Teamwork} alt="clock" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            {/* ======== CARD 3 ======== */}
            <div className="card">
              <div className="icon">
                <img src={Diaphragm} alt="clock" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            {/* ======== CARD 4 ======== */}
            <div className="card">
              <div className="icon">
                <img src={Money} alt="clock" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Home2} alt="Home2" />
      </div>
    </div>
  )
}

export default ServicesSection
