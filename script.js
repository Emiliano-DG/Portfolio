const inputName = document.querySelector("[name=username]");
const inputEmail = document.querySelector("[name=email]");
const inputTema = document.querySelector("[name=tema]");
const inputTexto = document.querySelector("[name=texto]");

const menu = document.querySelector(".nav__menu");
let menuVisible = false;

// MOSTRAR / OCULTAR MENU
const mostrarOcultarMenu = () => {
  if (menuVisible) {
    menu.classList.remove("responsive");
    menuVisible = false;
  } else {
    menu.classList.add("responsive");
    menuVisible = true;
  }
};

const ocultar = () => {
  menu.classList.remove("responsive");
  menuVisible = false;
};

// VALIDACION FORMULARIO
const validacion = (e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.length === 0) {
    field.classList.add("invalid");
    field.nextElementSibling.innerText = "Debe completar el campo";
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.innerText = "";
  }
};

inputName.addEventListener("blur", validacion);
inputEmail.addEventListener("blur", validacion);
inputTema.addEventListener("blur", validacion);
inputTexto.addEventListener("blur", validacion);
