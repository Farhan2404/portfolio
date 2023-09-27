tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#219c90',
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

