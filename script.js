document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const query = searchInput.value.trim().toLowerCase();
    const found = products.some(p => p.name.toLowerCase().includes(query));

    if (!found && query !== "") {
      // No match found, redirect to product page
      window.location.href = "product.html";
    } else if (found) {
      // Optional: You can add automatic redirect to the first matched product if you want
      const matched = products.find(p => p.name.toLowerCase().includes(query));
      if (matched) {
        window.location.href = matched.link;
      }
    } else {
      alert("Thank you for contacting us! We will get back to you soon.");
    }
  });
});

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

const products = [
  { name: "Courier Bags", link: "courier-bags.html" },
  { name: "Bubble Wraps", link: "bubble-wrap.html" },
  { name: "Packaging Tapes", link: "packaging-tapes.html" },
  { name: "Corrugated Boxes", link: "corrugated-boxes.html" },
  { name: "Stretch Film", link: "stretch-film.html" }
];

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  suggestionsList.innerHTML = "";

  if (query.length === 0) {
    searchInput.style.boxShadow = "0 0 0 3px rgba(165, 121, 70, 0.4)";
    return;
  }

  searchInput.style.boxShadow = "none";

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  filtered.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product.name;
    li.classList.add("list-group-item", "list-group-item-action");
    li.addEventListener("click", () => {
      window.location.href = product.link;
    });
    suggestionsList.appendChild(li);
  });
});

document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
    suggestionsList.innerHTML = "";
    searchInput.style.boxShadow = "none";
  }
});
