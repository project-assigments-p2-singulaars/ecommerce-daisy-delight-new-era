document.addEventListener("DOMContentLoaded", function () {
  createMenuHamburguer();
});

function createMenuHamburguer() {
  const toggleMenu = document.getElementById("burgerMenu");

  // Agrega el menú al hacer clic en el elemento con id "burgerMenu"
  toggleMenu.addEventListener("click", () => {
    // Comprueba si ya existe un menú hamburguesa
    if (document.querySelector(".menuHamburguer")) {
      return; // Si ya existe, no hagas nada
    }

    const createToggleHamburguer = document.createElement("div");
    createToggleHamburguer.classList.add("menuHamburguer");
    createToggleHamburguer.innerHTML = `
      <button class="closeMenuHamburguer">X</button>
      <h2 class="titleMenuHAmburguer">Inicio</h2>
      <h2 class="titleMenuHAmburguer">Productos</h2>
      <h2 class="titleMenuHAmburguer">Quienes Somos</h2>
      <h2 class="titleMenuHAmburguer">Contacto</h2>
    `;
    document.body.appendChild(createToggleHamburguer);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuHamburguer = document.getElementById("menuHamburguer");
  const closeBtn = document.getElementById("closeMenuHamburguer");

  // Verificar si los elementos existen antes de agregar el evento clic
  if (menuHamburguer && closeBtn) {
    // Función para cerrar el menú hamburguesa
    function closeMenu() {
      menuHamburguer.style.display = "none";
    }

    // Agregar evento clic al botón de cierre
    closeBtn.addEventListener("click", closeMenu);
  } else {
    console.error("No se encontraron los elementos necesarios");
  }
});
