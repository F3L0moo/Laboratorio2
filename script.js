var listaNumeros = new Array();
function init() {
    let saludo = "Hola Mundo!!";
    let input = document.getElementById("texto");
    input.innerHTML = saludo;
    agregarLista();
    let punto = {x: 10, y: 20};
    let punto2 = new Punto(10, 20);
    console.log(punto);
    console.log(punto2);
    sintaxis();
}

function agregarNumero() {
    let numero = document.getElementById("numero").value;
    listaNumeros.push(parseInt(numero));
    mostrarNumeros();
}

function mostrarNumeros() {
    let ul = document.getElementById("listado");
    let htmlData = "";
    listaNumeros.forEach(x => {
        htmlData += `<li> ${x} </li>`;
    });
    ul.innerHTML = htmlData;
}

var array = [1,2,3,4,5,6,7,8];
function agregarLista() {
    let html = "";
    array.forEach(x => html += `<li>  ${x}  </li>`);
    document.getElementById("numeros").innerHTML = html;
}

function cambiarColor() {
    let cuadro = document.getElementById("cuadro");
    let color = generarColorRandom();
    cuadro.style.backgroundColor = color;
}

let generarColorRandom = () => `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function sintaxis() {
    let objeto  = {nombre: "Juan", apellido: "Perez", edad: 20};
    let arreglo = [{nombre: "Juan", apellido: "Perez", edad: 20}, 
                   {nombre: "Pedro", apellido: "Gomez", edad: 30},
                   {nombre: "Maria", apellido: "Lopez", edad: 40},
                   {nombre: "Ana", apellido: "Perez", edad: 50},
                   {nombre: "Luis", apellido: "Gomez", edad: 60}]
    for (let i = 0; i < 10; i++) {
        switch (i) {
            case 0 : console.log("Cero"); break;
            case 1 : console.log("Uno"); break;
            case 2 : console.log("Dos"); break;
            case 3 : console.log("Tres"); break;
            default: console.log("Otro");             
        }
    }
    console.log("----------");
    let j = 0;
    while (j < 10) {
        if (j % 2 == 0) {
            console.log(j);
        }
        j++;
    }
    console.log("----------");
    for (let key in objeto) {
        console.log(key + ": " + objeto[key]);
    }
    console.log("----------")
    for (let value of arreglo) {
        console.log(value.nombre);
    }
    console.log("----------")
    arreglo.forEach((elemento, pos) => console.log(`${pos} -> ${elemento.nombre}`))
    console.log("----------")
    let persona = arreglo.find(x => x.edad >= 40)
    console.log(persona);
    console.log("----------")
    let posicion = arreglo.findIndex(x => x.edad >= 40);
    console.log(posicion);
    console.log("----------")
    console.log(arreglo.slice(1, 3));
    console.log(arreglo);
    console.log("----------")
    console.log(arreglo.splice(2, 2));
    console.log(arreglo);
    const opciones = { weekday: '', year: 'numeric', month: 'numeric', day: 'numeric' };
    let fecha = new Date();
    console.log(fecha.toLocaleDateString("es-GT"));
   
}