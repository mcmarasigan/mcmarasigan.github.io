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
                }, 1000)
                return
            }
            if (isDeletingRef.current && charIndexRef.current === 0) {
                isDeletingRef.current = false
                descIndexRef.current = (descIndexRef.current + 1) % descriptions.length
                timeoutRef.current = setTimeout(type, 500)
                return
            }
            const speed = isDeletingRef.current ? 50 : 100
            timeoutRef.current = setTimeout(type, speed)
        }

        type()
        return () => clearTimeout(timeoutRef.current)
    }, [])

    return (
        <section id="home" className="hero">
            <div className="hero-content" data-aos="fade-right">
                <div className="avatar-container">
                    <img src="/profile.png" alt="Avatar" className="avatar" />
                </div>
                <h1>Hi! I&apos;m Clarissa,</h1>
                <p ref={typewriterRef} id="typewriter" className="subtitle"></p>

                <div className="info-block">
                    <p>&quot;I&apos;m passionate about creating solutions that make an impact, constantly learning and growing in the tech field.&quot;</p>
                    <div className="contact-info">
                        <div>
                            <i className="fas fa-map-marker-alt"></i> Caloocan City, Metro Manila, Philippines
                        </div>
                        <div>
                            <i className="fas fa-phone-alt"></i> (+63) 961 435 1790
                        </div>
                        <div>
                            <i className="fas fa-envelope"></i> maclarissamarasigan@gmail.com
                        </div>
                    </div>
                </div>

                <button className="btn" onClick={() => window.location.href = '/Ma_Clarissa_Marasigan_Resume.pdf'}>
                    Download Resume
                </button>
            </div>
        </section>
    )
}

export default Hero
