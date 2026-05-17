import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
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

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
