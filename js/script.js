/* =====================================================
   Urban Rewear
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       Update Footer Year Automatically
    ========================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ==========================================
       Navbar Shadow on Scroll
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            navbar.classList.add("shadow");

        } else {

            navbar.classList.remove("shadow");

        }

    });


    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    /* ==========================================
       Fade In Animation
    ========================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".fade-up").forEach(el => {

        observer.observe(el);

    });


    /* ==========================================
       Button Hover Effect
    ========================================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transition = ".25s";

        });

    });
/* ==========================================
   Back To Top
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        backToTop.style.display="block";

    }

    else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
});
