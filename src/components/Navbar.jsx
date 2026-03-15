function Navbar() {
    const handleScroll = (e, id) => {
        e.preventDefault()
        const target = document.querySelector(id)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="header">
            <a href="#home" className="logo" onClick={(e) => handleScroll(e, '#home')}>
                Ma. Clarissa Marasigan
            </a>
            <nav className="navbar">
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
