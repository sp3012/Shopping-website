
    document.addEventListener("DOMContentLoaded", function() {
        const products = document.querySelector(".menu-item");
        const dropdown = document.querySelector(".dropdown");
        const subDropdown = document.querySelector(".sub-dropdown");

        products.addEventListener("click", function(event) {
            dropdown.classList.toggle("show");
            event.stopPropagation();
        });

        document.addEventListener("click", function(event) {
            if (!event.target.closest(".menu-item")) {
                dropdown.classList.remove("show");
            }
        });

        const dhoopCones = document.querySelector(".dropdown li:first-child");
        dhoopCones.addEventListener("click", function(event) {
            subDropdown.classList.toggle("show");
            event.stopPropagation();
        });

        document.addEventListener("click", function(event) {
            if (!event.target.closest(".dropdown li:first-child")) {
                subDropdown.classList.remove("show");
            }
        });
    });
