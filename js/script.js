document.addEventListener("DOMContentLoaded", () => {
    function small_window(){
        const largura = window.innerWidth;
        if (largura <= 768) {
            
            menuBarIcon.classList.toggle("active", true);
            closeIcon.classList.toggle("active", false);
            navLinks.classList.toggle("active", false);
        }
    }
  const menuToggle = document.querySelector(".menu-toggle");
  const menuBarIcon = document.querySelector(".menu-bar");
  const closeIcon = document.querySelector(".eicon-close");
  const navLinks = document.querySelector(".nav-links");

  const btnPix = document.getElementById("selectPix");
  const btnCard = document.getElementById("selectCard");
  const formSection = document.getElementById("formulario");
  const inputPagamento = document.getElementById("pagamento");
  small_window()

  window.addEventListener("resize", (e) => {
    small_window()
  });
  

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuBarIcon.classList.toggle("active", !isOpen);
    closeIcon.classList.toggle("active", isOpen);
  });

  btnPix.addEventListener("click", () => {
    inputPagamento.value = "PIX";
    formSection.classList.remove("hidden");
    formSection.scrollIntoView({ behavior: "smooth" });
  });

  btnCard.addEventListener("click", () => {
    inputPagamento.value = "Cartão de Crédito";
    formSection.classList.remove("hidden");
    formSection.scrollIntoView({ behavior: "smooth" });
  });
});
