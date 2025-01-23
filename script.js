// Typewriter Effect
const text = "Hi, I’m Clarissa, a Computer Scientist | Problem Solver | Innovator.";
let index = 0;

function type() {
    document.getElementById("typewriter").textContent = text.slice(0, index++);
    if (index <= text.length) setTimeout(type, 100);
}
type();

// Initialize AOS
AOS.init();