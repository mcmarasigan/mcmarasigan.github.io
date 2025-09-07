// Typewriter Effect
const descriptions = [
    "a Computer Scientist",
    "a Problem Solver",
    "a Tech Enthusiast"
];
let descIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
        const currentText = descriptions[descIndex];

        // Update displayed text
        charIndex += isDeleting ? -1 : 1;
        typewriterElement.textContent = currentText.slice(0, charIndex);

        // Pause when full text is typed
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1000);
            return;
        }

        // Pause when text is fully deleted
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            descIndex = (descIndex + 1) % descriptions.length;
            setTimeout(type, 500);
            return;
        }

        // Typing and deleting speeds
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }
}

// Start the typewriter effect
type();

// Initialize AOS for Scroll Animations
AOS.init({
    duration: 1200, // Animation duration
    once: false, // Allow animations to repeat
    offset: 200 // Offset for triggering animations
});

// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.classList.add("floating-btn");
    themeToggle.textContent = "Dark Mode";

    // Append the button to the body
    document.body.appendChild(themeToggle);

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.toggle("light-mode", savedTheme === "light");
    themeToggle.textContent = savedTheme === "dark" ? "Dark Mode" : "Light Mode";

    // Add event listener to toggle theme
    themeToggle.addEventListener("click", () => {
        const isLightMode = document.body.classList.toggle("light-mode");
        themeToggle.textContent = isLightMode ? "Light Mode" : "Dark Mode";
        localStorage.setItem("theme", isLightMode ? "light" : "dark");
    });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Modal for Image Preview
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    if (modal && modalImage) {
        modal.style.display = "block";
        modalImage.src = imageSrc;
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) modal.style.display = "none";
}

// Close modal when clicking outside of the modal image
document.addEventListener("click", e => {
    const modal = document.getElementById("imageModal");
    if (e.target === modal) closeModal();
});

// Generate Image Array
function generateImageArray(folder, prefix, count, extension) {
    return Array.from({ length: count }, (_, i) => `${folder}/${prefix}${i + 1}.${extension}`);
}

// Generate images for projects
const bmsProjectImages = generateImageArray("bmsproject", "bmsproject-screenshot", 54, "jpg");
const SafeSpaceImages = generateImageArray("safespace", "safespace-screenshot", 33, "jpg");
const PomoDoImages = generateImageArray("pomodo", "pomodo-screenshot", 9, "jpg");
const FreshEvalImages = generateImageArray("fresh-eval", "fresh-eval-screenshot", 8, "jpg");
const AQIAppImages = generateImageArray("airqualityfigma", "airquality-screenshot", 5, "png");
const OnlyChefImages = generateImageArray("only-chef", "onlychef-screenshot", 14, "png");

