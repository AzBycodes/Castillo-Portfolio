// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all the links inside the navigation bar
  const navLinks = document.querySelectorAll("nav a");

  // Add a click event to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Prevent the default instant-jump behavior
      e.preventDefault();

      // Get the target section's ID (e.g., "#about")
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // If the section exists on the page, smoothly scroll to it
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
