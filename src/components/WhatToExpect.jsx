import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './WhatToExpect.css'

const WhatToExpect = () => {
  const [imageRef, imageVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()

  return (
    <section className="what-to-expect section">
      <div className="what-to-expect-wrapper">
        <div ref={imageRef} className={`what-to-expect-image ${imageVisible ? 'visible' : ''}`}>
          <div className="image-placeholder"></div>
        </div>
        
        <div ref={contentRef} className={`what-to-expect-content ${contentVisible ? 'visible' : ''}`}>
          <div className="content-inner">
            <h2 className="expect-title">What to Expect When Working With Us</h2>
            
            <p className="expect-description">
              When you partner with us, you'll experience a collaborative approach that prioritizes 
              your success. We believe in transparency, open communication, and delivering measurable 
              results. Our team works closely with you to understand your vision, challenges, and goals. 
              You can expect regular updates, detailed reporting, and a commitment to excellence in 
              every aspect of our engagement.
            </p>
            
            <button className="cta-button">
              <span>Talk to Us</span>
              <span className="button-arrow">→</span>
            </button>
          </div>
          <div className="diagonal-accent-right"></div>
        </div>
      </div>
    </section>
  )
}

export default WhatToExpect

