tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  }
}

function toggleMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
}

