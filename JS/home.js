/* =========================
   SALONE PROPERTY HUB JS
========================= */

/* =========================
   DOM READY
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

    // Close mobile menu when clicking on a nav link
    navLinks?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
            hamburger?.classList.remove("active");
            navLinks?.classList.remove("active");
        }
    });

    /* =========================
       SLIDERS FUNCTIONALITY
    ========================= */

    const setupSlider = (prevBtn, nextBtn, slider) => {
        const scrollAmount = 350;

        prevBtn?.addEventListener("click", () => {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        nextBtn?.addEventListener("click", () => {
            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    };

    setupSlider(
        document.querySelector(".land-prev"),
        document.querySelector(".land-next"),
        document.querySelector(".land-slider")
    );

    setupSlider(
        document.querySelector(".property-prev"),
        document.querySelector(".property-next"),
        document.querySelector(".property-slider")
    );


    /* =========================
       MODAL HANDLING
    ========================= */

    const landModal = document.getElementById("landModal");
    const propertyModal = document.getElementById("propertyModal");
    const listingModal = document.getElementById("listingModal");

    const openModal = (modal) => {
        if (!modal) return;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    const closeModal = (modal) => {
        if (!modal) return;
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    /* Close buttons */
    document.querySelectorAll(".close-modal").forEach(btn => {
        btn.addEventListener("click", () => {
            closeModal(landModal);
            closeModal(propertyModal);
        });
    });

    document.querySelector(".close-listing")?.addEventListener("click", () => {
        closeModal(listingModal);
    });

    /* Close modal on outside click */
    window.addEventListener("click", (e) => {
        if (e.target === landModal) closeModal(landModal);
        if (e.target === propertyModal) closeModal(propertyModal);
        if (e.target === listingModal) closeModal(listingModal);
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal(landModal);
            closeModal(propertyModal);
            closeModal(listingModal);
        }
    });

    /* =========================
    LAND DETAILS MODAL
    ========================= */

    const landsData = [
    {
        title:"Waterloo",
        location:"Waterloo, Western Rural",
        price:"Le 250,000",
        size:"2 Acres",
        status:"Available",
        owner:"Ibrahim Sesay",
        phone:"+23276123456",
        email:"ibrahimsesay@gmail.com",
        description:"Prime development land in Waterloo with road access, electricity nearby and verified ownership documents.",
        features:[
            "Verified Ownership Documents",
            "Survey Plan Available",
            "Road Access",
            "Electricity Available",
            "Residential Development",
            "Government Approved Area"
        ]
    },
    {
        title:"Bo City",
        location:"Bo City",
        price:"Le 180,000",
        size:"1.5 Acres",
        status:"Available",
        owner:"Mariama Kamara",
        phone:"+23278543211",
        email:"mariama@gmail.com",
        description:"Strategically located land suitable for residential housing projects and long-term investment.",
        features:[
            "Road Access",
            "Survey Available",
            "Residential Zone",
            "Verified Records",
            "Water Source Nearby",
            "Growing Community"
        ]
    },
    {
        title:"Makeni",
        location:"Makeni, Bombali District",
        price:"Le 400,000",
        size:"3 Acres",
        status:"Available",
        owner:"Joseph Bangura",
        phone:"+23277234567",
        email:"joseph@gmail.com",
        description:"Large investment land suitable for commercial or residential development with excellent accessibility.",
        features:[
            "3 Acres",
            "Commercial Potential",
            "Verified Ownership",
            "Road Network",
            "Survey Plan",
            "Expansion Area"
        ]
    },
    {
        title:"Kono",
        location:"Kono District",
        price:"Le 350,000",
        size:"2.5 Acres",
        status:"Available",
        owner:"Abdul Koroma",
        phone:"+23276677889",
        email:"abdul@gmail.com",
        description:"Secure investment land in a fast-growing area with strong development potential.",
        features:[
            "Road Access",
            "Survey Plan",
            "Verified Documents",
            "Investment Area",
            "Electricity Nearby",
            "Approved Layout"
        ]
    },
    {
        title:"Kenema",
        location:"Kenema District",
        price:"Le 450,000",
        size:"4 Acres",
        status:"Available",
        owner:"Fatmata Conteh",
        phone:"+23278456789",
        email:"fatmata@gmail.com",
        description:"Large parcel of land ideal for estates, agricultural projects and future expansion.",
        features:[
            "4 Acres",
            "Agricultural Potential",
            "Residential Potential",
            "Survey Available",
            "Road Access",
            "Verified Ownership"
        ]
    },
    {
        title:"Port Loko",
        location:"Port Loko District",
        price:"Le 150,000",
        size:"1 Acre",
        status:"Available",
        owner:"Mustapha Kamara",
        phone:"+23277788990",
        email:"mustapha@gmail.com",
        description:"Affordable residential land in a developing community with verified legal records.",
        features:[
            "Affordable Price",
            "Verified Records",
            "Road Access",
            "Survey Plan",
            "Residential Area",
            "Growing Community"
        ]
    }
    ];

    const landCards = document.querySelectorAll(".land-card");

    landCards.forEach((card,index)=>{

        const btn = card.querySelector(".details-btn");

        btn?.addEventListener("click",()=>{

            const land = landsData[index];

            document.getElementById("landModalImage").src =
                card.querySelector("img").src;

            document.getElementById("landTitle").textContent =
                land.title;

            document.getElementById("landLocation").textContent =
                land.location;

            document.getElementById("landPrice").textContent =
                land.price;

            document.getElementById("landSize").textContent =
                land.size;

            document.getElementById("landStatus").textContent =
                land.status;

            document.getElementById("landDescription").textContent =
                land.description;

            const sellerInfo =
                document.querySelector("#landModal .seller-info");

            sellerInfo.innerHTML = `
                <p><strong>Owner:</strong> ${land.owner}</p>
                <p><strong>Phone:</strong> ${land.phone}</p>
                <p><strong>Email:</strong> ${land.email}</p>
            `;

            document.querySelector("#landModal .call-btn").href =
                `tel:${land.phone}`;

            document.querySelector("#landModal .email-btn").href =
                `mailto:${land.email}`;

            const featuresList =
                document.querySelector("#landModal ul");

            featuresList.innerHTML = "";

            land.features.forEach(feature=>{

                featuresList.innerHTML += `
                    <li>${feature}</li>
                `;

            });

            openModal(landModal);

        });

    });

    /* =========================
    PROPERTY DETAILS MODAL
    ========================= */

    const propertiesData = [

    {
        title:"Modern Family House",
        location:"Aberdeen, Freetown",
        price:"Le 850,000",
        bedrooms:"4 Bedrooms",
        bathrooms:"3 Bathrooms",
        seller:"Mariama Kamara",
        phone:"+23278654321",
        email:"mariamakamara@gmail.com",

        description:
        "Beautiful family residence located in Aberdeen. Features spacious living areas, modern kitchen, secure compound, parking area and uninterrupted water supply.",

        features:[
            "4 Spacious Bedrooms",
            "3 Bathrooms",
            "Large Living Room",
            "Modern Kitchen",
            "Dining Area",
            "Parking Space",
            "Water Supply",
            "Perimeter Fence"
        ]
    },

    {
        title:"Luxury Villa",
        location:"Lumley, Freetown",
        price:"Le 1,500,000",
        bedrooms:"5 Bedrooms",
        bathrooms:"5 Bathrooms",
        seller:"Ibrahim Koroma",
        phone:"+23277811223",
        email:"ibrahimkoroma@gmail.com",

        description:
        "Luxury villa situated in Lumley with ocean views, premium finishes, private compound and modern security systems.",

        features:[
            "5 Bedrooms",
            "5 Bathrooms",
            "Swimming Pool",
            "Ocean View",
            "Security Cameras",
            "Large Compound",
            "Modern Kitchen",
            "Private Parking"
        ]
    },

    {
        title:"3 Bedroom Apartment",
        location:"Bo City",
        price:"Le 500,000",
        bedrooms:"3 Bedrooms",
        bathrooms:"2 Bathrooms",
        seller:"Fatmata Conteh",
        phone:"+23277444556",
        email:"fatmata@gmail.com",

        description:
        "Modern apartment in the heart of Bo City offering convenience, security and easy access to essential services.",

        features:[
            "3 Bedrooms",
            "2 Bathrooms",
            "Balcony",
            "Water Supply",
            "Parking Area",
            "Security Gate",
            "Living Room",
            "Dining Space"
        ]
    },

    {
        title:"Beach House",
        location:"Tokeh Beach",
        price:"Le 1,200,000",
        bedrooms:"4 Bedrooms",
        bathrooms:"4 Bathrooms",
        seller:"Mustapha Bangura",
        phone:"+23277222444",
        email:"mustapha@gmail.com",

        description:
        "Beautiful beachfront property offering direct beach access, scenic views and excellent rental investment potential.",

        features:[
            "Beachfront Access",
            "4 Bedrooms",
            "4 Bathrooms",
            "Sea View Terrace",
            "Private Compound",
            "Modern Kitchen",
            "Water Supply",
            "Parking Space"
        ]
    },

    {
        title:"Executive Duplex",
        location:"Hill Station",
        price:"Le 950,000",
        bedrooms:"4 Bedrooms",
        bathrooms:"4 Bathrooms",
        seller:"Joseph Sesay",
        phone:"+23276555111",
        email:"joseph@gmail.com",

        description:
        "Elegant duplex located in Hill Station featuring modern architecture, spacious interiors and secure surroundings.",

        features:[
            "Executive Finish",
            "4 Bedrooms",
            "4 Bathrooms",
            "Large Living Room",
            "Dining Area",
            "Modern Kitchen",
            "Garage",
            "Security Fence"
        ]
    },

    {
        title:"Commercial Building",
        location:"Central Freetown",
        price:"Le 2,500,000",
        bedrooms:"18 Office Spaces",
        bathrooms:"8 Bathrooms",
        seller:"Abdul Kamara",
        phone:"+23277333888",
        email:"abdul@gmail.com",

        description:
        "Prime commercial building in Central Freetown suitable for offices, banking operations, retail businesses and investment opportunities.",

        features:[
            "Commercial Location",
            "18 Office Spaces",
            "Conference Rooms",
            "Reception Area",
            "Backup Generator",
            "Parking Area",
            "Security System",
            "High Investment Value"
        ]
    }

    ];

    const propertyCards =
    document.querySelectorAll(".property-card");

    propertyCards.forEach((card,index)=>{

        const btn =
        card.querySelector(".details-btn");

        btn?.addEventListener("click",()=>{

            const property =
            propertiesData[index];

            document.getElementById(
                "propertyModalImage"
            ).src =
            card.querySelector("img").src;

            document.getElementById(
                "propertyTitle"
            ).textContent =
            property.title;

            document.getElementById(
                "propertyLocation"
            ).textContent =
            property.location;

            document.getElementById(
                "propertyPrice"
            ).textContent =
            property.price;

            document.getElementById(
                "propertyBedrooms"
            ).textContent =
            property.bedrooms;

            document.getElementById(
                "propertyBathrooms"
            ).textContent =
            property.bathrooms;

            document.getElementById(
                "propertyDescription"
            ).textContent =
            property.description;

            const sellerInfo =
            document.querySelector(
                "#propertyModal .seller-info"
            );

            sellerInfo.innerHTML = `
                <p><strong>Seller:</strong> ${property.seller}</p>
                <p><strong>Phone:</strong> ${property.phone}</p>
                <p><strong>Email:</strong> ${property.email}</p>
            `;

            document.querySelector(
                "#propertyModal .call-btn"
            ).href =
            `tel:${property.phone}`;

            document.querySelector(
                "#propertyModal .email-btn"
            ).href =
            `mailto:${property.email}`;

            const featuresList =
            document.getElementById(
                "propertyFeatures"
            );

            featuresList.innerHTML = "";

            property.features.forEach(feature=>{

                featuresList.innerHTML += `
                    <li>${feature}</li>
                `;

            });

            openModal(propertyModal);

        });

    });
    /* =========================
       LISTING MODAL
    ========================= */

    const openListingBtn = document.getElementById("openListingModal");

    openListingBtn?.addEventListener("click", () => {
        openModal(listingModal);
    });


    /* =========================
       SIMPLE FORM HANDLING
    ========================= */

    const listingForm = document.getElementById("listingForm");

    listingForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Property submitted successfully!");

        listingForm.reset();
        closeModal(listingModal);
    });


    /* =========================
       SCROLL ANIMATION (INTERSECTION OBSERVER)
    ========================= */

    const animatedElements = document.querySelectorAll(
        ".stat-card, .land-card, .property-card, .service-card, .step-card, .testimonial-card, .section-header"
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