var listaNombres = new Array();
var listaNumeros = new Array();

function ejercicio1() {
    let base = parseInt(document.getElementById("base").value);
    let expo = parseInt(document.getElementById("exponente").value);
    let resul = Math.pow(base, expo);
    console.log(resul);
    document.getElementById('resultado').innerHTML = resul;
}

function ejercicio2() {
    let cent = parseInt(document.getElementById("centigrados").value);
    let fare = (cent * 9/5) + 32;
    console.log(fare);
    document.getElementById('farenheit').innerHTML = fare;
}

function despliegueNombres() {
    let nombre = document.getElementById("nombres").value;
    listaNombres.push(nombre);
    let ul = document.getElementById("nombresLista");
    let nombresData = "";

    listaNombres.forEach(x => {
        nombresData += `<li>${x}</li>`;
    })
    ul.innerHTML = nombresData;
}

function nombresLenght() {
    let cant = parseInt(document.getElementById("NomLenght").value);
    let filtro = "";
    let ul = document.getElementById("listaFiltro");
    
    (listaNombres.forEach(x =>{
        console.log(x);
    }))

    listaNombres.forEach(x => {
        if(x.length === cant) {
            filtro += `<li>${x}</li>`;
            console.log(filtro);
        }
    })

    ul.innerHTML = filtro;
}

function calcuEdad() {
    let gettinAnio = document.getElementById("nacimiento");
    let nacimiento = new Date(gettinAnio.value);
    let anio = nacimiento.getFullYear();

    let edad = 2023 - anio;

    document.getElementById("edad").innerHTML = edad;
}

function conteoPalabras() {
    const inputHilera = document.getElementById("hilera").value;
    const palabras = inputHilera.match(/\S+/g);
    

    document.getElementById("conteo").innerHTML = numeroPalabras;

}

function contarPalabras() {
    const textoInput = document.getElementById("hilera").value;
    
    // Contar palabras utilizando expresión regular
    const palabras = textoInput.match(/\S+/g);
    const numeroPalabras = palabras ? palabras.length : 0;

    document.getElementById("conteo").innerHTML = numeroPalabras;
}


function promedio() {
    let numero = parseInt(document.getElementById("numprom").value);
    listaNumeros.push(numero);
    let ul = document.getElementById("listanumeros");
    let numerosimpre = '';

    listaNumeros.forEach(x => {
        numerosimpre += `<li>${x}</li>`
    })

    ul.innerHTML = numerosimpre;
}  

function getPromedio() {
    let promedio = 0;
    let acumulador = 0;

    listaNumeros.forEach(x => {
        acumulador = acumulador + x
    })
    console.log(listaNumeros.length);
    promedio = acumulador/listaNumeros.length;
    document.getElementById("promedio").innerHTML = promedio;
}

function mostrarColor() {
    const colorInput = document.getElementById("colorInput").value;
    const cuadroColor = document.getElementById("cuadroColor");
    cuadroColor.style.backgroundColor = colorInput;
}