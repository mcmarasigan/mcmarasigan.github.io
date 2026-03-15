function Contact() {
    return (
        <section id="contact" className="section contact" data-aos="fade-up">
            <h2>Contact Me</h2>
            <p>Please fill out the form below to initiate discussing potential job opportunities.</p>

            <div className="contact-container">
                {/* Contact Form */}
                <form
                    action="https://formsubmit.co/maclarissamarasigan@gmail.com"
                    method="POST"
                    className="contact-form"
                >
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" className="btn">Submit</button>
                </form>

                {/* Social Media Links */}
                <div className="social-media">
                    <p>Or message me through social media accounts</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/ssrlcrm" target="_blank" rel="noreferrer" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/ssrlcrm" target="_blank" rel="noreferrer" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ma-clarissa-marasigan-164576288/" target="_blank" rel="noreferrer" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/mcmarasigan" target="_blank" rel="noreferrer" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
