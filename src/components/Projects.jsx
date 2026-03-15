import { useState } from 'react'
import GalleryModal from './GalleryModal'

// Helper to generate image arrays
function genImgs(folder, prefix, count, ext) {
    return Array.from({ length: count }, (_, i) => `/${folder}/${prefix}${i + 1}.${ext}`)
}

const projects = [
    {
        title: 'BMS Project',
        thumb: '/bmsproject/bmsproject-screenshot1.jpg',
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
        desc: 'A Java-based Point of Sale system designed for managing transactions, orders, and sales. Integrated with MySQL for database management and JasperReports for generating receipts and detailed sales reports.',
        link: 'https://github.com/mcmarasigan/finalproject',
        linkLabel: 'GitHub',
        images: ['/posproject/posproject-screenshot0.png'],
        captions: ['Point of Sale main interface.'],
    },
    {
        title: 'SafeSpace',
        thumb: '/safespace/safespace-screenshot1.jpg',
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
        desc: 'A Flutter-based mobile app for real-time freshness evaluation of vegetables, leveraging YOLOv8 and EfficientNetB7 for image classification. The AI model was trained in Python using TensorFlow, aiming to reduce food waste and promote sustainable consumption.',
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
        title: 'Air Quality Index (AQI) App',
        thumb: '/airqualityfigma/airquality-screenshot1.png',
        desc: 'A Figma-based UI/UX design for an application that analyzes and predicts Air Quality Index (AQI) in Philippine cities. The design includes modules for Dashboard visualization, Data Analysis, Model Training, Prediction, and an About section, focusing on user-friendly navigation and informative data presentation.',
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
        desc: 'A Figma-based UI/UX design for an innovative cooking and subscription platform. The app features user login, chef subscription, and live streaming where chefs demonstrate cooking. Subscribers gain access to exclusive recipes, an OnlyGrocery section for curated ingredients, and ChefGPT integration for personalized cooking assistance.',
        link: 'https://www.figma.com/design/Pp70FwHdM9Fphi4gl7eJVr/Only-Chef?node-id=18-760&t=ouL0ISpdxbV7gQ0e-1',
        linkLabel: 'Figma',
        images: genImgs('only-chef', 'onlychef-screenshot', 14, 'png'),
        captions: [
            'Onboarding Screen - Welcome interface introducing the app with options to proceed.',
            'Login Screen - Secure login page for existing users.',
            'Register Screen - Registration form for creating a new account.',
            'Home Screen - Central hub displaying featured chefs, recipes, and navigation.',
            'Notifications Screen - Displays updates about subscriptions, streams, and new content.',
            'Subscription Screen - Manage chef subscriptions and unlock premium content.',
            'Live Stream Screen - Watch chefs cooking in real time with interactive options.',
            'Add to Cart - Button within live stream to add featured ingredients to cart.',
            'Chat Screen - Real-time chat interface with the chef during live sessions.',
            'Profile Screen - View and edit user information, subscriptions, and account details.',
            'Recipe List - Displays available recipes with option to set a meal plan.',
            'ChefGPT - AI-powered assistant that answers cooking questions and suggests recipes.',
            'Meal Plan Screen - Organize meals using selected recipes for daily or weekly planning.',
            'Settings Screen - Manage app preferences, notifications, and account options.',
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

    return (
        <section id="showcase" className="section showcase">
            <h2>Projects</h2>
            <div className="showcase-grid">
                {projects.map((project, i) => (
                    <div
                        className="showcase-card"
                        key={project.title}
                        data-aos="fade-up"
                        data-aos-delay={i > 0 ? i * 100 : undefined}
                    >
                        <img
                            src={project.thumb}
                            alt={`${project.title} Screenshot`}
                            onClick={() => openGallery(project)}
                        />
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <a href={project.link} className="btn" target="_blank" rel="noreferrer">
                            {project.linkLabel}
                        </a>
                    </div>
                ))}
            </div>

            {galleryOpen && activeProject && (
                <GalleryModal project={activeProject} onClose={closeGallery} />
            )}
        </section>
    )
}

export default Projects
