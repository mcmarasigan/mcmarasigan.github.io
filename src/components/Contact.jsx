import { useState } from 'react'

function Contact() {
    const [interestedIn, setInterestedIn] = useState('Both web design and development')
    const [acceptedPolicy, setAcceptedPolicy] = useState(false)
    const [policyOpen, setPolicyOpen] = useState(false)

    return (
        <section id="contact" className="contact-section">
            <style>{`
                .contact-section {
                    width: 100%;
                    padding: 80px 0 120px;
                    background: transparent !important;
                    position: relative;
                    overflow: hidden;
                    z-index: 2;
                }

                /* Two-Column Form Layout Grid */
                .contact-grid {
                    width: 100%;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 10%;
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 60px;
                    text-align: left;
                }

                /* Left Column: Details card */
                .contact-info-panel {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 15px;
                }

                .contact-pre-title {
                    font-size: 0.88rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    color: #bb86fc;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    text-transform: uppercase;
                }

                body.light-mode .contact-pre-title {
                    color: #7b2cbf;
                }

                .contact-title {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: #ffffff;
                    margin: 0 0 10px 0;
                    letter-spacing: -0.02em;
                }

                body.light-mode .contact-title {
                    color: #2c2c2c;
                }

                .contact-subtitle {
                    font-size: 1.08rem;
                    line-height: 1.6;
                    color: #a0a0a0;
                    margin: 0;
                }

                body.light-mode .contact-subtitle {
                    color: #555555;
                }

                /* Right Column: Minimalist Form */
                .contact-form-panel {
                    width: 100%;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    width: 100%;
                }

                .form-row-two-col {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    width: 100%;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                    width: 100%;
                    position: relative;
                }

                .form-group label {
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: #a0a0a0;
                    letter-spacing: 0.03em;
                    transition: color 0.3s ease;
                }

                body.light-mode .form-group label {
                    color: #666666;
                }

                .form-group-input {
                    width: 100%;
                    border: none;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                    background: transparent;
                    padding: 10px 0;
                    font-size: 1.05rem;
                    color: #ffffff;
                    outline: none;
                    transition: all 0.3s ease;
                }

                body.light-mode .form-group-input {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
                    color: #2c2c2c;
                }

                .form-group-input:focus {
                    border-bottom-color: #bb86fc;
                }

                body.light-mode .form-group-input:focus {
                    border-bottom-color: #7b2cbf;
                }

                /* Custom dropdown select */
                .form-group-select {
                    width: 100%;
                    border: none;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                    background: transparent;
                    padding: 10px 0;
                    font-size: 1.05rem;
                    color: #ffffff;
                    outline: none;
                    cursor: pointer;
                    appearance: none;
                    -webkit-appearance: none;
                    transition: all 0.3s ease;
                }

                body.light-mode .form-group-select {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
                    color: #2c2c2c;
                }

                .form-group-select:focus {
                    border-bottom-color: #bb86fc;
                }

                body.light-mode .form-group-select:focus {
                    border-bottom-color: #7b2cbf;
                }

                /* Crucial visible options fix to ensure dropdown list items have high contrast */
                .form-group-select option {
                    background-color: #1e1e1e;
                    color: #ffffff;
                    padding: 10px;
                }

                body.light-mode .form-group-select option {
                    background-color: #ffffff;
                    color: #2c2c2c;
                }

                .select-wrapper {
                    width: 100%;
                    position: relative;
                }

                .select-wrapper::after {
                    content: '▼';
                    font-size: 0.75rem;
                    color: #a0a0a0;
                    position: absolute;
                    right: 5px;
                    bottom: 14px;
                    pointer-events: none;
                }

                body.light-mode .select-wrapper::after {
                    color: #666666;
                }

                /* Textarea */
                .form-group-textarea {
                    width: 100%;
                    border: none;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                    background: transparent;
                    padding: 10px 0;
                    font-size: 1.05rem;
                    color: #ffffff;
                    outline: none;
                    resize: none;
                    min-height: 100px;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }

                body.light-mode .form-group-textarea {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
                    color: #2c2c2c;
                }

                .form-group-textarea:focus {
                    border-bottom-color: #bb86fc;
                }

                body.light-mode .form-group-textarea:focus {
                    border-bottom-color: #7b2cbf;
                }

                /* Checkbox custom container */
                .form-checkbox-container {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    user-select: none;
                    margin-top: 10px;
                }

                .checkbox-custom-input {
                    appearance: none;
                    width: 20px !important;
                    height: 20px !important;
                    flex-shrink: 0 !important;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                    outline: none;
                    background: transparent;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                body.light-mode .checkbox-custom-input {
                    border: 1px solid rgba(0, 0, 0, 0.2);
                }

                .checkbox-custom-input:checked {
                    background: #bb86fc;
                    border-color: #bb86fc;
                }

                body.light-mode .checkbox-custom-input:checked {
                    background: #7b2cbf;
                    border-color: #7b2cbf;
                }

                .checkbox-custom-input:checked::before {
                    content: '✓';
                    color: #ffffff;
                    font-size: 0.85rem;
                    font-weight: bold;
                }

                .checkbox-label {
                    font-size: 0.95rem;
                    color: #a0a0a0;
                }

                body.light-mode .checkbox-label {
                    color: #555555;
                }

                .checkbox-label a {
                    color: #bb86fc;
                    text-decoration: underline;
                    cursor: pointer;
                }

                body.light-mode .checkbox-label a {
                    color: #7b2cbf;
                }

                /* Submit Action Button */
                .form-submit-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #bb86fc 0%, #9d4edd 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 50px;
                    padding: 14px 36px;
                    font-size: 1.05rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 8px 24px rgba(187, 134, 252, 0.25);
                    align-self: flex-start;
                    gap: 12px;
                }

                body.light-mode .form-submit-btn {
                    background: linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%);
                    box-shadow: 0 8px 24px rgba(123, 44, 191, 0.2);
                }

                .form-submit-btn:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 12px 32px rgba(187, 134, 252, 0.45);
                    background: linear-gradient(135deg, #9d4edd 0%, #bb86fc 100%);
                }

                body.light-mode .form-submit-btn:hover {
                    box-shadow: 0 12px 32px rgba(123, 44, 191, 0.35);
                    background: linear-gradient(135deg, #9d4edd 0%, #7b2cbf 100%);
                }

                .form-submit-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                    box-shadow: none;
                }

                .form-submit-btn .btn-arrow-badge {
                    width: 28px;
                    height: 28px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    transition: transform 0.3s ease;
                }

                .form-submit-btn:hover .btn-arrow-badge {
                    transform: rotate(45deg);
                }

                /* Glassmorphic Privacy Modal */
                .privacy-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.65);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    animation: modalFadeIn 0.3s ease;
                }

                .privacy-modal-card {
                    width: 90%;
                    max-width: 550px;
                    background: rgba(30, 30, 30, 0.85);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 35px;
                    text-align: left;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
                    position: relative;
                    animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                body.light-mode .privacy-modal-card {
                    background: rgba(255, 255, 255, 0.95);
                    border: 1px solid rgba(123, 44, 191, 0.1);
                    box-shadow: 0 25px 50px rgba(123, 44, 191, 0.1);
                }

                .privacy-modal-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin: 0 0 15px 0;
                    letter-spacing: -0.01em;
                }

                body.light-mode .privacy-modal-title {
                    color: #2c2c2c;
                }

                .privacy-modal-content {
                    font-size: 1.02rem;
                    line-height: 1.65;
                    color: #d0d0d0;
                    margin-bottom: 25px;
                }

                body.light-mode .privacy-modal-content {
                    color: #555555;
                }

                .privacy-modal-close-btn {
                    background: linear-gradient(135deg, #bb86fc 0%, #9d4edd 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 50px;
                    padding: 10px 24px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                body.light-mode .privacy-modal-close-btn {
                    background: linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%);
                }

                .privacy-modal-close-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(187, 134, 252, 0.3);
                }

                @keyframes modalFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes modalSlideUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                /* Responsiveness */
                @media (max-width: 991px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }
                }

                @media (max-width: 768px) {
                    .contact-section {
                        padding: 70px 0 80px;
                    }
                    .contact-grid {
                        padding: 0 6%;
                    }
                    .contact-title {
                        font-size: 2.2rem;
                    }
                    .form-row-two-col {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }
            `}</style>

            {/* Two-Column grid layout */}
            <div className="contact-grid">
                {/* Left side details */}
                <div className="contact-info-panel" data-aos="fade-right">
                    <span className="contact-pre-title">✦ Contact me</span>
                    <h2 className="contact-title">Start Your Project</h2>
                    <p className="contact-subtitle">
                        I&apos;ll help you plan, develop, and deploy full-stack web applications and AI solutions that deliver actual results.
                    </p>
                </div>

                {/* Right side form */}
                <div className="contact-form-panel" data-aos="fade-left">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="contact-form"
                    >
                        {/* Hidden Web3Forms Configuration */}
                        <input type="hidden" name="access_key" value="8730b9a0-8833-41ca-81a2-9bcfc73720b7" />
                        <input type="hidden" name="subject" value="New Portfolio Contact Submission!" />
                        <input type="hidden" name="from_name" value="MCMARASIGAN Portfolio" />
                        {/* Name & Email Address Row */}
                        <div className="form-row-two-col">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-group-input"
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-group-input"
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Dropdown Interest Selection */}
                        <div className="form-group">
                            <label>I am interested in</label>
                            <div className="select-wrapper">
                                <select
                                    name="interest"
                                    className="form-group-select"
                                    value={interestedIn}
                                    onChange={(e) => setInterestedIn(e.target.value)}
                                >
                                    <option value="Both web design and development">Both web design and development</option>
                                    <option value="Frontend Development">Frontend Development</option>
                                    <option value="Backend Development & Databases">Backend Development & Databases</option>
                                    <option value="QA Manual & Automation Testing">QA Manual & Automation Testing</option>
                                    <option value="AI & Machine Learning Integrations">AI & Machine Learning Integrations</option>
                                </select>
                            </div>
                        </div>

                        {/* Textarea details */}
                        <div className="form-group">
                            <label>Tell me about your project</label>
                            <textarea
                                name="message"
                                className="form-group-textarea"
                                required
                                placeholder="Describe your goals, requirements, or timeline..."
                            ></textarea>
                        </div>

                        {/* Custom Policy Checkbox */}
                        <label className="form-checkbox-container">
                            <input
                                type="checkbox"
                                className="checkbox-custom-input"
                                checked={acceptedPolicy}
                                onChange={(e) => setAcceptedPolicy(e.target.checked)}
                                required
                            />
                            <span className="checkbox-label">
                                By submitting this form I accept the <a onClick={(e) => { e.preventDefault(); setPolicyOpen(true); }}>Privacy Policy</a> of this site.
                            </span>
                        </label>

                        {/* Signature Neon Purple gradient button with arrow badge */}
                        <button
                            type="submit"
                            className="form-submit-btn"
                            disabled={!acceptedPolicy}
                        >
                            <span>Send Project Details</span>
                            <span className="btn-arrow-badge">↗</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Glassmorphic Privacy Policy Modal */}
            {policyOpen && (
                <div className="privacy-modal-overlay" onClick={() => setPolicyOpen(false)}>
                    <div className="privacy-modal-card" onClick={(e) => e.stopPropagation()}>
                        <h3 className="privacy-modal-title">Privacy Policy</h3>
                        <div className="privacy-modal-content">
                            <p style={{ margin: '0 0 15px' }}>
                                We value and protect your data. All information submitted through this form (such as your name, email address, and project details) is handled securely and in strict confidence.
                            </p>
                            <p style={{ margin: 0 }}>
                                Your details are used solely to communicate with you about your inquiry, potential projects, or collaboration opportunities. We will never share, sell, or distribute your personal information to third-party services.
                            </p>
                        </div>
                        <button className="privacy-modal-close-btn" onClick={() => setPolicyOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Contact
