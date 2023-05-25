let count = 0;
let countElement = document.getElementById("count");
let subtractButton = document.getElementById("subtractButton");
let addButton = document.getElementById("addButton");
let starsContainer = document.getElementById("starsContainer");

function updateCount() {
  countElement.textContent = count;
  starsContainer.innerHTML = "";

  for (var i = 0; i < count; i++) {
    let starBox = document.createElement("div");
    starBox.className = "star-box";
    starBox.innerHTML = '<i class="fas fa-star star-icon"></i>';
    starsContainer.appendChild(starBox);
  }
}

function incrementCount() {
  count++;
  updateCount();
}

function decrementCount() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

addButton.addEventListener("click", incrementCount);
subtractButton.addEventListener("click", decrementCount);

updateCount();