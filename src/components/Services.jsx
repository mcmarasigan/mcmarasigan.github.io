function Services({ onSelectPackage }) {
    const packages = [
        {
            id: 'starter',
            name: 'Starter Website',
            tagline: 'Personal portfolio, landing page, or small business showcase',
            price: '12,000',
            range: '₱12,000 – ₱20,000',
            priceDriver: 'Varies with page count & custom graphics',
            timeline: '2 – 3 Weeks',
            interestValue: 'Starter Website (from ₱12k)',
            featured: false,
            badge: null,
            proof: null,
            features: [
                'Up to 5 custom responsive pages',
                'Mobile, tablet & desktop optimized',
                'Contact form with email delivery',
                'Basic SEO & fast performance',
                'Deployment & DNS setup assistance',
                '1 revision round',
                'Handover documentation'
            ]
        },
        {
            id: 'business',
            name: 'Business System',
            tagline: 'Online ordering, pre-order site, booking, or product catalog',
            price: '45,000',
            range: '₱45,000 – ₱75,000',
            priceDriver: 'Varies with payment gateway & admin workflows',
            timeline: '6 – 8 Weeks',
            interestValue: 'Business Website with Admin (from ₱45k)',
            featured: true,
            badge: 'Most Popular',
            proof: {
                label: 'Live demo',
                name: 'TinyBaker PH',
                link: 'https://tinybakerph.vercel.app/'
            },
            features: [
                'Full-stack Laravel + Vue 3 / React',
                'Dedicated admin dashboard (/admin)',
                'Product & order management workflows',
                'Order status & automated email alerts',
                'Secure database & authentication',
                '2 revision rounds',
                '2 weeks post-launch bug fixes & support'
            ]
        },
        {
            id: 'mobile',
            name: 'Android Mobile App',
            tagline: 'Native-performance Android app with modern Flutter architecture',
            price: '60,000',
            range: '₱60,000 – ₱90,000',
            priceDriver: 'Varies with API depth, offline mode & auth flows',
            timeline: '6 – 8 Weeks',
            interestValue: 'Android Mobile App - Flutter (from ₱60k)',
            featured: false,
            badge: null,
            proof: {
                label: 'Stack like',
                name: 'SafeSpace & FreshEval',
                link: '#showcase'
            },
            features: [
                'Built with Flutter & Dart (Android focus)',
                'Firebase real-time DB or REST API integration',
                'User authentication & account profile flows',
                'Push notifications setup',
                'Production APK & Google Play App Bundle (.aab)',
                'Google Play Store submission assistance',
                '2 revision rounds + 2 weeks post-launch support'
            ]
        },
        {
            id: 'custom',
            name: 'Custom System',
            tagline: 'POS, inventory, document management, auditable workflows',
            price: '100,000',
            range: 'Starting at ₱100,000+',
            priceDriver: 'Tailored to enterprise scope & hardware integrations',
            timeline: '3 – 4 Months',
            interestValue: 'Custom Enterprise / POS System (from ₱100k)',
            featured: false,
            badge: 'Enterprise',
            proof: null,
            features: [
                'Everything in Business + custom architecture',
                'Role-Based Access Control (RBAC) & audit logs',
                'QR code generation & sticker/receipt printing',
                'Automated Excel & PDF reporting tools',
                'Payment gateway integration (GCash, PayMongo, etc.)',
                'Admin/staff walkthrough & system training',
                '30 days dedicated post-launch support'
            ]
        }
    ]

    const processSteps = [
        {
            num: '01',
            title: 'Discovery & Scope',
            desc: 'Quick consultation to map out requirements, pages, and key milestones.'
        },
        {
            num: '02',
            title: 'Proposal & 50% Kickoff',
            desc: 'Clear agreement with a locked-in scope and timeline. Work starts upon deposit.'
        },
        {
            num: '03',
            title: 'Design & Build',
            desc: 'Continuous development with live staging previews and milestone check-ins.'
        },
        {
            num: '04',
            title: 'Testing & Revisions',
            desc: 'Cross-device QA testing, performance audit, and feedback implementation.'
        },
        {
            num: '05',
            title: 'Go-Live & Handover',
            desc: 'Final 50% balance at go-live. Domain linking, full credentials, and documentation.'
        }
    ]

    const handleQuoteClick = (interestVal) => {
        if (onSelectPackage) {
            onSelectPackage(interestVal)
        } else {
            const contactElem = document.querySelector('#contact')
            if (contactElem) {
                contactElem.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <section id="services" className="services-section">
            <style>{`
                .services-section {
                    width: 100%;
                    padding: 100px 10% 120px;
                    background: transparent !important;
                    position: relative;
                    overflow: hidden;
                    z-index: 2;
                }

                .services-container {
                    width: 100%;
                    max-width: 1300px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 70px;
                }

                /* Header */
                .services-header-block {
                    text-align: left;
                    max-width: 760px;
                }

                .services-pre-title {
                    font-size: 0.85rem;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #bb86fc;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 15px;
                }

                body.light-mode .services-pre-title {
                    color: #7b2cbf;
                }

                .services-title {
                    font-size: 3rem;
                    font-weight: 800;
                    line-height: 1.15;
                    color: #ffffff;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.02em;
                }

                body.light-mode .services-title {
                    color: #2c2c2c;
                }

                .services-subtitle {
                    font-size: 1.05rem;
                    line-height: 1.6;
                    color: #b3b3b3;
                    margin: 0;
                }

                body.light-mode .services-subtitle {
                    color: #555555;
                }

                /* Pricing Cards Grid */
                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                    align-items: stretch;
                }

                .pricing-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 32px 24px 28px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    backdrop-filter: blur(10px);
                    text-align: left;
                }

                body.light-mode .pricing-card {
                    background: #ffffff;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
                }

                .pricing-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(187, 134, 252, 0.35);
                    box-shadow: 0 15px 35px rgba(187, 134, 252, 0.12);
                }

                body.light-mode .pricing-card:hover {
                    border-color: rgba(123, 44, 191, 0.35);
                    box-shadow: 0 15px 35px rgba(123, 44, 191, 0.12);
                }

                /* Featured Card */
                .pricing-card.featured {
                    border-color: rgba(187, 134, 252, 0.55);
                    background: linear-gradient(180deg, rgba(187, 134, 252, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%);
                    box-shadow: 0 10px 40px rgba(187, 134, 252, 0.15);
                }

                body.light-mode .pricing-card.featured {
                    border-color: rgba(123, 44, 191, 0.5);
                    background: linear-gradient(180deg, rgba(123, 44, 191, 0.05) 0%, #ffffff 100%);
                    box-shadow: 0 10px 40px rgba(123, 44, 191, 0.12);
                }

                .pricing-badge {
                    position: absolute;
                    top: -12px;
                    right: 20px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 5px 12px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #bb86fc, #7b2cbf);
                    color: #ffffff;
                    box-shadow: 0 4px 15px rgba(187, 134, 252, 0.4);
                }

                .pricing-badge.enterprise {
                    background: rgba(255, 255, 255, 0.12);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: none;
                    color: #e0e0e0;
                }

                body.light-mode .pricing-badge.enterprise {
                    background: rgba(0, 0, 0, 0.06);
                    border-color: rgba(0, 0, 0, 0.12);
                    color: #333333;
                }

                .card-top {
                    margin-bottom: 24px;
                }

                .package-name {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 6px 0;
                }

                body.light-mode .package-name {
                    color: #1a1a1a;
                }

                .package-tagline {
                    font-size: 0.86rem;
                    color: #9e9e9e;
                    line-height: 1.45;
                    min-height: 38px;
                    margin: 0 0 16px 0;
                }

                body.light-mode .package-tagline {
                    color: #666666;
                }

                /* Proof link badge */
                .package-proof-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.76rem;
                    padding: 4px 10px;
                    border-radius: 8px;
                    background: rgba(187, 134, 252, 0.1);
                    border: 1px solid rgba(187, 134, 252, 0.25);
                    color: #bb86fc;
                    text-decoration: none;
                    margin-bottom: 16px;
                    transition: all 0.25s ease;
                }

                body.light-mode .package-proof-badge {
                    background: rgba(123, 44, 191, 0.07);
                    border-color: rgba(123, 44, 191, 0.2);
                    color: #7b2cbf;
                }

                .package-proof-badge:hover {
                    background: rgba(187, 134, 252, 0.2);
                    border-color: #bb86fc;
                    transform: translateX(2px);
                }

                .price-container {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    margin-bottom: 22px;
                }

                .price-header-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                }

                .price-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: #888888;
                }

                body.light-mode .price-label {
                    color: #777777;
                }

                .timeline-badge {
                    font-size: 0.76rem;
                    font-weight: 600;
                    color: #bb86fc;
                    background: rgba(187, 134, 252, 0.08);
                    padding: 3px 8px;
                    border-radius: 6px;
                    font-family: 'Fira Code', monospace;
                }

                body.light-mode .timeline-badge {
                    color: #7b2cbf;
                    background: rgba(123, 44, 191, 0.08);
                }

                .price-amount {
                    font-size: 2.1rem;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: -0.02em;
                    display: flex;
                    align-items: baseline;
                    gap: 3px;
                }

                body.light-mode .price-amount {
                    color: #1a1a1a;
                }

                .price-currency {
                    font-size: 1.35rem;
                    font-weight: 700;
                    color: #bb86fc;
                }

                body.light-mode .price-currency {
                    color: #7b2cbf;
                }

                .price-range-info {
                    font-size: 0.8rem;
                    color: #b3b3b3;
                    font-weight: 500;
                }

                body.light-mode .price-range-info {
                    color: #444444;
                }

                .price-footnote {
                    font-size: 0.74rem;
                    color: #777777;
                    line-height: 1.35;
                    margin: 2px 0 0 0;
                }

                body.light-mode .price-footnote {
                    color: #888888;
                }

                .divider-line {
                    height: 1px;
                    background: rgba(255, 255, 255, 0.08);
                    width: 100%;
                    margin-top: 14px;
                    margin-bottom: 20px;
                }

                body.light-mode .divider-line {
                    background: rgba(0, 0, 0, 0.08);
                }

                /* Feature List */
                .features-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 28px 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    flex-grow: 1;
                }

                .feature-item {
                    font-size: 0.88rem;
                    color: #d1d1d1;
                    line-height: 1.4;
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                }

                body.light-mode .feature-item {
                    color: #444444;
                }

                .feature-check {
                    color: #bb86fc;
                    font-size: 0.85rem;
                    margin-top: 2px;
                    flex-shrink: 0;
                }

                body.light-mode .feature-check {
                    color: #7b2cbf;
                }

                /* CTA Button */
                .quote-btn {
                    width: 100%;
                    padding: 13px 20px;
                    border-radius: 12px;
                    font-size: 0.92rem;
                    font-weight: 600;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    background: rgba(255, 255, 255, 0.05);
                    color: #ffffff;
                }

                body.light-mode .quote-btn {
                    background: #f4f4f4;
                    border-color: rgba(0, 0, 0, 0.12);
                    color: #1a1a1a;
                }

                .quote-btn:hover {
                    background: rgba(187, 134, 252, 0.15);
                    border-color: #bb86fc;
                    color: #bb86fc;
                }

                body.light-mode .quote-btn:hover {
                    background: rgba(123, 44, 191, 0.08);
                    border-color: #7b2cbf;
                    color: #7b2cbf;
                }

                .quote-btn.featured-btn {
                    background: #bb86fc;
                    color: #121212;
                    border-color: #bb86fc;
                    font-weight: 700;
                }

                body.light-mode .quote-btn.featured-btn {
                    background: #7b2cbf;
                    color: #ffffff;
                    border-color: #7b2cbf;
                }

                .quote-btn.featured-btn:hover {
                    background: #a362f7;
                    border-color: #a362f7;
                    color: #ffffff;
                    box-shadow: 0 4px 15px rgba(187, 134, 252, 0.35);
                }

                body.light-mode .quote-btn.featured-btn:hover {
                    background: #6a24a6;
                    border-color: #6a24a6;
                }

                .timeline-disclaimer {
                    font-size: 0.84rem;
                    color: #888888;
                    margin-top: -30px;
                    text-align: left;
                }

                body.light-mode .timeline-disclaimer {
                    color: #666666;
                }

                /* Domain & Hosting Transparency Card */
                .policy-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 36px 40px;
                    text-align: left;
                }

                body.light-mode .policy-card {
                    background: #ffffff;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
                }

                .policy-header {
                    margin-bottom: 24px;
                }

                .policy-title {
                    font-size: 1.55rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 8px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                body.light-mode .policy-title {
                    color: #1a1a1a;
                }

                .policy-lead {
                    font-size: 0.96rem;
                    line-height: 1.6;
                    color: #b3b3b3;
                    margin: 0;
                    max-width: 900px;
                }

                body.light-mode .policy-lead {
                    color: #555555;
                }

                .policy-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-top: 24px;
                }

                .policy-item {
                    background: rgba(255, 255, 255, 0.015);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 14px;
                    padding: 20px 22px;
                }

                body.light-mode .policy-item {
                    background: #fafafa;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                }

                .policy-item-title {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #bb86fc;
                    margin: 0 0 8px 0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                body.light-mode .policy-item-title {
                    color: #7b2cbf;
                }

                .policy-item-desc {
                    font-size: 0.88rem;
                    line-height: 1.55;
                    color: #9e9e9e;
                    margin: 0;
                }

                body.light-mode .policy-item-desc {
                    color: #666666;
                }

                /* Process / How It Works */
                .process-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                    text-align: left;
                }

                .process-title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                }

                body.light-mode .process-title {
                    color: #1a1a1a;
                }

                .process-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 16px;
                }

                .process-step-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 16px;
                    padding: 22px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                body.light-mode .process-step-card {
                    background: #ffffff;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                }

                .step-number {
                    font-size: 1.4rem;
                    font-weight: 800;
                    font-family: 'Fira Code', monospace;
                    color: #bb86fc;
                    opacity: 0.9;
                }

                body.light-mode .step-number {
                    color: #7b2cbf;
                }

                .step-name {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                }

                body.light-mode .step-name {
                    color: #1a1a1a;
                }

                .step-desc {
                    font-size: 0.84rem;
                    line-height: 1.5;
                    color: #9e9e9e;
                    margin: 0;
                }

                body.light-mode .step-desc {
                    color: #666666;
                }

                /* Policy & Requirements Split Grid */
                .details-split-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                    text-align: left;
                }

                .detail-box {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 18px;
                    padding: 28px 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                body.light-mode .detail-box {
                    background: #ffffff;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                }

                .detail-box-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                body.light-mode .detail-box-title {
                    color: #1a1a1a;
                }

                .detail-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .detail-list li {
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: #b3b3b3;
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                }

                body.light-mode .detail-list li {
                    color: #555555;
                }

                .detail-bullet {
                    color: #bb86fc;
                    font-size: 0.8rem;
                    margin-top: 3px;
                }

                body.light-mode .detail-bullet {
                    color: #7b2cbf;
                }

                /* Responsive Breakpoints */
                @media (max-width: 1100px) {
                    .pricing-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .process-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .policy-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .services-section {
                        padding: 80px 6% 100px;
                    }
                    .services-title {
                        font-size: 2.2rem;
                    }
                    .pricing-grid {
                        grid-template-columns: 1fr;
                    }
                    .process-grid {
                        grid-template-columns: 1fr;
                    }
                    .details-split-grid {
                        grid-template-columns: 1fr;
                    }
                    .policy-card {
                        padding: 26px 22px;
                    }
                    .detail-box {
                        padding: 22px 20px;
                    }
                }
            `}</style>

            <div className="services-container">
                {/* Header */}
                <div className="services-header-block" data-aos="fade-up">
                    <span className="services-pre-title">✦ Services &amp; Pricing</span>
                    <h2 className="services-title">Transparent Packages for Your Next Project</h2>
                    <p className="services-subtitle">
                        From high-converting landing pages to full-scale web applications, Android mobile apps, and custom systems. Every project is built custom, documented, and delivered with clean code.
                    </p>
                </div>

                {/* 4 Pricing Cards */}
                <div className="pricing-grid">
                    {packages.map((pkg, idx) => (
                        <div
                            key={pkg.id}
                            className={`pricing-card ${pkg.featured ? 'featured' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {pkg.badge && (
                                <span className={`pricing-badge ${pkg.badge === 'Enterprise' ? 'enterprise' : ''}`}>
                                    {pkg.badge}
                                </span>
                            )}

                            <div>
                                <div className="card-top">
                                    <h3 className="package-name">{pkg.name}</h3>
                                    <p className="package-tagline">{pkg.tagline}</p>

                                    {pkg.proof && (
                                        <a
                                            href={pkg.proof.link}
                                            className="package-proof-badge"
                                            target={pkg.proof.link.startsWith('http') ? '_blank' : '_self'}
                                            rel="noopener noreferrer"
                                        >
                                            <span>📂</span>
                                            <span>{pkg.proof.label}: <strong>{pkg.proof.name}</strong> ↗</span>
                                        </a>
                                    )}

                                    <div className="price-container">
                                        <div className="price-header-row">
                                            <span className="price-label">Starting at</span>
                                            <span className="timeline-badge">⏱ {pkg.timeline}</span>
                                        </div>
                                        <div className="price-amount">
                                            <span className="price-currency">₱</span>
                                            <span>{pkg.price}</span>
                                        </div>
                                        <span className="price-range-info">Typical: {pkg.range}</span>
                                        <p className="price-footnote">{pkg.priceDriver}</p>
                                    </div>
                                    <div className="divider-line"></div>
                                </div>

                                <ul className="features-list">
                                    {pkg.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="feature-item">
                                            <span className="feature-check">✓</span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                type="button"
                                className={`quote-btn ${pkg.featured ? 'featured-btn' : ''}`}
                                onClick={() => handleQuoteClick(pkg.interestValue)}
                            >
                                <span>Get a Quote</span>
                                <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Timeline Clarification Note */}
                <p className="timeline-disclaimer" data-aos="fade-up">
                    * Estimated delivery timelines begin once all project requirements, branding assets, copy, and kickoff deposit are provided.
                </p>

                {/* Domain & Hosting Transparency Policy */}
                <div className="policy-card" data-aos="fade-up">
                    <div className="policy-header">
                        <h3 className="policy-title">
                            <span>🌐</span>
                            <span>Domain, Hosting &amp; Account Ownership</span>
                        </h3>
                        <p className="policy-lead">
                            To guarantee you maintain <strong>100% legal ownership</strong> of your digital assets, all domains, hosting servers, and developer accounts are registered directly under your name and credentials. You are never locked in—I manage the full DNS configuration, SSL setup, and deployment for you.
                        </p>
                    </div>

                    <div className="policy-grid">
                        <div className="policy-item">
                            <h4 className="policy-item-title">
                                <span>🏷️</span>
                                <span>Domain Name</span>
                            </h4>
                            <p className="policy-item-desc">
                                Registered in your own name and email (~₱600–900/year for <code>.com</code>, ~₱1,500/year for <code>.ph</code> via Namecheap, Hostinger, or dot.ph). You keep legal ownership.
                            </p>
                        </div>

                        <div className="policy-item">
                            <h4 className="policy-item-title">
                                <span>⚡</span>
                                <span>Web Hosting</span>
                            </h4>
                            <p className="policy-item-desc">
                                Static and Starter sites can be deployed <strong>free</strong> on Netlify or Vercel. Full-stack Laravel and custom systems use shared hosting or a VPS (~₱150–600/month) paid directly by you.
                            </p>
                        </div>

                        <div className="policy-item">
                            <h4 className="policy-item-title">
                                <span>📱</span>
                                <span>Google Play &amp; APIs</span>
                            </h4>
                            <p className="policy-item-desc">
                                Android apps require a Google Play Console account ($25 one-time registration under your own Google account). Payment gateways (GCash, PayMongo) and SMS services are billed directly at provider cost.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How We Work Process */}
                <div className="process-wrapper" data-aos="fade-up">
                    <h3 className="process-title">How the Process Works</h3>
                    <div className="process-grid">
                        {processSteps.map((step) => (
                            <div key={step.num} className="process-step-card">
                                <span className="step-number">{step.num}</span>
                                <h4 className="step-name">{step.title}</h4>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Requirements & Terms Split Grid */}
                <div className="details-split-grid" data-aos="fade-up">
                    {/* What I Need From You */}
                    <div className="detail-box">
                        <h4 className="detail-box-title">
                            <span>📋</span>
                            <span>What I Need From You</span>
                        </h4>
                        <ul className="detail-list">
                            <li>
                                <span className="detail-bullet">▸</span>
                                <span><strong>Branding &amp; Content:</strong> Text copy, logo assets, brand colors, and high-resolution images for your pages.</span>
                            </li>
                            <li>
                                <span className="detail-bullet">▸</span>
                                <span><strong>Decision-Maker:</strong> A designated point of contact for clear feedback, milestone approvals, and sign-offs.</span>
                            </li>
                            <li>
                                <span className="detail-bullet">▸</span>
                                <span><strong>50% Downpayment:</strong> An initial 50% deposit before kickoff to lock in your project schedule and sprint.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Terms & Payment Methods */}
                    <div className="detail-box">
                        <h4 className="detail-box-title">
                            <span>🛡️</span>
                            <span>Payment Terms &amp; Retainers</span>
                        </h4>
                        <ul className="detail-list">
                            <li>
                                <span className="detail-bullet">▸</span>
                                <span><strong>Accepted Payments:</strong> GCash, Maya, and Bank Transfer (BDO, BPI, UnionBank).</span>
                            </li>
                            <li>
                                <span className="detail-bullet">▸</span>
                                <span><strong>Payment Structure:</strong> 50% upfront deposit to initiate development, 50% final balance upon launch and handover.</span>
                            </li>
                            <li>
                                <span className="detail-bullet">▸</span>
                                <span><strong>Out-of-Scope Additions:</strong> Additional features or requests outside agreed scope are billed at ₱700/hr.</span>
                            </li>
                            <li>
                                <span className="detail-bullet">▸</span>
                                <span><strong>Tiered Maintenance Retainers:</strong>
                                    <br />• <strong>Basic Care (₱1,500/mo):</strong> Automated cloud backups, security patches, framework updates, 48-hr response.
                                    <br />• <strong>Priority Retainer (₱3,500/mo):</strong> Everything in Basic + 2 hours of monthly content/feature edits + 12-hr priority support.
                                </span>
                            </li>
                            <li>
                                <span className="detail-bullet">▸</span>
                                <span><strong>AI &amp; Smart Automation Add-On:</strong> Custom AI assistants, computer vision detection (YOLOv8), or automated document parsing available starting at +₱15,000.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
