// let smallS = document.getElementById("smallSButton");
// let links = document.getElementById("links");
// let target = document.querySelector(".sr-only");
// smallS.addEventListener("click", showMenu);
// function showMenu() {
//   for (const child of links.children) {
//     childs(child);
//   }
//   function childs(child) {
//     let element = document.createElement("span");
//     element.textContent = child.textContent;
//     target.appendChild(element);
//   }
// }
// Get references to the button and the menu
// Get references to the button and the menu
const button = document.getElementById("smallSButton");
const menu = document.getElementById("navbar-cta");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Toggle the "hidden" class on the menu
  menu.classList.add("anime");
  menu.classList.toggle("hidden");
  const isHidden = menu.classList.contains("hidden");
  // Set the transform property based on the visibility
  // Toggle the "aria-expanded" attribute on the button
  const expanded = button.getAttribute("aria-expanded") === "true" || false;
  button.setAttribute("aria-expanded", !expanded);
});

const $prevButton = document.getElementById("data-carousel-prev");
const $nextButton = document.getElementById("data-carousel-next");

$prevButton.addEventListener("click", () => {
  carousel.prev();
});

$nextButton.addEventListener("click", () => {
  carousel.next();
});
