const openBtn = document.getElementById("abrirPop");
const closeBtn = document.getElementById("cerrarPop");
const Pop = document.getElementById("Pop");

if (openBtn && closeBtn && Pop) {
    openBtn.addEventListener("click", () => {
        Pop.classList.add("abrirPop");
    });
  
    closeBtn.addEventListener("click", () => {
        Pop.classList.remove("abrirPop");
    });
  }
  