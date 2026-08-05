// ================================
// SpaceLab Animated Starfield
// ================================

const starsContainer = document.querySelector(".stars");

if (starsContainer) {

    for (let i = 0; i < 250; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay = Math.random() * 6 + "s";

        star.style.animationDuration = (3 + Math.random() * 6) + "s";

        starsContainer.appendChild(star);
    }

}
