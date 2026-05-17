function Footer() {
    const handleScroll = (e, id) => {
        e.preventDefault()
        const target = document.querySelector(id)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="footer-section">
            <style>{`
                .footer-section {
                    width: 100%;
                    padding: 80px 10% 40px;
                    background: rgba(10, 10, 10, 0.4) !important;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    position: relative;
                    overflow: hidden;
                    z-index: 2;
                }

                body.light-mode .footer-section {
                    background: rgba(248, 244, 252, 0.6) !important;
                    border-top: 1px solid rgba(0, 0, 0, 0.05);
                }

                /* Background Glow Aura (Upgraded) */
                .footer-glow-orb {
                    position: absolute;
                    bottom: -150px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 1200px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(187, 134, 252, 0.16) 0%, rgba(157, 78, 221, 0.05) 50%, rgba(0, 0, 0, 0) 75%);
                    border-radius: 50%;
                    filter: blur(20px);
                    pointer-events: none;
                    z-index: 1;
                }

                body.light-mode .footer-glow-orb {
                    background: radial-gradient(circle, rgba(123, 44, 191, 0.12) 0%, rgba(157, 78, 221, 0.04) 50%, rgba(0, 0, 0, 0) 75%);
                }

                .footer-container {
                    width: 100%;
                    max-width: 1300px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                    position: relative;
                    z-index: 5;
                }

                /* Top Layout Grid */
                .footer-top-grid {
                    display: grid;
                    grid-template-columns: 2.2fr 1fr 1.3fr;
                    gap: 40px;
                    text-align: left;
                    align-items: start;
                }

                /* Left Side: Headline & Button */
                .footer-headline-block {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 24px;
                }

                .footer-headline-block h3 {
                    font-size: 2.5rem;
                    font-weight: 800;
                    line-height: 1.15;
                    color: #ffffff;
                    margin: 0;
                    letter-spacing: -0.02em;
                    max-width: 90%;
                }

                body.light-mode .footer-headline-block h3 {
                    color: #2c2c2c;
                }

                /* Get in touch button */
                .footer-capsule-btn {
                    display: inline-flex;
                    align-items: center;
                    background: linear-gradient(135deg, #bb86fc 0%, #9d4edd 100%);
                    color: #ffffff;
                    border-radius: 100px;
                    padding: 8px 8px 8px 24px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.05rem;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 10px 25px rgba(187, 134, 252, 0.2);
                    height: 52px;
                }

                body.light-mode .footer-capsule-btn {
                    background: linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%);
                    box-shadow: 0 10px 25px rgba(123, 44, 191, 0.15);
                }

                .footer-capsule-btn .btn-arrow {
                    width: 36px;
                    height: 36px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 15px;
                    font-size: 0.95rem;
                    transition: transform 0.4s ease;
                }

                .footer-capsule-btn:hover {
                    transform: scale(1.02) translateY(-2px);
                    box-shadow: 0 15px 35px rgba(187, 134, 252, 0.35);
                }

                body.light-mode .footer-capsule-btn:hover {
                    box-shadow: 0 15px 35px rgba(123, 44, 191, 0.25);
                }

                .footer-capsule-btn:hover .btn-arrow {
                    transform: rotate(45deg);
                }

                /* Column Titles */
                .footer-col-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 20px 0;
                    letter-spacing: -0.01em;
                }

                body.light-mode .footer-col-title {
                    color: #2c2c2c;
                }

                /* Column Lists */
                .footer-links-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .footer-links-list li a {
                    color: #a0a0a0;
                    text-decoration: none;
                    font-size: 0.98rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                body.light-mode .footer-links-list li a {
                    color: #555555;
                }

                .footer-links-list li a:hover {
                    color: #bb86fc;
                    transform: translateX(4px);
                    display: inline-block;
                }

                body.light-mode .footer-links-list li a:hover {
                    color: #7b2cbf;
                }

                /* Contact System Items with Badges */
                .footer-contact-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #a0a0a0;
                    font-size: 0.98rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                body.light-mode .footer-contact-item {
                    color: #555555;
                }

                .footer-contact-item:hover {
                    color: #bb86fc;
                }

                body.light-mode .footer-contact-item:hover {
                    color: #7b2cbf;
                }

                .contact-badge-circle {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: #bb86fc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.88rem;
                    transition: all 0.3s ease;
                }

                body.light-mode .contact-badge-circle {
                    background: rgba(0, 0, 0, 0.02);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    color: #7b2cbf;
                }

                .footer-contact-item:hover .contact-badge-circle {
                    background: #bb86fc;
                    border-color: #bb86fc;
                    color: #121212;
                    transform: scale(1.08);
                }

                body.light-mode .footer-contact-item:hover .contact-badge-circle {
                    background: #7b2cbf;
                    border-color: #7b2cbf;
                    color: #ffffff;
                }

                /* Giant Faded Backdrop Text */
                .footer-backdrop-name {
                    font-size: 6.8rem;
                    font-weight: 900;
                    text-align: center;
                    text-transform: uppercase;
                    letter-spacing: -0.03em;
                    line-height: 0.85;
                    margin: 20px 0 -10px 0;
                    user-select: none;
                    pointer-events: none;
                    font-family: 'Poppins', sans-serif;
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.001) 90%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    color: transparent;
                    display: block;
                }

                body.light-mode .footer-backdrop-name {
                    background: linear-gradient(to bottom, rgba(123, 44, 191, 0.18) 0%, rgba(123, 44, 191, 0.001) 90%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    color: transparent;
                }

                /* Bottom copyright & socials bar */
                .footer-bottom-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 30px;
                    margin-top: 10px;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                body.light-mode .footer-bottom-bar {
                    border-top: 1px solid rgba(0, 0, 0, 0.05);
                }

                .footer-social-circles {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .footer-social-circle {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: #e0e0e0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                body.light-mode .footer-social-circle {
                    background: rgba(0, 0, 0, 0.02);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    color: #3c3c3c;
                }

                .footer-social-circle:hover {
                    background: #bb86fc;
                    border-color: #bb86fc;
                    color: #121212;
                    transform: translateY(-3px) scale(1.05);
                }

                body.light-mode .footer-social-circle:hover {
                    background: #7b2cbf;
                    border-color: #7b2cbf;
                    color: #ffffff;
                }

                .footer-copyright {
                    font-size: 0.88rem;
                    color: #808080;
                    font-weight: 500;
                }

                body.light-mode .footer-copyright {
                    color: #666666;
                }

                /* Responsiveness */
                @media (max-width: 991px) {
                    .footer-top-grid {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }
                    .footer-backdrop-name {
                        font-size: 4.8rem;
                    }
                }

                @media (max-width: 768px) {
                    .footer-section {
                        padding: 60px 6% 30px;
                    }
                    .footer-headline-block h3 {
                        font-size: 1.85rem;
                    }
                    .footer-backdrop-name {
                        font-size: 3.2rem;
                    }
                    .footer-bottom-bar {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        gap: 15px;
                    }
                }
            `}</style>

            <div className="footer-glow-orb"></div>

            <div className="footer-container">
                {/* 1. Top Section Grid */}
                <div className="footer-top-grid">
                    {/* Headline Hook */}
                    <div className="footer-headline-block" data-aos="fade-up">
                        <h3>Not just clean code,<br />real digital innovation.</h3>
                        <a href="#contact" className="footer-capsule-btn" onClick={(e) => handleScroll(e, '#contact')}>
                            <span>Start a Project</span>
                            <span className="btn-arrow">↗</span>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-col" data-aos="fade-up" data-aos-delay="100">
                        <h4 className="footer-col-title">Quick Links</h4>
                        <ul className="footer-links-list">
                            <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a></li>
                            <li><a href="#showcase" onClick={(e) => handleScroll(e, '#showcase')}>Projects</a></li>
                            <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact System */}
                    <div className="footer-links-col" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="footer-col-title">Reach Out</h4>
                        <ul className="footer-links-list">
                            <li>
                                <a href="mailto:maclarissamarasigan@gmail.com" className="footer-contact-item">
                                    <span className="contact-badge-circle"><i className="far fa-envelope"></i></span>
                                    <span>maclarissamarasigan@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ma-clarissa-marasigan-164576288/" target="_blank" rel="noreferrer" className="footer-contact-item">
                                    <span className="contact-badge-circle"><i className="fab fa-linkedin-in"></i></span>
                                    <span>Ma. Clarissa Marasigan</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/639614351790" target="_blank" rel="noreferrer" className="footer-contact-item">
                                    <span className="contact-badge-circle"><i className="fab fa-whatsapp"></i></span>
                                    <span>+63 961 435 1790 (WhatsApp / Viber)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2. Giant Backdrop Signature Text */}
                <div className="footer-backdrop-name" data-aos="zoom-in" data-aos-duration="1500">
                    MCMARASIGAN
                </div>

                {/* 3. Bottom Copyright Bar */}
                <div className="footer-bottom-bar">
                    {/* Social Circle Links */}
                    <div className="footer-social-circles">
                        <a href="https://github.com/mcmarasigan" target="_blank" rel="noreferrer" className="footer-social-circle">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ma-clarissa-marasigan-164576288/" target="_blank" rel="noreferrer" className="footer-social-circle">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://wa.me/639614351790" target="_blank" rel="noreferrer" className="footer-social-circle">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.instagram.com/ssrlcrm" target="_blank" rel="noreferrer" className="footer-social-circle">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    {/* Copyright Label */}
                    <div className="footer-copyright">
                        © 2026. MCMARASIGAN - All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
