// fa-xmark
const hamburgerMenuBtn = document.querySelector("#menu-btn");

const navMenu = document.querySelector("#nav-box");
const navLinksContainer = document.getElementById("nav-links");

hamburgerMenuBtn.addEventListener("click", (e) => {
  const iconClassList = e.target.classList;
  /*
   * this handles the change of the icon
   * fa-bars is the hamburger icon
   * while fa-xmark is the x icon
   */
  if (iconClassList.contains("fa-bars")) {
    iconClassList.remove("fa-bars");
    iconClassList.add("fa-xmark");
  } else {
    iconClassList.remove("fa-xmark");
    iconClassList.add("fa-bars");
  }
  // this handle the opening and closing of the mobile menu
  navMenu.classList.toggle("active");
  console.log(e.target);
});

// Add a click event listener to the parent element
navLinksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();
    // Remove the "active" class from all links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked link
    e.target.classList.add("active");
  }
});
