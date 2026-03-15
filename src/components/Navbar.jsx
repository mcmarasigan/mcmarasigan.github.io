import { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleScroll = (e, id) => {
        e.preventDefault()
        setIsMenuOpen(false) // Close menu on click in mobile view
        const target = document.querySelector(id)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <a href="#home" className="logo" onClick={(e) => handleScroll(e, '#home')}>
                Ma. Clarissa Marasigan
            </a>

            <div className="hamburger" onClick={toggleMenu}>
                <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a></li>
                    <li><a href="#showcase" onClick={(e) => handleScroll(e, '#showcase')}>Project</a></li>
                    <li><a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills &amp; Tools</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
