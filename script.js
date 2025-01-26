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
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typewriterElement.textContent = currentText.slice(0, charIndex);

        // Pause when full text is typed
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true; // Start deleting after pause
                type();
            }, 1000); // Pause for 1 second after fully typing the text
            return; // Prevent further immediate execution
        }

        // Pause when text is fully deleted
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            descIndex = (descIndex + 1) % descriptions.length; // Move to next description
            setTimeout(type, 500); // Pause before typing the next description
            return; // Prevent further immediate execution
        }

        // Typing and deleting speeds
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed); // Continue typing or deleting
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