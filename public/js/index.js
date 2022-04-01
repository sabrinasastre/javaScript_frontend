//Clase 37. Paso 1
//capturar el <main>, <h2>, <a> y <p>
const main = document.querySelector("main");
const h2 = document.querySelectorAll("h2");
const a = document.querySelector("a");
const p = document.querySelectorAll("p");
console.log(main);
console.log(h2);
console.log(a);
console.log(p);

main.style.display = "block";

//con prompt indicar al usuario que ingrese nombre
let nombreh2 = prompt("Ingrese su nombre!");
if (nombreh2) {
  document.querySelector("h2.subtitulo").innerHTML += nombreh2;
} else {
  document.querySelector("h2.subtitulo").innerHTML += "invitado";
}

//agregar a la etiqueda h2 estilo uppercase
let uppercaseh2 = document.querySelector("h2");
uppercaseh2.style.textTransform = "uppercase";
console.log(uppercaseh2);

//agregar a la etiqueda a el color #ES1B3E
let colora = document.querySelector("a");
colora.style.color = "#ES1B3E";
console.log(colora);

//con confirm indicar al usuario si quiere colocar un fondo de pantalla
let fondopantalla = confirm("¿Desea agregar un fondo de pantalla?");
if (confirm) {
  document.querySelector("body").classList.add("fondo");
}

//a todos los párrafos que fueron capturados
//asignarle a los pares clase "destacados"
//y a los impares "destacadoImpar"
for (let i = 0; i < p.length; i++) {
  if (i % 2 == 0) {
    document.querySelectorAll("p").classList.add("destacado");
  } else {
    document.querySelectorAll("p").classList.add("destacadoImpar");
  }
}

//establecer como visible la etiqueta main
let mainvisible = document.querySelector("main");
mainvisible.style.display = "block";
console.log(mainvisible);

//clase 38. Paso 1
/*cada vez que el usuario haga clic sobre el
logo de Digital House se muestre el menú lateral con id="menu".*/

window.addEventListener("load", function () {
  let logo = document.querySelector(".logoDH");
  logo.addEventListener("click", function (e) {
    let menu = document.querySelector("#menu");
    menu.classList.toggle("mostrar");
    alert("hola");
  });
});

/*agregar un evento que permita ocultar el menú lateral cuando el
mouse deje el área del menú.*/
let menuLateral = document.querySelector("#menu");
menuLateral.addEventListener("mouseout", function () {
  menuLateral.style.display = "none";
});
