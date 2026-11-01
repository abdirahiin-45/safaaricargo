

// Ku beddel lambarkan WhatsApp-ka shirkaddaada.
// Ku qor country code-ka adigoon + ama spaces isticmaalin.
const whatsappNumber = "252617454321";

// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

  });

  // Close menu after clicking a navigation link

  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute("aria-label", "Open navigation");

    });

  });

  // Close menu when clicking outside

  document.addEventListener("click", (event) => {

    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {

      mainNav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");

    }

  });

}

// =========================================
// FOOTER AUTOMATIC YEAR
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// =========================================
// WHATSAPP QUOTE FORM
// =========================================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

  quoteForm.addEventListener("submit", (event) => {

    event.preventDefault();

    // Get form values

    const formData = new FormData(quoteForm);

    const customerName = formData.get("name").trim();
    const customerPhone = formData.get("phone").trim();
    const service = formData.get("service");
    const destination = formData.get("destination").trim();
    const details = formData.get("details").trim();

    // Validate WhatsApp number

    if (!/^\d{8,15}$/.test(whatsappNumber)) {

      alert("Please configure the company's WhatsApp number in script.js.");

      return;

    }

    // Prepare WhatsApp message

    const message = `
SAFAARICARGO & LOGISTICS
NEW SHIPPING QUOTE REQUEST

Customer Name: ${customerName}

Phone Number: ${customerPhone}

Service Type: ${service}

Destination: ${destination}

Cargo Details: ${details || "Not provided"}

--------------------------------
Thank you for choosing Safaaricargo!
`;

    // Encode message

    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

  });

}

// =========================================
// SHIPMENT TRACKING FORM
// =========================================

const trackingForm = document.getElementById("trackingForm");

const trackingNumber = document.getElementById("trackingNumber");

const trackingMessage = document.getElementById("trackingMessage");

if (trackingForm && trackingNumber && trackingMessage) {

  trackingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const trackingCode = trackingNumber.value.trim();

    if (!trackingCode) {

      trackingMessage.textContent =
        "Please enter your tracking number.";

      return;

    }

    if (!/^[a-zA-Z0-9-]{4,30}$/.test(trackingCode)) {

      trackingMessage.textContent =
        "Please enter a valid tracking number.";

      return;

    }

    // Tracking request through WhatsApp

    const message = `
Hello Safaaricargo & Logistics,

I would like to check my shipment status.

Tracking Number: ${trackingCode}

Please provide an update about my cargo.

Thank you.
`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    if (!/^\d{8,15}$/.test(whatsappNumber)) {

      trackingMessage.textContent =
        "Company WhatsApp number is not configured yet.";

      return;

    }

    trackingMessage.textContent =
      "Opening WhatsApp to request your shipment update...";

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

  });

}

// =========================================
// CONTACT WHATSAPP BUTTON
// =========================================

const contactWhatsApp =
  document.getElementById("contactWhatsApp");

if (contactWhatsApp) {

  contactWhatsApp.href =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(
      "Hello Safaaricargo & Logistics. I would like to know more about your services."
    );

  contactWhatsApp.target = "_blank";

  contactWhatsApp.rel = "noopener noreferrer";

}

// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll(
  "main section[id]"
);

const navLinks = document.querySelectorAll(
  ".nav a[href^='#']"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {

          link.classList.remove("active");

          if (
            link.getAttribute("href") ===
            `#${entry.target.id}`
          ) {

            link.classList.add("active");

          }

        });

      }

    });

  }, {
    threshold: 0,
    rootMargin: "-20% 0px -70% 0px"
  });

  sections.forEach(section => observer.observe(section));

}

console.log("Safaaricargo & Logistics website loaded successfully.");
