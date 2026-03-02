console.log("CyberSecure website loaded");

// Contact Form Logic
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const contactData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        localStorage.setItem("contactData", JSON.stringify(contactData));
        alert("Message saved successfully!");
        contactForm.reset();
    });
}