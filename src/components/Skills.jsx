import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Skills() {
    return (
        <section id="skills" className="section skills" data-aos="fade-up">
            <h2>Skills and Tools Used</h2>
            <div className="skills-container">
                {/* Programming and Libraries */}
                <div className="programming-skills">
                    <h3>Programming/Library Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <i className="fab fa-html5 skill-icon" style={{ color: '#E34F26' }}></i>
                            <p>HTML5</p>
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-css3-alt skill-icon" style={{ color: '#1572B6' }}></i>
                            <p>CSS3</p>
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-js skill-icon" style={{ color: '#F7DF1E' }}></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-item">
                            <img src={reactLogo} alt="React" className="skill-icon" style={{ width: '40px', height: '40px' }} />
                            <p>React</p>
                        </div>
                        <div className="skill-item">
                            <img src={viteLogo} alt="Vite" className="skill-icon" style={{ width: '40px', height: '40px' }} />
                            <p>Vite</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-coffee skill-icon" style={{ color: '#5382A1' }}></i>
                            <p>Java</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-code skill-icon" style={{ color: '#3776AB' }}></i>
                            <p>Python</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/flutter-icon.png" alt="Flutter" className="skill-icon" />
                            <p>Flutter</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/dart-icon.png" alt="Dart" className="skill-icon" />
                            <p>Dart</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/c++-icon.png" alt="C++" className="skill-icon" />
                            <p>C++</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-database skill-icon" style={{ color: '#4479A1' }}></i>
                            <p>MySQL</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/firebase-icon.png" alt="Firebase" className="skill-icon" />
                            <p>Firebase</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/php-icon.png" alt="PHP" className="skill-icon" />
                            <p>PHP</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/laravel-icon.png" alt="Laravel" className="skill-icon" />
                            <p>Laravel</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/reactnative-icon.png" alt="React Native" className="skill-icon" />
                            <p>React Native</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/springboot-icon.png" alt="Spring Boot" className="skill-icon" />
                            <p>Spring Boot</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/restapi-icon.png" alt="Rest API" className="skill-icon" />
                            <p>Rest APIs</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/bootstrap-icon.png" alt="Bootstrap" className="skill-icon" />
                            <p>Bootstrap 5</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-brain skill-icon" style={{ color: '#FF6F00' }}></i>
                            <p>YOLOv8</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-network-wired skill-icon" style={{ color: '#4CAF50' }}></i>
                            <p>EfficientNetB7</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-envelope-open-text skill-icon" style={{ color: '#E53935' }}></i>
                            <p>MailHog</p>
                            <p>Bootstrap 5</p>
                        </div>
                    </div>
                </div>

                {/* Tools and Design */}
                <div className="tools-skills">
                    <h3>Tools &amp; Design</h3>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <img src="/images/vscode-icon.png" alt="Visual Studio Code" className="skill-icon" />
                            <p>Visual Studio Code</p>
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-git-alt skill-icon" style={{ color: '#F05032' }}></i>
                            <p>Git</p>
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-github skill-icon" style={{ color: '#333' }}></i>
                            <p>GitHub</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/figma-icon.png" alt="Figma" className="skill-icon" />
                            <p>Figma</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/canva-icon.png" alt="Canva" className="skill-icon" />
                            <p>Canva</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-server skill-icon" style={{ color: '#FF6C37' }}></i>
                            <p>XAMPP</p>
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-google skill-icon" style={{ color: '#4285F4' }}></i>
                            <p>Google Workspace</p>
                        </div>
                        <div className="skill-item">
                            <img src="/images/virtualbox-icon.png" alt="VirtualBox" className="skill-icon" />
                            <p>Virtual Box</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
