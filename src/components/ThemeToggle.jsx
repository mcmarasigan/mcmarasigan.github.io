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
            className="theme-toggle-btn"
            onClick={() => setIsLight((prev) => !prev)}
            aria-label="Toggle Theme"
        >
            <style>{`
                .theme-toggle-btn {
                    background: transparent;
                    border: none;
                    color: #bb86fc;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    outline: none;
                    padding: 0;
                }

                .theme-toggle-btn:hover {
                    background: rgba(187, 134, 252, 0.12);
                    color: #bb86fc;
                    transform: rotate(25deg) scale(1.1);
                }

                body.light-mode .theme-toggle-btn {
                    color: #7b2cbf;
                }

                body.light-mode .theme-toggle-btn:hover {
                    background: rgba(123, 44, 191, 0.08);
                    color: #7b2cbf;
                    transform: rotate(25deg) scale(1.1);
                }

                .theme-toggle-btn svg {
                    width: 20px;
                    height: 20px;
                    stroke-width: 2.3;
                    fill: none;
                    stroke: currentColor;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    transition: transform 0.3s ease;
                }

                @media (max-width: 768px) {
                    .theme-toggle-btn {
                        margin-left: 0;
                        margin-top: 15px;
                        width: 48px;
                        height: 48px;
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                    }
                    
                    .theme-toggle-btn svg {
                        width: 22px;
                        height: 22px;
                    }
                    
                    body.light-mode .theme-toggle-btn {
                        background: rgba(0, 0, 0, 0.03);
                        border: 1px solid rgba(0, 0, 0, 0.06);
                    }
                }
            `}</style>
            {isLight ? (
                /* Sleek Moon Outline SVG */
                <svg viewBox="0 0 24 24">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
            ) : (
                /* Sleek Sun Outline SVG */
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
            )}
        </button>
    )
}

export default ThemeToggle
