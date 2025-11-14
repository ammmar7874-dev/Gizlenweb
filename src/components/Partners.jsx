import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Partners.css'

const Partners = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [partner1Ref, partner1Visible] = useScrollAnimation()
  const [partner2Ref, partner2Visible] = useScrollAnimation()
  const [partner3Ref, partner3Visible] = useScrollAnimation()

  const partners = [
    {
      name: 'Extreme Networks',
      tagline: 'ADVANCE WITH US',
      logo: 'Extreme Networks',
      ref: partner1Ref,
      visible: partner1Visible
    },
    {
      name: 'DELL',
      tagline: 'REGISTERED PARTNER',
      logo: 'DELL',
      ref: partner2Ref,
      visible: partner2Visible
    },
    {
      name: 'CISCO',
      tagline: 'Grow Smarter',
      logo: 'CISCO PARTNER',
      ref: partner3Ref,
      visible: partner3Visible
    }
  ]

  return (
    <section className="partners section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'visible' : ''}`}>Official Partners</h2>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              ref={partner.ref}
              className={`partner-card ${partner.visible ? 'visible' : ''}`}
            >
              <div className="partner-logo">{partner.logo}</div>
              <div className="partner-tagline">{partner.tagline}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

