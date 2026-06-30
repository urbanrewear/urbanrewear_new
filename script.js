/* ==========================================
   Urban Rewear
   Premium Launch Page
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Dynamic Footer Year
    // -------------------------------

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // -------------------------------
    // Scroll Animation
    // -------------------------------

    const items = document.querySelectorAll(
        ".service-card, .trust-card, .contact-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    items.forEach(item => observer.observe(item));

    // -------------------------------
    // Glass Card Tilt Effect
    // -------------------------------

    const card = document.querySelector(".glass-card");

    if (card) {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -4;
            const rotateY = ((x / rect.width) - 0.5) * 4;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        });

    }

});
