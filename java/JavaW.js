const search = document.getElementById("search");
const brandFilter = document.getElementById("brandFilter");
const sortSelect = document.getElementById("sort");



function updateCars() {
  let cards = Array.from(document.querySelectorAll(".card"));

  if (sortSelect.value === "high") cards.sort((a, b) => b.dataset.price - a.dataset.price);
  if (sortSelect.value === "low") cards.sort((a, b) => a.dataset.price - b.dataset.price);

  cards.forEach(card => shop.appendChild(card));

  const text = search.value.toLowerCase();
  const brand = brandFilter.value;

  cards.forEach(card => {
    const name = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = (name.includes(text) && (brand === "all" || card.dataset.brand === brand)) ? "block" : "none";
  });
}

search.addEventListener("input", updateCars);
brandFilter.addEventListener("change", updateCars);
sortSelect.addEventListener("change", updateCars);

updateCars();