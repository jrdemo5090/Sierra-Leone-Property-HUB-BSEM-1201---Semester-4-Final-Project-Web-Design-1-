/* =========================
   MOBILE MENU TOGGLE
========================= */

document.addEventListener("DOMContentLoaded", () => {
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
});

/* =========================
   MODAL SYSTEM
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

document.querySelector(".cancel-btn")?.addEventListener("click", () => {
    closeModal(listingModal);
});

/* =========================
   PROPERTY DATABASE (18 ITEMS)
========================= */

const properties = {

    /* ===== RESIDENTIAL ===== */
    "aberdeen": {
        title:"Modern Family House",
        location:"Aberdeen, Freetown",
        price:"Le 850,000",
        bedrooms:"4 Bedrooms",
        bathrooms:"3 Bathrooms",
        seller:"Mariama Kamara",
        phone:"+23278654321",
        email:"mariamakamara@gmail.com",
        description:"Beautiful family residence located in Aberdeen. Features spacious living areas, modern kitchen, secure compound, parking area and uninterrupted water supply.",
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

    "lumley": {
        title:"Luxury Villa",
        location:"Lumley, Freetown",
        price:"Le 1,500,000",
        bedrooms:"5 Bedrooms",
        bathrooms:"5 Bathrooms",
        seller:"Ibrahim Koroma",
        phone:"+23277811223",
        email:"ibrahimkoroma@gmail.com",
        description:"Luxury villa situated in Lumley with ocean views, premium finishes, private compound and modern security systems.",
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

    "bo-apartment": {
        title:"3 Bedroom Apartment",
        location:"Bo City",
        price:"Le 500,000",
        bedrooms:"3 Bedrooms",
        bathrooms:"2 Bathrooms",
        seller:"Fatmata Conteh",
        phone:"+23277444556",
        email:"fatmata@gmail.com",
        description:"Modern apartment in the heart of Bo City offering convenience, security and easy access to essential services.",
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

    "tokeh": {
        title:"Beach House",
        location:"Tokeh Beach",
        price:"Le 1,200,000",
        bedrooms:"4 Bedrooms",
        bathrooms:"4 Bathrooms",
        seller:"Mustapha Bangura",
        phone:"+23277222444",
        email:"mustapha@gmail.com",
        description:"Beautiful beachfront property offering direct beach access, scenic views and excellent rental investment potential.",
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

    "hill": {
        title:"Executive Duplex",
        location:"Hill Station",
        price:"Le 950,000",
        bedrooms:"4 Bedrooms",
        bathrooms:"4 Bathrooms",
        seller:"Joseph Sesay",
        phone:"+23276555111",
        email:"joseph@gmail.com",
        description:"Elegant duplex located in Hill Station featuring modern architecture, spacious interiors and secure surroundings.",
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

    "central-freetown": {
        title:"Commercial Building",
        location:"Central Freetown",
        price:"Le 2,500,000",
        bedrooms:"18 Office Spaces",
        bathrooms:"8 Bathrooms",
        seller:"Abdul Kamara",
        phone:"+23277333888",
        email:"abdul@gmail.com",
        description:"Prime commercial building in Central Freetown suitable for offices, banking operations, retail businesses and investment opportunities.",
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
    },

    /* ===== LAND ===== */
    "waterloo": {
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

    "bo-land": {
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

    "makeni-land": {
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

    "kono-land": {
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

    "kenema-land": {
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

    "portloko-land": {
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
    },

    /* ===== EXTRA ===== */
    "freetown-penthouse": {
        title:"Freetown Penthouse",
        location:"Freetown",
        price:"Le 3,200,000",
        bedrooms:"5 Bedrooms",
        bathrooms:"5 Bathrooms",
        seller:"Elite Homes",
        phone:"+23270000000",
        email:"elite@gmail.com",
        description:"Luxury penthouse with stunning city views.",
        features:[
            "City View",
            "Luxury Finish",
            "Rooftop Access",
            "Modern Amenities"
        ]
    },

    "tonkolili-land": {
        title:"Tonkolili Farmland",
        location:"Tonkolili",
        price:"Le 600,000",
        size:"6 Acres",
        status:"Available",
        owner:"SPH Agriculture",
        phone:"+23276123456",
        email:"agri@sph.com",
        description:"Large farmland suitable for agricultural projects.",
        features:[
            "6 Acres",
            "Agricultural Potential",
            "Verified Records",
            "Road Access"
        ]
    },

    "kenema-bungalow": {
        title:"Kenema Bungalow",
        location:"Kenema",
        price:"Le 780,000",
        bedrooms:"3 Bedrooms",
        bathrooms:"2 Bathrooms",
        seller:"SPH Homes",
        phone:"+23276123456",
        email:"homes@sph.com",
        description:"Family bungalow with modern design and comfortable living spaces.",
        features:[
            "Modern Design",
            "Comfortable Living",
            "Spacious Rooms",
            "Garden Area"
        ]
    },

    "bonthe-land": {
        title:"Bonthe Island Land",
        location:"Bonthe",
        price:"Le 500,000",
        size:"3 Acres",
        status:"Available",
        owner:"SPH Lands",
        phone:"+23276123456",
        email:"lands@sph.com",
        description:"Coastal development land with excellent investment potential.",
        features:[
            "3 Acres",
            "Verified Records",
            "Coastal Access",
            "Development Potential"
        ]
    },

    "makeni-plaza": {
        title:"Makeni Plaza",
        location:"Makeni",
        price:"Le 1,800,000",
        bedrooms:"Office Spaces",
        bathrooms:"Facilities",
        seller:"SPH Commercial",
        phone:"+23276123456",
        email:"commercial@sph.com",
        description:"Commercial plaza with multiple office spaces and parking.",
        features:[
            "Office Spaces",
            "Parking",
            "Security System",
            "Prime Location"
        ]
    },

    "western-farmland": {
        title:"Western Rural Farmland",
        location:"Western Rural",
        price:"Le 900,000",
        size:"10 Acres",
        status:"Available",
        owner:"SPH Agriculture",
        phone:"+23276123456",
        email:"agri@sph.com",
        description:"Large fertile farmland ideal for agricultural development.",
        features:[
            "10 Acres",
            "Verified Records",
            "Fertile Soil",
            "Road Access"
        ]
    }
};


/* =========================
   CLICK HANDLER
========================= */

document.querySelectorAll(".property-card").forEach(card => {
    card.querySelector(".view-btn")?.addEventListener("click", () => {

        const id = card.dataset.id;
        const type = card.dataset.type;
        const p = properties[id];
        if (!p) return;

        if (type === "land") {
            // Handle land modal
            document.getElementById("landModalImage").src =
                card.querySelector("img").src;

            document.getElementById("landTitle").textContent =
                p.title;

            document.getElementById("landLocation").textContent =
                p.location;

            document.getElementById("landPrice").textContent =
                p.price;

            document.getElementById("landSize").textContent =
                p.size;

            document.getElementById("landStatus").textContent =
                p.status;

            document.getElementById("landDescription").textContent =
                p.description;

            const sellerInfo =
                document.querySelector("#landModal .seller-info");

            sellerInfo.innerHTML = `
                <p><strong>Owner:</strong> ${p.owner}</p>
                <p><strong>Phone:</strong> ${p.phone}</p>
                <p><strong>Email:</strong> ${p.email}</p>
            `;

            document.querySelector("#landModal .call-btn").href =
                `tel:${p.phone}`;

            document.querySelector("#landModal .email-btn").href =
                `mailto:${p.email}`;

            const featuresList =
                document.querySelector("#landModal ul");

            featuresList.innerHTML = "";

            p.features.forEach(f=>{

                featuresList.innerHTML += `
                    <li>${f}</li>
                `;

            });

            openModal(landModal);
        } else {
            // Handle property modal
            document.getElementById("propertyModalImage").src =
                card.querySelector("img").src;

            document.getElementById("propertyTitle").textContent =
                p.title;

            document.getElementById("propertyLocation").textContent =
                p.location;

            document.getElementById("propertyPrice").textContent =
                p.price;

            document.getElementById("propertyBedrooms").textContent =
                p.bedrooms;

            document.getElementById("propertyBathrooms").textContent =
                p.bathrooms;

            document.getElementById("propertyDescription").textContent =
                p.description;

            const sellerInfo =
                document.querySelector("#propertyModal .seller-info");

            sellerInfo.innerHTML = `
                <p><strong>Seller:</strong> ${p.seller}</p>
                <p><strong>Phone:</strong> ${p.phone}</p>
                <p><strong>Email:</strong> ${p.email}</p>
            `;

            document.querySelector("#propertyModal .call-btn").href =
                `tel:${p.phone}`;

            document.querySelector("#propertyModal .email-btn").href =
                `mailto:${p.email}`;

            const featuresList =
                document.getElementById("propertyFeatures");

            featuresList.innerHTML = "";

            p.features.forEach(f=>{

                featuresList.innerHTML += `
                    <li>${f}</li>
                `;

            });

            openModal(propertyModal);
        }
    });
});


/* =========================
   LISTING FORM
========================= */

document.getElementById("listingForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Listing submitted successfully!");
    e.target.reset();
    closeModal(listingModal);
});

/* Open listing modal (if button exists) */
document.getElementById("openListingModal")?.addEventListener("click", () => {
    openModal(listingModal);
});