import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './WhatWeOffer.css'

const WhatWeOffer = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [col1Ref, col1Visible] = useScrollAnimation()
  const [col2Ref, col2Visible] = useScrollAnimation()

  const ecommerceServices = [
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Content Marketing',
    'Website Design & Development',
    'Pay-Per-Click Advertising',
    'Email Marketing Campaigns',
    'Conversion Rate Optimization',
    'Brand Identity Development'
  ]

  const projectManagementServices = [
    'Project Planning & Strategy',
    'Scope Definition & Requirements',
    'Timeline & Milestone Management',
    'Risk Assessment & Mitigation',
    'Quality Assurance & Testing',
    'Launch Planning & Execution',
    'Post-Launch Support & Maintenance',
    'Performance Monitoring & Analytics'
  ]

  return (
    <section className="what-we-offer section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'visible' : ''}`}>What We Offer</h2>
        
        <div className="offer-content">
          <div ref={col1Ref} className={`offer-column ${col1Visible ? 'visible' : ''}`}>
            <h3 className="offer-column-title">E-Commerce & Digital Marketing Solutions</h3>
            <ul className="offer-list">
              {ecommerceServices.map((service, index) => (
                <li key={index}>
                  <span className="list-icon">→</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div ref={col2Ref} className={`offer-column ${col2Visible ? 'visible' : ''}`}>
            <h3 className="offer-column-title">E-commerce Business Management</h3>
            <ul className="offer-list">
              {projectManagementServices.map((service, index) => (
                <li key={index}>
                  <span className="list-icon">→</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer

