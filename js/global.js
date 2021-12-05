const burger = document.querySelector(".burger");
burger.addEventListener("click", otvoriMeni);

const iks = document.querySelector(".iks");
iks.addEventListener("click", zatvoriMeni);

const meni = document.querySelector(".nav-links");

function otvoriMeni() {
  console.log("??");
  meni.style.display = "flex";
}

function zatvoriMeni() {
  console.log("zatvori");
  meni.style.display = "none";
}
