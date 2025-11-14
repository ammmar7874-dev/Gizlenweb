import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        })
      }
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
      return () => hero.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-image-wrapper">
        <div className="hero-image-placeholder">
          <div className="animated-background"></div>
          <div className="hero-overlay">
            <div className="hero-content" style={{
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
            }}>
              <div className="hero-text-container fade-in">
                <h1 className="hero-title">
                  <span className="title-line">Small Business</span>
                  <span className="title-line gradient-text">Consulting</span>
                </h1>
                <ul className="hero-services">
                  <li className="fade-in-delay-1">
                    <span className="service-icon">✨</span>
                    Web Design and Content
                  </li>
                  <li className="fade-in-delay-2">
                    <span className="service-icon">🎯</span>
                    Branding & Marketing
                  </li>
                  <li className="fade-in-delay-3">
                    <span className="service-icon">🚀</span>
                    Business Coaching & Training
                  </li>
                </ul>
                <button className="cta-button hero-cta fade-in-delay-4">
                  <span>Get Started</span>
                  <span className="button-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="diagonal-accent diagonal-accent-bottom"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      <div className="diagonal-accent diagonal-accent-right"></div>
    </section>
  )
}

export default Hero

