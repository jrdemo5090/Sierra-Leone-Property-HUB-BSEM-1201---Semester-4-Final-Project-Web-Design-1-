/* =========================
   SALONE PROPERTY HUB - SERVICES JS
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

    /* =========================
       MODAL HANDLING
    ========================= */

    const modals = {
        lease: document.getElementById("leaseModal"),
        freehold: document.getElementById("freeholdModal"),
        verify: document.getElementById("verifyModal"),
        listing: document.getElementById("listingModal")
    };

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

    /* Open listing modal */
    document.getElementById("openListingModal")?.addEventListener("click", () => {
        openModal(modals.listing);
    });

    /* Close buttons for all modals */
    document.querySelectorAll(".close-modal").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const modalId = btn.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            closeModal(modal);
        });
    });

    /* Close modal on outside click */
    window.addEventListener("click", (e) => {
        Object.values(modals).forEach(modal => {
            if (e.target === modal) closeModal(modal);
        });
    });

    /* Close on cancel button for all modals */
    document.querySelectorAll(".cancel-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const form = btn.closest("form");
            const modal = form?.closest(".modal");
            closeModal(modal);
        });
    });

    /* =========================
       FORM SUBMISSION HANDLING
    ========================= */

    document.querySelectorAll(".service-form").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const service = form.getAttribute("data-service");
            const formData = new FormData(form);
            
            const serviceNames = {
                lease: "Land Lease Application",
                freehold: "Freehold Application",
                verify: "Property Verification",
                listing: "Property Listing"
            };

            console.log(`${serviceNames[service]} submitted`, Object.fromEntries(formData));
            
            // Show success message
            alert(`Thank you! Your ${serviceNames[service]} has been submitted for review.\n\nWe will contact you shortly with updates.`);
            
            // Reset form
            form.reset();
            
            // Close modal
            const modal = form.closest(".modal");
            closeModal(modal);
        });
    });

    /* =========================
       SERVICE BUTTON CLICKS
    ========================= */

    const serviceButtons = document.querySelectorAll(".service-btn");

    serviceButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const service = button.getAttribute("data-service");
            
            if (service === "lease") {
                openModal(modals.lease);
            } else if (service === "freehold") {
                openModal(modals.freehold);
            } else if (service === "verify") {
                openModal(modals.verify);
            }
        });
    });

    /* =========================
       PROPERTY CARD INTERACTIONS
    ========================= */

    /* Lands Data */
    const landsData = [
        {
            title: "Waterloo Commercial Land",
            location: "Waterloo, Western Urban",
            price: "Le 250,000",
            size: "2 Acres",
            status: "Available",
            owner: "Ibrahim Sesay",
            phone: "+23276123456",
            email: "ibrahimsesay@gmail.com",
            description: "Premium commercial land with excellent road access, verified ownership documents, survey plan and strong investment potential.",
            features: [
                "Verified Ownership Documents",
                "Survey Plan Available",
                "Road Access",
                "Electricity Available",
                "Suitable For Commercial Development",
                "Government Approved Area"
            ]
        },
        {
            title: "Bo City Residential Plot",
            location: "Bo City, Bo District",
            price: "Le 180,000",
            size: "1.5 Acres",
            status: "Available",
            owner: "Mariama Kamara",
            phone: "+23278543211",
            email: "mariama@gmail.com",
            description: "Strategically located residential plot in prime location with utility connections available and strong growth potential.",
            features: [
                "Road Access",
                "Survey Available",
                "Residential Zone",
                "Verified Records",
                "Water Source Nearby",
                "Growing Community"
            ]
        },
        {
            title: "Makeni Agricultural Land",
            location: "Makeni, Bombali District",
            price: "Le 400,000",
            size: "3 Acres",
            status: "Available",
            owner: "Joseph Bangura",
            phone: "+23277234567",
            email: "joseph@gmail.com",
            description: "Large agricultural land suitable for farming and commercial agricultural development with excellent accessibility.",
            features: [
                "3 Acres Large Parcel",
                "Agricultural Potential",
                "Verified Ownership",
                "Road Network",
                "Survey Plan Available",
                "Expansion Area"
            ]
        },
        {
            title: "Kono Mining Adjacent Plot",
            location: "Kono District",
            price: "Le 320,000",
            size: "2.5 Acres",
            status: "Available",
            owner: "Abdul Koroma",
            phone: "+23276677889",
            email: "abdul@gmail.com",
            description: "Secure commercial investment land in a fast-growing area with strong development potential near mining facilities.",
            features: [
                "Road Access",
                "Survey Plan",
                "Verified Documents",
                "Commercial Investment Area",
                "Electricity Nearby",
                "Approved Layout"
            ]
        },
        {
            title: "Tonkolili Rural Land",
            location: "Tonkolili District",
            price: "Le 280,000",
            size: "4 Acres",
            status: "Available",
            owner: "Fatmata Conteh",
            phone: "+23278456789",
            email: "fatmata@gmail.com",
            description: "Large parcel of rural land ideal for estates, agricultural projects and future expansion opportunities.",
            features: [
                "4 Acres Large Parcel",
                "Agricultural Potential",
                "Residential Potential",
                "Survey Available",
                "Road Access",
                "Verified Ownership"
            ]
        }
    ];

    /* Properties Data */
    const propertiesData = [
        {
            title: "Modern 2-Story Town House",
            location: "Kenema, Kenema District",
            price: "Le 550,000",
            bedrooms: "3 Bedrooms",
            bathrooms: "2 Bathrooms",
            seller: "Mustapha Bangura",
            phone: "+23277222444",
            email: "mustapha@gmail.com",
            description: "Beautiful 2-story residential house in central location with modern facilities, secure compound and excellent investment potential.",
            features: [
                "3 Spacious Bedrooms",
                "2 Modern Bathrooms",
                "Living Room",
                "Modern Kitchen",
                "Dining Area",
                "Parking Space",
                "Water Supply",
                "Perimeter Fence"
            ]
        }
    ];

    /* Land Details Modal Handler */
    const landDetailsModal = document.getElementById("landDetailsModal");
    const propertyDetailsModal = document.getElementById("propertyDetailsModal");

    const viewButtons = document.querySelectorAll(".view-btn");

    viewButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const card = button.closest(".property-card");
            const dataType = card.getAttribute("data-type");
            const dataIndex = card.getAttribute("data-index");

            if (dataType === "land") {
                const land = landsData[dataIndex];

                if (land) {
                    document.getElementById("landDetailsImage").src = card.querySelector("img").src;
                    document.getElementById("landDetailsTitle").textContent = land.title;
                    document.getElementById("landDetailsLocation").textContent = land.location;
                    document.getElementById("landDetailsPrice").textContent = land.price;
                    document.getElementById("landDetailsSize").textContent = land.size;
                    document.getElementById("landDetailsStatus").textContent = land.status;
                    document.getElementById("landDetailsDescription").textContent = land.description;

                    const featuresList = document.querySelector("#landDetailsFeatures");
                    featuresList.innerHTML = "";
                    land.features.forEach(feature => {
                        featuresList.innerHTML += `<li>${feature}</li>`;
                    });

                    document.querySelector("#landDetailsSeller").innerHTML = `
                        <p><strong>Owner:</strong> ${land.owner}</p>
                        <p><strong>Phone:</strong> ${land.phone}</p>
                        <p><strong>Email:</strong> ${land.email}</p>
                    `;

                    document.getElementById("landDetailsCall").href = `tel:${land.phone}`;
                    document.getElementById("landDetailsEmail").href = `mailto:${land.email}`;

                    openModal(landDetailsModal);
                }
            } else if (dataType === "property") {
                const property = propertiesData[dataIndex];

                if (property) {
                    document.getElementById("propertyDetailsImage").src = card.querySelector("img").src;
                    document.getElementById("propertyDetailsTitle").textContent = property.title;
                    document.getElementById("propertyDetailsLocation").textContent = property.location;
                    document.getElementById("propertyDetailsPrice").textContent = property.price;
                    document.getElementById("propertyDetailsBedrooms").textContent = property.bedrooms;
                    document.getElementById("propertyDetailsBathrooms").textContent = property.bathrooms;
                    document.getElementById("propertyDetailsDescription").textContent = property.description;

                    const featuresList = document.querySelector("#propertyDetailsFeatures");
                    featuresList.innerHTML = "";
                    property.features.forEach(feature => {
                        featuresList.innerHTML += `<li>${feature}</li>`;
                    });

                    document.querySelector("#propertyDetailsSeller").innerHTML = `
                        <p><strong>Seller:</strong> ${property.seller}</p>
                        <p><strong>Phone:</strong> ${property.phone}</p>
                        <p><strong>Email:</strong> ${property.email}</p>
                    `;

                    document.getElementById("propertyDetailsCall").href = `tel:${property.phone}`;
                    document.getElementById("propertyDetailsEmail").href = `mailto:${property.email}`;

                    openModal(propertyDetailsModal);
                }
            }
        });
    });

    /* Close detail modals on outside click */
    window.addEventListener("click", (e) => {
        if (e.target === landDetailsModal) closeModal(landDetailsModal);
        if (e.target === propertyDetailsModal) closeModal(propertyDetailsModal);
    });

    /* =========================
       SEARCH FUNCTIONALITY
    ========================= */

    const searchBtn = document.querySelector(".search-btn");

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            const district = document.querySelectorAll(".search-form select")[0].value;
            const type = document.querySelectorAll(".search-form select")[1].value;
            const price = document.querySelectorAll(".search-form select")[2].value;

            console.log("Search Query:", {
                district,
                type,
                price
            });

            // In a real app, this would filter properties
            alert(`Searching for:\nDistrict: ${district}\nType: ${type}\nPrice: ${price}`);
        });
    }

    /* =========================
       SMOOTH SCROLL BEHAVIOR
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            const href = anchor.getAttribute("href");
            if (href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });

});
