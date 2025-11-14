import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>SCZ.GLOBAL</h1>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </a>
          <a 
            href="#blog" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

