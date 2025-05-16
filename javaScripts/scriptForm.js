const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
 
abrir.addEventListener("click", () => {
    nav.classList.add("nav-visible");
    document.body.style.overflow = "hidden";
})
 
cerrar.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
    document.body.style.overflow = "auto";
})