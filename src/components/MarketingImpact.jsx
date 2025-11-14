import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './MarketingImpact.css'

const MarketingImpact = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [introRef, introVisible] = useScrollAnimation()
  const [principleRef, principleVisible] = useScrollAnimation()
  const [approachRef, approachVisible] = useScrollAnimation()

  return (
    <section className="marketing-impact section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'visible' : ''}`}>Maximize Your Marketing Impact</h2>
        
        <p ref={introRef} className={`section-intro ${introVisible ? 'visible' : ''}`}>
          Our comprehensive marketing strategies are designed to help businesses achieve their goals 
          through data-driven approaches and innovative solutions that deliver measurable results.
        </p>
        
        <div className="marketing-content">
          <div ref={principleRef} className={`marketing-column marketing-principle ${principleVisible ? 'visible' : ''}`}>
            <h3 className="column-title">Our Big Picture Principle</h3>
            <ul className="principle-list">
              <li>Understand your target audience deeply</li>
              <li>Develop integrated marketing strategies</li>
              <li>Create compelling brand narratives</li>
              <li>Leverage data for continuous optimization</li>
              <li>Build long-term customer relationships</li>
              <li>Measure and report on key metrics</li>
            </ul>
          </div>
          
          <div ref={approachRef} className={`marketing-column marketing-approach ${approachVisible ? 'visible' : ''}`}>
            <h3 className="column-title">Client-focused, Data-driven Solutions</h3>
            <ul className="approach-list">
              <li>Tailored approaches to meet your unique business needs</li>
              <li>Data-driven insights for informed decision making</li>
              <li>Measurable results with clear ROI tracking</li>
              <li>Continuous optimization based on performance metrics</li>
              <li>Collaborative partnerships with transparent communication</li>
              <li>Long-term strategies for sustainable growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketingImpact

