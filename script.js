document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  });
});

// search.js
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("productSearch");
  if (!searchInput) return; // Exit if no search input on page

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    // Select all product cards on the page
    const productCards = document.querySelectorAll("#products .card");

    productCards.forEach((card) => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const desc = card.querySelector(".card-text").textContent.toLowerCase();

      if (title.includes(filter) || desc.includes(filter)) {
        card.parentElement.style.display = ""; // Show the product card's col div
      } else {
        card.parentElement.style.display = "none"; // Hide the product card's col div
      }
    });
  });
});
