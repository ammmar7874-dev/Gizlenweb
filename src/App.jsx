import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceGrowth from './components/ServiceGrowth'
import Expertise from './components/Expertise'
import ExpertConsulting from './components/ExpertConsulting'
import Partners from './components/Partners'
import HelpingBusinesses from './components/HelpingBusinesses'
import MarketingImpact from './components/MarketingImpact'
import WhatToExpect from './components/WhatToExpect'
import WhatWeOffer from './components/WhatWeOffer'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Add smooth fade-in animation on page load
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero />
      <ServiceGrowth />
      <Expertise />
      <ExpertConsulting />
      <Partners />
      <HelpingBusinesses />
      <MarketingImpact />
      <WhatToExpect />
      <WhatWeOffer />
      <Footer />
    </div>
  )
}

export default App

