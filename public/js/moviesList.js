console.log("hola");

const body = document.querySelector("body");
const h1 = document.querySelectorAll("h1");
console.log(body);
console.log(h1);

//con prompt preguntar si se desea modo oscuro
/*let modooscuro = confirm("¿Desea modo oscuro?");
if (modooscuro) {
  body.style.backgroundColor = "#7f7f7f";
  body.classList.add("fondoMoviesList");
}*/

//agregar a la etiqueta h1 "listado de películas"
document.querySelector("h1").innerHTML += "Listado de Películas";

//agregar a la etiquta h1 estilos:
document.querySelector("h1").style.color = "white";
document.querySelector("h1").style.backgroundColor = "teal";
document.querySelector("h1").style.padding = "20px";

//clase 38. Paso 1
/*modificar el práctico de la clase anterior para que el modo oscuro se
aplique si el usuario pasa el mouse sobre el logo de Digital House, en la vista del
listado de películas.*/
var modooscuro38 = confirm("¿Desea modo oscuro?");
var logo = document.querySelector(".logoDH");
if (modooscuro38) {
  logo.addEventListener("mouseover", function () {
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add("fondoMoviesList");
  });
}
