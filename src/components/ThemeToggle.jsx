import { useState, useEffect } from 'react'

function ThemeToggle() {
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light'
    })

    useEffect(() => {
        document.body.classList.toggle('light-mode', isLight)
        localStorage.setItem('theme', isLight ? 'light' : 'dark')
    }, [isLight])

    return (
        <button
            id="theme-toggle"
            className="floating-btn"
            onClick={() => setIsLight((prev) => !prev)}
        >
            {isLight ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}

export default ThemeToggle
