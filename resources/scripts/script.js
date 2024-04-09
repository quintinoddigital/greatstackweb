const submenuInput = document.getElementById("submenu");

function abrirSubmenu() {
    submenuInput.classList.toggle("abrir-menu");
}

window.document.addEventListener("click", function(event) {
    const submenu = document.getElementById("submenu");
    const perfil = document.querySelector(".perfil");
    if (!submenu.contains(event.target) && event.target !== perfil) {
        submenu.classList.remove("abrir-menu");
    }
});