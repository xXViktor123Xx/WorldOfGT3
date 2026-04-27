const search = document.getElementById("search");
const brandFilter = document.getElementById("brandFilter");
const sortSelect = document.getElementById("sort");
const shop = document.getElementById("shop");

function updateCars() {

let cards = Array.from(document.querySelectorAll(".card"));


if(sortSelect.value === "high"){
cards.sort((a,b) => b.dataset.price - a.dataset.price);
}

if(sortSelect.value === "low"){
cards.sort((a,b) => a.dataset.price - b.dataset.price);
}


cards.forEach(card => shop.appendChild(card));


let text = search.value.toLowerCase();
let brand = brandFilter.value;

cards.forEach(card => {

let name = card.querySelector("h2").textContent.toLowerCase();

let matchText = name.includes(text);
let matchBrand = brand === "all" || card.dataset.brand === brand;

card.style.display = (matchText && matchBrand) ? "block" : "none";

});

}


search.addEventListener("input", updateCars);
brandFilter.addEventListener("change", updateCars);
sortSelect.addEventListener("change", updateCars);


updateCars();