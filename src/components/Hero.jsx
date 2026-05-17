import { useEffect, useRef } from 'react'

const descriptions = [
    'a Computer Scientist',
    'a Problem Solver',
    'a Tech Enthusiast',
]

function Hero() {
    const typewriterRef = useRef(null)
    const descIndexRef = useRef(0)
    const charIndexRef = useRef(0)
    const isDeletingRef = useRef(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        function type() {
            const el = typewriterRef.current
            if (!el) return
            const current = descriptions[descIndexRef.current]
            charIndexRef.current += isDeletingRef.current ? -1 : 1
            el.textContent = current.slice(0, charIndexRef.current)

            if (!isDeletingRef.current && charIndexRef.current === current.length) {
                timeoutRef.current = setTimeout(() => {
                    isDeletingRef.current = true
                    type()
                }, 1200) // Pause when fully typed
                return
            }
            if (isDeletingRef.current && charIndexRef.current === 0) {
                isDeletingRef.current = false
                descIndexRef.current = (descIndexRef.current + 1) % descriptions.length
                timeoutRef.current = setTimeout(type, 400) // Pause before next word
                return
            }
            const speed = isDeletingRef.current ? 40 : 80
            timeoutRef.current = setTimeout(type, speed)
        }

        type()
        return () => clearTimeout(timeoutRef.current)
    }, [])

    return (
        <section id="home" className="hero" style={{ height: 'auto', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <style>{`
                .hero-wrapper {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    min-height: 100vh;
                    padding: 60px 10% 40px;
                    gap: 50px;
                    z-index: 2;
                    position: relative;
                    max-width: 1300px;
                    margin: 0 auto;
                    transform: translateY(-40px);
                }

                .hero-left {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: auto;
                    position: relative;
                }

                .hero-profile-image {
                    width: 350px;
                    height: 350px;
                    object-fit: cover;
                    border-radius: 50%;
                    border: 5px solid #bb86fc;
                    box-shadow: 0 0 25px rgba(187, 134, 252, 0.45), 0 0 50px rgba(187, 134, 252, 0.2);
                    z-index: 2;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .hero-profile-image:hover {
                    transform: scale(1.04);
                    box-shadow: 0 0 35px rgba(187, 134, 252, 0.7), 0 0 70px rgba(187, 134, 252, 0.35);
                }

                .hero-right {
                    flex: 1.2;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    text-align: left;
                    gap: 28px;
                }

                .hero-right-header {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .hero-greeting {
                    font-size: 1.25rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #bb86fc;
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                }

                .hero-name {
                    font-size: 4.8rem;
                    font-weight: 800;
                    line-height: 1.05;
                    margin: 0;
                    background: linear-gradient(135deg, #ffffff 20%, #bb86fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    letter-spacing: -0.02em;
                    font-family: 'Poppins', sans-serif;
                }

                .hero-code-card {
                    width: 100%;
                    max-width: 480px;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 14px;
                    padding: 20px 24px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                    font-family: 'Fira Code', 'Courier New', Courier, monospace;
                    font-size: 0.9rem;
                    line-height: 1.6;
                    transition: all 0.3s ease;
                }

                .hero-code-card:hover {
                    transform: translateY(-4px) scale(1.01);
                    border-color: rgba(187, 134, 252, 0.25);
                    box-shadow: 0 15px 40px rgba(187, 134, 252, 0.1);
                }

                .code-line {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .code-line.comment {
                    color: #7a889b;
                    font-style: italic;
                    margin-bottom: 6px;
                }

                .code-line.selector {
                    color: #bb86fc;
                    font-weight: 600;
                }

                .code-line.property {
                    padding-left: 20px;
                    color: #e0e0e0;
                }

                .code-line .value {
                    color: #bb86fc;
                    margin-left: 6px;
                    font-weight: 500;
                }

                .code-line .punctuation {
                    color: #ffffff;
                }

                .cursor {
                    color: #bb86fc;
                    font-weight: bold;
                    animation: blink 1s step-end infinite;
                    margin-left: 2px;
                }

                @keyframes blink {
                    50% { opacity: 0; }
                }

                .hero-cta {
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    width: 100%;
                }

                .hero-resume-btn {
                    padding: 14px 36px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #ffffff;
                    background: linear-gradient(135deg, #bb86fc 0%, #9d4edd 100%);
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(187, 134, 252, 0.3);
                    transition: all 0.3s ease;
                }

                .hero-resume-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(187, 134, 252, 0.5);
                }

                /* Responsiveness */
                @media (max-width: 991px) {
                    .hero-wrapper {
                        flex-direction: column;
                        padding-top: 85px;
                        text-align: center;
                        gap: 30px;
                        transform: translateY(-10px);
                    }
                    .hero-left {
                        height: auto;
                        width: 100%;
                        order: 1;
                        align-items: center;
                    }
                    .hero-profile-image {
                        width: 260px;
                        height: 260px;
                    }
                    .hero-right {
                        align-items: center;
                        text-align: center;
                        order: 2;
                        width: 100%;
                    }
                    .hero-greeting {
                        font-size: 1.05rem;
                        letter-spacing: 0.12em;
                    }
                    .hero-name {
                        font-size: 3.5rem;
                    }
                    .hero-code-card {
                        max-width: 100%;
                        text-align: left;
                    }
                    .code-line.property {
                        padding-left: 12px;
                    }
                    .hero-cta {
                        justify-content: center;
                    }
                }

                /* Hero Container clipping and sizing */
                .hero {
                    height: auto !important;
                    min-height: 100vh !important;
                    overflow: hidden !important;
                }

                .hero::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 150px;
                    background: linear-gradient(to bottom, rgba(18, 18, 18, 0), #121212) !important;
                    z-index: 1;
                    pointer-events: none;
                }

                body.light-mode .hero::before {
                    background: radial-gradient(circle, #e1d5f5, #f8f4fc, #cbf3f0) !important;
                }

                body.light-mode .hero::after {
                    background: linear-gradient(to bottom, rgba(248, 244, 252, 0), #f8f4fc) !important;
                }

                body.light-mode .hero-profile-image {
                    border-color: #7b2cbf;
                    box-shadow: 0 0 25px rgba(123, 44, 191, 0.4), 0 0 50px rgba(123, 44, 191, 0.15);
                }

                body.light-mode .hero-profile-image:hover {
                    box-shadow: 0 0 35px rgba(123, 44, 191, 0.65), 0 0 70px rgba(123, 44, 191, 0.3);
                }

                body.light-mode .hero-greeting {
                    color: #7b2cbf;
                }

                body.light-mode .hero-name {
                    background: linear-gradient(135deg, #2c2c2c 25%, #7b2cbf 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                body.light-mode .hero-code-card {
                    background: rgba(255, 255, 255, 0.85);
                    border: 1px solid rgba(123, 44, 191, 0.15);
                    box-shadow: 0 10px 30px rgba(123, 44, 191, 0.05);
                }

                body.light-mode .hero-code-card:hover {
                    border-color: rgba(123, 44, 191, 0.35);
                    box-shadow: 0 15px 40px rgba(123, 44, 191, 0.1);
                }

                body.light-mode .code-line.comment {
                    color: #6a737d;
                }

                body.light-mode .code-line.selector {
                    color: #7b2cbf;
                }

                body.light-mode .code-line.property {
                    color: #2c2c2c;
                }

                body.light-mode .code-line .value {
                    color: #0077b6;
                }

                body.light-mode .code-line .punctuation {
                    color: #2c2c2c;
                }

                body.light-mode .cursor {
                    color: #7b2cbf;
                }

                body.light-mode .hero-resume-btn {
                    background: linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%);
                    color: #ffffff;
                    box-shadow: 0 4px 15px rgba(123, 44, 191, 0.25);
                }

                body.light-mode .hero-resume-btn:hover {
                    background: linear-gradient(135deg, #9d4edd 0%, #7b2cbf 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(123, 44, 191, 0.4);
                }

                /* Instant, high-reliability entrance animations for the cards */
                @keyframes heroFadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(25px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .hero-code-card-1 {
                    animation: heroFadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
                }

                .hero-code-card-2 {
                    animation: heroFadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
                }
            `}</style>
            <div className="hero-wrapper">
                {/* Left Portrait side */}
                <div className="hero-left" data-aos="fade-right">
                    <img src="/profile.png" alt="Clarissa Marasigan" className="hero-profile-image" />
                </div>

                {/* Right Text / Snippet side */}
                <div className="hero-right" data-aos="fade-left">
                    <div className="hero-right-header">
                        <span className="hero-greeting">HELLO, I&apos;M</span>
                        <h1 className="hero-name">Clarissa</h1>
                    </div>

                    {/* Self Introduction Code Block */}
                    <div className="hero-code-card hero-code-card-1">
                        <div className="code-line comment">// My self introduction</div>
                        <div className="code-line selector">Education <span className="punctuation">{'{'}</span></div>
                        <div className="code-line property">Degree: <span className="value">BS Computer Science</span>;</div>
                        <div className="code-line property">Specialization: <span className="value">Data Science</span>;</div>
                        <div className="code-line property">College: <span className="value">T.I.P. Quezon City</span>;</div>
                        <div className="code-line punctuation">{'}'}</div>
                    </div>

                    {/* What I Do Code Block with dynamic Typewriter */}
                    <div className="hero-code-card hero-code-card-2">
                        <div className="code-line selector">.WhatIDo <span className="punctuation">{'{'}</span></div>
                        <div className="code-line property">Work: <span className="value">Web Dev & QA Tester</span>;</div>
                        <div className="code-line property">LeadProject: <span className="value">FRESHEVAL</span>;</div>
                        <div className="code-line property">
                            Focus: <span className="value" ref={typewriterRef}></span><span className="cursor">|</span>;
                        </div>
                        <div className="code-line punctuation">{'}'}</div>
                    </div>

                    <div className="hero-cta">
                        <button className="hero-resume-btn" onClick={() => window.location.href = '/Ma_Clarissa_Marasigan_Resume.pdf'}>
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
