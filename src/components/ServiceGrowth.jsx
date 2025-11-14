import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './ServiceGrowth.css'

const ServiceGrowth = () => {
  const [ref1, isVisible1] = useScrollAnimation()
  const [ref2, isVisible2] = useScrollAnimation()
  const [ref3, isVisible3] = useScrollAnimation()

  return (
    <section id="about" className="service-growth section">
      <div className="container">
        <div className="service-growth-content">
          <div ref={ref1} className={`service-growth-image ${isVisible1 ? 'visible' : ''}`}>
            <div className="image-grid">
              <div className="grid-item grid-item-1"></div>
              <div className="grid-item grid-item-2"></div>
              <div className="grid-item grid-item-3"></div>
            </div>
            <div ref={ref3} className={`stat-box ${isVisible3 ? 'visible' : ''}`}>
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
          
          <div ref={ref2} className={`service-growth-text ${isVisible2 ? 'visible' : ''}`}>
            <h2 className="section-title">Get Exceptional Service For Growth</h2>
            <p className="service-description">
              We provide tailored solutions designed to help your business grow and succeed. 
              Our experienced team works closely with you to understand your unique needs and 
              deliver strategies that drive measurable results.
            </p>
            <button className="cta-button">
              <span>Contact Us</span>
              <span className="button-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceGrowth

