import { useState } from 'react'

const skillsData = {
    frontend: {
        title: 'Front-end',
        items: ['TypeScript', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Flutter', 'Dart', 'React Native', 'Bootstrap 5']
    },
    backend: {
        title: 'Back-end',
        items: ['Laravel', 'Spring Boot', 'PHP', 'Java', 'Python', 'MySQL', 'Firebase', 'Rest APIs', 'MailHog']
    },
    ml: {
        title: 'Machine Learning',
        items: ['YOLOv8', 'EfficientNetB7', 'Data Science', 'Image Classification', 'TensorFlow', 'Model Training']
    },
    tools: {
        title: 'Tools & Design',
        items: ['Figma', 'Git', 'GitHub', 'VS Code', 'Canva', 'XAMPP', 'VirtualBox', 'Google Workspace']
    }
}

function About() {
    const [activeTab, setActiveTab] = useState('frontend')

    return (
        <section id="about" className="about-section">
            <style>{`
                .about-section {
                    width: 100%;
                    padding: 120px 10%;
                    background: transparent !important;
                    position: relative;
                    overflow: hidden;
                    z-index: 2;
                }

                .about-container {
                    width: 100%;
                    max-width: 1300px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                    position: relative;
                    z-index: 5;
                }

                /* Background Circular Curve Decorator */
                .about-decor-circle {
                    position: absolute;
                    top: 15%;
                    right: 5%;
                    width: 500px;
                    height: 500px;
                    border: 1px solid rgba(187, 134, 252, 0.08);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 1;
                }

                body.light-mode .about-decor-circle {
                    border: 1px solid rgba(123, 44, 191, 0.05);
                }

                /* Top Layout: Category Indicator + Intro text */
                .about-top-grid {
                    display: grid;
                    grid-template-columns: 0.8fr 2.2fr;
                    gap: 40px;
                    width: 100%;
                    align-items: start;
                }

                .about-indicator {
                    font-size: 0.9rem;
                    font-family: 'Fira Code', monospace;
                    color: #bb86fc;
                    opacity: 0.8;
                    letter-spacing: 0.05em;
                    text-align: left;
                }

                body.light-mode .about-indicator {
                    color: #7b2cbf;
                }

                .about-intro-block {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    text-align: left;
                }

                .about-intro-title {
                    font-size: 2.1rem;
                    font-weight: 700;
                    line-height: 1.3;
                    color: #ffffff;
                    margin: 0;
                    letter-spacing: -0.015em;
                }

                body.light-mode .about-intro-title {
                    color: #2c2c2c;
                }

                .about-intro-title strong {
                    color: #bb86fc;
                }

                body.light-mode .about-intro-title strong {
                    color: #7b2cbf;
                }

                .about-intro-paragraph {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #b3b3b3;
                    margin: 0;
                    max-width: 90%;
                }

                body.light-mode .about-intro-paragraph {
                    color: #555555;
                }

                /* Bottom Layout: Skill Tabs (Left) + Portrait Frame (Right) */
                .about-bottom-grid {
                    display: grid;
                    grid-template-columns: 1.6fr 1.4fr;
                    gap: 60px;
                    width: 100%;
                    align-items: center;
                }

                /* Skills Tab Capsules */
                .about-skills-area {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 20px;
                    width: 100%;
                }

                .skill-category-card {
                    width: 100%;
                    max-width: 580px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(255, 255, 255, 0.005);
                    border-radius: 20px;
                    padding: 24px 30px;
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                }

                body.light-mode .skill-category-card {
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    background: rgba(0, 0, 0, 0.005);
                }

                .skill-category-card.active {
                    background: #ffffff !important;
                    border-color: #ffffff !important;
                    color: #121212 !important;
                    box-shadow: 0 15px 40px rgba(255, 255, 255, 0.1);
                    transform: scale(1.02);
                }

                body.light-mode .skill-category-card.active {
                    background: #7b2cbf !important;
                    border-color: #7b2cbf !important;
                    color: #ffffff !important;
                    box-shadow: 0 15px 40px rgba(123, 44, 191, 0.2);
                }

                .skill-card-header {
                    font-size: 1.35rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    transition: color 0.3s ease;
                }

                .skill-category-card.active .skill-card-header {
                    color: #121212;
                }

                body.light-mode .skill-category-card.active .skill-card-header {
                    color: #ffffff;
                }

                .skill-card-list {
                    font-size: 1.05rem;
                    line-height: 1.6;
                    color: #8a99ad;
                    transition: color 0.3s ease;
                }

                .skill-category-card.active .skill-card-list {
                    color: #4a4a4a;
                    font-weight: 500;
                }

                body.light-mode .skill-category-card.active .skill-card-list {
                    color: rgba(255, 255, 255, 0.9);
                }

                .skills-footnote {
                    font-size: 0.88rem;
                    font-style: italic;
                    color: #7a889b;
                    margin-top: 10px;
                    text-align: left;
                }

                /* Portrait Frame */
                .about-portrait-area {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    width: 100%;
                }

                .portrait-card {
                    width: 350px;
                    height: 480px;
                    border-radius: 28px;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.01);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
                    position: relative;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    /* Forces perfect sub-pixel rounded corners on WebKit browsers */
                    -webkit-backface-visibility: hidden;
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }

                body.light-mode .portrait-card {
                    border: 1px solid rgba(123, 44, 191, 0.08);
                    box-shadow: 0 25px 60px rgba(123, 44, 191, 0.05);
                }

                .portrait-card:hover {
                    transform: translateY(-8px) rotate(1deg);
                    border-color: rgba(187, 134, 252, 0.3);
                    box-shadow: 0 35px 70px rgba(187, 134, 252, 0.15);
                }

                body.light-mode .portrait-card:hover {
                    border-color: rgba(123, 44, 191, 0.3);
                    box-shadow: 0 35px 70px rgba(123, 44, 191, 0.1);
                }

                .portrait-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    /* Restored full, beautiful natural color */
                    filter: none;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    -webkit-backface-visibility: hidden;
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }

                .portrait-card:hover .portrait-img {
                    transform: scale(1.03);
                }

                /* Responsive Adjustments */
                @media (max-width: 991px) {
                    .about-top-grid {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }

                    .about-bottom-grid {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }

                    .about-portrait-area {
                        order: -1; /* Place portrait above tabs on tablet/mobile! */
                    }

                    .portrait-card {
                        width: 290px;
                        height: 390px;
                    }
                }

                @media (max-width: 768px) {
                    .about-section {
                        padding: 80px 6%;
                    }

                    .about-intro-title {
                        font-size: 1.65rem;
                    }

                    .about-intro-paragraph {
                        max-width: 100%;
                        font-size: 0.98rem;
                    }

                    .skill-category-card {
                        padding: 18px 22px;
                    }

                    .skill-card-header {
                        font-size: 1.15rem;
                    }

                    .skill-card-list {
                        font-size: 0.92rem;
                    }
                }
            `}</style>

            <div className="about-decor-circle"></div>

            <div className="about-container">
                {/* 1. Top Section: Category & Bio */}
                <div className="about-top-grid" data-aos="fade-up">
                    <div className="about-indicator">... /About me ...</div>
                    <div className="about-intro-block">
                        <h2 className="about-intro-title">
                            Hi! I&apos;m a <strong>Computer Science graduate specializing in Data Science</strong>, passionate about building Technical Innovation with real-world usability.
                        </h2>
                        <p className="about-intro-paragraph">
                            My professional experience includes working as a <strong>Web Developer at Moodlearning (UP Diliman)</strong>, where I developed government web systems using Laravel, Tailwind, and Vite, and serving as a <strong>QA Tester for AgentGenius AI</strong> documenting bugs across B2B SaaS platforms.
                        </p>
                    </div>
                </div>

                {/* 2. Bottom Section: Skill Tab Capsules (Left) & Portrait Frame (Right) */}
                <div className="about-bottom-grid">
                    {/* Skills tab list */}
                    <div className="about-skills-area" data-aos="fade-right">
                        {Object.entries(skillsData).map(([key, cat]) => (
                            <div
                                key={key}
                                className={`skill-category-card ${activeTab === key ? 'active' : ''}`}
                                onClick={() => setActiveTab(key)}
                            >
                                <div className="skill-card-header">{cat.title}</div>
                                <div className="skill-card-list">
                                    {activeTab === key ? (
                                        // Show detailed list inside the active tab
                                        cat.items.join('  /  ')
                                    ) : (
                                        // Show truncated preview for clean border outlines
                                        cat.items.slice(0, 4).join('  /  ') + ' ...'
                                    )}
                                </div>
                            </div>
                        ))}
                        <p className="skills-footnote">Some of my favorite technologies, topics, or tools that I worked with.</p>
                    </div>

                    {/* Portrait card side */}
                    <div className="about-portrait-area" data-aos="fade-left">
                        <div className="portrait-card">
                            <img src="/profile.png" alt="Clarissa Marasigan Portrait" className="portrait-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