// Project Modal Gallery
const projects = [{
        title: "BMS Project",
        images: bmsProjectImages,
        descriptions: [
            "Login Page - Interface for users to securely log in to the system.",
            "Incomplete fields Login Notification - Alerts users to fill all required fields.",
            "Invalid email or password notifications - Informs users of incorrect email or password entries.",
            "3rd Login attempt failed notification - Suggest reset user’s account after three failed attempts.",
            "Forgot Password Page - Assists users in recovering passwords via OTP.",
            "OTP Sent Confirmation - Confirms OTP has been sent to the user's email.",
            "Invalid OTP - Alerts users of incorrect OTP entry.",
            "Password successful update notification - Confirms password change.",
            "Admin Registration Page - Interface for registering new admin accounts.",
            "Incomplete Credentials notification - Alerts users to provide all necessary information.",
            "Invalid OTP - Informs users of an invalid OTP during registration.",
            "Dashboard Page - Central interface with buttons for accessing all modules and a search function.",
            "Logging out confirmation - Confirms the user's intent to log out.",
            "Ingredient Search Tab - Interface for searching specific ingredients.",
            "Product Search Tab - Interface for searching specific products.",
            "Orders Search Tab - Interface for searching specific orders.",
            "Registration Page - Interface for Product and Ingredient registration.",
            "Product Registration - Interface for adding new products to inventory.",
            "Product Registration Confirmation - Confirms successful product addition.",
            "Product name field empty - Alerts users to fill the product name field.",
            "Empty ingredient name field - Alerts users to fill the ingredient name field.",
            "Ingredient successfully saved - Confirms ingredient has been saved.",
            "Inventory Page - Interface for managing and viewing inventory.",
            "Products List - Displays all available products.",
            "Ingredient List - Displays all available ingredients.",
            "Production Schedule - Manages and plans production schedules.",
            "Add production schedule - Interface for adding new production schedules.",
            "No ingredient selected - Alerts users to select an ingredient.",
            "Production schedule saved successfully - Confirms production schedule has been saved.",
            "Order Management Page - Manages customer orders.",
            "Add Order - Interface for adding new orders.",
            "Out of Stock Notification - Informs users a product is out of stock.",
            "Low Stock Warning - Notifies users of low product stock.",
            "Order History - Displays past customer orders.",
            "Sales - Manages sales transactions.",
            "Performance and Analytics - Provides performance metrics and analytics.",
            "Generate Reports - Interface for generating reports.",
            "Choosing of Folder - Prompts users to select a folder for saving.",
            "Saving Successfully Notification - Confirms file has been saved.",
            "Maintenance Page - Interface for system maintenance tasks.",
            "Account Management - Manages user accounts.",
            "Selecting account Error - Informs user to select an account to edit.",
            "Edit Account - Interface for editing account information.",
            "Change Password - Provides option to change password.",
            "System Configuration - Interface for configuring system settings.",
            "Backup and Restore Page - Facilitates data backup and restoration.",
            "Choosing of Folder - Prompts users to select a folder for backup.",
            "Successful Backup - Confirms data backup success.",
            "Choosing of folder - Prompts users to select a folder for restoration.",
            "Successful restoring - Confirms data restoration success.",
            "Product Archives - Access to archived product data.",
            "Ingredients Archives - Access to archived ingredient data.",
            "Security Logs - Displays logs of admins.",
            "About Page - Provides information about the shop, developers, and system versions.",
            "Help Page - Offers assistance and support resources.",
            "FAQs Page - Provides answers to frequently asked questions.",
            "User’s Manual - Comprehensive guide for using the system."
        ],
        aspectRatio: "16/9",
    },
    {
        title: "POS - Cafe Royale",
        images: ["posproject/posproject-screenshot0.png"],
        descriptions: [
            "Point of Sale main interface.",
        ],
        aspectRatio: "4/3",
    },
    {
        title: "SafeSpace",
        images: SafeSpaceImages,
        descriptions: [
            "Login Page - Interface for user authentication.",
            "Register Page - Allows new users to create accounts.",
            "Forgot Password Page - Reset account credentials via email.",
            "Home Page - Centralized dashboard for navigation.",
            "User Profile Page - View and edit user profile details.",
            "Mood Tracker Page - Track and monitor emotional states.",
            "Add Mood Entry Page - Log specific mood details.",
            "Mood Insights Page - Visual analytics for mood tracking.",
            "Support Chat Page - Access to real-time chat with support.",
            "Resources Page - Mental health and wellness resources.",
            "Community Page - Interact with other users in discussions.",
            "Add Community Post Page - Create a new community post.",
            "Community Post Details Page - View detailed post information.",
            "Comment Section Page - View and add comments on posts.",
            "Settings Page - Customize app preferences.",
            "Notification Settings Page - Manage push notifications.",
            "Privacy Settings Page - Update privacy and account settings.",
            "Change Password Page - Update user account password.",
            "About Page - Details about the SafeSpace app and team.",
            "Help Center Page - Access FAQ and troubleshooting information.",
            "Contact Support Page - Submit inquiries to the support team.",
            "Terms of Service Page - View app usage terms.",
            "Privacy Policy Page - Review data privacy policy.",
            "Logout Confirmation Page - Confirm user logout action.",
            "Error Page - Displays errors encountered by the user.",
            "404 Page - Indicates non-existent pages or errors.",
            "Admin Dashboard Page - Manage app resources and settings.",
            "Manage Users Page - Add, remove, or update user accounts.",
            "Manage Posts Page - Admin control over community posts.",
            "Generate Reports Page - Admin analytics and reporting.",
            "System Logs Page - View detailed system logs for audit.",
            "System Updates Page - Display of app updates and patch notes.",
            "Backup and Restore Page - Data management for admin tasks."
        ],
        aspectRatio: "3/4",
    },
    {
        title: "PomoDo",
        images: PomoDoImages,
        descriptions: [
            "Welcome screen with 'Get Started' button and an introductory message about productivity.",
            "Task list interface for adding tasks to the Pomodoro technique workflow.",
            "Task list showing a saved task, with options to edit or delete tasks.",
            "Task list interface allowing users to add, save, and update tasks efficiently.",
            "Updated task list displaying multiple tasks with edit and delete options.",
            "Task list interface showing a single saved task with delete and edit options.",
            "Pomodoro timer screen showing a 25-minute default timer with start button and settings.",
            "Timer settings page allowing users to adjust work and break durations.",
            "Pomodoro timer screen updated to reflect customized work and break durations."
        ],
        aspectRatio: "1/1",
    },
    {
        title: "FRESHEVAL",
    images: FreshEvalImages,
    descriptions: [
        "Launching the Application - Helpful tips on starting the app.",
        "Camera Screen - Main interface for capturing or uploading vegetable images.",
        "Scan Result Screen - Displays freshness status, vegetable type, quality rating, shelf life, and recommendations.",
        "Scan History Screen - View past freshness evaluations with search and bookmark features.",
        "Menu Drawer - Quick navigation including scanning, history, guides, developer info, and settings.",
        "Settings Screen - Manage app preferences like display language and clearing cached data.",
        "Help Screen - Provides user guides, FAQs, and tips to assist with using FRESHEVAL effectively and troubleshooting common issues.",
        "Developers Screen - Displays information about the FRESHEVAL development team, including contact details for support and feedback."

    ],
    aspectRatio: "3/4"
    },

    {
    title: "Air Quality Index (AQI) App",
    images: AQIAppImages,
    descriptions: [
        "Dashboard - Main screen with navigation buttons leading to Data Analysis, Model Training, Prediction, and About modules.",
        "Data Analysis - Provides charts and graphs to explore historical and current AQI trends in Philippine cities.",
        "Model Training - Simulated module showcasing how predictive models for AQI can be trained.",
        "Prediction - Displays forecasted AQI levels and allows comparison with current values.",
        "About - Contains project details, objectives, and developer information."
    ],
    aspectRatio: "3/4"
    },

    {
    title: "OnlyChef",
    images: OnlyChefImages,
    descriptions: [
        "Onboarding Screen - Welcome interface introducing the app with options to proceed.",
        "Login Screen - Secure login page for existing users.",
        "Register Screen - Registration form for creating a new account.",
        "Home Screen - Central hub displaying featured chefs, recipes, and navigation.",
        "Notifications Screen - Displays updates about subscriptions, streams, and new content.",
        "Subscription Screen - Manage chef subscriptions and unlock premium content.",
        "Live Stream Screen - Watch chefs cooking in real time with interactive options.",
        "Add to Cart - Button within live stream to add featured ingredients to cart.",
        "Chat Screen - Real-time chat interface with the chef during live sessions.",
        "Profile Screen - View and edit user information, subscriptions, and account details.",
        "Recipe List - Displays available recipes with option to set a meal plan.",
        "ChefGPT - AI-powered assistant that answers cooking questions and suggests recipes.",
        "Meal Plan Screen - Organize meals using selected recipes for daily or weekly planning.",
        "Settings Screen - Manage app preferences, notifications, and account options."
    ],
    aspectRatio: "3/4"
    }

    
  
];

