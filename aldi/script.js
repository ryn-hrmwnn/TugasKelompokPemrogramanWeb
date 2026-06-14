const yearElement = document.querySelector("#currentYear");
const contactButton = document.querySelector("#contactButton");
const contactMessage = document.querySelector("#contactMessage");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (contactButton && contactMessage) {
    contactButton.addEventListener("click", () => {
        contactMessage.classList.toggle("d-none");
    });
}
