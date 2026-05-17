import { useState } from 'react'

const featuredSlides = [
    {
        title: "Lumière E-Commerce",
        desc: "A full-stack minimalist online store built with React and Laravel. Features dynamic product browsing, secure cart management, and seamless backend API controls.",
        tag: "React & Laravel",
        img: "/ecommerce/ecommerce-screenshot1.png",
        link: "#showcase"
    },
    {
        title: "Gastos Budget Tracker",
        desc: "A personal expense advisor built with React and Supabase, leveraging the Google Gemini API for natural-language logging and automated budget advice.",
        tag: "AI & Supabase",
        img: "/gastos/logo.png",
        link: "#showcase"
    },
    {
        title: "FRESHEVAL Scanner",
        desc: "An AI-powered Flutter application for vegetable freshness evaluation, powered by trained YOLOv8 and EfficientNetB7 computer vision classification models.",
        tag: "Flutter & YOLOv8",
        img: "/fresh-eval/fresheval-thumbnail.png",
        link: "#showcase"
    }
]

function Hero() {
    const [activeIdx, setActiveIdx] = useState(1)

    const handleNext = () => {
        setActiveIdx((prev) => (prev + 1) % featuredSlides.length)
    }

    const handlePrev = () => {
        setActiveIdx((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length)
    }

    const scrollToProjects = (e) => {
        e.preventDefault()
        const el = document.querySelector('#showcase')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    // Get slides based on active index (left, center, right)
    const getSlideIndex = (offset) => {
        return (activeIdx + offset + featuredSlides.length) % featuredSlides.length
    }

    const leftSlide = featuredSlides[getSlideIndex(-1)]
    const activeSlide = featuredSlides[activeIdx]
    const rightSlide = featuredSlides[getSlideIndex(1)]

    return (
        <section id="home" className="hero-section">
            <style>{`
                .hero-section {
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 100px 10% 80px;
                    position: relative;
                    overflow: hidden;
                    z-index: 2;
                }

                .hero-section::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 180px;
                    background: linear-gradient(to bottom, rgba(18, 18, 18, 0), #121212) !important;
                    z-index: 1;
                    pointer-events: none;
                }

                body.light-mode .hero-section::after {
                    background: linear-gradient(to bottom, rgba(248, 244, 252, 0), #f8f4fc) !important;
                }

                .hero-container {
                    width: 100%;
                    max-width: 1300px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 40px;
                    position: relative;
                    z-index: 5;
                }

                /* Typographical Grid Layout */
                .hero-typographic {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 15px;
                }

                .hero-row-1 {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .hero-row-2 {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    flex-wrap: wrap;
                    gap: 30px;
                }

                .hero-text-huge {
                    font-size: 5.4rem;
                    font-weight: 800;
                    line-height: 0.95;
                    letter-spacing: -0.03em;
                    color: #ffffff;
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                }

                body.light-mode .hero-text-huge {
                    color: #2c2c2c;
                }

                .hero-text-gradient {
                    background: linear-gradient(135deg, #ffffff 25%, #bb86fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                body.light-mode .hero-text-gradient {
                    background: linear-gradient(135deg, #2c2c2c 30%, #7b2cbf 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .hero-description-block {
                    max-width: 520px;
                    font-size: 1.12rem;
                    line-height: 1.6;
                    color: #b3b3b3;
                    margin: 0;
                    font-weight: 400;
                    text-align: left;
                }

                body.light-mode .hero-description-block {
                    color: #555555;
                }

                /* Beautiful capsule button */
                .hero-capsule-btn {
                    display: inline-flex;
                    align-items: center;
                    background: #ffffff;
                    color: #121212;
                    border-radius: 100px;
                    padding: 8px 8px 8px 30px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.35rem;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.15);
                    height: 72px;
                }

                body.light-mode .hero-capsule-btn {
                    background: #7b2cbf;
                    color: #ffffff;
                    box-shadow: 0 10px 25px rgba(123, 44, 191, 0.2);
                }

                .hero-capsule-btn .btn-icon {
                    width: 56px;
                    height: 56px;
                    background: #121212;
                    color: #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 20px;
                    font-size: 1.5rem;
                    transition: transform 0.4s ease;
                }

                body.light-mode .hero-capsule-btn .btn-icon {
                    background: #ffffff;
                    color: #7b2cbf;
                }

                .hero-capsule-btn:hover {
                    transform: scale(1.03) translateY(-2px);
                    box-shadow: 0 15px 35px rgba(255, 255, 255, 0.25);
                }

                body.light-mode .hero-capsule-btn:hover {
                    box-shadow: 0 15px 35px rgba(123, 44, 191, 0.35);
                }

                .hero-capsule-btn:hover .btn-icon {
                    transform: rotate(-45deg);
                }

                /* Social Media Capsules Row */
                .hero-social-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-top: 15px;
                }

                .social-capsule {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    color: #e0e0e0;
                    padding: 10px 22px;
                    border-radius: 50px;
                    font-size: 0.92rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                body.light-mode .social-capsule {
                    background: rgba(0, 0, 0, 0.02);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    color: #3c3c3c;
                }

                .social-capsule:hover {
                    background: rgba(187, 134, 252, 0.12);
                    color: #bb86fc;
                    border-color: rgba(187, 134, 252, 0.25);
                    transform: translateY(-2px);
                }

                body.light-mode .social-capsule:hover {
                    background: rgba(123, 44, 191, 0.08);
                    color: #7b2cbf;
                    border-color: rgba(123, 44, 191, 0.2);
                }

                /* Premium Preview Slider Section */
                .hero-slider-section {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    margin-top: 50px;
                }

                .hero-slider-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    gap: 40px;
                    position: relative;
                }

                .slider-side-card {
                    flex: 0.6;
                    background: rgba(255, 255, 255, 0.005);
                    border: 1px solid rgba(255, 255, 255, 0.03);
                    border-radius: 20px;
                    padding: 25px;
                    height: 180px;
                    opacity: 0.12;
                    pointer-events: none;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    overflow: hidden;
                }

                .slider-side-card h4 {
                    font-size: 1.2rem;
                    color: #ffffff;
                    margin: 0;
                }

                body.light-mode .slider-side-card h4 {
                    color: #2c2c2c;
                }

                .slider-active-card {
                    flex: 2.2;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 24px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 28px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    min-height: 230px;
                }

                body.light-mode .slider-active-card {
                    background: rgba(255, 255, 255, 0.55);
                    border: 1px solid rgba(123, 44, 191, 0.08);
                    box-shadow: 0 20px 50px rgba(123, 44, 191, 0.04);
                }

                .slider-img-wrapper {
                    flex: 1.1;
                    height: 180px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(255, 255, 255, 0.02);
                }

                body.light-mode .slider-img-wrapper {
                    border: 1px solid rgba(123, 44, 191, 0.08);
                }

                .slider-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .slider-info {
                    flex: 1.4;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                }

                .slider-card-tag {
                    font-size: 0.74rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #bb86fc;
                    letter-spacing: 0.08em;
                    margin-bottom: 8px;
                }

                body.light-mode .slider-card-tag {
                    color: #7b2cbf;
                }

                .slider-info h3 {
                    font-size: 1.45rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 8px 0;
                }

                body.light-mode .slider-info h3 {
                    color: #2c2c2c;
                }

                .slider-info p {
                    font-size: 0.92rem;
                    line-height: 1.5;
                    color: #a0a0a0;
                    margin: 0 0 18px 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                body.light-mode .slider-info p {
                    color: #555555;
                }

                .slider-action-btn {
                    background: #ffffff;
                    color: #121212;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.3s ease;
                }

                body.light-mode .slider-action-btn {
                    background: #7b2cbf;
                    color: #ffffff;
                }

                .slider-action-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
                }

                body.light-mode .slider-action-btn:hover {
                    box-shadow: 0 6px 15px rgba(123, 44, 191, 0.2);
                }

                .slider-nav-arrows {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-top: 10px;
                }

                .slider-arrow {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                body.light-mode .slider-arrow {
                    background: rgba(0, 0, 0, 0.02);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    color: #3c3c3c;
                }

                .slider-arrow:hover {
                    background: #ffffff;
                    color: #121212;
                    transform: scale(1.05);
                }

                body.light-mode .slider-arrow:hover {
                    background: #7b2cbf;
                    color: #ffffff;
                }

                /* Responsive Adjustments */
                @media (max-width: 991px) {
                    .hero-section {
                        padding-top: 120px;
                    }

                    .hero-text-huge {
                        font-size: 4rem;
                    }

                    .slider-side-card {
                        display: none;
                    }

                    .slider-active-card {
                        flex: 1;
                    }
                }

                @media (max-width: 768px) {
                    .hero-section {
                        padding: 100px 6% 60px;
                    }

                    .hero-text-huge {
                        font-size: 2.8rem;
                    }

                    .hero-row-1, .hero-row-2 {
                        justify-content: flex-start;
                        gap: 15px;
                    }

                    .hero-description-block {
                        max-width: 100%;
                        font-size: 1.05rem;
                    }

                    .hero-capsule-btn {
                        height: 58px;
                        padding: 4px 4px 4px 18px;
                        font-size: 1.05rem;
                    }

                    .hero-capsule-btn .btn-icon {
                        width: 44px;
                        height: 44px;
                        font-size: 1.1rem;
                        margin-left: 12px;
                    }

                    .hero-social-row {
                        gap: 8px;
                    }

                    .social-capsule {
                        padding: 8px 16px;
                        font-size: 0.84rem;
                    }

                    .slider-active-card {
                        flex-direction: column;
                        padding: 18px;
                        align-items: stretch;
                        gap: 20px;
                    }

                    .slider-img-wrapper {
                        height: 160px;
                    }
                }
            `}</style>

            <div className="hero-container">
                {/* 1. Large Typographical Display Layout */}
                <div className="hero-typographic" data-aos="fade-up">
                    <div className="hero-row-1">
                        <h1 className="hero-text-huge hero-text-gradient">Web Dev &</h1>
                        <a href="#showcase" className="hero-capsule-btn" onClick={scrollToProjects}>
                            <span>Projects</span>
                            <span className="btn-icon">→</span>
                        </a>
                    </div>
                    <div className="hero-row-2">
                        <p className="hero-description-block">
                            Hi, I&apos;m <strong>Clarissa</strong>. I build high-performance, maintainable web systems and AI-powered products, bridging the gap between clean engineering and gorgeous real-world usability.
                        </p>
                        <h1 className="hero-text-huge">QA Tester</h1>
                    </div>
                </div>

                {/* 2. Social Media Capsules Row */}
                <div className="hero-social-row" data-aos="fade-up" data-aos-delay="150">
                    <a href="https://github.com/mcmarasigan" target="_blank" rel="noreferrer" className="social-capsule">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/ma-clarissa-marasigan-164576288/" target="_blank" rel="noreferrer" className="social-capsule">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                    <a href="https://wa.me/639614351790" target="_blank" rel="noreferrer" className="social-capsule">
                        <i className="fab fa-whatsapp"></i> WhatsApp / Viber
                    </a>
                    <a href="https://www.instagram.com/ssrlcrm" target="_blank" rel="noreferrer" className="social-capsule">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="/Ma_Clarissa_Marasigan_Resume.pdf" className="social-capsule" download>
                        <i className="fas fa-file-pdf"></i> Resume
                    </a>
                </div>

                {/* 3. Dynamic Featured Projects Preview Carousel */}
                <div className="hero-slider-section" data-aos="fade-up" data-aos-delay="250">
                    <div className="hero-slider-container">
                        {/* Left Card Preview */}
                        <div className="slider-side-card">
                            <span className="slider-card-tag">{leftSlide.tag}</span>
                            <h4>{leftSlide.title}</h4>
                        </div>

                        {/* Active Middle Card */}
                        <div className="slider-active-card">
                            <div className="slider-img-wrapper">
                                <img src={activeSlide.img} alt={activeSlide.title} className="slider-img" />
                            </div>
                            <div className="slider-info">
                                <span className="slider-card-tag">{activeSlide.tag}</span>
                                <h3>{activeSlide.title}</h3>
                                <p>{activeSlide.desc}</p>
                                <div className="slider-btn-row">
                                    <a href={activeSlide.link} className="slider-action-btn" onClick={scrollToProjects}>
                                        View Project <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Card Preview */}
                        <div className="slider-side-card">
                            <span className="slider-card-tag">{rightSlide.tag}</span>
                            <h4>{rightSlide.title}</h4>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="slider-nav-arrows">
                        <button className="slider-arrow" onClick={handlePrev} aria-label="Previous Slide">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button className="slider-arrow" onClick={handleNext} aria-label="Next Slide">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
