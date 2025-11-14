import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './HelpingBusinesses.css'

const HelpingBusinesses = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [introRef, introVisible] = useScrollAnimation()
  const serviceCategories = [
    {
      title: 'Marketing & Branding',
      services: [
        'Market research and analysis',
        'Brand strategy development',
        'Digital marketing campaigns',
        'Content creation and management',
        'Social media strategy'
      ]
    },
    {
      title: 'E-commerce Solutions',
      services: [
        'Platform setup and configuration',
        'Product catalog management',
        'Payment gateway integration',
        'Security implementation',
        'Performance optimization'
      ]
    },
    {
      title: 'Web Design & Development',
      services: [
        'Responsive website design',
        'Custom web development',
        'UI/UX design',
        'Website maintenance',
        'Performance optimization'
      ]
    },
    {
      title: 'Business & Operations Consulting',
      services: [
        'Business plan development',
        'Process optimization',
        'Financial planning and analysis',
        'Project management',
        'Organizational development'
      ]
    }
  ]

  const [card1Ref, card1Visible] = useScrollAnimation()
  const [card2Ref, card2Visible] = useScrollAnimation()
  const [card3Ref, card3Visible] = useScrollAnimation()
  const [card4Ref, card4Visible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()

  const cards = [card1Ref, card2Ref, card3Ref, card4Ref]
  const cardsVisible = [card1Visible, card2Visible, card3Visible, card4Visible]

  return (
    <section className="helping-businesses section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'visible' : ''}`}>Helping Small Businesses Grow</h2>
        
        <p ref={introRef} className={`section-intro ${introVisible ? 'visible' : ''}`}>
          We provide strategic guidance and innovative solutions to help businesses achieve 
          their growth objectives. Our comprehensive approach ensures sustainable success 
          through personalized support and proven methodologies.
        </p>
        
        <div className="services-grid">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              ref={cards[index]}
              className={`service-category-card ${cardsVisible[index] ? 'visible' : ''}`}
            >
              <h3 className="category-title">{category.title}</h3>
              <ul className="category-services">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div ref={ctaRef} className={`cta-container ${ctaVisible ? 'visible' : ''}`}>
          <p className="cta-text">Ready to take your business to the next level?</p>
          <button className="cta-button">
            <span>Contact</span>
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HelpingBusinesses

