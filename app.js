/*las funciones pueden declararse en cualquier parte del codigo que igual se leera
function asignarTextoParrafo(){
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
}

function asignarTextoElemento(){
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';
}


function intentoDeUsuario(){
    alert('click desde el boton');
}

asignarTextoElemento();
asignarTextoParrafo();

ACA HEMOS CREADO FUNCIONES PERO SE SIGUE REPITIENDO EL CODIGO, AHORA LAS UNIREMOS
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function textoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesIniciales() {
    textoElemento('h1','Juego del número secreto');
    textoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        textoElemento('p','Ya se sortearon todos los números posibles') 
    } else {    
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //mostrar mensaje de inicio y general numero aleatoria, reiniciar intentos y desabilitar boton de nuevo juego//
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if (numeroDeUsuario == numeroSecreto) {
        textoElemento('p', `Acertaste el juego del número secreto en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(listaNumerosSorteados);
    } else { 
        limpiarCaja();
        if (numeroDeUsuario > numeroSecreto) {
            textoElemento('p','El número generado es menor');
        } else {
            textoElemento('p','El número generado es mayor');
        }
        intentos ++;
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorDeUsuario');
    valorCaja.value = '';
 /* tambien se puede poner 
    document.querySelector('#valorDeUsuario').value=''; */
}

condicionesIniciales();

//Arreglos o Arrays sirven para almacenar en una caja mayor multiples cajas pequeñas//
/*  let lista = [];
    lista.push(2,8,0);
    console.log(lista);
    
Toodos l os Arrays empiezan en la posicion 0
    console.log(lista[0]); //da rpta 2, ahora para ver valor del ultimo elemento //
    console.log(lista[lista.length-1]);
    */

