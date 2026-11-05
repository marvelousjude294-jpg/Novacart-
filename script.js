const WHATSAPP_NUMBER = "2349165471932";

const buttons = document.querySelectorAll(".whatsapp-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const message = encodeURIComponent(
      "Hello NovaCart! I'm interested in your products."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  });
});
