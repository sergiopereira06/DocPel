document.addEventListener("DOMContentLoaded", () => {
    function small_window(){
        const largura = window.innerWidth;
        if (largura <= 768) {
            
            menuBarIcon.classList.toggle("active", true);
            closeIcon.classList.toggle("active", false);
            navLinks.classList.toggle("active", false);
        }
    }

  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuBarIcon = document.querySelector(".menu-bar");
  const closeIcon = document.querySelector(".eicon-close");
  const navLinks = document.querySelector(".nav-links");

  small_window()

  window.addEventListener("resize", (e) => {
    small_window()
  });
  

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    header.classList.toggle("expanded");
    const isOpen = navLinks.classList.contains("active");
    menuBarIcon.classList.toggle("active", !isOpen);
    closeIcon.classList.toggle("active", isOpen);
  });

});
