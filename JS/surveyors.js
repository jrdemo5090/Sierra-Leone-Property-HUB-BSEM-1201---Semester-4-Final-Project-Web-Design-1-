/* =========================
   SURVEYOR BOOKING & FILTERING
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU TOGGLE
    ========================= */

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger?.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    navLinks?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    document.addEventListener("click", (e) => {
        if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
            hamburger?.classList.remove("active");
            navLinks?.classList.remove("active");
        }
    });

    /* District Filter Functionality */
    const districtFilter = document.getElementById("districtFilter");
    const surveyorCards = document.querySelectorAll(".surveyor-card");

    if (districtFilter) {
        districtFilter.addEventListener("change", () => {
            const selectedDistrict = districtFilter.value;

            surveyorCards.forEach(card => {
                if (selectedDistrict === "") {
                    card.style.display = "block";
                } else {
                    if (card.dataset.district === selectedDistrict) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    }

    /* Book Surveyor Function */
    window.bookSurveyor = function(surveyorName) {
        alert("Booking request for " + surveyorName + " received! Our team will confirm your appointment within 24 hours.");
        // In a real application, this would open a modal or redirect to a booking form
    };

    /* Scroll Animation for Cards */
    const animatedElements = document.querySelectorAll(
        ".feature-card, .service-card, .surveyor-card, .testimonial-card, .process-step, .faq-card"
    );

    animatedElements.forEach(el => el.classList.add("hidden"));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(el => observer.observe(el));

});

/* Add hidden and show animation classes to CSS dynamically */
const style = document.createElement("style");
style.innerHTML = `
    .hidden {
        opacity: 0;
        transform: translateY(30px);
    }
    .show {
        animation: slideUp 0.6s ease forwards;
    }
    @keyframes slideUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