let currentProjectIndex = 0;
let currentImageIndex = 0;

function openGallery(projectIndex) {
    currentProjectIndex = projectIndex;
    currentImageIndex = 0;
    updateGallery();
    document.getElementById("galleryModal").style.display = "flex";
}

function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
}

function changeSlide(direction) {
    const project = projects[currentProjectIndex];
    currentImageIndex += direction;

    // Add smooth transition
    const galleryImage = document.getElementById("galleryImage");
    galleryImage.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        updateGallery();
        galleryImage.style.opacity = 1; // Fade in effect
    }, 300); // Delay for smooth transition
}

function updateGallery() {
    const project = projects[currentProjectIndex];
    const galleryImage = document.getElementById("galleryImage");
    const galleryDescription = document.getElementById("galleryDescription");
    const prevArrow = document.querySelector(".gallery-nav.prev");
    const nextArrow = document.querySelector(".gallery-nav.next");

    // Update image and description
    galleryImage.src = project.images[currentImageIndex];
    galleryDescription.textContent = project.descriptions[currentImageIndex];

    // Show/hide arrows based on first/last page
    prevArrow.style.display = currentImageIndex === 0 ? "none" : "flex";
    nextArrow.style.display =
        currentImageIndex === project.images.length - 1 ? "none" : "flex";
}