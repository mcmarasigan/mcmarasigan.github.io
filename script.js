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
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Theme";
toggleButton.classList.add("btn");
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.zIndex = "1000";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleButton.textContent = document.body.classList.contains("light-mode") ?
        "Dark Mode" :
        "Light Mode";
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
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("data-width") || "0%";
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => observer.observe(bar));