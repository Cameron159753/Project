const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Show popup
    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");

    // Reset form
    form.reset();
});

closeBtn.addEventListener("click", function() {
    popup.classList.remove("show");
    popup.setAttribute("aria-hidden", "true");
});

/* close when clicking outside */
popup.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.classList.remove("show");
        popup.setAttribute("aria-hidden", "true");
    }
});