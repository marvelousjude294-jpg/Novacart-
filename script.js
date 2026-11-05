const WHATSAPP_NUMBER = "2349165471932";

// Open WhatsApp with a message
function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}

// Product enquiry buttons
document.querySelectorAll(".order-button").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "your products";
    openWhatsApp(`Hello NovaCart! I'm interested in the ${product}. Please confirm availability and price.`);
  });
});

// Main contact button
const contactButton = document.getElementById("contactButton");

if (contactButton) {
  contactButton.addEventListener("click", () => {
    openWhatsApp("Hello NovaCart! I'd like to make an enquiry.");
  });
}

// Product filters
const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    productCards.forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

// Current year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
