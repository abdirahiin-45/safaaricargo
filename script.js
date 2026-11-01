
// =========================================
// SAFAARICARGO & LOGISTICS
// COMPLETE JAVASCRIPT
// =========================================

// COMPANY WHATSAPP NUMBER
const whatsappNumber = "252617454321";


// =========================================
// 1. MOBILE MENU
// =========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("active");

    const isOpen = mainNav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

  });

  // Close menu when clicking a link
  mainNav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      mainNav.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {

    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {

      mainNav.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

    }

  });

}


// =========================================
// 2. AUTOMATIC FOOTER YEAR
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


// =========================================
// 3. WHATSAPP CONTACT BUTTON
// =========================================

const contactWhatsApp = document.getElementById("contactWhatsApp");

if (contactWhatsApp) {

  contactWhatsApp.href =
    `https://wa.me/${whatsappNumber}`;

  contactWhatsApp.target = "_blank";

  contactWhatsApp.rel = "noopener noreferrer";

}


// =========================================
// 4. SHIPMENT TRACKING SYSTEM
// =========================================

const trackingForm = document.getElementById("trackingForm");

const trackingNumberInput = document.getElementById("trackingNumber");

const trackingMessage = document.getElementById("trackingMessage");

const trackingResult = document.getElementById("trackingResult");

const trackingStatus = document.getElementById("trackingStatus");

const trackingDetails = document.getElementById("trackingDetails");


// DEMO SHIPMENT RECORDS
// Replace these sample records with real shipment data.

const shipments = {

  "SFC-10245": {
    status: "READY",
    details: "Your shipment is ready for collection."
  },

  "SFC-10246": {
    status: "PENDING",
    details: "Your shipment is being prepared. Please wait for an update."
  },

  "SFC-10247": {
    status: "SHIPPED",
    details: "Your shipment has been dispatched and is on its way."
  },

  "SFC-10248": {
    status: "DELIVERED",
    details: "Your shipment has been successfully delivered."
  },

  "SFC-10249": {
    status: "PENDING",
    details: "Your shipment has been registered successfully."
  }

};




if (trackingForm) {

  trackingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const trackingNumber = trackingNumberInput.value
      .trim()
      .toUpperCase();

    // Hide previous result
    trackingResult.style.display = "none";

    trackingResult.className = "";

    // Validate tracking number
    if (!/^[A-Z0-9-]{5,30}$/.test(trackingNumber)) {

      trackingMessage.textContent =
        "Please enter a valid tracking number.";

      trackingMessage.style.color = "#ff6b6b";

      return;

    }

    // Search shipment
    const shipment = shipments[trackingNumber];

    if (shipment) {

      // Display shipment result
      trackingResult.style.display = "block";

      trackingStatus.textContent = shipment.status;

      trackingDetails.textContent = shipment.details;

      // Add status color
      trackingResult.classList.add(
        shipment.status.toLowerCase()
      );

      trackingMessage.textContent =
        "Tracking information found successfully.";

      trackingMessage.style.color = "#16a34a";

    } else {

      // Shipment not found
      trackingResult.style.display = "block";

      trackingResult.classList.add("not-found");

      trackingStatus.textContent = "NOT FOUND";

      trackingDetails.textContent =
        "We could not find this tracking number. Please contact our support team to verify your shipment.";

      trackingMessage.textContent =
        "Tracking number not found. Please check and try again.";

      trackingMessage.style.color = "#ff6b6b";

    }

  });

}


// =========================================
// 5. QUOTE FORM - WHATSAPP
// =========================================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

  quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value;

    const destination = document.getElementById("destination").value.trim();

    const details = document.getElementById("details").value.trim();

    // Validate required fields
    if (!name || !phone || !service || !destination) {

      alert("Please complete all required fields.");

      return;

    }

    // Create WhatsApp message
    const message = `
SAFAARICARGO & LOGISTICS
SHIPPING QUOTE REQUEST

Name: ${name}
Phone: ${phone}
Service: ${service}
Destination: ${destination}
Cargo Details: ${details || "Not provided"}

Thank you for contacting Safaaricargo.
`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });

}


// =========================================
// 6. ACTIVE NAVIGATION
// =========================================

const pageSections = document.querySelectorAll(
  "main section[id]"
);

const navLinks = document.querySelectorAll(
  ".nav a[href^='#']"
);

if ("IntersectionObserver" in window) {

  const sectionObserver = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          const sectionId = entry.target.id;

          navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${sectionId}`) {

              link.classList.add("active");

            }

          });

        }

      });

    },
    {
      rootMargin: "-30% 0px -60% 0px"
    }
  );

  pageSections.forEach(function (section) {

    sectionObserver.observe(section);

  });

}
