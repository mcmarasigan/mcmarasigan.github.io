import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [selectedInterest, setSelectedInterest] = useState('Starter Website (from ₱12k)')

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1200,
        once: false,
        offset: 200,
      })
    }

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'dark'
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode')
    }
  }, [])

  const handleSelectPackage = (interestVal) => {
    setSelectedInterest(interestVal)
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services onSelectPackage={handleSelectPackage} />
      <Contact interestedIn={selectedInterest} setInterestedIn={setSelectedInterest} />
      <Footer />
    </>
  )
}

export default App
