
// =========================
// EMAILJS CONFIGURATION
// =========================

const SERVICE_ID = "service_z0z0ajo";
const TEMPLATE_ID = "template_ttuegya";
const PUBLIC_KEY = "bhh0ZEfW_h1IBA_zM";

// Inisialisasi EmailJS
emailjs.init({
    publicKey: PUBLIC_KEY
});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Mohon lengkapi semua kolom.";
            return;
        }

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        submitButton.disabled = true;
        submitButton.textContent = "Mengirim...";

        formStatus.textContent = "";

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: name,
                    email: email,
                    message: message
                }
            );

            formStatus.textContent =
                "Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.";

            formStatus.style.color = "green";
            contactForm.reset();

        } catch (error) {
            console.error("EmailJS Error:", error);

            formStatus.textContent =
                "Pesan gagal dikirim. Silakan coba kembali.";

            formStatus.style.color = "red";

        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Kirim Pesan";
        }
    });
}
