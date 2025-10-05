document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio page loaded successfully.");

  // 🌙 Dark Mode Toggle
  const toggle = document.createElement("button");
  toggle.textContent = "🌙 Toggle Dark Mode";
  Object.assign(toggle.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 14px",
    fontSize: "14px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    zIndex: "1000",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  });
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

  // 🌍 Global Pricing Calculator
  const countrySelect = document.getElementById("country");
  const priceOutput = document.getElementById("price-output");

  const prices = {
    USD: "$50 USD",
    GHS: "₵600 GHS",
    NGN: "₦60,000 NGN",
    EUR: "€45 EUR",
    GBP: "£40 GBP"
  };

  if (countrySelect && priceOutput) {
    countrySelect.addEventListener("change", () => {
      const selected = countrySelect.value;
      priceOutput.textContent = `Starting price: ${prices[selected]}`;
    });
  }

  // 💬 Testimonials Carousel
  const testimonials = [
    {
      text: "“David delivered our site fast and professionally.” — Angel Gina",
      img: "images/testimonials/angelgina.jpg"
    },
    {
      text: "“Reliable, creative, and easy to work with.” — BrightPath Team",
      img: "images/testimonials/brightpath.jpg"
    },
    {
      text: "“Highly recommended for any web project.” — Freelance Client",
      img: "images/testimonials/client.jpg"
    }
  ];

  const testimonialText = document.getElementById("testimonial");
  const testimonialImg = document.getElementById("testimonial-img");

  if (testimonialText && testimonialImg) {
    let index = 0;
    setInterval(() => {
      index = (index + 1) % testimonials.length;
      testimonialText.textContent = testimonials[index].text;
      testimonialImg.src = testimonials[index].img;
    }, 4000);
  }
});
