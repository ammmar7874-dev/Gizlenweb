import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Expertise.css'

const Expertise = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [card1Ref, card1Visible] = useScrollAnimation()
  const [card2Ref, card2Visible] = useScrollAnimation()
  const [card3Ref, card3Visible] = useScrollAnimation()
  const [card4Ref, card4Visible] = useScrollAnimation()

  const expertiseCards = [
    {
      title: 'E-commerce System, SEO',
      description: 'Comprehensive setup of online stores with secure payment gateways, inventory management, and search engine optimization for maximum visibility.',
      icon: '🖥️',
      color: '#06b6d4',
      ref: card1Ref,
      visible: card1Visible
    },
    {
      title: 'Operations and Staff Development',
      description: 'Improve efficiency and develop your team\'s skills through targeted training programs and process optimization.',
      icon: '👥',
      color: '#10b981',
      ref: card2Ref,
      visible: card2Visible
    },
    {
      title: 'Marketing and Branding Strategy',
      description: 'Create effective marketing strategies that resonate with your target audience and strengthen your brand presence.',
      icon: '💡',
      color: '#22d3ee',
      ref: card3Ref,
      visible: card3Visible
    },
    {
      title: 'Local and Global Business Growth',
      description: 'Expand your market reach with strategic planning for both local expansion and international growth opportunities.',
      icon: '📈',
      color: '#14b8a6',
      ref: card4Ref,
      visible: card4Visible
    }
  ]

  return (
    <section id="services" className="expertise section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'visible' : ''}`}>
          Our Expertise in Small Business Consulting
        </h2>
        <p className="expertise-subtitle">We provide comprehensive solutions to help your business thrive in the digital age.</p>
        
        <div className="expertise-grid">
          {expertiseCards.map((card, index) => (
            <div 
              key={index} 
              ref={card.ref}
              className={`expertise-card ${card.visible ? 'visible' : ''}`}
              style={{ '--card-color': card.color }}
            >
              <div className="card-icon-wrapper">
                <div className="card-icon">{card.icon}</div>
                <div className="icon-glow"></div>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise

