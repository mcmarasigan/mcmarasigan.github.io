// Typewriter Effect
const text = "Hi, I’m Clarissa, a Computer Scientist | Problem Solver | Innovator.";
let index = 0;

function type() {
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
        typewriterElement.textContent = text.slice(0, index++);
        if (index <= text.length) setTimeout(type, 100);
    }
}
type();

// Initialize AOS for Scroll Animations
AOS.init({
    duration: 1200, // Animation duration
    once: true, // Run animation only once
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
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "Light Mode";
    }

    // Add event listener to toggle theme
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const currentTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
        themeToggle.textContent = currentTheme === "dark" ? "Dark Mode" : "Light Mode";
        localStorage.setItem("theme", currentTheme);
    });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Skill Progress Bars Animation
const skillBars = document.querySelectorAll(".progress");
if (skillBars.length > 0) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.getAttribute("data-width") || "0%";
                }
            });
        }, { threshold: 0.5 }
    );

    skillBars.forEach(bar => observer.observe(bar));
}

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
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking outside of the modal image
document.addEventListener("click", (e) => {
    const modal = document.getElementById("imageModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});