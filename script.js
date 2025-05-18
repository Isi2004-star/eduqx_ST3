document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header");
  const hamburger = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");

  // Highlight active link based on pathname
  document.querySelectorAll(".nav-links li a").forEach((link) => {
    if (link.pathname === window.location.pathname) {
      link.classList.add("active");
    }
  });

  // Handle navbar scroll effect
  const handleScroll = () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 0);
    }
  };
  window.addEventListener("scroll", handleScroll);

  // Toggle menu on hamburger click
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Close menu when clicking on a navigation link (event delegation)
    nav.addEventListener("click", (event) => {
      if (event.target.closest(".nav-links li a")) {
        nav.classList.remove("active");
      }
    });
  }

  // Back to top button interaction logic
  var toTopBtn = document.getElementById("to-top-btn");

  if (toTopBtn) {
    // Default hidden
    toTopBtn.style.opacity = "0";
    // When the user scrolls down 250px from the top of the document, show the button
    window.onscroll = function () {
      if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
      ) {
        toTopBtn.style.opacity = "1";
      } else {
        toTopBtn.style.opacity = "0";
      }
    };

    // Scroll to top when the button is clicked
    toTopBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }
});
