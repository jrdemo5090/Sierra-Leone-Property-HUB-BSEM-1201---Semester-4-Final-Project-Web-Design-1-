/* =========================
   CONTACT FORM HANDLING
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

    /* Contact Form Submission */
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Get form values
            const formData = new FormData(contactForm);
            const fullName = contactForm.querySelector("input[placeholder*='full name']").value;
            const email = contactForm.querySelector("input[placeholder*='email']").value;
            const subject = contactForm.querySelector("select").nextElementSibling?.value || 
                          contactForm.querySelector("select:nth-of-type(2)").value;

            // Show success message
            alert(`Thank you, ${fullName}! Your message has been sent successfully. We'll respond to ${email} within 24 hours.`);

            // Reset form
            contactForm.reset();

            // Optional: Scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* Newsletter Form */
    const newsletterForm = document.querySelector(".newsletter-form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const emailInput = newsletterForm.querySelector("input[type='email']");
            const email = emailInput.value;

            alert(`Thank you for subscribing with ${email}! Check your inbox for our latest updates.`);

            emailInput.value = "";
        });
    }

    /* Scroll Animation for Cards */
    const animatedElements = document.querySelectorAll(
        ".contact-channel, .faq-card, .location-card, .social-box, .newsletter-box"
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
