//importando archivos.
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //La función window.onload se ejecuta cuando toda la página ha terminado de cargar.
  console.log("Hello Rigo from the console!");
  //Variables que contienen Arrays de strings
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  function randomGen(list) {
    //Esta función toma una lista (array) y devuelve un elemento aleatorio de esa lista.
    return list[Math.floor(Math.random() * list.length)]; //Math.random() genera un número aleatorio entre 0 y 1.

    //Math.floor() redondea ese número hacia abajo al número entero más cercano.
    //Multiplicamos Math.random() por la longitud de la lista para obtener un índice válido de la lista.
  }
  let whoRandom = randomGen(who); //Aquí estamos usando la función randomGen para obtener un elemento aleatorio de cada lista y guardarlo en variables.
  let actionRandom = randomGen(action);
  let whatRandom = randomGen(what);
  let whenRandom = randomGen(when);

  let excuse = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`; //Usamos template literals(`$`) para construir la frase con los elementos aleatorios seleccionados.
  document.getElementById("excuse").innerText = excuse; // Muestra la frase del HTML en la página web.
};
