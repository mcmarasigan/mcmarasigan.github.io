import { useState } from 'react'
import GalleryModal from './GalleryModal'

// Helper to generate image arrays
function genImgs(folder, prefix, count, ext) {
    return Array.from({ length: count }, (_, i) => `/${folder}/${prefix}${i + 1}.${ext}`)
}

const projects = [
    {
        title: 'Lumière E-Commerce',
        thumb: '/ecommerce/ecommerce-screenshot1.png',
        tag: 'Full-Stack Dev',
        desc: 'A full-stack minimalist e-commerce application built with React (frontend) and Laravel (backend). Features product browsing, cart management, and seamless backend API integration.',
        link: 'https://github.com/mcmarasigan/ecommerce',
        linkLabel: 'GitHub',
        images: genImgs('ecommerce', 'ecommerce-screenshot', 8, 'png'),
        captions: [
            'Storefront - Main page showcasing featured products and clean UI.',
            'Product Details - Detailed view of an individual product with descriptions.',
            'Shopping Cart - Seamless cart management for users.',
            'Checkout Process - Secure and straightforward checkout experience.',
            'User Dashboard - Account settings and order history.',
            'Login Page - Secure user authentication interface.',
            'Registration Page - Easy account creation for new customers.',
            'Admin Dashboard - Store management panel showing metrics, sales, and order status controls.',
        ],
    },
    {
        title: 'Gastos',
        thumb: '/gastos/logo.png',
        tag: 'AI & Full-Stack',
        desc: 'A personal expense tracker and budget advisor designed for Filipinos, built with React, Supabase, and the Google Gemini API. It features AI expense logging, a dynamic dashboard, and an AI budget advisor.',
        link: 'https://github.com/mcmarasigan/gastos',
        linkLabel: 'GitHub',
        images: genImgs('gastos', 'gastos-screenshot', 7, 'png'),
        captions: [
            'Login Page - Secure authentication to access your personal expense tracker.',
            'Dashboard Overview - Quick glance at your total spent, remaining budget, and AI summary.',
            'Dashboard Charts - Visual breakdown of expenses by category and daily spending trends.',
            'Log Expense - Simply type your expenses in plain text and let AI categorize them automatically.',
            'Transactions - A detailed history of all your logged expenses with easy management.',
            'Budget Advisor - Get personalized, actionable financial advice powered by Gemini.',
            'Settings - Manage your profile, monthly income, and budget preferences.',
        ],
    },
    {
        title: 'TinyBaker PH',
        thumb: '/tinybaker/logo.png',
        tag: 'Web Dev & Design',
        desc: 'A modern, mobile-first, kawaii-themed landing page for a bakery. Features a structured pricing section with sticky filter chips, playful typography, and bespoke mascot illustrations to enhance brand identity.',
        link: 'https://github.com/mcmarasigan/TinybakerPH',
        linkLabel: 'GitHub',
        images: genImgs('tinybaker', 'tinybaker-screenshot', 5, 'png'),
        captions: [
            'Landing Page - Cute-themed hero section introducing TinyBaker PH.',
            'About Section - The sweet story behind our bakery.',
            'Pricing Section - Structured menu with sticky filter chips.',
            'Why Choose Us - Highlights of our fresh and cute pastries.',
            'Contact Section - Get in touch for custom orders.',
        ],
    },
    {
        title: 'BMS Project',
        thumb: '/bmsproject/bmsproject-screenshot1.jpg',
        tag: 'Java & Spring Boot',
        desc: 'A Java Spring Boot and MySQL-based Bakery Management System for handling inventory, orders, and sales. Designed to streamline bookings, scheduling, and overall bakery operations.',
        link: 'https://github.com/mcmarasigan/bmsproject',
        linkLabel: 'GitHub',
        images: genImgs('bmsproject', 'bmsproject-screenshot', 54, 'jpg'),
        captions: [
            'Login Page - Interface for users to securely log in to the system.',
            'Incomplete fields Login Notification - Alerts users to fill all required fields.',
            'Invalid email or password notifications - Informs users of incorrect email or password entries.',
            '3rd Login attempt failed notification - Suggest reset user\'s account after three failed attempts.',
            'Forgot Password Page - Assists users in recovering passwords via OTP.',
            'OTP Sent Confirmation - Confirms OTP has been sent to the user\'s email.',
            'Invalid OTP - Alerts users of incorrect OTP entry.',
            'Password successful update notification - Confirms password change.',
            'Admin Registration Page - Interface for registering new admin accounts.',
            'Incomplete Credentials notification - Alerts users to provide all necessary information.',
            'Invalid OTP - Informs users of an invalid OTP during registration.',
            'Dashboard Page - Central interface with buttons for accessing all modules and a search function.',
            'Logging out confirmation - Confirms the user\'s intent to log out.',
            'Ingredient Search Tab - Interface for searching specific ingredients.',
            'Product Search Tab - Interface for searching specific products.',
            'Orders Search Tab - Interface for searching specific orders.',
            'Registration Page - Interface for Product and Ingredient registration.',
            'Product Registration - Interface for adding new products to inventory.',
            'Product Registration Confirmation - Confirms successful product addition.',
            'Product name field empty - Alerts users to fill the product name field.',
            'Empty ingredient name field - Alerts users to fill the ingredient name field.',
            'Ingredient successfully saved - Confirms ingredient has been saved.',
            'Inventory Page - Interface for managing and viewing inventory.',
            'Products List - Displays all available products.',
            'Ingredient List - Displays all available ingredients.',
            'Production Schedule - Manages and plans production schedules.',
            'Add production schedule - Interface for adding new production schedules.',
            'No ingredient selected - Alerts users to select an ingredient.',
            'Production schedule saved successfully - Confirms production schedule has been saved.',
            'Order Management Page - Manages customer orders.',
            'Add Order - Interface for adding new orders.',
            'Out of Stock Notification - Informs users a product is out of stock.',
            'Low Stock Warning - Notifies users of low product stock.',
            'Order History - Displays past customer orders.',
            'Sales - Manages sales transactions.',
            'Performance and Analytics - Provides performance metrics and analytics.',
            'Generate Reports - Interface for generating reports.',
            'Choosing of Folder - Prompts users to select a folder for saving.',
            'Saving Successfully Notification - Confirms file has been saved.',
            'Maintenance Page - Interface for system maintenance tasks.',
            'Account Management - Manages user accounts.',
            'Selecting account Error - Informs user to select an account to edit.',
            'Edit Account - Interface for editing account information.',
            'Change Password - Provides option to change password.',
            'System Configuration - Interface for configuring system settings.',
            'Backup and Restore Page - Facilitates data backup and restoration.',
            'Choosing of Folder - Prompts users to select a folder for backup.',
            'Successful Backup - Confirms data backup success.',
            'Choosing of folder - Prompts users to select a folder for restoration.',
            'Successful restoring - Confirms data restoration success.',
            'Product Archives - Access to archived product data.',
            'Ingredients Archives - Access to archived ingredient data.',
            'Security Logs - Displays logs of admins.',
            'About Page - Provides information about the shop, developers, and system versions.',
            'Help Page - Offers assistance and support resources.',
        ],
    },
    {
        title: 'POS - Cafe Royale',
        thumb: '/posproject/posproject-screenshot0.png',
        tag: 'Java & MySQL',
        desc: 'A Java-based Point of Sale system designed for managing transactions, orders, and sales. Integrated with MySQL for database management and JasperReports for generating receipts and detailed sales reports.',
        link: 'https://github.com/mcmarasigan/finalproject',
        linkLabel: 'GitHub',
        images: ['/posproject/posproject-screenshot0.png'],
        captions: ['Point of Sale main interface.'],
    },
    {
        title: 'SafeSpace',
        thumb: '/safespace/safespace-screenshot1.jpg',
        tag: 'Mobile & Firebase',
        desc: 'A mobile application promoting mental health and well-being, built with Flutter and Firebase.',
        link: 'https://github.com/mcmarasigan/SafeSpace',
        linkLabel: 'GitHub',
        images: genImgs('safespace', 'safespace-screenshot', 33, 'jpg'),
        captions: [
            'Login Page - Interface for user authentication.',
            'Register Page - Allows new users to create accounts.',
            'Forgot Password Page - Reset account credentials via email.',
            'Home Page - Centralized dashboard for navigation.',
            'User Profile Page - View and edit user profile details.',
            'Mood Tracker Page - Track and monitor emotional states.',
            'Add Mood Entry Page - Log specific mood details.',
            'Mood Insights Page - Visual analytics for mood tracking.',
            'Support Chat Page - Access to real-time chat with support.',
            'Resources Page - Mental health and wellness resources.',
            'Community Page - Interact with other users in discussions.',
            'Add Community Post Page - Create a new community post.',
            'Community Post Details Page - View detailed post information.',
            'Comment Section Page - View and add comments on posts.',
            'Settings Page - Customize app preferences.',
            'Notification Settings Page - Manage push notifications.',
            'Privacy Settings Page - Update privacy and account settings.',
            'Change Password Page - Update user account password.',
            'About Page - Details about the SafeSpace app and team.',
            'Help Center Page - Access FAQ and troubleshooting information.',
            'Contact Support Page - Submit inquiries to the support team.',
            'Terms of Service Page - View app usage terms.',
            'Privacy Policy Page - Review data privacy policy.',
            'Logout Confirmation Page - Confirm user logout action.',
            'Error Page - Displays errors encountered by the user.',
            '404 Page - Indicates non-existent pages or errors.',
            'Admin Dashboard Page - Manage app resources and settings.',
            'Manage Users Page - Add, remove, or update user accounts.',
            'Manage Posts Page - Admin control over community posts.',
            'Generate Reports Page - Admin analytics and reporting.',
            'System Logs Page - View detailed system logs for audit.',
            'System Updates Page - Display of app updates and patch notes.',
            'Backup and Restore Page - Data management for admin tasks.',
        ],
    },
    {
        title: 'PomoDo',
        thumb: '/pomodo/pomodo-screenshot1.jpg',
        tag: 'React Native App',
        desc: 'A React Native mobile app that helps users manage tasks using the Pomodoro technique. Includes task tracking, timers, and notifications to boost focus and productivity.',
        link: 'https://github.com/mcmarasigan/PomoDo',
        linkLabel: 'GitHub',
        images: genImgs('pomodo', 'pomodo-screenshot', 9, 'jpg'),
        captions: [
            'Welcome screen with \'Get Started\' button and an introductory message about productivity.',
            'Task list interface for adding tasks to the Pomodoro technique workflow.',
            'Task list showing a saved task, with options to edit or delete tasks.',
            'Task list interface allowing users to add, save, and update tasks efficiently.',
            'Updated task list displaying multiple tasks with edit and delete options.',
            'Task list interface showing a single saved task with delete and edit options.',
            'Pomodoro timer screen showing a 25-minute default timer with start button and settings.',
            'Timer settings page allowing users to adjust work and break durations.',
            'Pomodoro timer screen updated to reflect customized work and break durations.',
        ],
    },
    {
        title: 'FRESHEVAL',
        thumb: '/fresh-eval/fresheval-thumbnail.png',
        tag: 'AI & Mobile',
        desc: 'A Flutter-based mobile app for real-time freshness evaluation of vegetables, leveraging YOLOv8 and EfficientNetB7 for image classification. The AI model was trained in Python using TensorFlow, aiming to reduce food waste.',
        link: 'https://github.com/mcmarasigan/fresheval',
        linkLabel: 'GitHub',
        images: genImgs('fresh-eval', 'fresh-eval-screenshot', 8, 'jpg'),
        captions: [
            'Launching the Application - Helpful tips on starting the app.',
            'Camera Screen - Main interface for capturing or uploading vegetable images.',
            'Scan Result Screen - Displays freshness status, vegetable type, quality rating, shelf life, and recommendations.',
            'Scan History Screen - View past freshness evaluations with search and bookmark features.',
            'Menu Drawer - Quick navigation including scanning, history, guides, developer info, and settings.',
            'Settings Screen - Manage app preferences like display language and clearing cached data.',
            'Help Screen - Provides user guides, FAQs, and tips to assist with using FRESHEVAL effectively and troubleshooting common issues.',
            'Developers Screen - Displays information about the FRESHEVAL development team, including contact details for support and feedback.',
        ],
    },
    {
        title: 'Air Quality Index App',
        thumb: '/airqualityfigma/airquality-screenshot1.png',
        tag: 'UI/UX Figma Design',
        desc: 'A Figma-based UI/UX design for an application that analyzes and predicts Air Quality Index (AQI) in Philippine cities, focusing on user-friendly navigation and informative data presentation.',
        link: 'https://www.figma.com/design/YcUTeAyIwPQuX1FU7EMxLp/Air-Quality-Index?node-id=2-3&t=9isC5PpVdJt9dySD-1',
        linkLabel: 'Figma',
        images: genImgs('airqualityfigma', 'airquality-screenshot', 5, 'png'),
        captions: [
            'Dashboard - Main screen with navigation buttons leading to Data Analysis, Model Training, Prediction, and About modules.',
            'Data Analysis - Provides charts and graphs to explore historical and current AQI trends in Philippine cities.',
            'Model Training - Simulated module showcasing how predictive models for AQI can be trained.',
            'Prediction - Displays forecasted AQI levels and allows comparison with current values.',
            'About - Contains project details, objectives, and developer information.',
        ],
    },
    {
        title: 'OnlyChef',
        thumb: '/only-chef/onlychef-thumbnail.png',
        tag: 'UI/UX Figma Design',
        desc: 'A Figma-based UI/UX design for an innovative cooking subscription platform. Features user login, chef subscription, live streaming, ChefGPT cooking assistant, and curated grocery cart integration.',
        link: 'https://www.figma.com/design/Pp70FwHdM9Fphi4gl7eJVr/Only-Chef?node-id=18-760&t=ouL0ISpdxbV7gQ0e-1',
        linkLabel: 'Figma',
        images: genImgs('only-chef', 'onlychef-screenshot', 14, 'png'),
        captions: [
            'Onboarding Screen - Welcome interface introducing the app.',
            'Login Screen - Secure login page for existing users.',
            'Register Screen - Registration form for creating a new account.',
            'Home Screen - Central hub displaying featured chefs, recipes, and navigation.',
            'Notifications Screen - Displays updates about subscriptions and streams.',
            'Subscription Screen - Manage chef subscriptions and unlock premium content.',
            'Live Stream Screen - Watch chefs cooking in real time.',
            'Add to Cart - Button within live stream to add featured ingredients to cart.',
            'Chat Screen - Real-time chat interface with the chef.',
            'Profile Screen - View and edit user information and subscriptions.',
            'Recipe List - Displays available recipes.',
            'ChefGPT - AI-powered assistant that answers cooking questions.',
            'Meal Plan Screen - Organize meals using selected recipes.',
            'Settings Screen - Manage app preferences.',
        ],
    },
]

