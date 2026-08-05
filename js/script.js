// ===============================
// SpaceLab JavaScript
// Version 1.0
// ===============================

// Navbar shadow on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5, 10, 25, 0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(6,12,25,.65)";
        navbar.style.boxShadow = "none";

    }

});

// Reveal animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".stat-card, .category-card").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Welcome message

console.log("🚀 Welcome to SpaceLab!");

console.log("Building the future, one project at a time.");
