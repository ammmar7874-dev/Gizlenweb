import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './ExpertConsulting.css'

const ExpertConsulting = () => {
  const [imageRef, imageVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()
  const [stat1Ref, stat1Visible] = useScrollAnimation()
  const [stat2Ref, stat2Visible] = useScrollAnimation()
  const [stat3Ref, stat3Visible] = useScrollAnimation()

  const stats = [
    { number: '15+', label: 'Years of Experience', icon: '💼', ref: stat1Ref, visible: stat1Visible },
    { number: '200+', label: 'Projects Completed', icon: '👥', ref: stat2Ref, visible: stat2Visible },
    { number: '80+', label: 'Team Members', icon: '💡', ref: stat3Ref, visible: stat3Visible }
  ]

  return (
    <section className="expert-consulting section">
      <div className="expert-consulting-wrapper">
        <div ref={imageRef} className={`expert-consulting-image ${imageVisible ? 'visible' : ''}`}>
          <div className="image-placeholder"></div>
        </div>
        
        <div ref={contentRef} className={`expert-consulting-content ${contentVisible ? 'visible' : ''}`}>
          <div className="content-inner">
            <h2 className="expert-title">Expert Small Business Consulting For E-Commerce & Digital Marketing</h2>
            
            <p className="expert-description">
              Our team specializes in providing tailored strategies for e-commerce and digital marketing 
              that drive measurable results. We conduct comprehensive market analysis, develop customized 
              solutions, and implement strategies that help your business thrive in the digital landscape. 
              From website optimization to social media campaigns, we've got you covered.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  ref={stat.ref}
                  className={`stat-card ${stat.visible ? 'visible' : ''}`}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="diagonal-accent-left"></div>
        </div>
      </div>
    </section>
  )
}

export default ExpertConsulting

