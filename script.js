// dropdown of product then subdropdown to another one
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelector(".menu-item");
  const dropdown = document.querySelector(".dropdown");
  const subDropdown = document.querySelector(".sub-dropdown");

  products.addEventListener("click", function (event) {
    dropdown.classList.toggle("show");
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu-item")) {
      dropdown.classList.remove("show");
    }
  });

  const dhoopCones = document.querySelector(".dropdown li:first-child");
  dhoopCones.addEventListener("click", function (event) {
    subDropdown.classList.toggle("show");
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown li:first-child")) {
      subDropdown.classList.remove("show");
    }
  });
});

// For cart product increase and decrease

function increaseCount() {
  let countInput = document.getElementById("count");
  let currentCount = parseInt(countInput.value);
  countInput.value = currentCount + 1;
}

function decreaseCount() {
  let countInput = document.getElementById("count");
  let currentCount = parseInt(countInput.value);
  if (currentCount > 1) {
    countInput.value = currentCount - 1;
  }
}



document.addEventListener("DOMContentLoaded", function () {
  var menuContainer = document.querySelector(".menu-container");
  menuContainer.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});
