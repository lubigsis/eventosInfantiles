let globoRojoIzq= document.getElementById("rojoIzq-js");
let globoVioletaIzq= document.getElementById("violetaIzq-js");
let globoAmarilloIzq= document.getElementById("amarilloIzq-js");
let globoVioletaDer= document.getElementById("violetaDer-js");
let globoRojoDer= document.getElementById("RojoDer-js");
let globoAzulDer= document.getElementById("AzulDer-js");
let bosque= document.getElementById("forest-js");
let payaso= document.getElementById("clown-js");
let tituloContenedor= document.getElementById("titulo-js");
let texto= document.getElementById("eventosInfantiles");


function mover(){
    let desplazar = window.scrollY;

    payaso.style.right =  desplazar * 0.1 + '%';

    globoRojoIzq.style.top = 2 + desplazar * 0.1 + '%';
    globoVioletaIzq.style.top = 15 + desplazar * 0.10 + '%';
    globoAmarilloIzq.style.top = 10 + desplazar * 0.1 + '%';
    globoVioletaDer.style.top = 8 + desplazar * 0.1 + '%';
    globoRojoDer.style.top = 15 + desplazar * 0.1 + '%';
    globoAzulDer.style.top = 5 + desplazar * 0.1 + '%';

    tituloContenedor.style.top = 30 + desplazar * 0.10 + '%';
    texto.style.color = "#FBFF00";
    texto.style.letterSpacing = "10px";
    
}

window.addEventListener('scroll', mover);
