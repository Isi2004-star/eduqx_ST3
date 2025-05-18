document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll("h2, h3");
  const links = document.querySelectorAll(".toc a");

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY + 200;

    // Find the last heading that's above our current scroll position
    let currentHeading = null;
    headings.forEach((heading) => {
      if (heading.offsetTop <= scrollPos) currentHeading = heading;
    });

    if (currentHeading) {
      // Remove active class from all links
      links.forEach((link) => link.classList.remove("active"));

      // Add active class to matching link
      const activeLink = document.querySelector(
        `.toc a[href="#${currentHeading.id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
});
