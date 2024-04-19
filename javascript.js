document.addEventListener("DOMContentLoaded", function() {
    // Get the banner and close button elements
    var bannerContainer = document.getElementById("banner-container");
    var closeButton = document.getElementById("close-banner");

    // Show the banner
    bannerContainer.style.display = "block";

    // Close banner when close button is clicked
    closeButton.addEventListener("click", function() {
        bannerContainer.style.display = "none";
    });
});