function Projects() {
    const [galleryOpen, setGalleryOpen] = useState(false)
    const [activeProject, setActiveProject] = useState(null)

    const openGallery = (project) => {
        setActiveProject(project)
        setGalleryOpen(true)
    }

    const closeGallery = () => {
        setGalleryOpen(false)
        setActiveProject(null)
    }

    // Split projects into two columns (Left: Evens, Right: Odds)
    const leftColumnProjects = projects.filter((_, i) => i % 2 === 0)
    const rightColumnProjects = projects.filter((_, i) => i % 2 !== 0)

    return (
        <section id="showcase" className="showcase">
            <style>{`
                .showcase {
                    padding: 90px 10% 120px;
                    background: transparent !important; /* Fully blend into custom gradients */
                    box-shadow: none !important;
                    border-radius: 0 !important;
                    width: 100%;
                    max-width: 1300px;
                    margin: 0 auto;
                    position: relative;
                }

                .showcase-header-block {
                    text-align: left;
                    margin-bottom: 70px;
                    max-width: 750px;
                    position: relative;
                    z-index: 5;
                }

                .showcase-pre-title {
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

                body.light-mode .showcase-pre-title {
                    color: #7b2cbf;
                }

                .showcase-title {
                    font-size: 3.2rem;
                    font-weight: 800;
                    line-height: 1.15;
                    color: #ffffff;
                    margin: 0 0 20px 0;
                    letter-spacing: -0.02em;
                }

                body.light-mode .showcase-title {
                    color: #2c2c2c;
                }

                .showcase-description {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #b3b3b3;
                    margin: 0;
                }

                body.light-mode .showcase-description {
                    color: #555555;
                }

                .showcase-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: start;
                    width: 100%;
                    position: relative;
                    z-index: 5;
                }

                .showcase-column {
                    display: flex;
                    flex-direction: column;
                    gap: 70px;
                }

                .showcase-column-right {
                    margin-top: 100px; /* Stunning staggered layout shift on desktop */
                }

                .showcase-card {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    background: transparent !important;
                    box-shadow: none !important;
                    border: none !important;
                    padding: 0 !important;
                    width: 100%;
                    cursor: default;
                }

                .showcase-img-wrapper {
                    width: 100%;
                    height: 350px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    background: rgba(255, 255, 255, 0.01);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                    margin-bottom: 22px;
                    position: relative;
                }

                body.light-mode .showcase-img-wrapper {
                    border: 1px solid rgba(123, 44, 191, 0.06);
                    background: rgba(0, 0, 0, 0.005);
                    box-shadow: 0 12px 40px rgba(123, 44, 191, 0.03);
                }

                .showcase-img-wrapper:hover {
                    transform: translateY(-6px);
                    border-color: rgba(187, 134, 252, 0.3);
                    box-shadow: 0 20px 45px rgba(187, 134, 252, 0.2);
                }

                body.light-mode .showcase-img-wrapper:hover {
                    border-color: rgba(123, 44, 191, 0.3);
                    box-shadow: 0 20px 45px rgba(123, 44, 191, 0.12);
                }

                .showcase-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .showcase-img-wrapper:hover .showcase-img {
                    transform: scale(1.04);
                }

                .showcase-card h3 {
                    font-size: 1.65rem;
                    font-weight: 700;
                    margin: 0 0 10px 0;
                    color: #ffffff;
                    text-align: left;
                    letter-spacing: -0.015em;
                    transition: color 0.3s ease;
                }

                body.light-mode .showcase-card h3 {
                    color: #2c2c2c;
                }

                .showcase-card:hover h3 {
                    color: #bb86fc;
                }

                body.light-mode .showcase-card:hover h3 {
                    color: #7b2cbf;
                }

                .showcase-card p {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: #a0a0a0;
                    margin: 0 0 24px 0;
                    text-align: left;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    max-width: 92%;
                }

                body.light-mode .showcase-card p {
                    color: #555555;
                }

                .showcase-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 18px;
                }

                body.light-mode .showcase-card-footer {
                    border-top: 1px solid rgba(0, 0, 0, 0.05);
                }

                .showcase-tag {
                    background: rgba(187, 134, 252, 0.07);
                    color: #bb86fc;
                    border: 1px solid rgba(187, 134, 252, 0.12);
                    padding: 6px 14px;
                    border-radius: 50px;
                    font-size: 0.74rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                }

                body.light-mode .showcase-tag {
                    background: rgba(123, 44, 191, 0.05);
                    color: #7b2cbf;
                    border: 1px solid rgba(123, 44, 191, 0.1);
                }

                .showcase-link {
                    color: #bb86fc;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.88rem;
                    transition: all 0.3s ease;
                }

                body.light-mode .showcase-link {
                    color: #7b2cbf;
                }

                .showcase-link:hover {
                    color: #ffffff;
                    transform: translateX(4px);
                }

                body.light-mode .showcase-link:hover {
                    color: #2c2c2c;
                }

                .showcase-link i {
                    font-size: 0.8rem;
                }

                @media (max-width: 900px) {
                    .showcase-grid {
                        gap: 40px;
                    }
                    .showcase-column {
                        gap: 50px;
                    }
                    .showcase-column-right {
                        margin-top: 60px;
                    }
                    .showcase-img-wrapper {
                        height: 290px;
                    }
                }

                @media (max-width: 768px) {
                    .showcase {
                        padding: 70px 6% 90px;
                    }

                    .showcase-title {
                        font-size: 2.5rem;
                    }

                    .showcase-grid {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }

                    .showcase-column {
                        gap: 50px;
                    }

                    .showcase-column-right {
                        margin-top: 0;
                    }

                    .showcase-img-wrapper {
                        height: 260px;
                        margin-bottom: 18px;
                    }

                    .showcase-card p {
                        max-width: 100%;
                    }
                }
            `}</style>

            <div className="showcase-header-block" data-aos="fade-up">
                <span className="showcase-pre-title">
                    <span style={{ fontSize: '1.2rem', lineHeight: 0 }}>•</span> Selected Works
                </span>
                <h2 className="showcase-title">Recent Projects</h2>
                <p className="showcase-description">
                    A curated collection of full-stack web applications, AI-integrated software, mobile products, and custom UI/UX design portfolios.
                </p>
            </div>

            <div className="showcase-grid">
                {/* Left Column (Even indexes) */}
                <div className="showcase-column showcase-column-left">
                    {leftColumnProjects.map((project, i) => (
                        <div
                            className="showcase-card"
                            key={project.title}
                            id={project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="showcase-img-wrapper" onClick={() => openGallery(project)}>
                                <img
                                    src={project.thumb}
                                    alt={`${project.title} Thumbnail`}
                                    className="showcase-img"
                                    loading="lazy"
                                />
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="showcase-card-footer">
                                <span className="showcase-tag">{project.tag}</span>
                                <a
                                    href={project.link}
                                    className="showcase-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {project.linkLabel} <i className="fas fa-arrow-up-right-from-square" style={{ marginLeft: '2px' }}></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column (Odd indexes - Staggered down) */}
                <div className="showcase-column showcase-column-right">
                    {rightColumnProjects.map((project, i) => (
                        <div
                            className="showcase-card"
                            key={project.title}
                            id={project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                            data-aos="fade-up"
                            data-aos-delay={i * 100 + 50}
                        >
                            <div className="showcase-img-wrapper" onClick={() => openGallery(project)}>
                                <img
                                    src={project.thumb}
                                    alt={`${project.title} Thumbnail`}
                                    className="showcase-img"
                                    loading="lazy"
                                />
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="showcase-card-footer">
                                <span className="showcase-tag">{project.tag}</span>
                                <a
                                    href={project.link}
                                    className="showcase-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {project.linkLabel} <i className="fas fa-arrow-up-right-from-square" style={{ marginLeft: '2px' }}></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {galleryOpen && activeProject && (
                <GalleryModal project={activeProject} onClose={closeGallery} />
            )}
        </section>
    )
}

export default Projects
